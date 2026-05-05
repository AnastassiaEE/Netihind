'use client';

import CookiesButton from '@/components/ui/cookies/CookiesButton';
import Dialogue from '@/components/ui/overlay/Dialog';
import {
  Tabs,
  TabsList,
  Tab,
  TabPanel,
} from '@/components/ui/tabs/TabsPrimitive';
import { useTranslations } from 'next-intl';
import CookiesIntroSection from '@/components/ui/cookies/sections/CookiesIntroSection';
import CookiesPreferencesSection from '@/components/ui/cookies/sections/CookiesPreferencesSection';
import CookiesActions from '@/components/ui/cookies/CookiesActions';
import CookiesInfoSection from '@/components/ui/cookies/sections/CookiesInfoSection';
import useCookiesModal from '@/hooks/useCookiesModal';

export default function CookiesModal() {
  const b = useTranslations('Buttons.cookies');
  const c = useTranslations('Cookies');
  const tabs = [c('tabs.consent'), c('tabs.details'), c('tabs.info')];

  const {
    openCookiesModal,
    isCookiesModalMounted,
    isCookiesModalVisible,
    cookiesModalRef,
    preferences,
    togglePreference,
    managePreferences,
  } = useCookiesModal();

  return (
    <>
      <CookiesButton label={b('open')} handleClick={openCookiesModal} />
      <Dialogue
        type="modal"
        name="cookies"
        title={c('title')}
        isMounted={isCookiesModalMounted}
        isVisible={isCookiesModalVisible}
        dialogRef={cookiesModalRef}
        className="flex flex-col overflow-hidden bg-white"
      >
        <Tabs defaultValue="cookies-tab-1">
          <TabsList>
            <Tab value="cookies-tab-1">{tabs[0]}</Tab>
            <Tab value="cookies-tab-2">{tabs[1]}</Tab>
            <Tab value="cookies-tab-3">{tabs[2]}</Tab>
          </TabsList>
          <TabPanel
            value="cookies-tab-1"
            className="h-auto space-y-3 overflow-y-auto"
          >
            <CookiesIntroSection />
          </TabPanel>
          <TabPanel value="cookies-tab-2" className="h-auto overflow-y-auto">
            <CookiesPreferencesSection
              preferences={preferences}
              togglePreference={togglePreference}
            />
          </TabPanel>
          <TabPanel
            value="cookies-tab-3"
            className="h-auto space-y-3 overflow-y-auto"
          >
            <CookiesInfoSection />
          </TabPanel>
        </Tabs>
        <CookiesActions
          managePreferences={managePreferences}
          className="mt-3"
        />
      </Dialogue>
    </>
  );
}
