import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: number) {
    return this.studentRepo.findOneBy({ StudentID: id });
  }

  create(data: any) {
    return this.studentRepo.save(data);
  }

  update(id: number, data: any) {
    return this.studentRepo.update(id, data);
  }

  delete(id: number) {
    return this.studentRepo.delete(id);
  }
}
