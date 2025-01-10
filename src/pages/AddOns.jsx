import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import AddOnsForm from '../components/AddOns/AddOnsForm'

export const AddOns = () => {
  return (
    <Layout>
        <Sidebar />
        <AddOnsForm />
    </Layout>
  )
}
