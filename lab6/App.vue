<template>
  <div class="container py-4">
    <h1 class="mb-4 text-center text-primary">Lab 6 - Conditional & List Rendering</h1>
    <!-- Bài 1 -->
    <div class="card mb-4 shadow">
      <div class="card-header bg-dark text-white">Bài 1: Xếp loại học sinh theo ĐTB</div>
      <div class="card-body">
        <input v-model.number="dtb" type="number" step="0.01" class="form-control mb-2" placeholder="Nhập điểm trung bình" />
        <div v-if="dtb !== null && dtb !== ''">
          <span class="badge bg-secondary fs-5">Xếp loại: 
            <span v-if="dtb < 5">Yếu</span>
            <span v-else-if="dtb < 6.5">Trung bình</span>
            <span v-else-if="dtb < 8">Khá</span>
            <span v-else-if="dtb < 9">Giỏi</span>
            <span v-else>Xuất sắc</span>
          </span>
        </div>
      </div>
    </div>
    <!-- Bài 2 -->
    <div class="card mb-4 shadow">
      <div class="card-header bg-info text-white">Bài 2: Nhập tháng và xác định mùa</div>
      <div class="card-body">
        <input v-model.number="month" type="number" min="1" max="12" class="form-control mb-2" placeholder="Nhập tháng (1-12)" />
        <div v-if="month !== null && month !== ''">
          <span v-if="month < 1 || month > 12" class="text-danger">Vui lòng nhập tháng từ 1 đến 12!</span>
          <span v-else-if="[3,4,5].includes(month)" class="text-success">Mùa Xuân</span>
          <span v-else-if="[6,7,8].includes(month)" class="text-success">Mùa Hạ</span>
          <span v-else-if="[9,10,11].includes(month)" class="text-success">Mùa Thu</span>
          <span v-else class="text-success">Mùa Đông</span>
        </div>
      </div>
    </div>
    <!-- Bài 3 -->
    <div class="card mb-4 shadow">
      <div class="card-header bg-success text-white">Bài 3: Danh sách bài viết (v-for)</div>
      <div class="card-body row">
        <div v-for="(post, idx) in posts" :key="idx" class="col-md-4 mb-3">
          <div class="card h-100 shadow-sm">
            <img :src="post.img" class="card-img-top" style="height:180px;object-fit:cover;">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bài 4 -->
    <div class="card shadow">
      <div class="card-header bg-warning">Bài 4: CRUD Quản lý học sinh</div>
      <div class="card-body">
        <Bai4 />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Bai4 from './components/Bai4.vue'

// Bài 1
const dtb = ref(null)

// Bài 2
const month = ref(null)

// Bài 3
const posts = ref([
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Bài viết 1',
    desc: 'Đây là nội dung mô tả cho bài viết số 1.'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Bài viết 2',
    desc: 'Đây là nội dung mô tả cho bài viết số 2.'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Bài viết 3',
    desc: 'Đây là nội dung mô tả cho bài viết số 3.'
  }
])
</script>
