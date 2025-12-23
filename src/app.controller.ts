import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('root')
@Controller()
export class AppController {

  @Get()
  @ApiOperation({
    summary: 'Endpoint raiz da API',
    description: 'Retorna informações básicas sobre a API',
  })
  @ApiResponse({
    status: 200,
    description: 'API em funcionamento',
  })
  getRoot() {
    return {
      status: 'OK',
      version: '1.0',
      description: 'API de Tarefas - Infoweb 2025',
    };
  }
}
