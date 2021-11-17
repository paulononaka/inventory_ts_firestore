import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';

@Module({
  imports: [],
  controllers: [AppController, InventoryController],
  providers: [InventoryService],
})
export class AppModule { }
