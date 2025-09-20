// src/components/fields/text-field.tsx
import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  textarea?: boolean;
  className?: string;
};

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  ({ textarea, className, ...props }, ref) => {
    if (textarea) {
      return (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={cn('textarea-class', className)}
        />
      );
    }

    return (
      <input
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        ref={ref as React.Ref<HTMLInputElement>}
        className={cn('input-class', className)}
      />
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
