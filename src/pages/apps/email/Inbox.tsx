import EmailLayout from 'layouts/EmailLayout';
import { Col } from 'react-bootstrap';
import InboxToolbar from 'components/modules/email/InboxToolbar';
import { emails } from 'data/email';
import EmailRow from 'components/modules/email/EmailRow';

const Inbox = () => {
  return (
    <EmailLayout page="inbox">
      <Col xs={12} lg>
        <div className="px-lg-1">
          <InboxToolbar className="inbox-toolbar" />
          {emails.map(email => (
            <EmailRow email={email} key={email.id} />
          ))}
        </div>
      </Col>
    </EmailLayout>
  );
};

export default Inbox;
