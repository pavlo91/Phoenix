import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { SubTaskItem } from 'data/project-management/todoListData';
import { snakeCase } from 'helpers/utils';
import React from 'react';
import { Form } from 'react-bootstrap';

const SubTask = ({
  task,
  className
}: {
  task: SubTaskItem;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        className,
        'd-flex flex-between-center hover-actions-trigger border-300 py-3 border-bottom'
      )}
    >
      <Form.Check
        type="checkbox"
        id={snakeCase(task.task)}
        className="mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto"
      >
        <Form.Check.Input
          type="checkbox"
          className="form-check-line-through mt-0 me-3"
        />
        <Form.Check.Label className="mb-0 fs-8"> {task.task}</Form.Check.Label>
      </Form.Check>

      <div className="hover-actions end-0">
        <Button variant="" size="sm" className="me-1 text-700 px-0 me-3">
          <FontAwesomeIcon icon="pencil" className="fs-10" />
        </Button>
        <Button size="sm" className="text-700 px-0">
          <FontAwesomeIcon icon="xmark" className="fs-8" />
        </Button>
      </div>
    </div>
  );
};

export default SubTask;
