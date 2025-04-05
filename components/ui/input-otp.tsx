'use client';

import * as React from 'react';
import OtpInput, { OTPInputProps } from 'react-otp-input';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomOtpInputProps extends OTPInputProps {
  containerClassName?: string;
  className?: string;
}

const InputOTP = React.forwardRef<HTMLInputElement, CustomOtpInputProps>(
  ({ className, containerClassName, ...props }, ref) => {
    const inputRefs = React.useRef<HTMLInputElement[]>([]);

    return (
      <OtpInput
        containerStyle={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          ...(containerClassName ? { className: containerClassName } : {})
        }}
        inputStyle={cn(
          'w-10 h-10 text-center border-y border-r border-input first:rounded-l-md first:border-l last:rounded-r-md disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          className
        )}
        {...props}
      />
    );
  }
);
InputOTP.displayName = 'InputOTP';

interface InputOTPGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const InputOTPGroup = React.forwardRef<HTMLDivElement, InputOTPGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props} />
  )
);
InputOTPGroup.displayName = 'InputOTPGroup';

interface InputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  isActive?: boolean;
}

const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ className, isActive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        isActive && 'z-10 ring-2 ring-ring ring-offset-background',
        className
      )}
      {...props}
    />
  )
);
InputOTPSlot.displayName = 'InputOTPSlot';

interface InputOTPSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const InputOTPSeparator = React.forwardRef<HTMLDivElement, InputOTPSeparatorProps>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  )
);
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };