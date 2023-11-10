import React from 'react'

interface Card_Balance {
    className?: string,
    body?: {
        className: string
    }
}
export default function Card_Balance({className, body} : Card_Balance) {
  return (
    <div className={`card ${ className ? className : "" }`}>
  <div className={`card-body d-flex flex-column ${ body ? body.className : "" }`}>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5>Balance</h5>
      </div>
      <div>
        <span className="text-heading fw-bold">
          <i className="bi bi-arrow-up me-2"></i>7.8%
        </span>
      </div>
    </div>
    <div className="text-2xl fw-bolder text-heading ls-tight">
      23.863,21 USDT
    </div>
    <div className="d-flex align-items-center justify-content-between mt-8">
      <div className="">
        <div className="d-flex gap-3 align-items-center">
          <div className="icon icon-sm icon-shape text-sm rounded-circle bg-dark text-success">
            <i className="bi bi-arrow-down"></i>
          </div>
          <span className="h6 fw-semibold text-muted">Income</span>
        </div>
        <div className="fw-bold text-heading mt-3">
          $23.863,21 USD
        </div>
      </div>
      <span className="vr bg-dark bg-opacity-10"></span>
      <div className="">
        <div className="d-flex gap-3 align-items-center">
          <div className="icon icon-sm icon-shape text-sm rounded-circle bg-dark text-danger">
            <i className="bi bi-arrow-up"></i>
          </div>
          <span className="h6 fw-semibold text-muted">Expenses</span>
        </div>
        <div className="fw-bold text-heading mt-3">
          $5.678,45 USD
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
