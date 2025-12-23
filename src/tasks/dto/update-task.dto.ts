import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class UpdateTaskDto {
  @ApiPropertyOptional({
    description: 'Novo título da tarefa',
    example: 'Finalizar documentação Swagger',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({
    description: 'Nova descrição da tarefa',
    example: 'Atualizar todos os endpoints no Swagger',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Novo status da tarefa',
    enum: TaskStatus,
    example: TaskStatus.FAZENDO,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
