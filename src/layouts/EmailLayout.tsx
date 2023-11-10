import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import SearchBox from 'components/common/SearchBox';
import EmailSidebar from 'components/modules/email/EmailSidebar';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import InboxToolbar from '../components/modules/email/InboxToolbar';
import { emails } from 'data/email';
import EmailRow from '../components/modules/email/EmailRow';
import { Link } from 'react-router-dom';

const EmailLayout = ({
  children,
  page
}: PropsWithChildren<{ page: 'inbox' | 'detail' | 'compose' }>) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { breakpoints } = useBreakpoints();
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('pt-0');

    return () => {
      setContentClass('');
    };
  }, []);
  return (
    <div className="email-container">
      <Row className="gx-lg-4 gx-xl-6 gx-3 py-4 z-index-2 position-sticky bg-soft email-header">
        <Col className="col-auto">
          <Button
            variant="primary"
            className="email-sidebar-width d-none d-lg-block"
            as={Link}
            to="/apps/email/compose"
          >
            Compose
          </Button>
          <Button
            variant="phoenix-secondary"
            className="px-3 text-700 d-lg-none"
            onClick={() => setOpenSidebar(true)}
          >
            <FontAwesomeIcon icon="bars" />
          </Button>
        </Col>
        {page !== 'compose' && (
          <Col className="col-auto d-lg-none">
            <Button variant="primary" className="px-3 px-sm-4">
              <span className="d-none d-sm-inline-block">Compose</span>
              <FontAwesomeIcon icon="plus" className="d-sm-none" />
            </Button>
          </Col>
        )}
        <Col className="col-auto flex-1">
          <SearchBox className="w-100" />
        </Col>
      </Row>
      <Row className="g-lg-4 g-xl-6 mb-8">
        <Col lg="auto">
          <div
            className="email-sidebar email-sidebar-width bg-soft d-none d-lg-block"
            id="emailSidebarColumn"
          >
            <EmailSidebar />
          </div>
          {breakpoints.down('lg') && (
            <PhoenixOffcanvas
              open={openSidebar}
              fixed
              placement="start"
              className="email-sidebar email-sidebar-width bg-soft"
              backdropClassName="top-0"
              onHide={() => setOpenSidebar(false)}
            >
              <EmailSidebar hideSidebar={() => setOpenSidebar(false)} />
            </PhoenixOffcanvas>
          )}
        </Col>
        {page !== 'inbox' && (
          <Col xs="3" className="d-none d-xxl-block">
            <div className="email-content scrollbar">
              <div className="px-lg-1">
                <InboxToolbar size="sm" />
                {emails.map(email => (
                  <EmailRow email={email} key={email.id} />
                ))}
              </div>
            </div>
          </Col>
        )}
        {children}
      </Row>
    </div>
  );
};

export default EmailLayout;
