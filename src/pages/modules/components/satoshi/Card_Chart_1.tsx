import React, { useEffect } from "react";
const apexChartThree = require("./js/apex-charts/bar-stacked");

interface CardChart1Props {
  title?: string;
  chart?: {
    height?: number;
  };
}

export default function Satoshi_Card_Chart_1({
  title,
  chart,
}: CardChart1Props) {
  useEffect(() => {
    const chartThreeEl = document.querySelector("#chart-users");
    if (chartThreeEl) {
      new apexChartThree().init(chartThreeEl);
    }
  }, []);

  return (
    <div className="card">
      <div className="card-body pb-0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{title ? title : "Earnings"}</h5>
          </div>
          <div className="hstack align-items-center">
            <a href="#" className="text-muted">
              <i className="bi bi-arrow-repeat"></i>
            </a>
          </div>
        </div>
        <div className="mx-n4">
          <div id="chart-users" data-height={chart ? chart.height : 250}></div>
        </div>
      </div>
    </div>
  );
}
