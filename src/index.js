import React from 'react'
import reactDOM from 'react-dom'
import App from './routes/App'
import './assets/styles/styles.scss'

import { GlobalContextProvider } from './context/globalContext'

reactDOM.render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>
    ,
    document.getElementById('root')
)
