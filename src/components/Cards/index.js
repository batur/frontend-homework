import React from 'react'
import Button from '../Button'
import './style.scss'

function Card({
  id,
  title,
  company,
  serviceType,
  spendTime,
  usedSupplies,
  person,
  method,
  isPaid,
  payDay,
  details,
}) {
  let isExpired,
    payStatus = 'Unpaid',
    payStat
  const today = new Date()
  const due = new Date(payDay)
  if (isPaid === true) {
    payStatus = 'Paid'
    isExpired = 'success'
    payStat = 'success'
  } else if (due > today) {
    isExpired = 'warning'
    payStat = 'warning'
  } else {
    isExpired = 'danger'
    payStat = 'danger'
  }
  return (
    <article className={'card shadow-sm item'}>
      <header className={'card-body pb-1 card__header bg-light shadow-sm'}>
        <h1 className={'h4 card-title'}>{title}</h1>
        <h2 className={'h5 text-muted'}>{company}</h2>
        <h3 className={'h6'}>{serviceType}</h3>
        <p className={'text-muted small m-0 text-end'}>{id}</p>
      </header>
      <hr className={'m-0'} />
      <div className={'card-body info pt-2'}>
        <ul className={'info__list list-unstyled'}>
          <li>
            Operation Time:{' '}
            <span className={'piece'}>{spendTime ? spendTime + ' h' : 'One Shot'} </span>
          </li>
          <li>
            Used Supplies: <span className={'piece'}>{usedSupplies ? usedSupplies : 'None'}</span>
          </li>
          <li>
            Assignment: <span className={'piece'}>{person}</span>
          </li>
          <li>
            Payment Method: <span className={'piece'}>{method ? method : 'Cash'}</span>
          </li>
        </ul>
        <div>
          <p className={'text-muted'}>{details}</p>
        </div>
        <div className={'info__payment d-flex justify-content-between text-center'}>
          <div>
            <p className={'title'}>Payment status</p>
            <p className={`piece text-${payStat}`}>{payStatus}</p>
          </div>
          <div>
            <p className={'title '}>Expiry date</p>
            <p className={`piece text-${isExpired}`}>{payDay ? payDay : 'Undefined'}</p>
          </div>
        </div>
        <div className={'py-2 d-flex justify-content-between'}>
          <Button type={'btn-outline-secondary shadow-sm btn-sm'}>
            <a
              href={`mailto:contact@${company}.com?subject=${title}/${serviceType}&cc=acdep@brandco.com&body=Hi,%0D%0A%0D%0A  We want to about invoice no.${id}. %0D%0A%0D%0A%0D%0A -Details %0D%0A * Operation Time:${spendTime} %0D%0A * Used Supplies:${usedSupplies} %0D%0A %0D%0A Regards. %0D%0A Have a nice day. %0D%0A %0D%0ABatur Akkurt%0D%0A Brand Co.`}
            >
              Send Mail
            </a>
          </Button>
          <Button type={'btn-outline-warning shadow-sm btn-sm'}>Edit</Button>
          <Button type={'btn-outline-danger shadow-sm btn-sm'}>Move Archive</Button>
        </div>
      </div>
    </article>
  )
}

export default Card
