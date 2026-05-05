import { cva } from 'class-variance-authority';
import {
  toggleSwitchSizeVariants,
  toggleLabelSizeVariants,
  ComponentSize,
} from '@/components/ui/variants/sizeVariants';
import classNames from 'classnames';

const toggleInputClasses = cva('peer absolute opacity-0');

const toggleSwitchClasses = cva(
  "peer-checked:bg-primary rounded-full peer-focus-visible:outline-solid after:absolute after:top-1 after:left-1 after:rounded-full after:bg-white after:transition-all after:content-['']",
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      isValid: {
        true: 'bg-valid',
        false: 'bg-invalid',
      },
    },
    defaultVariants: {
      disabled: false,
      isValid: true,
    },
  },
);

const toggleLabelClasses = cva('ml-2', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export type ToggleSwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> & {
  size?: ComponentSize;
  label?: string;
  isValid?: boolean;
};

export default function ToggleSwitch({
  size = 'sm',
  label,
  isValid = true,
  required = false,
  disabled = false,
  children,
  ...props
}: ToggleSwitchProps) {
  const name = props.name ?? '';
  return (
    <label className="relative flex cursor-pointer items-center">
      <input
        name={name}
        type="checkbox"
        aria-invalid={!isValid}
        aria-required={required}
        aria-label={!children ? label : undefined}
        disabled={disabled}
        className={toggleInputClasses()}
        {...props}
      />
      <div
        className={classNames(
          toggleSwitchClasses({ disabled, isValid }),
          toggleSwitchSizeVariants({ size }),
        )}
      ></div>
      {children && (
        <span
          className={classNames(
            toggleLabelClasses({ disabled }),
            toggleLabelSizeVariants({ size }),
          )}
        >
          {children}
        </span>
      )}
    </label>
  );
}
