import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Layout } from '../components/Layout'
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