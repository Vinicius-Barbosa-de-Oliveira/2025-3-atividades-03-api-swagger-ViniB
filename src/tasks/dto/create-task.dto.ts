import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsOptional, MinLength, MaxLength } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Estudar NestJS',
    minLength: 3,
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  title: string;

  @ApiProperty({
    description: 'Descrição da tarefa',
    example: 'Aprender a documentar APIs com Swagger',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({
    description: 'Status da tarefa',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
    example: TaskStatus.ABERTO,
  })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
