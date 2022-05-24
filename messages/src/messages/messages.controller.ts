import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMassageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  listMessage() {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createMassage(@Body() body: createMassageDto) {
    console.log(body);
  }

  @Get('/:id')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getMassage(@Param('id') id: string) {
    console.log(id);
  }
}
