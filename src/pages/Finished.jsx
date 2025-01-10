import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import FinishedPage from '../components/Finished/FinishedPage'

const Finished = () => {
  return (
    <Layout>
        <Sidebar />
        <FinishedPage />
    </Layout>
  )
}

export default Finished;