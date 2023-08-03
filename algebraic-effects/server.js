const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  const url = req.url
  console.log('url', url)
  if (url === '/index.html') {
    // 如果请求根路径，返回 index.html 文件
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error loading')
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
      }
    })
  } else {
    res.write(url)
    res.end()
  } 
}).listen(3000)

console.log('Server listening on port 3000')
