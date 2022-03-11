import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('MRamWA7tg7NiFF8gnIOw').collection('cartItems').doc('Sa1oQx7YH5rIHeqzUB9d');
firestore.doc('/users/MRamWA7tg7NiFF8gnIOw/cartItems/Sa1oQx7YH5rIHeqzUB9d');
firestore.collection('/users/MRamWA7tg7NiFF8gnIOw/cartItems');