import { Module } from '@nestjs/common';
import { SellerratingService } from './sellerrating.service';
import { SellerratingController } from './sellerrating.controller';

@Module({
  controllers: [SellerratingController],
  providers: [SellerratingService],
})
export class SellerratingModule {}
