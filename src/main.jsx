import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './routes/AllRoutes.jsx';
import Contexts from './Contexts/Context.jsx';
import Modal from './components/shared/modal/Modal.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexts>
      <AllRoutes />
      <Modal />
    </Contexts>
  </React.StrictMode>,
)
