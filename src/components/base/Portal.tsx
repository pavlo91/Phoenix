import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

interface PortalProps {
  containerSelector?: string;
}

const Portal = ({
  children,
  containerSelector = 'body'
}: PropsWithChildren<PortalProps>) => {
  if (!canUseDOM) return null;

  const portalContainer = document.querySelector(containerSelector);

  if (!portalContainer) return null;

  return createPortal(children, portalContainer);
};

export default Portal;
