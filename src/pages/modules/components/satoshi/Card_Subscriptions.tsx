import React from 'react'

interface Card_Subscriptions {
    className?: string,
    body?: {
        className: string
    }
}

export default function Card_Subscriptions({className, body} : Card_Subscriptions) {
  return (
    <div className={`card ${ className ? className : "" }`}>
  <div className={`card-body ${ body ? body.className : "" }}`}>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h5>Subscriptions</h5>
      </div>
      <div>
        <span className="text-success fw-bold">
          <i className="bi bi-arrow-up me-2"></i>7.8%
        </span>
      </div>
    </div>
    <div className="d-flex flex-nowrap gap-2 scrollable-x">
      <div className="flex-none">
        <div className=" rounded-3 p-3 p-sm-4 bg-body-secondary">
          <div className="d-flex align-items-center gap-2">
            <img src="/satoshi_assets/phoenix/img/social/youtube.svg" className="w-rem-5" />
            <h6 className="text-sm fw-semibold">Youtube</h6>
          </div>
          <div className="mt-4 fw-bold text-heading">
            $10.99
          </div>
        </div>
      </div>
      <div className="flex-none">
        <div className="rounded-3 p-3 p-sm-4 bg-body-secondary">
          <div className="d-flex align-items-center gap-2">
            <img src="/satoshi_assets/phoenix/img/social/spotify.svg" className="w-rem-5" />
            <h6 className="text-sm fw-semibold">Spotify</h6>
          </div>
          <div className="mt-4 fw-bold text-heading">
            $7.99
          </div>
        </div>
      </div>
      <div className="flex-none">
        <div className="rounded-3 p-3 p-sm-4 bg-body-secondary">
          <div className="d-flex align-items-center gap-2">
            <img src="/satoshi_assets/phoenix/img/social/github.svg" className="w-rem-5" />
            <h6 className="text-sm fw-semibold">GitHub</h6>
          </div>
          <div className="mt-4 fw-bold text-heading">
            $4.00
          </div>
        </div>
      </div>
      <div className="flex-none">
        <div className="rounded-3 p-3 p-sm-4 bg-body-secondary">
          <div className="d-flex align-items-center gap-2">
            <img src="/satoshi_assets/phoenix/img/social/slack.svg" className="w-rem-5" />
            <h6 className="text-sm fw-semibold">Slack</h6>
          </div>
          <div className="mt-4 fw-bold text-heading">
            $12.00
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-4">
      <a href="#" className="link-primary fw-semibold text-sm">
        Manage subcriptions
      </a>
    </div>
  </div>
</div>

  )
}
