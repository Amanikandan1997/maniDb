
import { createRoot } from 'react-dom/client'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './Component/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ScrollToTop/>
<App />
</BrowserRouter>
 

)
