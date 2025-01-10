import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import SummaryForm from '../components/Summary/SummaryForm'

export const Summary = () => {
  return (
    <Layout>
        <Sidebar />
        <SummaryForm />
    </Layout>
  )
}
