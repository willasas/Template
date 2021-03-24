## 图片压缩方案

#### 图片上传压缩方案

- 当quality在0.2~0.5之间，图片质量变化并不大，quality的值越小，压缩效率越可观（也就是在0.2左右时，压缩图片可以最大化，同时并不对图片质量造成太大影响）

```html
<body>
<input id="fileInput" type="file" />
<img id="img" src="" alt="">
</body>
<script>
/**
 * 压缩方法 
 * @param {string} file 文件
 * @param {Number} quality  0~1之间
*/
function compressImg(file, quality) {
  if (file[0]) {
    return Promise.all(Array.from(file).map(e => compressImg(e,
      quality))) // 如果是 file 数组返回 Promise 数组
  } else {
    return new Promise((resolve) => {
      const reader = new FileReader() // 创建 FileReader
      reader.onload = ({
        target: {
          result: src
        }
      }) => {
        const image = new Image() // 创建 img 元素
        image.onload = async () => {
          const canvas = document.createElement('canvas') // 创建 canvas 元素
          canvas.width = image.width
          canvas.height = image.height
          canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height) // 绘制 canvas
          const canvasURL = canvas.toDataURL('image/jpeg', quality)
          const buffer = atob(canvasURL.split(',')[1])
          let length = buffer.length
          const bufferArray = new Uint8Array(new ArrayBuffer(length))
          while (length--) {
            bufferArray[length] = buffer.charCodeAt(length)
          }
          const miniFile = new File([bufferArray], file.name, {
            type: 'image/jpeg'
          })
          resolve({
            file: miniFile,
            origin: file,
            beforeSrc: src,
            afterSrc: canvasURL,
            beforeKB: Number((file.size / 1024).toFixed(2)),
            afterKB: Number((miniFile.size / 1024).toFixed(2))
          })
        }
        image.src = src
      }
      reader.readAsDataURL(file)
    })
  }
}

</script>
```
