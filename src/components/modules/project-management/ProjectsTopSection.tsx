import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import SearchBox from 'components/common/SearchBox';
import ToggleViewButton from 'components/common/ToggleViewbutton';
import FourGrid from 'components/icons/FourGrid';
import NineGrid from 'components/icons/NineGrid';
import { Project } from 'data/project-management/projects';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ProjectsTopSectionInterface {
  activeView: 'list' | 'board' | 'card';
}

const ProjectsTopSection = ({ activeView }: ProjectsTopSectionInterface) => {
  const navigate = useNavigate();
  const { setGlobalFilter, getPrePaginationRowModel, getColumn } =
    useAdvanceTableContext<Project>();

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Critical',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <Row className="g-3 justify-content-between align-items-center mb-4">
      <Col xs={12} sm="auto">
        <FilterTab tabItems={tabItems} />
      </Col>
      <Col xs={12} sm="auto">
        <div className="d-flex align-items-center gap-1">
          <SearchBox
            onChange={handleSearchInputChange}
            placeholder="Search projects"
            style={{ maxWidth: '30rem' }}
            className="me-3"
          />
          <ToggleViewButton
            tooltip="List view"
            active={activeView === 'list'}
            onClick={() => {
              navigate('/apps/project-management/project-list-view');
            }}
          >
            <FontAwesomeIcon icon="list" className="fs-10" />
          </ToggleViewButton>
          <ToggleViewButton
            tooltip="Board view"
            active={activeView === 'board'}
            onClick={() => {
              navigate('/apps/project-management/project-board-view');
            }}
          >
            <NineGrid />
          </ToggleViewButton>
          <ToggleViewButton
            tooltip="Card view"
            active={activeView === 'card'}
            onClick={() => {
              navigate('/apps/project-management/project-card-view');
            }}
          >
            <FourGrid />
          </ToggleViewButton>
        </div>
      </Col>
    </Row>
  );
};

export default ProjectsTopSection;
