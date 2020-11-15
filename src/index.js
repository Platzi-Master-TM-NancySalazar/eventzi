import React from 'react'
import reactDOM from 'react-dom'
import App from './routes/App'
import './assets/styles/styles.scss'
import Context from './context/Context'

reactDOM.render(
    <Context.Provider>
        <App />
    </Context.Provider>,
    document.getElementById('root'))
