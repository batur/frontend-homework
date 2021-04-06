import React from 'react'
import Button from '../Button'
import './style.scss'

function Toolbar() {
  const modalData = {
    'data-toggle': 'modal',
    'data-target': '#exampleModal',
  }
  return (
    <div className={'py-2 my-1 px-md-0 px-2 d-flex flex-row-reverse'}>
      <Button type={'btn-success'} {...modalData}>
        New
      </Button>
    </div>
  )
}

export default Toolbar
