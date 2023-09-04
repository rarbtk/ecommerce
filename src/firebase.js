import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1qW2TVVWPm4c2-VfP3YgECa2NzqmeFSQ",
  authDomain: "ecommerce-5f399.firebaseapp.com",
  projectId: "ecommerce-5f399",
  storageBucket: "ecommerce-5f399.appspot.com",
  messagingSenderId: "977385165959",
  appId: "1:977385165959:web:81a5fb85c74dab5bd39422"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


