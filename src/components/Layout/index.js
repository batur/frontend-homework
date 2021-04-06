import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Toolbar from '../Toolbar'
import './style.scss'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={'container main'}>
        <Toolbar />
        <section className={'main__list px-2 px-md-0'}>{children}</section>
      </main>
      <Footer />
    </>
  )
}

export default Layout
