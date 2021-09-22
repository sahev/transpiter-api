import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CustoDTO, FreteDTO, RetornoFreteDTO } from './frete.dto';
import { Custo, Frete } from './frete.entity';

@Injectable()
export class FreteService {
  constructor(
    @InjectRepository(Frete) private freteRepository: Repository<Frete>,
    @InjectRepository(Custo) private custoRepository: Repository<Custo>) { }
  
  async novoFrete(data: FreteDTO): Promise<FreteDTO> {    
    let frete = await this.freteRepository.save(data);
      data.custo.cus_frete = frete.fre_frete;
    await this.novoCusto(data.custo);

    return this.getFrete(frete.fre_frete);
  }

  async novoCusto(data: CustoDTO): Promise<CustoDTO> {
    return await this.custoRepository.save(data);
  }

  async getFrete(id: number): Promise<FreteDTO> {
    let frete = await getRepository(Frete).findOne({ fre_frete: id });
    let custo = await getRepository(Custo).findOne({ cus_frete: id });
    
    let response = { 
      ...frete,
      custo: {
        ...custo
      }
     }    

    return response;
  }

  async getFretes(): Promise<FreteDTO[]> {
    let frete = await getRepository(Frete).find();
    let custo = await getRepository(Custo).find();
    let response = [];
    
    frete.forEach(fre => {
      custo.forEach(cus => {
        if(fre.fre_frete === cus.cus_frete) {
          response.push({ 
            ...fre,
            custo: {
              ...cus
            }
           })
        }
      })
    });
    return response;
  }

  async deleteFrete(id: number): Promise<object> {
    await this.custoRepository.delete({ cus_frete: id });
    await this.freteRepository.delete({ fre_frete: id });

    return { status: HttpStatus.OK, message: 'Frete apagado' }
  }

  async updateFrete(data): Promise<FreteDTO> {
    
    await this.custoRepository.update({ cus_frete: data.custo.cus_frete }, data.custo);
    delete data.custo;
    await this.freteRepository.update({ fre_frete: data.fre_frete }, data);
    
    const frete = await this.freteRepository.findOne({ fre_frete: data.fre_frete });
    const custo = await this.custoRepository.findOne({ cus_frete: data.fre_frete });

    let response = { 
      ...frete,
      custo: {
        ...custo
      }
     }  

     return response;
  }
}
