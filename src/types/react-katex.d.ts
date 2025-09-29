declare module 'react-katex' {
  import { ReactNode } from 'react';

  export interface MathProps {
    math: string;
    renderError?: (error: Error) => ReactNode;
    settings?: any;
  }

  export const InlineMath: React.FC<MathProps>;
  export const BlockMath: React.FC<MathProps>;
}
