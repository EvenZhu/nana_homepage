import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: localStorage.getItem('locale') || 'en',
  // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: {//引入语言包
    'zh': require('./lang/zh'),   // 中文语言包
    'en': require('./lang/en'),    // 英文语言包
  }
})
