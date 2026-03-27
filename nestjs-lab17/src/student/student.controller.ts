import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.studentService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.studentService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.studentService.delete(+id);
  }
}
