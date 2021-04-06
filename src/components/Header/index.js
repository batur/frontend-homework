import React from 'react'
import './style.scss'

function Header() {
  return (
    <>
      <header className={'navbar navbar-expand-lg shadow header pt-3'}>
        <nav className={'container'}>
          <h1 className={'text-light h2'}>Header</h1>
        </nav>
      </header>
    </>
  )
}

export default Header
