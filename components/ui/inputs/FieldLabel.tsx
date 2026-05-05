import { FieldLabelSize } from '@/types/form.types';
import { fieldLabelSizeVariants } from '@/components/ui/variants/sizeVariants';
import classNames from 'classnames';

interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: FieldLabelSize;
}

export default function FieldLabel({
  size = 'sm',
  className,
  children,
  ...props
}: FieldLabelProps) {
  return (
    <label
      className={classNames(
        'block',
        fieldLabelSizeVariants({ size }),
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}
