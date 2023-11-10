import { attachments, todoList } from 'data/project-management/todoListData';
import { Col, Modal, ProgressBar, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from 'data/project-management/projects';
import AvatarDropdown from 'components/common/AvatarDropdown';
import Badge from 'components/base/Badge';
import { comments } from 'data/project-management/comments';
import SearchBox from 'components/common/SearchBox';
import TodoListItem from '../todo-list/TodoListItem';
import classNames from 'classnames';
import FileListItem from '../todo-list/FileListItem';
import CoverImage from './CoverImage';
import ActionSection from './ActionSection';
import CommentForm from 'components/common/CommentForm';
import Comment from 'components/common/Comment';
import EditableDetailsField from 'components/common/EditableDetailsField';
import useProjectProgress from '../useProjectProgress';

interface BoardViewModalModalProps {
  handleClose: () => void;
  project: Project;
  show: boolean;
}

const BoardViewModal = ({
  handleClose,
  show,
  project
}: BoardViewModalModalProps) => {
  const { progress, bgClassName, variant } = useProjectProgress(project);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      contentClassName="overflow-hidden"
    >
      <Modal.Header className="position-relative p-0">
        <CoverImage handleClose={handleClose} />
      </Modal.Header>
      <Modal.Body className="p-0">
        <ActionSection />
        <Row className="g-0">
          <Col xs={12} xl={5} className="border-end border-300 bg-100">
            <div className="px-5 px-lg-6 py-4 bg-white">
              <h3 className="fw-bolder lh-sm mb-5">{project.name}</h3>
              <div className="d-flex align-items-center mb-5">
                <p className="text-1000 fw-700 mb-0 me-2">{progress}%</p>
                <ProgressBar
                  now={progress}
                  className={classNames('flex-1', bgClassName)}
                  variant={variant}
                />
              </div>
              <div className="mb-4">
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
                The female circus horse-rider is a recurring subject in
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus. They visited
                Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent
                Chagall his private box seats. Chagall completed 19 gouaches
              </EditableDetailsField>
            </div>
            <div className="px-5 px-lg-6 py-4">
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
              <CommentForm />
            </div>
          </Col>

          <Col xs={12} xl={7}>
            <div className="px-5 px-lg-6 pt-4 pb-5 pb-lg-6">
              <div className="mb-7">
                <h4 className="mb-4">
                  To do list{' '}
                  <span className="text-700 fw-normal fs-6">(23)</span>
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
                      fullLayoutBreakpoints={['lg']}
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
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default BoardViewModal;
