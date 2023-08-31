import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerratingDto } from './create-sellerrating.dto';

export class UpdateSellerratingDto extends PartialType(CreateSellerratingDto) {}
