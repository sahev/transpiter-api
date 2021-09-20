import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreteController } from './frete.controller';
import { Custo, Frete } from './frete.entity';
import { FreteService } from './frete.service';

@Module({
  imports: [TypeOrmModule.forFeature([Frete, Custo])],
  controllers: [FreteController],
  providers: [FreteService],
})
export class FreteModule {}
