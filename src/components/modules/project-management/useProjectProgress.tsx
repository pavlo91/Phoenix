import classNames from 'classnames';
import { Project } from 'data/project-management/projects';
import { useMemo } from 'react';

const useProjectProgress = (project: Project) => {
  const progress = useMemo(() => {
    return Math.ceil((project.progress.min / project.progress.max) * 100);
  }, [project]);

  const variant = useMemo(() => {
    return classNames({
      [project.status.type]: project.status.type !== 'secondary',
      '700': project.status.type === 'secondary'
    });
  }, [project]);

  const bgClassName = useMemo(() => {
    return classNames({
      [`bg-${project.status.type}-100`]: project.status.type !== 'secondary',
      'bg-200': project.status.type === 'secondary'
    });
  }, [project]);

  return { progress, variant, bgClassName };
};

export default useProjectProgress;
