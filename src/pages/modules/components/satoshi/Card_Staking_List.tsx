import React from "react";

interface Card_Staking_List {
    className?: string,
    body?: {
        className: string
    }
}

export default function Card_Staking_List({className, body} : Card_Staking_List) {
  return (
    <div className={`card ${ className ? className : "" }`}>
      <div className={`card-body ${ body ? body.className : "" }`}>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h5>Staking rewards</h5>
          </div>
          <div className="hstack align-items-center">
            <a href="#" className="text-muted">
              <i className="bi bi-arrow-repeat"></i>
            </a>
          </div>
        </div>
        <div className="vstack gap-1">
          <div className="d-flex bg-body-secondary gap-3 rounded-3 p-4">
            <div className="w-rem-8 h-rem-8 flex-none">
              <img src="/satoshi_assets/phoenix/img/crypto/icon/ada.svg" />
            </div>
            <div className="vstack gap-2">
              <div className="d-flex mb-1">
                <div className="">
                  <span className="d-block text-heading text-sm fw-semibold">
                    Staked ADA
                  </span>
                  <span className="d-block text-muted text-xs">25% APR</span>
                </div>
                <div className="ms-auto d-block text-heading text-sm fw-semibold">
                  1030 ADA
                </div>
              </div>
              <div className="progress bg-body-tertiary">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: '70%' }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex bg-body-secondary gap-3 rounded-3 p-4">
            <div className="w-rem-8 h-rem-8 flex-none">
              <img src="/satoshi_assets/phoenix/img/crypto/icon/eth.svg" />
            </div>
            <div className="flex-fill vstack gap-2">
              <div className="d-flex mb-1">
                <div className="">
                  <span className="d-block text-heading text-sm fw-semibold">
                    Staked ETH
                  </span>
                  <span className="d-block text-muted text-xs">16% APR</span>
                </div>
                <div className="ms-auto fw-bold text-heading text-sm">
                  9.5 ETH
                </div>
              </div>
              <div className="progress bg-body-tertiary">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: '50%' }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex bg-body-secondary gap-3 rounded-3 p-4">
            <div className="w-rem-8 h-rem-8 flex-none">
              <img src="/satoshi_assets/phoenix/img/crypto/icon/xrp.svg" />
            </div>
            <div className="vstack gap-2">
              <div className="d-flex mb-1">
                <div className="">
                  <span className="d-block text-heading text-sm fw-semibold">
                    Staked XRP
                  </span>
                  <span className="d-block text-muted text-xs">13% APR</span>
                </div>
                <div className="ms-auto d-block text-heading text-sm fw-semibold">
                  760 XRP
                </div>
              </div>
              <div className="progress bg-body-tertiary">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: '70%' }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
