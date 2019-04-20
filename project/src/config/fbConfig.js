import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyB3ga6n3jXfp0KyFEJEhzkaYBIcf-8zMyE',
  authDomain: 'redux-manager-90128.firebaseapp.com',
  databaseURL: 'https://redux-manager-90128.firebaseio.com',
  projectId: 'redux-manager-90128',
  storageBucket: 'redux-manager-90128.appspot.com',
  messagingSenderId: '754405408860'
};

firebase.initializeApp(config);

export default firebase;
