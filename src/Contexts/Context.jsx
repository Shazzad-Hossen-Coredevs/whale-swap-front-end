import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './GlobalProvider';



export default function Context({ children }) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        {children}
      </GlobalProvider>
    </BrowserRouter>
  )
}

