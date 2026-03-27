import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
	@PrimaryGeneratedColumn()
	StudentID: number;

	@Column()
	StudentName: string;

	@Column()
	StudentAge: number;

	@Column()
	StudentGender: string;

	@Column()
	StudentRollNo: string;

	@Column()
	StudentSemester: number;
}
