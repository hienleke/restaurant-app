'use client';

import { useLanguage } from '../providers/LanguageProvider';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value as 'en' | 'ko' | 'ja')}>
      <option value="en">English</option>
      <option value="ko">한국어</option>
    </select>
  );
};

export default LanguageSelector;