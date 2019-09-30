import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from './dogs.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dog)
        private dogsRepository: Repository<Dog>,
    ) {  }
    async  findAll(): Promise<Dog[]> {
        return await this.dogsRepository.find();
    }
    async  findById(id): Promise<Dog[]> {
        return await this.dogsRepository.find(id);
    }

    async  create(dog: Dog): Promise<Dog> {
        return await this.dogsRepository.save(dog);
    }

    async update(dog: Dog): Promise<UpdateResult> {
        return await this.dogsRepository.update(dog.id, dog);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.dogsRepository.delete(id);
    }
}