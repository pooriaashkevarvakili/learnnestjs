import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { taskStatus } from "../tasks/task-status-enum";

export class TaskStatusValidatorPipe implements PipeTransform{
    readonly AllowedStatus=[
         taskStatus.OPEN,
         taskStatus.IN_PROGRESS,
         taskStatus.DONE
    ]
transform(value:any,) {
    value=value.toUppercase()
  if(!this.isStatusValid(value)){
    throw new BadRequestException(`"${value} " is not install`)
  }

    return value;
}
private isStatusValid(status:any){
const idx=this.AllowedStatus.indexOf(status)
return idx !==-1
}
}