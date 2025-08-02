<template>
  <div class="container mt-5">
    <!-- Section ảnh đầu trang -->
    <div class="text-center mb-5">
      <h1 class="text-primary fw-bold">Welcome to the Travel Blog</h1>
      <p class="text-muted">Click “Edit Text” or double click me to add your own content and change fonts.</p>
    </div>

    <!-- Travel - Eat - Relax Cards -->
    <div class="row text-center mb-5">
      <div class="col-md-4 mb-3">
        <div class="position-relative">
          <img src="https://i.imgur.com/7kYzFUS.jpg" class="img-fluid rounded" alt="Travel">
          <button class="btn btn-outline-primary position-absolute top-50 start-50 translate-middle">Travel</button>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="position-relative">
          <img src="https://i.imgur.com/keKyzMG.jpg" class="img-fluid rounded" alt="Eat">
          <button class="btn btn-outline-primary position-absolute top-50 start-50 translate-middle">Eat</button>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="position-relative">
          <img src="https://i.imgur.com/Cj8a1MX.jpg" class="img-fluid rounded" alt="Relax">
          <button class="btn btn-outline-primary position-absolute top-50 start-50 translate-middle">Relax</button>
        </div>
      </div>
    </div>

    <!-- Nút điều hướng -->
    <div class="text-center mb-4">
      <router-link class="btn btn-success me-2" to="/login">Đăng nhập</router-link>
      <router-link class="btn btn-primary me-2" to="/post-editor">Đăng bài viết mới</router-link>
      <router-link class="btn btn-info" to="/profile">Thông tin cá nhân</router-link>
    </div>

    <!-- Danh sách bài viết -->
    <div v-if="posts.length === 0" class="alert alert-info text-center">Chưa có bài viết nào.</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="card mb-4 shadow-sm">
        <img v-if="post.image" :src="post.image" class="card-img-top" style="max-height: 400px; object-fit: cover;" />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.content }}</p>
          <p class="text-muted mb-1"><small>Tác giả: {{ post.authorName }}</small></p>
          <button class="btn btn-outline-secondary btn-sm" @click="goToDetail(post.id)">Xem chi tiết</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const posts = ref([])
const router = useRouter()

function loadPosts() {
  posts.value = JSON.parse(localStorage.getItem('posts') || '[]').reverse()
}

function goToDetail(id) {
  router.push(`/post/${id}`)
}

onMounted(() => {
  loadPosts()
})
</script>

<style scoped>
.card-title {
  font-weight: bold;
}
</style>
