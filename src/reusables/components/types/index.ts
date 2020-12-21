import { SuspenseProps } from 'react';

export interface SuspenseWrapperProps extends SuspenseProps {}

export interface ScrollToTopProps {
  offset: number;
  render: (scrollToTop: () => void) => JSX.Element;
}
