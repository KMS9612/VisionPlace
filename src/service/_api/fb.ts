// src/service/_api/fb.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// NEXT_PUBLIC_ 접두사를 사용해야 클라이언트 환경에서 변수를 읽을 수 있습니다.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// 앱 중복 초기화 방지 코드
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore, Auth 인스턴스 생성 및 export
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };