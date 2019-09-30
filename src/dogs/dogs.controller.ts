import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DogDto } from './interfaces/dog.dto';
import { Dog } from './dogs.entity';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
constructor (private dogsService: DogsService){}
@Get()
index(): Promise<Dog[]> {
  return this.dogsService.findAll();
}    

@Post('create')
async create(@Body() dogData: Dog): Promise<any> {
  return this.dogsService.create(dogData);
}  

    @Get(':id')
  async  findOne(@Param('id') id: string) {
        return this.dogsService.findById(id);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() dogData: Dog): Promise<any> {
        dogData.id = Number(id);
        console.log('Update #' + dogData.id)
        return this.dogsService.update(dogData);
    }  
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.dogsService.delete(id);
    }  
}