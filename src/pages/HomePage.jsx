import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Form } from '../components/Form/Form'

const HomePage = () => {
  return (
    <Layout>
      <Sidebar />
      <Form />
    </Layout>
  )
}

export default HomePage