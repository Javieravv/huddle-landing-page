import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainComponent } from './components'
import './scss/styles-main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>,
)
