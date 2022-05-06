import React, { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import i18n from "../service/i18n";

const LangContext = createContext(null);

const LangProvider = ({children}) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    handleLang()
  }, []);

  const handleLang = async () => {
    let lang = await getLocalLang();
    console.log('lang in context ', lang)
    lang ? setLocalLang(lang) : setLocalLang('en');
  }

  const getLocalLang = async () => {
    let result = await SecureStore.getItemAsync('lang');
    return result;
  };
  const setLocalLang = async (lang) => {
    await SecureStore.setItemAsync('lang', lang);
    i18n.changeLanguage(lang);
    setLang(lang)
  };

  return (
    <LangContext.Provider 
    value={{lang, getLocalLang, setLocalLang}}>
      {children}
    </LangContext.Provider>
  )
}

export {LangContext, LangProvider};