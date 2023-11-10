import React from "react";
import Card_Stat_2 from "./Card_Stat_2";
import Card_Chart_1 from "./Card_Chart_1";
import Card_Orders from "./Card_Orders";
import DocPageHeader from "components/docs/DocPageHeader";
import orders from "./data/orders";
import Card_Balance from "./Card_Balance";
import Card_Staking_List from "./Card_Staking_List";
import Card_Subscriptions from "./Card_Subscriptions";

export default function Satoshi_Dashboard_Default() {
  const cardState2 = {
    value: "-3.2%",
    color: "danger",
  };

  const cardState3 = {
    value: "-2.2%",
    color: "danger",
  };
  return (
    <div className="mb-9">
      <DocPageHeader title="Dashboard" />
      <div className="row g-3 g-xxl-6">
        <div className="col-xxl-8">
          <div className="vstack gap-3 gap-md-6">
            <div className="row g-3">
              <div className="col-md col-sm-6">
                <Card_Stat_2 />
              </div>
              <div className="col-md col-sm-6">
                <Card_Stat_2
                  title="ADA"
                  subtitle="10.745,49 ADA"
                  imgSrc="/satoshi_assets/phoenix/img/crypto/icon/ada.svg"
                  badge={cardState2}
                />
              </div>
              <div className="col-md col-sm-6">
                <Card_Stat_2
                  title="EOS"
                  subtitle="7.890,00 EOS"
                  imgSrc="/satoshi_assets/phoenix/img/crypto/icon/eos.svg"
                  badge={cardState3}
                />
              </div>
              <div className="col-md-1 d-none d-md-block">
                <div className="card h-md-100 d-flex flex-column align-items-center justify-content-center py-4 bg-body-secondary bg-opacity-75 bg-opacity-100-hover">
                  <a
                    href="#cryptoModal"
                    className="stretched-link text-body-secondary"
                    data-bs-toggle="modal"
                  >
                    <i className="bi bi-plus-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <Card_Chart_1 chart={{ height: 270 }} />
            <Card_Orders orders={orders} />
          </div>
        </div>
        <div className="col-xxl-4">
          <div
            className="offcanvas-xxl m-xxl-0 rounded-sm-4 rounded-xxl-0 offcanvas-end overflow-hidden m-sm-4"
            id="responsiveOffcanvas"
            tabIndex={-1}
            aria-labelledby="responsiveOffcanvasLabel"
          >
            <div className="vstack gap-6 gap-xxl-6">
              <Card_Balance
                className="border-0 border-xxl"
                body={{ className: "p-0 p-xxl-6" }}
              />
              <hr className="my-0 d-xxl-none" />
              <Card_Staking_List
                className="border-0 border-xxl"
                body={{ className: "p-0 p-xxl-6" }}
              />
              <hr className="my-0 d-xxl-none" />
              <Card_Subscriptions
                className="border-0 border-xxl"
                body={{ className: "p-0 p-xxl-6" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
