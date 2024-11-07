import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.module';
import { CreateTaskDto } from 'src/dto/create-task-dto';
import { GetTaskDtoFilter } from 'src/dto/get-task-dto-filter';
import { ValidationTypes } from 'class-validator';
import { TaskStatusValidatorPipe } from 'src/pipes/task-status-validator';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }
//     @Get()
//     getAllTasks(): Task[] {
//         return this.taskService.getAllTasks()
//     }
//     getTasks(@Query(ValidationPipe)filterDto:GetTaskDtoFilter): Task[] {
//        if(Object.keys(filterDto).length){
//         return this.taskService.getTaskFilterDto(filterDto)
//        }else{
//         return this.taskService.getAllTasks()

//        }
//     }
    @Get('/:id')
    getTaskById(@Param('id',ParseIntPipe) id: number):Promise <Task> {
        return this.taskService.getTaskById(id)
    }
//     @Post()
//     @UsePipes(ValidationTypes)
//     createTasks(@Body() CreateTaskDto: CreateTaskDto): Task {
//         return this.taskService.createTask(CreateTaskDto)
//     }
//     @Delete('/:id')
//     deleteTask(@Param('id') id: string): void {
//         this.taskService.deleteTask(id)
//     }
//    @Patch('/:id/status')
//    updateTaskStatus(@Param('id')id:string,@Body('status', TaskStatusValidatorPipe)status:taskStatus){
// return this.taskService.updateTaskStatus(id,status)
//    }
  


}
