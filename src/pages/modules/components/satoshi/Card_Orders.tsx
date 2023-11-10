import React from "react";

interface CardOrders {
  limit?: number;
  orders: Item[];
}
interface Item {
  name: string,
  abv: string,
  img: {
    src: string
  },
  amount: string,
  total: string,
  status: string,
  badge: {
    color: string,
    text: string
  },
  date: string
}
export default function Satoshi_Card_Orders({ limit, orders }: CardOrders) {
  return (
    <div className="card">
      <div className="card-body pb-0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5>Transaction History</h5>
          </div>
          <div className="hstack align-items-center">
            <a href="#" className="text-muted">
              <i className="bi bi-arrow-repeat"></i>
            </a>
          </div>
        </div>
        <div className="list-group list-group-flush">
          {orders.slice(0, limit ? limit : 10).map((item) => {
            return (
              <div className="list-group-item d-flex align-items-center justify-content-between gap-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon icon-shape rounded-circle icon-sm flex-none w-rem-10 h-rem-10 text-sm bg-primary bg-opacity-25 text-primary">
                    <i className="bi bi-send-fill"></i>
                  </div>
                  <div className="">
                    <span className="d-block text-heading text-sm fw-semibold">
                      {item.name}
                    </span>
                    <span className="d-none d-sm-block text-muted text-xs">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="d-none d-md-block text-sm">
                  0xd029384sd343fd...eq23
                </div>
                <div className="d-none d-md-block">
                  <span className={`badge bg-body-secondary text-${ item.badge.color ? item.badge.color : 'success' }`}>
                    {item.badge.text ? item.badge.text : "Successful"}
                  </span>
                </div>
                <div className="text-end">
                  <span className="d-block text-heading text-sm fw-bold">
                    +0.2948 BTC
                  </span>
                  <span className="d-block text-muted text-xs">
                    +$10,930.90
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
