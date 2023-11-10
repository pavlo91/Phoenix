import { attachments, todoList } from 'data/project-management/todoListData';
import { Col, Modal, ProgressBar, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from 'data/project-management/projects';
import AvatarDropdown from 'components/common/AvatarDropdown';
import Badge from 'components/base/Badge';
import { Link } from 'react-router-dom';
import { comments } from 'data/project-management/comments';
import SearchBox from 'components/common/SearchBox';
import TodoListItem from '../todo-list/TodoListItem';
import classNames from 'classnames';
import FileListItem from '../todo-list/FileListItem';
import CommentForm from 'components/common/CommentForm';
import CoverImage from '../board-view/CoverImage';
import DatePicker from 'components/base/DatePicker';
import { actionItems, addToCardItems } from 'data/project-management/actions';
import Comment from 'components/common/Comment';
import EditableDetailsField from 'components/common/EditableDetailsField';
import useProjectProgress from '../useProjectProgress';

interface BoardViewModalModalProps {
  handleClose: () => void;
  project: Project;
  show: boolean;
}

const CardViewModal = ({
  handleClose,
  show,
  project
}: BoardViewModalModalProps) => {
  const { progress, bgClassName, variant } = useProjectProgress(project);
  return (
    <Modal show={show} onHide={handleClose} size="lg" className="p-0">
      <Modal.Header className="position-relative p-0 overflow-hidden">
        <CoverImage handleClose={handleClose} />
      </Modal.Header>
      <Modal.Body className="p-5 px-md-6 pb-md-6">
        {/* <ActionSection /> */}
        <Row className="g-5">
          <Col xs={12} xl={9}>
            <div className="mb-4">
              <h3 className="fw-bolder lh-sm">{project.name}</h3>
              <p className="text-1000 fw-semi-bold mb-0">
                In list
                <Link className="ms-1 fw-bold" to="#!">
                  Review
                </Link>
              </p>
            </div>

            <div className="d-flex align-items-center mb-4">
              <p className="text-1000 fw-700 mb-0 me-2">{progress}%</p>

              <ProgressBar
                now={progress}
                className={classNames('flex-1', bgClassName)}
                variant={variant}
              />
            </div>
            <h6 className="text-800 mb-2">Due date</h6>
            <div className="mb-3">
              <div className="w-50">
                <DatePicker
                  placeholder="Set the due date"
                  options={{
                    defaultDate: 'May 1, 2023'
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <h6 className="text-800 mb-2">Assigness</h6>
              <div className="d-flex gap-1">
                {project.assigness.slice(0, 5).map(member => (
                  <AvatarDropdown user={member} size="m" key={member.id} />
                ))}
                <Button
                  variant="phoenix-secondary"
                  className="btn-circle"
                  size="sm"
                >
                  <FontAwesomeIcon icon="plus" />
                </Button>
              </div>
            </div>

            <div className="mb-5">
              <h6 className="text-800 mb-2">Labels</h6>
              <div className="d-flex gap-2 align-items-center">
                <Badge variant="phoenix" bg="info" className="fs-10">
                  Info
                </Badge>
                <Badge variant="phoenix" bg="warning" className="fs-10">
                  Urgent
                </Badge>
                <Badge variant="phoenix" bg="success" className="fs-10">
                  Done
                </Badge>
                <Button
                  variant="link"
                  className="p-0 fs-9 text-900 fw-bolder text-decoration-none lh-1"
                  startIcon={<FontAwesomeIcon icon="plus" />}
                >
                  Add another
                </Button>
              </div>
            </div>

            <EditableDetailsField className="mb-6">
              The female circus horse-rider is a recurring subject in Chagall’s
              work. In 1926 the art dealer Ambroise Vollard invited Chagall to
              make a project based on the circus. They visited Paris’s historic
              Cirque d’Hiver Bouglione together; Vollard lent Chagall his
              private box seats. Chagall completed 19 gouaches
            </EditableDetailsField>

            <div className="bg-100 rounded-2 px-4 mb-3">
              <div className="mb-1">
                {comments.map((comment, index) => (
                  <Comment
                    comment={comment}
                    className={
                      index !== comments.length - 1
                        ? 'border-bottom'
                        : undefined
                    }
                    key={comment.id}
                  />
                ))}
              </div>
            </div>
            <div className="pb-3 border-bottom mb-6">
              <CommentForm />
            </div>

            <div className="mb-7">
              <h4 className="mb-4">
                To do list <span className="text-700 fw-normal fs-6">(23)</span>
              </h4>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-x-5 gap-y-3 mb-3">
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
              <div className="mb-4">
                {todoList.map((todo, index) => (
                  <TodoListItem
                    key={todo.task}
                    todo={todo}
                    className={classNames('py-3', {
                      'border-top': index === 0
                    })}
                    // fullLayoutBreakpoints={['lg']}
                    // onClick={setSelectedItem}
                  />
                ))}
              </div>
              <Button
                startIcon={<FontAwesomeIcon icon="plus" />}
                variant="link"
                className="text-decoration-none p-0"
              >
                Add new task
              </Button>
            </div>

            <div>
              <h4 className="mb-3">Files</h4>
              <div className="mb-3">
                {attachments.map((attachment, index) => (
                  <FileListItem
                    key={attachment.name}
                    attachment={attachment}
                    className={classNames({
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
          </Col>

          <Col xs={12} xl={3}>
            <h5 className="text-800 mb-3">Add to card</h5>
            <div className="mb-6 d-flex flex-column gap-2">
              {addToCardItems.map(item => (
                <Button
                  key={item.label}
                  variant="soft-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-100 text-start"
                  size="sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <h5 className="text-800 mb-3">Actions</h5>
            <div className="d-flex flex-column gap-2">
              {actionItems.map(item => (
                <Button
                  variant="soft-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-100 text-start"
                  size="sm"
                  key={item.label}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CardViewModal;
