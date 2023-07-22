import { Injectable } from '@nestjs/common';
import { collection, addDoc, getDocs, DocumentData } from 'firebase/firestore';
import { db } from './firebase.config';
import { DBKEYS } from './constants';

@Injectable()
export class AppService {
  async addWallet(address: any, alias?: string): Promise<void> {
    const dbWalletRef = collection(db, DBKEYS.wallets);
    await addDoc(dbWalletRef, { walletAddress: address, alias: alias });
  }
  async getWallets(): Promise<DocumentData[]> {
    const dbRef = collection(db, DBKEYS.wallets);
    const wallets = await getDocs(dbRef);
    const dataFromWallets = wallets.docs.map((doc) => doc.data());
    return dataFromWallets;
  }
}
