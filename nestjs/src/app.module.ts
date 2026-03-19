import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { RoutingController } from './routing/routing.controller';

@Module({
  imports: [],
  controllers: [AppController, StudentController, RoutingController],
  providers: [AppService],
})
export class AppModule {}
