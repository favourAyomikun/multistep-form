import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import PlansForm from '../components/Plans/PlansForm'

export const SelectPlan = () => {
  return (
    <Layout>
        <Sidebar />
        <PlansForm />
    </Layout>
  )
}
