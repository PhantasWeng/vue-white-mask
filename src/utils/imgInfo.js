export default {
  size: function (url) {
    return new Promise(function (resolve, reject) {
      if (url) {
        let img = new Image()
        img.onload = function () {
          resolve({
            width: this.width,
            height: this.height
          })
        }
        img.src = url
      }
    })
  }
}
