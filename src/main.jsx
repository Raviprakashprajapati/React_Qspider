import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import Context01 from './component/MyCOntext/Context01.jsx'
import Context02 from './component/MyCOntext/Context02.jsx'
import { Provider } from 'react-redux'
import store from './component/reactRedux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

   <Provider store={store} >
        <Context01>
    <Context02>

    <App />
    </Context02>

   </Context01>
   </Provider>

    
)
