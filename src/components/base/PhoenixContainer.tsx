import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { Container, ContainerProps } from 'react-bootstrap';

export interface PhoenixContainerProps extends ContainerProps {
  small?: boolean;
  className?: string;
}
const PhoenixContainer = ({
  small,
  className,
  children
}: PropsWithChildren<PhoenixContainerProps>) => {
  return (
    <Container
      bsPrefix={small ? 'container-small' : 'container'}
      className={classNames(className)}
    >
      {children}
    </Container>
  );
};

export default PhoenixContainer;
