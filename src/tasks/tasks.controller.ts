import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './services/tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(`ID de la tarea ${id}`);
    console.log(task);
    return 'Actualizar una tarea';
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    console.log(id);
    return 'Eliminar una tarea';
  }
}
