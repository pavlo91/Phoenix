import React, { PropsWithChildren, useEffect } from 'react';
import { Card, Col, Nav, Row, Collapse } from 'react-bootstrap';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import { LiveEditor, LiveError, LivePreview } from 'react-live';
import classNames from 'classnames';
import { snakeCase } from 'helpers/utils';
import { Link } from 'react-router-dom';
import PhoenixDocProvider, {
  usePhoenixDocContext
} from 'providers/PhoenixDocProvider';
import PhoenixLiveProvider, {
  PhoenixLiveProviderProps
} from 'components/docs/PhoenixLiveProvider';

interface PhoenixDocCardProps {
  className?: string;
  noProvider?: boolean;
}

interface PhoenixDocCardHeaderProps {
  title?: string;
  id?: string;
  className?: string;
  description?: string;
  alignItems?: string;
  noPreview?: boolean;
}
interface PhoenixDocCardBodyProps extends PhoenixLiveProviderProps {
  hidePreview?: boolean;
  className?: string;
  transformCode?: (code: string) => string | Promise<string>;
}

const PhoenixDocCard = ({
  children,
  className,
  noProvider
}: PropsWithChildren<PhoenixDocCardProps>) => {
  return (
    <Card
      className={classNames(
        className,
        'shadow-none border border-300 overflow-visible'
      )}
    >
      {noProvider ? (
        children
      ) : (
        <PhoenixDocProvider>{children}</PhoenixDocProvider>
      )}
    </Card>
  );
};

const PhoenixDocCardHeader = ({
  title,
  description,
  id,
  noPreview,
  alignItems = 'center',
  children,
  className
}: PropsWithChildren<PhoenixDocCardHeaderProps>) => {
  const { open, setOpen, showPreviewBtn, setShowPreviewBtn } =
    usePhoenixDocContext();

  const headerId = id ? id : title && snakeCase(title);

  useEffect(() => {
    setShowPreviewBtn(!noPreview);
  }, [noPreview]);

  return (
    <Card.Header
      className={classNames(
        className,
        'p-4 border-bottom border-300 bg-soft hover-actions-trigger'
      )}
      id={headerId}
    >
      <Row className={`g-3 justify-content-between align-items-${alignItems}`}>
        <Col xs={12} md>
          {title && (
            <h4
              className={classNames('text-900 text-nowrap', {
                'mb-0': !children && !description,
                'mb-2': children || description
              })}
            >
              {title}
              <Link to={`#${headerId}`} className="opacity-0 hover-show ps-2">
                #
              </Link>
            </h4>
          )}
          {description && <p className="mb-0 text-800">{description}</p>}
          {children}
        </Col>
        {showPreviewBtn && (
          <Col md="auto">
            <Nav className="nav-underline justify-content-end doc-tab-nav align-items-center">
              <Button
                variant="link"
                size="sm"
                className="px-2 text-900 copy-code-btn me-2"
              >
                <FontAwesomeIcon icon="copy" className="me-1" />
                Copy Code
              </Button>
              <Button
                variant="phoenix-primary"
                className="text-nowrap"
                size="sm"
                style={{ width: 135 }}
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <>
                    <FeatherIcon icon="eye" className="me-2" size={16} />
                    Preview
                  </>
                ) : (
                  <>
                    <FeatherIcon icon="code" className="me-2" size={16} />
                    View Code
                  </>
                )}
              </Button>
            </Nav>
          </Col>
        )}
      </Row>
    </Card.Header>
  );
};

const PhoenixDocCardBody = ({
  code,
  scope,
  noInline,
  hidePreview,
  children,
  className,
  transformCode
}: PropsWithChildren<PhoenixDocCardBodyProps>) => {
  const { open, showPreviewBtn } = usePhoenixDocContext();

  return (
    <Card.Body className={classNames(className, 'p-0')}>
      {code && (
        <PhoenixLiveProvider
          transformCode={transformCode}
          code={code}
          scope={scope}
          noInline={noInline}
        >
          {code && !showPreviewBtn ? (
            <LiveEditor />
          ) : (
            <>
              <Collapse in={open}>
                <div>
                  <LiveEditor />
                  {!hidePreview && <LiveError />}
                </div>
              </Collapse>
              {!hidePreview && (
                <div className="p-4">
                  <LivePreview />
                </div>
              )}
            </>
          )}
        </PhoenixLiveProvider>
      )}

      {children && <div className="p-4">{children}</div>}
    </Card.Body>
  );
};

PhoenixDocCardHeader.componentName = 'PhoenixDocCardHeader';
PhoenixDocCard.Header = PhoenixDocCardHeader;
PhoenixDocCard.Body = PhoenixDocCardBody;

export default PhoenixDocCard;
