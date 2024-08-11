import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './reducer/store.js'
import { BrowserRouter }  from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
    <BrowserRouter>

    <App />
  
    </BrowserRouter>  
    </Provider>
  </React.StrictMode>,
)
