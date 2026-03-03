// file ini adalah kontainer utama aplikasi kita, tempat kita menghubungkan semua komponen yang ada di dalam folder src

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
