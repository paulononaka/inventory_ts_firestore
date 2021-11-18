import { Body, Controller, Post } from '@nestjs/common';
import { InventoryDto } from './inventory.dtos';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Post('/')
  async inventory(@Body() inventoryDto: InventoryDto[]): Promise<any> {
    await this.service.save(inventoryDto);
    return {
      statusCode: 201,
      message: 'Ok',
    };
  }
}
