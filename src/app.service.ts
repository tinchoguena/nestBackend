import { Injectable } from '@nestjs/common';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.config';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async createDocument(identifier: string, data: any): Promise<void> {
    console.log('db', db);
    const dbRef = collection(db, identifier);
    await addDoc(dbRef, data);
  }
}
