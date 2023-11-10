import { ElementType } from 'react';
import { To } from 'react-router-dom';

declare module 'react-bootstrap' {
  interface ButtonProps {
    as?: ElementType;
    to?: To;
  }
}
