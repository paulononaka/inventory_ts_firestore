import { Controller, Get, Param, Post } from '@nestjs/common';
import { ItemResponseDto } from './show.dtos';
import { ShowService } from './show.service';

@Controller('show')
export class ShowController {
  constructor(private readonly service: ShowService) {}

  @Post('/:showID/buy_item/:itemID')
  async show(
    @Param('showID') showID: string,
    @Param('itemID') itemID: string,
  ): Promise<any> {
    await this.service.buyItem(showID, itemID);
    return {
      statusCode: 201,
      message: 'Ok',
    };
  }

  @Get('/:showID/sold_items/:itemID')
  async findByItem(
    @Param('showID') showID: string,
    @Param('itemID') itemID: string,
  ): Promise<ItemResponseDto> {
    return await this.service.findByItem(showID, itemID);
  }

  @Get('/:showID')
  async findAll(@Param('showID') showID: string): Promise<ItemResponseDto[]> {
    return await this.service.findAll(showID);
  }
}
