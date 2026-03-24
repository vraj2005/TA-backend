import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Controller('faculty')
export class FacultyController {

  constructor(private readonly facultyService: FacultyService) {}

  @Get()
  findAll() {
    return this.facultyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.facultyService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.facultyService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.facultyService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.facultyService.remove(id);
  }

}

// @Controller('faculty')
// export class FacultyController {
//   constructor(private readonly facultyService: FacultyService) {}

//   @Post()
//   create(@Body() createFacultyDto: CreateFacultyDto) {
//     return this.facultyService.create(createFacultyDto);
//   }

//   @Get()
//   findAll() {
//     return this.facultyService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.facultyService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
//     return this.facultyService.update(+id, updateFacultyDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.facultyService.remove(+id);
//   }
// }
