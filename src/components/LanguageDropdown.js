import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language || 'en');

    //   const languages = [
    // { code: 'en', label: 'EN', flag: '🇬🇧' },
    // { code: 'uk', label: 'UK', flag: '🇺k' },
    // { code: 'ru', label: 'RU', flag: '🇷🇺' },
    // ];
    
  const languages = [
    { code: 'en', label: 'EN'},
    { code: 'ua', label: 'UA'},
    { code: 'ru', label: 'RU'},
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div className="lang-dropdown">
      <button className="lang-dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
        {languages.find(l => l.code === lang)?.flag} {lang.toUpperCase()} &#9660;
      </button>
      {isOpen && (
        <ul className="lang-dropdown__menu">
          {languages.map(({ code, label, flag }) => (
            <li key={code} onClick={() => changeLanguage(code)}>
              {flag} {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
