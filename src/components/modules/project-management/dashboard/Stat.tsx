import { ProjectManagementStat } from 'data/project-management/stats';
import React from 'react';

const Stat = ({ stat }: { stat: ProjectManagementStat }) => {
  return (
    <div className="d-flex align-items-center">
      {stat.icon}
      <div className="ms-2">
        <div className="d-flex align-items-end">
          <h2 className="mb-0 me-2">{stat.count}</h2>
          <span className="fs-7 fw-semi-bold text-900">{stat.title}</span>
        </div>
        <p className="text-800 fs-9 mb-0">{stat.subtitle}</p>
      </div>
    </div>
  );
};

export default Stat;
