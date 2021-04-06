import React, { useState } from 'react'
import './style.scss'
import { connect, useDispatch } from 'react-redux'
import { postData } from '../../Redux/action'
import { v4 as uuidv4 } from 'uuid'
function Modal() {
  const dispatch = useDispatch()
  const idEl = React.useRef()
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [serviceType, setType] = useState('')
  const [time, setTime] = useState('')
  const [supplies, setSupplies] = useState('')
  const [person, setPerson] = useState('')
  const [method, setMethod] = useState('')
  const [isPaid, setPaid] = useState(false)
  const [date, setDate] = useState('')
  const [details, setDetails] = useState('')
  const handleSubmit = (e) => {
    let id
    if (idEl.current.value.length > 1) {
      id = idEl.current.value
    } else {
      id = uuidv4()
    }
    //e.preventDefault() **Canceled to makeup for the data update error**
    const data = {
      id: id,
      title: title,
      company: company,
      serviceType: serviceType,
      spendTime: time,
      usedSupplies: supplies,
      person: person,
      method: method,
      isPaid: isPaid,
      payDay: date,
      details: details,
    }
    dispatch(postData(data))
  }
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
            <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
              <div>
                <input className="form-control" type="text" placeholder="Invoice No" ref={idEl} />
                <p className="form-text m-0">If invoice number doesn't exist, system appends it</p>
              </div>
              <div className="d-flex flex-md-row flex-column gap-md-3 gap-1">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Work Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Service Type"
                  value={serviceType}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <div className="d-flex flex-md-row flex-column gap-md-3 gap-1">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Operation Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Used Supplies"
                  value={supplies}
                  onChange={(e) => setSupplies(e.target.value)}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Assign To"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                />
              </div>
              <div className="d-flex flex-md-row flex-column gap-md-3 gap-1">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Payment Method"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                />
                <div className="d-flex w-25 gap-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isPaid}
                    onChange={(e) => setPaid(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="isPaid">
                    is Paid?
                  </label>
                </div>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Due Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="d-flex ">
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Details"
                  value={details}
                  onChange={(e) => {
                    setDetails(e.target.value)
                  }}
                />
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

export default connect(null, { postData })(Modal)
