const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

let users = []
let posts = []

// Đăng ký
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'Email đã tồn tại' })
    }
    const user = { id: Date.now(), name, email, password }
    users.push(user)
    res.json(user)
})

// Đăng nhập
app.post('/api/login', (req, res) => {
    const { email, password } = req.body
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) return res.status(401).json({ message: 'Sai thông tin đăng nhập' })
    res.json(user)
})

// Lấy danh sách bài viết
app.get('/api/posts', (req, res) => {
    res.json(posts)
})

// Thêm bài viết
app.post('/api/posts', (req, res) => {
    const { title, content, authorName } = req.body
    const post = { id: Date.now(), title, content, authorName }
    posts.push(post)
    res.json(post)
})

app.listen(PORT, () => console.log(`API server running at http://localhost:${PORT}`))
