import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailsSummary = () => {
  return (
    <>
      <div className="mb-4 mb-xl-7">
        <table className="lh-sm mb-4 mb-sm-0 mb-xl-4">
          <tbody>
            <tr>
              <td className="py-1" colSpan={2}>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon="earth-americas"
                    className="me-2 text-700 fs-9"
                  />
                  <h5 className="text-900">Public project</h5>
                </div>
              </td>
            </tr>
            <tr>
              <td className="align-top py-1">
                <div className="d-flex">
                  <FontAwesomeIcon icon="user" className="me-2 text-700 fs-9" />
                  <h5 className="text-900 mb-0 text-nowrap">Client :</h5>
                </div>
              </td>
              <td className="ps-1 py-1">
                <Link className="fw-semi-bold d-block lh-sm" to="#!">
                  Gobble the Bleep Inc
                </Link>
              </td>
            </tr>
            <tr>
              <td className="align-top py-1">
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={['far', 'credit-card']}
                    className="me-2 text-700 fs-9"
                  />
                  <h5 className="text-900 mb-0 text-nowrap">Budget : </h5>
                </div>
              </td>
              <td className="fw-bold ps-1 py-1 text-1000">$8,742</td>
            </tr>
          </tbody>
        </table>
        <table className="lh-sm">
          <tbody>
            <tr>
              <td className="align-top py-1 text-900 text-nowrap fw-bold">
                Started :{' '}
              </td>
              <td className="text-600 fw-semi-bold ps-3">17th Nov, 2020</td>
            </tr>
            <tr>
              <td className="align-top py-1 text-900 text-nowrap fw-bold">
                Deadline :
              </td>
              <td className="text-600 fw-semi-bold ps-3">21st May, 2028</td>
            </tr>
            <tr>
              <td className="align-top py-1 text-900 text-nowrap fw-bold">
                Progress :
              </td>
              <td className="text-warning fw-semi-bold ps-3">80%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon="list-check" className="me-2 text-700 fs-9" />
          <h5 className="text-1100 mb-0 me-2">
            91<span className="text-900 fw-normal ms-2">tasks</span>
          </h5>
          <Link className="fw-bold fs-9 mt-1" to="#!">
            See tasks{' '}
            <FontAwesomeIcon icon="chevron-right" className="me-2 fs-10" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsSummary;
