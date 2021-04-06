import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getData } from '../../Redux/action'
import Card from '../../components/Cards'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'
const App = (props) => {
  const dispatch = useDispatch()
  const list = props.items
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  return (
    <>
      <Layout>
        <Modal />
        {props.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          list && list.map((item) => <Card key={item.id} {...item} />)
        )}
      </Layout>
    </>
  )
}

const mapState = (state) => {
  return {
    items: state.items,
    isLoading: state.isLoading,
  }
}

export default connect(mapState, { getData })(App)
