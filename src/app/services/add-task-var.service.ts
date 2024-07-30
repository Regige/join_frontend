import { Injectable } from '@angular/core';
import { Subtask } from '../interfaces/subtask';

@Injectable({
  providedIn: 'root'
})
export class AddTaskVarService {

  taskPrio = "";
  subtasks: Subtask[] = [];
  subtasksToDelete: number[] = [];
  taskBoardField: string = "";

  constructor() { }
}
