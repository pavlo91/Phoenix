import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const CreateNew = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-4">Create a project</h2>
      <Row>
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={8}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Project title"
              >
                <Form.Control type="text" placeholder="Project title" />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel
                controlId="floatingSelectTask"
                label="Defult task view"
              >
                <Form.Select>
                  <option>Select task view</option>
                  <option value="1">technical</option>
                  <option value="2">external</option>
                  <option value="3">organizational</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel
                controlId="floatingSelectPrivacy"
                label="Project privacy"
              >
                <Form.Select>
                  <option>Select privacy</option>
                  <option value="1">Data Privacy One</option>
                  <option value="2">Data Privacy Two</option>
                  <option value="3">Data Privacy Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel controlId="floatingSelectTeam" label="Team">
                <Form.Select>
                  <option>Select team</option>
                  <option value="1">Team One</option>
                  <option value="2">Team Two</option>
                  <option value="3">Team Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel controlId="floatingSelectAssignees" label="People">
                <Form.Select>
                  <option>Select assignees</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel
                controlId="floatingSelectAdmin"
                label="Project Lead"
              >
                <Form.Select>
                  <option>Select admin</option>
                  <option value="1">Data Privacy One</option>
                  <option value="2">Data Privacy Two</option>
                  <option value="3">Data Privacy Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <DatePicker
                render={(_, ref) => {
                  return (
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        placeholder="Project title"
                        ref={ref}
                        id="startDate"
                      />
                      <label htmlFor="startDate" className="ps-6">
                        Start date
                      </label>
                    </Form.Floating>
                  );
                }}
              />
            </Col>
            <Col sm={6} md={4}>
              <DatePicker
                render={(_, ref) => {
                  return (
                    <Form.Floating>
                      <Form.Control
                        type="date"
                        placeholder="Deadline"
                        ref={ref}
                        id="deadline"
                      />
                      <label htmlFor="deadline" className="ps-6">
                        Deadline
                      </label>
                    </Form.Floating>
                  );
                }}
              />
            </Col>
            <Col xs={12} className="gy-6">
              <FloatingLabel
                controlId="floatingProjectOverview"
                label="Project overview"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Col>
            <Col md={6} className="gy-6">
              <FloatingLabel controlId="floatingSelectClient" label="Client">
                <Form.Select>
                  <option>Select client</option>
                  <option value="1">Client One</option>
                  <option value="2">Client Two</option>
                  <option value="3">Client Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md={6} className="gy-6">
              <FloatingLabel controlId="floatingInputBudget" label="Budget">
                <Form.Control type="text" placeholder="Budget" />
              </FloatingLabel>
            </Col>
            <Col xs={12} className="gy-6">
              <ReactSelect
                isMulti
                placeholder="Add tags"
                options={[
                  { value: 'Biology', label: 'Biology' },
                  { value: 'Brainlessness', label: 'Brainlessness' },
                  { value: 'Jerry', label: 'Jerry' },
                  { value: 'Neurology', label: 'Neurology' },
                  { value: 'Not_the_mouse', label: 'Not_the_mouse' },
                  { value: 'Rick', label: 'Rick' },
                  { value: 'Stupidity', label: 'Stupidity' }
                ]}
                classNames={{
                  control: () => 'py-3',
                  valueContainer: () => 'lh-1'
                }}
              />
            </Col>
            <Col xs={12} className="gy-6">
              <div className="d-flex justify-content-end gap-3">
                <Button variant="phoenix-primary" className="px-5">
                  Cancel
                </Button>
                <Button variant="primary" className="px-5 px-sm-15">
                  Create Project
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CreateNew;
