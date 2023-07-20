// firestore.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirestoreService {
  private readonly firestore: admin.firestore.Firestore;

  constructor() {
    this.firestore = admin.firestore();
  }

  async createDocument(collection: string, data: any): Promise<string> {
    const docRef = await this.firestore.collection(collection).add(data);
    return docRef.id;
  }

  async getDocument(collection: string, documentId: string): Promise<any> {
    const docRef = this.firestore.collection(collection).doc(documentId);
    const snapshot = await docRef.get();
    if (snapshot.exists) {
      return snapshot.data();
    }
    return null;
  }

  async updateDocument(
    collection: string,
    documentId: string,
    data: any,
  ): Promise<void> {
    const docRef = this.firestore.collection(collection).doc(documentId);
    await docRef.update(data);
  }

  async deleteDocument(collection: string, documentId: string): Promise<void> {
    const docRef = this.firestore.collection(collection).doc(documentId);
    await docRef.delete();
  }
}
