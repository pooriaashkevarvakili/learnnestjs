import { taskStatus } from "src/tasks/task.module";

export class GetTaskDtoFilter{
    status:taskStatus;
    search:string;
}