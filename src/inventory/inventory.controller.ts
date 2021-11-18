import { Body, Controller, Post } from '@nestjs/common';
import { ItemRequestDto } from './inventory.dtos';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Post('/')
  async inventory(@Body() inventoryDto: ItemRequestDto[]): Promise<any> {
    await this.service.save(inventoryDto);
    return {
      statusCode: 201,
      message: 'Ok',
    };
  }
}
