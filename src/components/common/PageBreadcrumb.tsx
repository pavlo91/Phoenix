import classNames from 'classnames';
import { Breadcrumb } from 'react-bootstrap';

export interface PageBreadcrumbItem {
  label: string;
  url?: string;
  active?: boolean;
}

interface PageBreadcrumbProps {
  items: PageBreadcrumbItem[];
  className?: string;
}

const PageBreadcrumb = ({ items, className }: PageBreadcrumbProps) => {
  return (
    <Breadcrumb className={classNames(className, 'mb-2')}>
      {items.map(item => (
        <Breadcrumb.Item href={item.url} active={item.active} key={item.label}>
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
