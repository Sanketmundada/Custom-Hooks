import React, { Suspense } from 'react';
import { SuspenseWrapperProps } from '../types';

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  children,
  fallback,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default SuspenseWrapper;
