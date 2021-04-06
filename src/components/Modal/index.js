import React from 'react'
import './style.scss'
import { v1 as uuidv1 } from 'uuid'

function Modal() {
  return (
    <section
      className="modal fade"
      tabIndex="-1"
      id="openModal"
      aria-labelledby="openModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="h4 modal-title" id="openModalLabel">
              New Invoice
            </h4>
            <button
              type="button "
              className="btn btn-outline-danger btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-flex flex-column gap-2">
              <div>
                <input className="form-control" type="text" placeholder="No" />
                <p className="form-text m-0">If invoice number doesn't exist, system appends it</p>
              </div>
              <div className="d-flex flex-md-row flex-column gap-md-3 gap-1">
                <input className="form-control" type="text" placeholder="Work Title" />
                <input className="form-control" type="text" placeholder="Company Name" />
                <input className="form-control" type="text" placeholder="Service Type" />
              </div>
              <div className="d-flex flex-md-row flex-column gap-md-3 gap-1">
                <input className="form-control" type="text" placeholder="Operation Time" />
                <input className="form-control" type="text" placeholder="Used Supplies" />
                <input className="form-control" type="text" placeholder="Assign To" />
              </div>
              <div className="d-flex flex-md-row flex-column gap-md-3 gap-1">
                <input className="form-control" type="text" placeholder="Payment Method" />
                <div className="d-flex w-25 gap-1">
                  <input className="form-check-input" type="checkbox" value="" id="isPaid" />
                  <label className="form-check-label" htmlFor="isPaid">
                    is Paid?
                  </label>
                </div>
                <input className="form-control" type="date" placeholder="Due Date" />
              </div>
              <div className="d-flex ">
                <textarea className="form-control" type="text" placeholder="Details" />
              </div>
              <div className="d-flex w-100 justify-content-end">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modal
