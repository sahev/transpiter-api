import { Module } from '@nestjs/common';
import { FreteModule } from './frete/frete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Frete, Custo } from './frete/frete.entity';

@Module({
  imports: [
    FreteModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/database.db',
      entities: [Frete, Custo],
      synchronize: true
    }),
  ],
})

export class AppModule { }
