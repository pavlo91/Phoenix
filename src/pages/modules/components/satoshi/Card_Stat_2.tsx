import React from "react";

interface CardState2 {
  imgSrc?: string;
  title?: string;
  subtitle?: string;
  badge?: Badge;
}

interface Badge {
  value?: string;
  color?: string;
}

export default function Satoshi_Card_Stat_2({
  imgSrc,
  title,
  subtitle,
  badge,
}: CardState2) {
  return (
    <div className="card border-primary-hover">
      <div className="card-body p-4">
        <div className="d-flex align-items-center gap-2">
          <img className="w-rem-5 flex-none" src={imgSrc ? imgSrc : "/satoshi_assets/phoenix/img/crypto/icon/btc.svg"} />
          <a href="/pages/page-details.html" className="h6 stretched-link">
            {title ? title : "BTC"}
          </a>
        </div>
        <div className="text-sm fw-semibold mt-3">
          {subtitle ? subtitle : "3.2893 USDT"}
        </div>
        <div className="d-flex align-items-center gap-2 mt-1 text-xs">
          <span className={`badge badge-xs bg-${ badge ? badge.color : 'success' }`}>
            <i className="bi bi-arrow-up-right"></i>
          </span>
          <span>{badge ? badge.value : "+13.7%"}</span>
        </div>
      </div>
    </div>
  );
}
