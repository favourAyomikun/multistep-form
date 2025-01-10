import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import SummaryForm from '../components/Summary/SummaryForm'

const Summary = () => {
  return (
    <Layout>
        <Sidebar />
        <SummaryForm />
    </Layout>
  )
}

export default Summary;