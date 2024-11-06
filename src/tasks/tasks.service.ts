import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, taskStatus } from './task.module';
import { v1 as uuidv1 } from 'uuid'
import { CreateTaskDto } from 'src/dto/create-task-dto';
import { GetTaskDtoFilter } from 'src/dto/get-task-dto-filter';
@Injectable()
export class TasksService {
    private tasks: Task[] = []
    getAllTasks(): Task[] {
        return this.tasks
    }
    getTaskById(id: string): Task {
       const found= this.tasks.find(task => task.id === id)
       if(!found){
         throw new NotFoundException(`task with id ${id} not found`)
       }
       return found
    }
    createTask(CreateTaskDto: CreateTaskDto): Task {
        const { title, description } = CreateTaskDto;
        const task: Task = {
            id: uuidv1(),
            title, description,
            status: taskStatus.OPEN
        }
        this.tasks.push(task)
        return task
    }
    deleteTask(id: string): void {
        const found=this.getTaskById(id)
        this.tasks.filter(task => task.id !== found.id)
    }
    updateTaskStatus(id: string, status: taskStatus): Task {
        const task = this.getTaskById(id)
        task.status = status;
        return task
    }
    getTaskFilterDto(filterDto: GetTaskDtoFilter): Task[] {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks()
        if (status) {
            tasks = tasks.filter(task => task.status === status)
        }
        if (search) {
            tasks = tasks.filter(task => task.title.includes(search) ||
                task.description.includes(search)
            )
        }
        return tasks
    }
}
