import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';
import { ShowController } from './show/show.controller';
import { ShowService } from './show/show.service';

@Module({
  imports: [],
  controllers: [AppController, InventoryController, ShowController],
  providers: [InventoryService, ShowService],
})
export class AppModule {}
