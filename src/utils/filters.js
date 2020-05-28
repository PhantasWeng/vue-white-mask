import Vue from 'vue'
import _ from 'lodash'
import numeral from 'numeral'
import dayjs from 'dayjs'
import store from '@/store'
import i18n from '@/i18n'
import getSymbolFromCurrency from 'currency-symbol-map'
import * as currencyConvert from '@/utils/currencyConvert'

Vue.filter('i18n', function (key) {
  return i18n.t(key)
})

Vue.filter('toCurrency', function (price, format = '0,0[.]00') {
  return numeral(price).format(format)
})

Vue.filter('toDate', function (date, format = 'YYYY/MM/DD', lang = _.kebabCase(store.getters['user/selectedLang'])) {
  return dayjs(date).locale(lang).format(format)
})

Vue.filter('currencySign', function (currency = store.getters['user/selectedCurrency']) {
  if (currency === 'USD') {
    return 'USD' + getSymbolFromCurrency(currency)
  }
  return getSymbolFromCurrency(currency)
})

Vue.filter('currencyConvert', function (value, options) {
  if (_.isNumber(value)) {
    return numeral(currencyConvert.convert(value, options)).format('0,0[.]00')
  } else {
    console.error('!!! [Filter] currencyConvert:', value, 'IS NOT NUMERIC.')
    return value
  }
})
