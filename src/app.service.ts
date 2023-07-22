import { Injectable } from '@nestjs/common';
import {
  collection,
  addDoc,
  onSnapshot,
  Unsubscribe,
} from 'firebase/firestore';
import { db } from './firebase.config';
import { DBKEYS } from './constants';

@Injectable()
export class AppService {
  async addWallet(address: any, alias?: string): Promise<void> {
    const dbWalletRef = collection(db, DBKEYS.wallets);
    await addDoc(dbWalletRef, { walletAddress: address, alias: alias });
  }
  async getWallets(): Promise<Unsubscribe> {
    const dbRef = collection(db, DBKEYS.wallets);
    const wallets = await onSnapshot(dbRef, (docsSnap) => {
      docsSnap.forEach((doc) => {
        return doc.data();
      });
    });
    return wallets;
  }
}
