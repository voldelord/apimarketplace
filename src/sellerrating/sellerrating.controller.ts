import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellerratingService } from './sellerrating.service';
import { CreateSellerratingDto } from './dto/create-sellerrating.dto';
import { UpdateSellerratingDto } from './dto/update-sellerrating.dto';

@Controller('sellerrating')
export class SellerratingController {
  constructor(private readonly sellerratingService: SellerratingService) {}

  @Post()
  create(@Body() createSellerratingDto: CreateSellerratingDto) {
    return this.sellerratingService.create(createSellerratingDto);
  }

  @Get()
  findAll() {
    return this.sellerratingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerratingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellerratingDto: UpdateSellerratingDto) {
    return this.sellerratingService.update(+id, updateSellerratingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerratingService.remove(+id);
  }
}
