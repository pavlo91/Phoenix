import Badge from 'components/base/Badge';
import React, { useState } from 'react';
import { Project } from 'data/project-management/projects';
import { Card, ProgressBar } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarDropdown from 'components/common/AvatarDropdown';
import Avatar from 'components/base/Avatar';
import classNames from 'classnames';
import CardViewModal from './CardViewModal';
import { currencyFormat } from 'helpers/utils';
import useProjectProgress from '../useProjectProgress';

const CardViewItem = ({ project }: { project: Project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const { progress, bgClassName, variant } = useProjectProgress(project);

  return (
    <>
      <Card className="h-100 hover-actions-trigger">
        <Card.Body>
          <div className="d-flex align-items-center">
            <h4 className="mb-2 line-clamp-1 lh-sm flex-1 me-5">
              {project.name}
            </h4>
            <div className="hover-actions top-0 end-0 mt-4 me-4">
              <Button
                variant="primary"
                className="btn-icon flex-shrink-0"
                onClick={() => setOpenDetailsModal(true)}
              >
                <FontAwesomeIcon icon="chevron-right" />
              </Button>
            </div>
          </div>
          <Badge
            variant="phoenix"
            bg={project.status.type}
            className="fs-10 mb-4"
          >
            {project.status.label}
          </Badge>
          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon
              icon="user"
              className="me-2 text-700 fs-9 fw-extra-bold"
            />
            <p className="fw-bold mb-0 text-truncate lh-1">
              Client :{' '}
              <span className="fw-semi-bold text-primary ms-1">
                {' '}
                Gusteau’s Restaurant
              </span>
            </p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FontAwesomeIcon
              icon="credit-card"
              className="me-2 text-700 fs-9 fw-extra-bold"
            />
            <p className="fw-bold mb-0 text-truncate lh-1">
              Budget :{' '}
              <span className="text-1100 ms-1">
                {currencyFormat(project.budget)}
              </span>
            </p>
          </div>
          <div className="d-flex justify-content-between text-700 fw-semi-bold">
            <p className="mb-2"> Progress</p>
            <p className="mb-2 text-1100">{progress}%</p>
          </div>
          <ProgressBar
            now={progress}
            className={classNames('flex-1', bgClassName)}
            variant={variant}
          />

          <div>
            <div className="d-flex align-items-center mt-4">
              <p className="mb-0 fw-bold fs-9">
                Started :
                <span className="fw-semi-bold text-600 ms-1">
                  {project.start}
                </span>
              </p>
            </div>
            <div className="d-flex align-items-center mt-2">
              <p className="mb-0 fw-bold fs-9">
                Deadline :{' '}
                <span className="fw-semi-bold text-600 ms-1">
                  {project.deadline}
                </span>
              </p>
            </div>

            <div className="d-flex d-lg-block d-xl-flex justify-content-between align-items-center mt-3">
              <div className="d-flex gap-1">
                <Avatar.Group total={project.assigness.length} size="m">
                  {project.assigness.slice(0, 4).map(assigne => (
                    <AvatarDropdown user={assigne} size="m" key={assigne.id} />
                  ))}
                </Avatar.Group>
              </div>

              <div className="mt-lg-3 mt-xl-0">
                <FontAwesomeIcon icon="list-check" className="me-1" />

                <p className="d-inline-block fw-bold mb-0">
                  {project.task}
                  <span className="fw-normal"> Task</span>
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      <CardViewModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        project={project}
      />
    </>
  );
};

export default CardViewItem;
