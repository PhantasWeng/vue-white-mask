import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess (msg) {
  Vue.prototype.$message({
    message: msg,
    type: 'success',
    duration: 1500
  })
}

function clipboardError (msg) {
  Vue.prototype.$message({
    message: msg,
    type: 'error'
  })
}

export default function handleClipboard (text, event, msg) {
  const defaultMsg = {
    success: '複製成功',
    error: '複製失敗'
  }
  const message = {
    ...defaultMsg,
    ...msg
  }
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess(message.success)
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError(message.error)
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
