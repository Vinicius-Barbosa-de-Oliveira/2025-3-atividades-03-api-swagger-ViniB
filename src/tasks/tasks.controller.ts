import {
  Controller, Get, Post, Put, Delete, Param, Body
} from '@nestjs/common';
import {
  ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody
} from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todas as tarefas',
    description: 'Retorna uma lista com todas as tarefas cadastradas',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas retornada com sucesso',
    type: [Task],
  })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar tarefa por ID',
    description: 'Retorna uma tarefa específica pelo ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID da tarefa',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Tarefa encontrada',
    type: Task,
  })
  @ApiResponse({
    status: 404,
    description: 'Tarefa não encontrada',
  })
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar nova tarefa',
    description: 'Cria uma nova tarefa no sistema',
  })
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({
    status: 201,
    description: 'Tarefa criada com sucesso',
    type: Task,
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Atualizar tarefa',
    description: 'Atualiza uma tarefa existente',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateTaskDto })
  @ApiResponse({
    status: 200,
    description: 'Tarefa atualizada com sucesso',
    type: Task,
  })
  @ApiResponse({
    status: 404,
    description: 'Tarefa não encontrada',
  })
  update(@Param('id') id: number, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover tarefa',
    description: 'Remove uma tarefa pelo ID',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 204,
    description: 'Tarefa removida com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Tarefa não encontrada',
  })
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
