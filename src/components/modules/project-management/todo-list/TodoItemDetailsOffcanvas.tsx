import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import {
  ToDoItem,
  attachments,
  subTasks
} from 'data/project-management/todoListData';
import React from 'react';
import SubTask from './SubTask';
import classNames from 'classnames';
import FileListItem from './FileListItem';
import { Form } from 'react-bootstrap';
import DatePicker from 'components/base/DatePicker';
import { UilBellSchool, UilTagAlt } from '@iconscout/react-unicons';
import ReactSelect from 'components/base/ReactSelect';

interface TodoItemDetailsOffcanvasProps {
  handleClose: () => void;
  item: ToDoItem | null;
}

const TodoItemDetailsOffcanvas = ({
  handleClose,
  item
}: TodoItemDetailsOffcanvasProps) => {
  return (
    <PhoenixOffcanvas
      open={!!item}
      onHide={handleClose}
      className="todolist-offcanvas"
      placement="end"
      fixed
      backdropClassName="opacity-0"
    >
      {item && (
        <>
          <div className="p-5 p-md-6">
            <div className="d-flex flex-between-center mb-4 gap-3">
              <h2 className="fw-bold fs-6 mb-0 text-1000 line-clamp-1">
                {item.task}
              </h2>
              <Button
                variant="phoenix-secondary"
                onClick={handleClose}
                className="btn-icon flex-shrink-0"
              >
                <FontAwesomeIcon icon="xmark" />
              </Button>
            </div>
            <div className="mb-6">
              <div className="d-flex align-items-center mb-3">
                <h4 className="text-900 me-3">Description</h4>
                <Button variant="link" className="text-decoration-none p-0">
                  <FontAwesomeIcon icon="pen" />
                </Button>
              </div>
              <p className="text-1000 mb-0">
                The female circus horse-rider is a recurring subject in
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus. They visited
                Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent
                Chagall his private box seats. Chagall completed 19 gouaches
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="mb-3">Subtasks</h4>
              <div className="mb-3">
                {subTasks.map((subTask, index) => (
                  <SubTask
                    key={subTask.task}
                    task={subTask}
                    className={classNames({
                      'border-top': index === 0
                    })}
                  />
                ))}
              </div>
              <Button
                variant="link"
                className="fw-bold fs-9 text-decoration-none p-0"
              >
                <FontAwesomeIcon icon="plus" className="me-1" />
                Add subtask
              </Button>
            </div>

            <div className="mb-6">
              <h4 className="mb-3">Files</h4>
              <div className="mx-n5 mx-md-n6 mb-3">
                {attachments.map((attachment, index) => (
                  <FileListItem
                    key={attachment.name}
                    attachment={attachment}
                    className={classNames('px-5 px-md-6', {
                      'border-top': index === 0
                    })}
                  />
                ))}
              </div>
              <div className="">
                <Button
                  variant="link"
                  className="text-decoration-none p-0"
                  startIcon={<FontAwesomeIcon icon="plus" className="me-1" />}
                >
                  Add file(s)
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="mb-4 text-black">Others Information</h4>
              <h5 className="text-1000 mb-2">Status</h5>
              <Form.Select className="mb-4">
                <option>Select</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="closed">Closed</option>
              </Form.Select>
              <h5 className="text-1000 mb-2">Due Date</h5>
              <div className="mb-4">
                <DatePicker placeholder="Set the due date" />
              </div>
              <h5 className="text-1000 mb-2">Reminder</h5>
              <div className="mb-4">
                <DatePicker
                  placeholder="Set the due date"
                  options={{
                    noCalendar: true,
                    enableTime: true,
                    dateFormat: 'H:i'
                  }}
                  icon={
                    <UilBellSchool
                      className="flatpickr-icon text-700"
                      size={16}
                    />
                  }
                />
              </div>
              <h5 className="text-1000 mb-2">Tag</h5>
              <ReactSelect
                menuPlacement="top"
                options={[
                  {
                    value: 'massachusetts_institute_of_technology',
                    label: 'Massachusetts Institute of Technology'
                  },
                  {
                    value: 'university_of_chicago',
                    label: 'University of Chicago'
                  },
                  {
                    value: 'gsas_open_labs_at_harvard',
                    label: 'GSAS Open Labs At Harvard'
                  },
                  {
                    value: 'california_institute_of_technology',
                    label: 'California Institute of Technology'
                  }
                ]}
                className="mb-6"
                isMulti
                placeholder="Select organizer"
                icon={
                  <UilTagAlt className="react-select-icon text-700" size={16} />
                }
              />

              <div className="text-end">
                <Button variant="phoenix-danger">Delete Task</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </PhoenixOffcanvas>
  );
};

export default TodoItemDetailsOffcanvas;
