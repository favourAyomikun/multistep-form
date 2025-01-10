import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import FinishedPage from '../components/Finished/FinishedPage'

export const Finshed = () => {
  return (
    <Layout>
        <Sidebar />
        <FinishedPage />
    </Layout>
  )
}
