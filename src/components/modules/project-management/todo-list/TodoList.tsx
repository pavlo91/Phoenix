import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TodoListItem from './TodoListItem';
import { ToDoItem, todoList } from 'data/project-management/todoListData';
import classNames from 'classnames';
import TodoItemDetailsModal from './TodoItemDetailsModal';

const TodoList = () => {
  const [selectedItem, setSelectedItem] = useState<ToDoItem | null>(null);
  return (
    <>
      <Card className="h-100 todo-list">
        <Card.Header className="border-bottom-0 pb-0">
          <Row className="justify-content-between align-items-center mb-4 gy-2">
            <Col xs="auto">
              <h3 className="text-1100">To do</h3>
              <p className="mb-0 text-700">Task assigned to me</p>
            </Col>
            <Col xs="auto" className="w-100 w-md-auto">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-x-3 gap-y-3">
                <SearchBox
                  placeholder="Search tasks"
                  style={{ maxWidth: '30rem' }}
                />
                <div>
                  <Button
                    variant="link"
                    className="p-0 fs-9 text-700 text-decoration-none me-3"
                    startIcon={
                      <FontAwesomeIcon icon="filter" className="fs-10 me-1" />
                    }
                  >
                    23 tasks
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 fs-9 text-primary text-decoration-none"
                    startIcon={
                      <FontAwesomeIcon icon="sort" className="fs-10" />
                    }
                  >
                    Sorting
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Header>
        {/* <Scrollbar style={{ minHeight: 300 }}> */}
        <Card.Body className="py-0 scrollbar to-do-list-body">
          {todoList.map((todo, index) => (
            <TodoListItem
              key={todo.task}
              todo={todo}
              className={classNames({
                'border-top': index === 0
              })}
              fullLayoutBreakpoints={['md', 'xxl']}
              halfLayoutBreakpoints={['xl']}
              onClick={setSelectedItem}
            />
          ))}
        </Card.Body>
        {/* </Scrollbar> */}
        <Card.Footer className="border-0">
          <Button
            startIcon={<FontAwesomeIcon icon="plus" />}
            variant="link"
            className="text-decoration-none p-0"
          >
            Add new task
          </Button>
        </Card.Footer>
      </Card>

      <TodoItemDetailsModal
        handleClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  );
};

export default TodoList;
