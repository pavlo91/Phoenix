import { Col, Row, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type StatType = {
  id: number | string;
  icon: IconProp;
  title: string;
  subTitle: string;
  color: string;
};

const stats: StatType[] = [
  {
    id: 1,
    icon: 'star',
    title: '57 new orders',
    subTitle: 'Awating processing',
    color: 'success'
  },
  {
    id: 2,
    icon: 'pause',
    title: '5 orders',
    subTitle: 'On hold',
    color: 'warning'
  },
  {
    id: 3,
    icon: 'xmark',
    title: '15 products',
    subTitle: 'Out of stock',
    color: 'danger'
  }
];

const EcomStats = () => {
  return (
    <Row className="align-items-center g-4 border-bottom pb-4 mb-6">
      {stats.map(stat => (
        <Col xs={12} md="auto" key={stat.id}>
          <Stat stat={stat} />
        </Col>
      ))}
    </Row>
  );
};

const Stat = ({ stat }: { stat: StatType }) => {
  return (
    <Stack direction="horizontal" className="align-items-center">
      {/* <img src={stat.icon} alt="" height={46} width={46} /> */}
      <span
        className="fa-layers"
        style={{ minHeight: '46px', minWidth: '46px' }}
      >
        <FontAwesomeIcon
          icon="square"
          size="2x"
          className={`text-${stat.color}-300`}
          transform="down-4 rotate--10 left-4"
        />
        <FontAwesomeIcon
          icon="circle"
          size="2x"
          className={`text-${stat.color}-100 fa-layers-circle`}
          transform="up-4 right-3 grow-2"
        />
        <FontAwesomeIcon
          icon={stat.icon}
          size="1x"
          className={`text-${stat.color}`}
          transform="shrink-2 up-8 right-6"
        />
      </span>

      <div className="ms-3">
        <h4 className="mb-0">{stat.title}</h4>
        <p className="text-800 fs-9 mb-0">{stat.subTitle}</p>
      </div>
    </Stack>
  );
};

export default EcomStats;
