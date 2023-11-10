import classNames from 'classnames';
import Button from 'components/base/Button';
import { customerNotes } from 'data/e-commerce/customers';
import React from 'react';
import { Card, Form } from 'react-bootstrap';

interface NoteProps {
  note: string;
  date: string;
  isLast?: boolean;
}
const Note = ({ note, date, isLast }: NoteProps) => {
  return (
    <div
      className={classNames('fs-9 fw-semi-bold', {
        'border-bottom border-dashed border-300 pb-3 mb-4': !isLast
      })}
    >
      <p className="text-1000 mb-1">{note}</p>
      <div className="text-end">
        <p className="text-600 mb-0">{date}</p>
      </div>
    </div>
  );
};

const CustomerNotesCard = ({ className }: { className?: string }) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <h3 className="mb-4">Notes on Customer</h3>
        <Form.Control as="textarea" className="mb-3" rows={4} />
        <Button variant="phoenix-primary" className="w-100 mb-4">
          Add Note
        </Button>
        {customerNotes.map((note, index) => (
          <Note
            key={index}
            note={note.note}
            date={note.date}
            isLast={index === customerNotes.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default CustomerNotesCard;
