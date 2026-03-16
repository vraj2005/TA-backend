//Simple demo for overview of Nestjs
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get('hello')
    helloWorld(): string {
        return "Hello World";
    }

    // GET all students
    @Get()
    findAll(): string {
        return "Return all students";
    }

    // GET single student
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Return student with id ${id}`;
    }

    // INSERT student
    @Post()
    insert(@Body() body: Record<string, unknown>): string {
        return `Student inserted with data ${JSON.stringify(body)}`;
    }

    // UPDATE student
    @Put(':id')
    update(@Param('id') id: string, @Body() body: Record<string, unknown>): string {
        return `Student updated with id ${id} and data ${JSON.stringify(body)}`;
    }

    // DELETE student
    @Delete(':id')
    delete(@Param('id') id: string): string {
        return `Student deleted with id ${id}`;
    }
}

// @Controller('student')
// export class StudentController {

//     @Get('hello')
//     helloWorld(): string {
//         return "Hello World";
//     }

//     // GET all students
//     @Get()
//     findAll(): string {
//         return "Return all students";
//     }

//     // GET single student
//     @Get(':id')
//     findOne(@Param('id') id: number): string {
//         return "Return student with id " + id;
//     }

//     // INSERT student
//     @Post()
//     insert(): string {
//         return "Student inserted";
//     }

//     // UPDATE student
//     @Put(':id')
//     update(@Param('id') id: number): string {
//         return "Student updated with id " + id;
//     }

//     // DELETE student
//     @Delete(':id')
//     delete(@Param('id') id: number): string {
//         return "Student deleted with id " + id;
//     }

// }