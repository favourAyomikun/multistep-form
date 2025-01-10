import React from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'
import { Form } from '../components/Form'
import { useForm } from "../contexts/FormContexts";

const HomePage = () => {
  return (
    <Layout>
      <Sidebar />
      <Form />
    </Layout>
  )
}

export default HomePage