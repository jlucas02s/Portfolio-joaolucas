import { cn } from '@/lib/utils';
import type { CSSProperties, ReactNode } from 'react';

type SectionProps = {
  style: CSSProperties;
  className?: string;
  children: ReactNode;
};

export const Section = ({ style, className, children }: SectionProps) => {
  return (
    <div
      style={style}
      className={cn(
        'absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-300 ease-out pointer-events-auto',
        className
      )}
    >
      {children}
    </div>
  );
};
