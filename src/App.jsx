import { lazy, Suspense } from 'react'
import './App.css'
import { FormProvider } from './context/FormsContext'
import { SelectPlansProvider } from './context/SelectPlansContext'
import { AddOnsProvider } from './context/AddOnsContext'

import { BrowserRouter, Routes } from 'react-router'
import Spinner from './components/Spinner'
import { Route } from 'react-router'

const HomePage = lazy(() => import("./pages/HomePage"))
const AddOns = lazy(() => import("./pages/AddOns"));
const Summary = lazy(() => import("./pages/Summary"));
const Plans = lazy(() => import("./pages/SelectPlan"));
const Finished = lazy(() => import("./pages/Finshed"));

function App() {

  return (
    <div className=" bg-[#eff5ff] py-[10.5rem] mid:py-0">
      <FormProvider>
        <SelectPlansProvider>
          <AddOnsProvider>
            <BrowserRouter>
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path='/' element={<HomePage />}/>
                  <Route path='/plans' element={<Plans />}/>
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
