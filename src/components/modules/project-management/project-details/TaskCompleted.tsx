import CompletedTaskChart from 'components/charts/e-charts/CompletedTaskChart';
import { Col, Form, Row } from 'react-bootstrap';

const TaskCompleted = () => {
  return (
    <>
      <Row className="row flex-between-center mb-3 g-3">
        <Col xs="auto">
          <h4 className="text-black">Task completed over time</h4>
          <p className="text-700 mb-0">Hard works done across all projects</p>
        </Col>
        <Col xs={8} sm={4}>
          <Form.Select size="sm">
            <option>Mar 1 - 31, 2022</option>
            <option>April 1 - 30, 2022</option>
            <option>May 1 - 31, 2022</option>
          </Form.Select>
        </Col>
      </Row>
      <CompletedTaskChart />
    </>
  );
};

export default TaskCompleted;
