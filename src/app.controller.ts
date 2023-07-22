import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Unsubscribe } from 'firebase/firestore';

@Controller()
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

  @Get('wallets')
  async getWallets(): Promise<Unsubscribe> {
    const wallets = await this.appService.getWallets();
    return wallets;
  }
}
