import { Controller, Get, All, HttpCode, Redirect, Header, Param } from '@nestjs/common';
@Controller('routing')
export class RoutingController {
    //@All Decorator
    @All('all')
    handleAll() {
        return "This route handles GET, POST, PUT, DELETE etc.";
    }//GET http://localhost:3000/routing/all
    //POST http://localhost:3000/routing/all

    //@HttpCode decorator
    @Get('httpcode')
    @HttpCode(204)
    getHttpCode() {
        return "Custom HTTP Code";
    }//GET /routing/httpcode

    //@Redirect decorator
    @Get('redirect')
    @Redirect('https://nestjs.com', 302)
    redirectToExternal() {
        // This method will redirect to https://nestjs.com with a 302 status code
    }//GET /routing/redirect

    //@Header decorator
    @Get('header')
    @Header('Custom-Header', 'NestJS')
    getWithCustomHeader() {
        return "This response has a custom header.";
    }//GET /routing/header

    //Route Wildcards. 
    @Get('wild/*')
    getWildcard() {
        return "Wildcard route matched";
    }//GET /routing/wild/test
    // GET /routing/wild/abc
    // GET /routing/wild/anything

    //Route Parameters
    @Get('student/:id')
    getStudentById(@Param('id') id: string) {
        return `Student ID: ${id}`;
    }//GET /routing/student/123

    //prime number generator using route parameters
    @Get('prime/:start/:end')
    getPrime(@Param('start') start: Number, @Param('end') end: Number) {

        let primes: number[] = [];
        for(let i = Number(start); i <= Number(end); i++){
            let isPrime = true;
            if(i < 2) continue;
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i % j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primes.push(i);
            }
        }
        return primes;
    }//GET /routing/prime/10/50

    //Pagination Example
    @Get('page/:pageNo')
    getPage(@Param('pageNo') pageNo: number) {
        const page = Number(pageNo);
        const start = (page - 1) * 5 + 1;
        const end = page * 5;
        return {
            pageNo: page,
            startRecord: start,
            endRecord: end
        };
    }//GET /routing/page/3
}