import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import PlansForm from '../components/Plans/PlansForm'

const SelectPlan = () => {
  return (
    <Layout>
        <Sidebar />
        <PlansForm />
    </Layout>
  )
}


export default SelectPlan;