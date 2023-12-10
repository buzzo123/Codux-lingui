import React, { FC, useContext, useEffect, PropsWithChildren } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

const loadCatalogs = async (): Promise<void> => {
    
    i18n.activate('en');
};

const TranslationProvider: FC<PropsWithChildren> = ({ children }) => {
  
  useEffect(() => {
    loadCatalogs();
  }, []);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

export default TranslationProvider;
