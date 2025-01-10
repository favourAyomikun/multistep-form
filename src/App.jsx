import { lazy, Suspense } from 'react'
import './App.css'
import { FormProvider } from './context/FormsContext'
import { SelectPlansProvider } from './context/SelectPlansContext'
import { AddOnsProvider } from './context/AddOnsContext'

import { BrowserRouter, Routes, Route } from 'react-router'
import Spinner from './components/Spinner'


const HomePage = lazy(() => import("./pages/HomePage"))
const SelectPlan = lazy(() => import("./pages/SelectPlan"));
const AddOns = lazy(() => import("./pages/AddOns"));
const Summary = lazy(() => import("./pages/Summary"));
const Finished = lazy(() => import("./pages/Finished"));

function App() {

  return (
    <div className=" bg-[#eff5ff] py-[10.5rem] sma:py-10 mid:py-0">
      <FormProvider>
        <SelectPlansProvider>
          <AddOnsProvider>
            <BrowserRouter>
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path='/' element={<HomePage />}/>
                  <Route path='/plans' element={<SelectPlan />}/>
                  <Route path='/addOns' element={<AddOns />}/>
                  <Route path='/summary' element={<Summary />}/>
                  <Route path='/finished' element={<Finished />}/>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AddOnsProvider>
        </SelectPlansProvider>
      </FormProvider>
    </div>
  )
}

export default App
