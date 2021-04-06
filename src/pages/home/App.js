import React from 'react'
import Card from '../../components/Cards'
import Layout from '../../components/Layout'
import data from '../../db.json'
function App() {
  const list = data.items
  return (
    <>
      <Layout>{list && list.map((item) => <Card key={item.id} {...item} />)}</Layout>
    </>
  )
}

export default App
