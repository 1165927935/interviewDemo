// i18n.js
import { createI18n } from 'vue-i18n';
import zhCn from './zh-Cn';
import en from './en';
import fr from './fr';

const messages = {
  'zh-Cn': zhCn,
  en,
  fr,
};
let language = localStorage.getItem("language") || navigator.language; //  获取本地存储 || 根据浏览器语言设置

const i18n = createI18n({
  locale: language, // set default locale
  fallbackLocale: 'zh-CN',
  messages, // set locale messages
  globalInjection: true, 
});
 
export default i18n;