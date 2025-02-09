import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { taskStatus } from "src/tasks/task.module";

export class GetTaskDtoFilter{
    @IsOptional()
    @IsIn([taskStatus.OPEN,taskStatus.IN_PROGRESS,taskStatus.DONE])
    status:taskStatus;
    @IsOptional()
    @IsNotEmpty()
    search:string;
}