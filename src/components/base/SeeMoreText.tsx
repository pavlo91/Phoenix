import React, { ElementType } from 'react';
import { Link } from 'react-router-dom';

interface SeeMoreTextProps {
  as?: ElementType;
  className?: string;
  maxChars: number;
  link: string;
  children: string;
}

const SeeMoreText = ({
  children,
  as: Tag = 'p',
  className,
  maxChars,
  link
}: SeeMoreTextProps) => {
  return (
    <Tag className={className}>
      {children.slice(0, maxChars)}
      {children.length > maxChars && (
        <>
          <>...</>
          <Link to={link} className="fw-semi-bold">
            see more
          </Link>
        </>
      )}
    </Tag>
  );
};

export default SeeMoreText;
