import { createRoutesFromElements, Route } from 'react-router'
import App from './components/App.tsx'
import React from 'react'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
  </>
)

export default routes
