import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CustoDTO, FreteDTO, RetornoFreteDTO } from './frete.dto';
import { FreteService } from './frete.service';

@Controller('frete')
export class FreteController {
  constructor(private readonly freteService: FreteService) {}

  @Post()
  async novoFrete(@Body() data: FreteDTO): Promise<FreteDTO> {
    return await this.freteService.novoFrete(data);
  }

  @Get(':id')
  async getFrete(@Param() data: any): Promise<FreteDTO> {
    return await this.freteService.getFrete(data.id);
  }

  @Get()
  async getFretes(@Param() data: any): Promise<FreteDTO[]> {
    return await this.freteService.getFretes();
  }

  @Delete(':id')
  async deleteFrete(@Param() data: any): Promise<object> {
    return await this.freteService.deleteFrete(data.id);
  }
}
