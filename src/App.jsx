// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FormProvider } from './context/FormsContext'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className=" bg-[#eff5ff] py-[10.5rem] mid:py-0">
      <FormProvider>

      </FormProvider>
    </div>
  )
}

export default App
