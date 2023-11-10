import React, { PropsWithChildren } from 'react';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

interface DocPageHeaderProps {
  title: string;
  description?: string;
  id?: string;
  className?: string;
  link?: {
    url: string;
    text: string;
  };
}

const DocPageHeader = ({
  title,
  description,
  children,
  link,
  id,
  className = 'mb-5'
}: PropsWithChildren<DocPageHeaderProps>) => {
  return (
    <div className={classNames(className)} id={id}>
      <h2 className="mb-2 lh-sm">{title}</h2>
      {description && <p className="text-700 lead mb-2">{description}</p>}
      {children}
      {link && (
        <a
          href={link.url}
          className="btn btn-link p-0"
          rel="noreferrer"
          target="_blank"
        >
          {link.text}
          <FeatherIcon icon="chevron-right" size={16} />
        </a>
      )}
    </div>
  );
};

export default DocPageHeader;
