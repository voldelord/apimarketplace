import { Injectable } from '@nestjs/common';
import { CreateSellerratingDto } from './dto/create-sellerrating.dto';
import { UpdateSellerratingDto } from './dto/update-sellerrating.dto';

@Injectable()
export class SellerratingService {
  create(createSellerratingDto: CreateSellerratingDto) {
    return 'This action adds a new sellerrating';
  }

  findAll() {
    return `This action returns all sellerrating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerrating`;
  }

  update(id: number, updateSellerratingDto: UpdateSellerratingDto) {
    return `This action updates a #${id} sellerrating`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerrating`;
  }
}
