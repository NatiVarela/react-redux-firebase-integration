import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app'
import 'firebase/auth'


const fbConfig = {
    apiKey: "AIzaSyAJNaBkmKRxMNp7OHgDjvbdJoWzRpD-Td0",
    authDomain: "react-redux-practice-91b76.firebaseapp.com",
    databaseURL: "https://react-redux-practice-91b76.firebaseio.com",
    projectId: "react-redux-practice-91b76",
    storageBucket: "react-redux-practice-91b76.appspot.com",
    messagingSenderId: "52034434958",
    appId: "1:52034434958:web:0851a35bc90262e1ff96df"
  };

const rrfConfig = {
    userProfile: 'users',   
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

const middlewares = [
    thunk.withExtraArgument({getFirebase, getFirestore})
]

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(...middlewares),
    )
 );


 const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }



ReactDOM.render(
<Provider store={store}>
    <App />
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
    </ReactReduxFirebaseProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
