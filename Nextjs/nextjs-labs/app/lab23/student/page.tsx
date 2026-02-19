"use client"
import React, { useCallback, useEffect, useState } from 'react'

function Page() {

    type Student = { id: number; name: string };
    const API_BASE = "/lab23/api/student";

    const [students, setStudents] = useState<Student[]>([]);
    const [formData, setFormData]=useState({
        name: ""
    })
    const [editingID, setEditingID]=useState<number | null>(null);

    const getStudents = useCallback(async (): Promise<Student[] | null> => {
        try {
            const res = await fetch(API_BASE);
            if (!res.ok) {
                console.error("Failed to fetch students", res.status);
                return null;
            }
            return (await res.json()) as Student[];
        } catch (err) {
            console.error("Failed to fetch students", err);
            return null;
        }
    }, []);

    useEffect(() => {
        let cancelled = false;

        void (async () => {
            const data = await getStudents();
            if (!cancelled && data) setStudents(data);
        })();

        return () => {
            cancelled = true;
        };
    }, [getStudents])

    const addStudent=async()=>{
        const res=await fetch(API_BASE,{
            method: "POST",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            console.error("Failed to add student", res.status);
            return;
        }

        const data = await getStudents();
        if (data) setStudents(data);
        setFormData({name: ""})
    }

    const deleteStudent=async(id:number)=>{
        const res=await fetch(`${API_BASE}/${id}`,{
            method: "DELETE"
        });

        // fetchStudents();

        if (!res.ok) {
            console.error("Failed to delete student", res.status);

            return;
        }

        setStudents((prev) => prev.filter((stu) => stu.id !== id))
    }

    const startEditing=(stu: Student)=>{
        setEditingID(stu.id);
        setFormData({name: stu.name})
    }

    const updateStudent=async()=>{
        if (editingID === null) return;

        const res=await fetch(`${API_BASE}/${editingID}`,{
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            console.error("Failed to update student", res.status);
            return;
        }

        const data = await getStudents();
        if (data) setStudents(data);
        setFormData({name: ""});
        setEditingID(null);
    }

  return (
    <>
        <input type='text'
        placeholder='Enter name'
        value={formData.name}
        onChange={(e)=>setFormData({...formData, name: e.target.value})}
        />
        <button onClick={editingID? updateStudent : addStudent}>
            {editingID? "Update": "Add"}
        </button>

        <ul>
            {students.map(stu=>(
                <li key={stu.id}>
                    {stu.id}: {stu.name}
                    <button onClick={()=>deleteStudent(stu.id)}>
                        Delete
                    </button>
                    <button onClick={()=>startEditing(stu)}>
                        Edit
                    </button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Page