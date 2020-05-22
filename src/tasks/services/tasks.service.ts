import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../interfaces/task.interface';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getTask(id: number): Promise<Task> {
    return this.taskModel.findById(id);
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  /*
  tasks: Task[] = [
    {
      id: 1,
      title: 'Testing',
      description: 'Testing description',
      done: true,
    },
    {
      id: 2,
      title: 'Testing 2',
      description: 'Testing description 2',
      done: true,
    },
    {
      id: 3,
      title: 'Testing 3',
      description: 'Testing description 3',
      done: false,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find(item => item.id === id);
  }
  */
}
