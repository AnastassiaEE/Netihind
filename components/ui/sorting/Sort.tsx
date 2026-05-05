'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpDown } from 'lucide-react';
import Select, { SelectVariant } from '@/components/ui/select/Select';
import SelectItem from '@/components/ui/select/SelectItem';
import { translateKey } from '@/utils/translationHelper';

export default function Sort({
  name,
  variant = 'labeled',
  openDirection = 'bottom',
  options,
  selectedBySort,
  onSortChange,
  className,
}: {
  name: string;
  variant?: SelectVariant;
  openDirection?: 'top' | 'bottom';
  options: string[];
  selectedBySort: string;
  onSortChange: (option: string) => void;
  className?: string;
}) {
  const t = useTranslations('Sort');

  return (
    <Select
      variant={variant}
      size="md"
      buttonLabel={translateKey(t, `${name}.buttonLabel`)}
      label={translateKey(t, `${name}.ariaLabel`)}
      selected={selectedBySort}
      openDirection={openDirection}
      Icon={ArrowUpDown}
      onChange={onSortChange}
      className={className}
    >
      {options.map((option) => (
        <SelectItem key={option} value={option} size="md">
          {translateKey(t, `${name}.options.${option}`)}
        </SelectItem>
      ))}
    </Select>
  );
}
