import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserRegistration from './UserRegistration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserRegistration />
  </StrictMode>,
)
