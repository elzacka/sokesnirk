import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { countVisit } from '@/utils'
import './styles/global.css'

countVisit(import.meta.env.BASE_URL)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {
      // Service worker registration failed
    })
  })
}
