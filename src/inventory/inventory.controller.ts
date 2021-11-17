import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InventoryDto } from './inventory.dtos';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) { }

  @Post('/')
  async inventory(@Body() inventory: InventoryDto): Promise<any> {
    return await this.service.save(inventory);
  }
}
