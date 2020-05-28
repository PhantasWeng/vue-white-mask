import store from '@/store'
import _ from 'lodash'
import numeral from 'numeral'

export const convert = function (price, options = {}) {
  const defaultConfig = {
    needInteger: false,
    listInteger: false,
    isCeil: false,
    isRound: false,
    inputCurrency: store.getters['hotels/hotel'].currency,
    outputCurrency: store.getters['user/selectedCurrency']
  }
  const config = {
    ...defaultConfig,
    ...options
  }
  let { needInteger, listInteger, isCeil, isRound, inputCurrency, outputCurrency } = config
  const currencyExist = store.getters.currencyExist
  // const currencySelectable = store.getters.currencySelectable

  if (!_.isEmpty(currencyExist) && inputCurrency) {
    const selected = _.find(currencyExist, currency => {
      return currency.code === inputCurrency
    })
    const target = _.find(currencyExist, currency => {
      return currency.code === outputCurrency
    })

    const selectedRate = selected.rate
    const targetRate = target.buy_rate
    // const isInteger = target.integer
    const isInteger = [
      'TWD',
      'JPY',
      'THB'
    ]
    let result = price * selectedRate / targetRate
    let format = '0,0[.]00'
    if (needInteger || (listInteger && isInteger.includes(outputCurrency))) {
      format = '0,0'
    }
    if (isCeil) {
      result = Math.ceil(result)
    }
    if (isRound) {
      result = Math.round(result)
    }
    if (inputCurrency !== outputCurrency) {
      return numeral(result).format(format)
    } else {
      return numeral((price * 100) / 100).format(format)
    }
  } else {
    return price
  }
}
