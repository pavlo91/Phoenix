import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';

const QueryForm = () => {
  return (
    <>
      <h3 className="mb-3">Drop us a line</h3>
      <p className="mb-7">
        If you have any query or suggestion, we are open to learn from you.
        Let's talk, reach us anytime.
      </p>
      <Form className="d-flex flex-column gap-4">
        <Form.Control type="text" name="name" placeholder="Name" required />
        <Form.Control type="email" name="email" placeholder="Email" required />
        <Form.Control
          as="textarea"
          rows={6}
          name="message"
          placeholder="Message"
          required
        />
        <Button type="submit" variant="outline-primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default QueryForm;
