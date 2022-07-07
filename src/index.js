import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'persist-key',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
const persistedStore = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <PersistGate persistor={persistedStore}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
