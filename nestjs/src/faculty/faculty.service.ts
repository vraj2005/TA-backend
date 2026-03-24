import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultyService {

  private faculties = [
    { id: 1, name: "Dr. Vraj", subject: "Math" },
    { id: 2, name: "Prof. Meet", subject: "Physics" },
    
  ];

  findAll() {
    return this.faculties;
  }

  findOne(id: number) {
    return this.faculties.find(f => f.id === Number(id));
  }

  create(data: any) {
    this.faculties.push(data);
    return "Faculty Added";
  }

  update(id: number, data: any) {
    const index = this.faculties.findIndex(f => f.id === Number(id));

    if (index !== -1) {
      this.faculties[index] = { ...this.faculties[index], ...data };
      return "Faculty Updated";
    }

    return "Faculty Not Found";
  }

  remove(id: number) {
    this.faculties = this.faculties.filter(f => f.id !== Number(id));
    return "Faculty Deleted";
  }

}

// @Injectable()
// export class FacultyService {
//   create(createFacultyDto: CreateFacultyDto) {
//     return 'This action adds a new faculty';
//   }

//   findAll() {
//     return `This action returns all faculty`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} faculty`;
//   }

//   update(id: number, updateFacultyDto: UpdateFacultyDto) {
//     return `This action updates a #${id} faculty`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} faculty`;
//   }
// }
