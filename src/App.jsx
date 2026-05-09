/*
 App root component.
 - Renders the application router which defines page routes.
 - Keep global providers or context here if needed later.
*/
import React from 'react'
import Router from './routes/Router'

export default function App() {
  return <Router />
}
