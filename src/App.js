import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import SiteRoutes from './routes/SiteRoutes';


function App() {
return (
<>
  <BrowserRouter>

   {/* Header elements it comes from here ==> components/[header/Header.jsx */}
    <Header />

    {/* SiteRoutes it comes from here ==> routes/SiteRoutes.jsx */}
    <SiteRoutes />
    
  </BrowserRouter>
</>
);
}

export default App;