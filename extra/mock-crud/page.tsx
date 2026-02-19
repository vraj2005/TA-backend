"use client";
import { useEffect, useState } from "react";
const API = `https://6991f7328f29113acd3ce0ea.mockapi.io/api/student/students`;
export default function Page() {
    const [students, setStudents] = useState<any[]>([]);
    
    const [name, setName] = useState("");

    const [editingId, setEditingId] = useState<string | null>(null);
    const startEdit = (student: any) => {
        setName(student.name);     // put name in input
        setEditingId(student.id);  // remember which student
    };

    const getStudents = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            console.log("Fetched data:", data);
            setStudents(data);
        } catch (err) {
            console.log("Fetch error:", err);
        }
    };
    useEffect(() => {
        getStudents();
    }, []);

    const addStudent = async () => {
        if (!name) return; // prevent empty
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });
        setName("");     // clear input
        getStudents();   // refresh list
        };

    const deleteStudent = async (id: string) => {
        await fetch(`${API}/${id}`, {
            method: "DELETE",
        });
        getStudents(); // refresh list
    };

    const updateStudent = async () => {
        if (!editingId) return;
        await fetch(`${API}/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });
        setName("");
        setEditingId(null);
        getStudents();
    };
    
    return (
        <div>
            <h2>Student List</h2>
            <input
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {/* <button onClick={addStudent}>Add</button> */}
            <button onClick={editingId ? updateStudent : addStudent}>
                {editingId ? "Update" : "Add"}
            </button>
            <ul>
            {students.map((s) => (
                <li key={s.id}>
                    {s.id} — {s.name}
                    {/* delete button with inline style */}
                    <button style={{marginLeft:10, color:"red"}} onClick={() => deleteStudent(s.id)}>Delete</button>
                    <button style={{marginLeft:10, color:"blue"}} onClick={() => startEdit(s)}>Edit</button>
                </li>
                ))}
            </ul>
        </div>
    );
}
