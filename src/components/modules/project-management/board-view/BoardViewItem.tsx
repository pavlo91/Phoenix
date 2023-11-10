import Badge from 'components/base/Badge';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import React, { useState } from 'react';
import BoardViewModal from './BoardViewModal';
import { Project } from 'data/project-management/projects';

const BoardViewItem = ({ project }: { project: Project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  return (
    <>
      <RevealDropdownTrigger
        className="position-relative rounded-2 overflow-hidden p-4 cursor-pointer"
        style={{ height: 236 }}
        onClick={() => setOpenDetailsModal(true)}
      >
        <div
          className="bg-holder"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(${project.bg})`
          }}
        />
        <div className="position-relative h-100 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <Badge
              variant="phoenix"
              bg={project.status.type}
              className="fs-10 light"
            >
              {project.status.label}
            </Badge>
            <div className="z-index-2">
              <RevealDropdown btnClassName="btn-icon" icon="ellipsis-v">
                <ActionDropdownItems />
              </RevealDropdown>
            </div>
          </div>
          <h3 className="text-white light fw-bold line-clamp-2">
            {project.name}
          </h3>
        </div>
      </RevealDropdownTrigger>

      <BoardViewModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        project={project}
      />
    </>
  );
};

export default BoardViewItem;
