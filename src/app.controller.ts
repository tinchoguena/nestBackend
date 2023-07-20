import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  async createDocument(@Body() data: any): Promise<{ message: string }> {
    const collection = 'user'; // Replace with your desired collection name
    await this.appService.createDocument(collection, data);
    return { message: 'Document Created' };
  }

  @Get('users')
  async getusers(): Promise<{ user: string }> {
    // const collection = 'user'; // Replace with your desired collection name
    // const documentId = await this.firestoreService.createDocument(
    //   collection,
    //   data,
    // );
    return { user: 'martin' };
  }
}
