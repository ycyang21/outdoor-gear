// =====================================================
// Firebase 設定：前台（index.html）和後台（admin.html）共用這一份
//
// 這些不是密碼。它像是資料庫的「地址」，放在公開的程式碼裡是正常的；
// 真正保護資料的是 Firestore 的安全規則。
//
// 注意：所有 Firebase 的網址版本號（目前是 12.19.0）都要一樣。
// =====================================================
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';

export const firebaseConfig = {
  apiKey: "AIzaSyAPVaaOdOcRVLrDN-8dz-SINP2lLyzneI4",
  authDomain: "outdoor-gear-efb16.firebaseapp.com",
  projectId: "outdoor-gear-efb16",
  storageBucket: "outdoor-gear-efb16.firebasestorage.app",
  messagingSenderId: "939689314436",
  appId: "1:939689314436:web:c0965f1fa8d22ec0055ad1"
};

export const app = initializeApp(firebaseConfig);
