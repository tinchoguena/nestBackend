import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DocumentData } from 'firebase/firestore';
import { AddWalletDto } from './dto/addWallet';

@Controller('wallet')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add-wallet-to-record')
  async addWallet(
    @Body() { address, alias }: AddWalletDto,
  ): Promise<{ message: string }> {
    console.log('address', address);
    console.log('alias', alias);
    // console.log('body', body);
    await this.appService.addWallet(address, alias);
    return { message: 'Wallet Added' };
  }

  @Get('get-wallets')
  async getWallets(): Promise<DocumentData[]> {
    const wallets = await this.appService.getWallets();
    return wallets;
  }
}
