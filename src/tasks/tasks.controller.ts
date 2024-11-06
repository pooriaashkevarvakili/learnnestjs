import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, taskStatus } from './task.module';
import { CreateTaskDto } from 'src/dto/create-task-dto';
import { GetTaskDtoFilter } from 'src/dto/get-task-dto-filter';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }
    @Get()
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks()
    }
    getTasks(@Query()filterDto:GetTaskDtoFilter): Task[] {
       if(Object.keys(filterDto).length){
        return this.taskService.getTaskFilterDto(filterDto)
       }else{
        return this.taskService.getAllTasks()

       }
    }
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id)
    }
    @Post()
    createTasks(@Body() CreateTaskDto: CreateTaskDto): Task {
        return this.taskService.createTask(CreateTaskDto)
    }
    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.taskService.deleteTask(id)
    }
   @Patch('/:id/status')
   updateTaskStatus(@Param('id')id:string,@Body('status')status:taskStatus){
return this.taskService.updateTaskStatus(id,status)
   }
}
