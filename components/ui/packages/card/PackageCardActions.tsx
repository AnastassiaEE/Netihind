import { PackageAction } from '@/types/packages.types';
import { Button } from '@/components/ui/buttons/Button';
import { useTranslations } from 'next-intl';

export default function PackageCardActions({
  onActionClick,
  className,
}: {
  onActionClick: (action: PackageAction) => void;
  className?: string;
}) {
  const t = useTranslations('Packages.buttons');

  return (
    <div className={className}>
      <Button
        size="lg"
        className="order-2 w-full rounded-t-none rounded-b-md sm:order-1 sm:flex-1 sm:rounded-b-none sm:rounded-br-none sm:rounded-bl-md"
        onClick={() => onActionClick('connection')}
      >
        {t('connect')}
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="order-1 w-full rounded-t-none rounded-b-none sm:order-2 sm:flex-1 sm:rounded-b-md sm:rounded-br-md sm:rounded-bl-none"
        onClick={() => onActionClick('details')}
      >
        {t('details')}
      </Button>
    </div>
  );
}
