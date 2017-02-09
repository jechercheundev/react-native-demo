import I18n from 'react-native-i18n';
import combineTranslations from './lib.js';
import en from './en/en.js';
import fr from './fr/fr.js';

I18n.fallbacks = true;

I18n.translations = combineTranslations(
  en,
  fr
);


export default I18n;
