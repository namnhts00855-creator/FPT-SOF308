<template>
  <div class="container py-4">
    <h1 class="mb-4 text-center text-primary">Lab 5 - VueJS Data Binding & Class/Style Binding</h1>
    <!-- Bài 1 -->
    <div class="card mb-4 shadow">
      <div class="card-header bg-dark text-white">Bài 1: Sự kiện & Binding động</div>
      <div class="card-body">
        <p class="fs-5">{{ message }}</p>
        <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
      </div>
    </div>
    <!-- Bài 2 -->
    <div class="card mb-4 shadow">
      <div class="card-header bg-info text-white">Bài 2: Two-way Data Binding với v-model</div>
      <div class="card-body">
        <input v-model="userInput" class="form-control mb-2" placeholder="Nhập dữ liệu vào đây" />
        <p class="mb-0">Giá trị bạn nhập: <span class="fw-bold text-success">{{ userInput }}</span></p>
      </div>
    </div>
    <!-- Bài 3 -->
    <div class="card mb-4 shadow">
      <div class="card-header bg-success text-white">Bài 3: Nhập và hiển thị thông tin cá nhân</div>
      <div class="card-body row">
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label class="form-label">Họ và Tên:</label>
              <input v-model="userInfo.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
            </div>
            <div class="mb-3">
              <label class="form-label">Tuổi:</label>
              <input v-model="userInfo.age" type="number" class="form-control" placeholder="Nhập tuổi" />
            </div>
            <div class="mb-3">
              <label class="form-label">Email:</label>
              <input v-model="userInfo.email" type="email" class="form-control" placeholder="Nhập email" />
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="info-display mt-2 p-3 bg-dark text-white rounded">
            <h5>Thông tin đã nhập:</h5>
            <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
            <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
            <p><strong>Email:</strong> {{ userInfo.email }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Bài 4 -->
    <div class="card shadow">
      <div class="card-header bg-warning">Bài 4: Tạo & Hiển thị danh sách bài viết (Class/Style Binding)</div>
      <div class="card-body">
        <CreatePost @add-post="addPost" />
        <PostList :posts="posts" @update-style="updatePostStyle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

// Bài 1
const message = ref('Thông điệp ban đầu')
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!'
}

// Bài 2
const userInput = ref('FPL')

// Bài 3
const userInfo = reactive({
  name: '',
  age: null,
  email: ''
})

// Bài 4
const posts = ref([])

function addPost(post) {
  posts.value.unshift(post)
}

function updatePostStyle(index, style) {
  posts.value[index].style = style
}
</script>
