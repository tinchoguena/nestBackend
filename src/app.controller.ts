import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DocumentData } from 'firebase/firestore';

@Controller('wallet')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add-wallet-to-record')
  async addWallet(
    @Body() address: any,
    alias?: string,
  ): Promise<{ message: string }> {
    await this.appService.addWallet(address, alias);
    return { message: 'Wallet Added' };
  }

  @Get('get-wallets')
  async getWallets(): Promise<DocumentData[]> {
    const wallets = await this.appService.getWallets();
    return wallets;
  }
}
