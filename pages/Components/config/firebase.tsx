import firebase, { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import config from './config';

const firebaseConfig = {
    apiKey: "AIzaSyAYqlWAxZfVFNhVgsuGtrXNlo3c8Op3QB0",
    authDomain: "social-media-d8fd6.firebaseapp.com",
    projectId: "social-media-d8fd6",
    storageBucket: "social-media-d8fd6.appspot.com",
    messagingSenderId: "936530922097",
    appId: "1:936530922097:web:6126823385c6067fd169d0"
}


const app = initializeApp(firebaseConfig)


export const auth = getAuth(app)