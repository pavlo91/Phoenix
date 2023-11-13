import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import { Messages, PageTitle } from 'hyper_components';
import UserBox from './UserBox';
import OverView from './OverView';
import Security from './Security';
import EventLogs from './EventLogs';
import { projects, posts } from './data';

const UserView = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Users', path: '/pages/user-view' },
                    { label: 'View User', path: '/pages/user-view', active: true },
                ]}
                title={'View User'}
            />
            <Row>
                <Col xl={4} lg={5}>
                    {/* User information */}
                    <UserBox />

                    {/* User's recent messages */}
                    <Messages />
                </Col>
                <Col xl={8} lg={7}>
                    <Tab.Container defaultActiveKey="overview">
                        <Card>
                            <Card.Body>
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="overview" className=" rounded-2">
                                            OverView
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="security" className=" rounded-2">
                                            Security
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="events_logs" className=" rounded-2">
                                            Events & Logs
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="overview">
                                        <OverView projects={projects} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="security">
                                        <Security posts={posts} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="events_logs">
                                        <EventLogs />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    );
};

export default UserView
