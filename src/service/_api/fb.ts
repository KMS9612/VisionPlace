// src/service/_api/fb.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// NEXT_PUBLIC_ 접두사를 사용해야 클라이언트 환경에서 변수를 읽을 수 있습니다.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// 앱 중복 초기화 방지 코드
const app = initializeApp(firebaseConfig);
// App Check 초기화 코드
// 'window' 객체의 존재 여부를 확인하여 코드가 브라우저에서만 실행되도록 합니다.
if (typeof window !== "undefined") {
  initializeAppCheck(app, {
    // .env.local에 저장한 사이트 키를 불러와 사용합니다.
    provider: new ReCaptchaV3Provider(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
    ),
    // 토큰 자동 갱신 활성화
    isTokenAutoRefreshEnabled: true,
  });
}
// Firestore
const db = getFirestore(app);

export { app, db };
