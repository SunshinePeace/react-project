import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestone';
import config from '../config/config'

const Firebase = firebase.initializeApp(config.firebase);


export default Firebase;
