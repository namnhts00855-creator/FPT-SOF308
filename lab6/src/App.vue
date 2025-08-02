<template>
  <div class="main-bg min-vh-100 py-5">
    <div class="container">
      <div class="header text-center mb-5">
        <img src="https://caodang.fpt.edu.vn/wp-content/uploads/logo-3.png" alt="FPT Polytechnic" class="logo" />
        <h2 class="title">LAB 6</h2>
        <h4 class="subtitle">Kiến thức sức khỏe cộng đồng</h4>
      </div>
      <!-- Bài 1 -->
      <div class="card mb-5 shadow-lg rounded-5 border-0">
        <div class="card-header bg-gradient-dark text-white fs-5 rounded-top-5">Bài 1: Xếp loại học sinh theo ĐTB</div>
        <div class="card-body bg-white rounded-bottom-5">
          <div class="row align-items-center">
            <div class="col-md-6 mb-3 mb-md-0">
              <input v-model.number="dtb" type="number" step="0.01" class="form-control form-control-lg input-glass" placeholder="Nhập điểm trung bình" />
            </div>
            <div class="col-md-6">
              <div v-if="dtb !== null && dtb !== ''" class="classification-badge">
                <span
                  class="badge fs-5 px-4 py-2 shadow-sm"
                  :class="{
                    'bg-danger': dtb < 5,
                    'bg-warning text-dark': dtb >= 5 && dtb < 6.5,
                    'bg-info text-dark': dtb >= 6.5 && dtb < 8,
                    'bg-primary': dtb >= 8 && dtb < 9,
                    'bg-success': dtb >= 9
                  }"
                >
                  Xếp loại:
                  <span v-if="dtb < 5">Yếu</span>
                  <span v-else-if="dtb < 6.5">Trung bình</span>
                  <span v-else-if="dtb < 8">Khá</span>
                  <span v-else-if="dtb < 9">Giỏi</span>
                  <span v-else>Xuất sắc</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Bài 2 -->
      <div class="card mb-5 shadow-lg rounded-5 border-0">
        <div class="card-header bg-gradient-info text-white fs-5 rounded-top-5">Bài 2: Nhập tháng và xác định mùa</div>
        <div class="card-body bg-white rounded-bottom-5 row align-items-center">
          <div class="col-md-6 mb-3 mb-md-0">
            <input v-model.number="month" type="number" min="1" max="12" class="form-control form-control-lg input-glass" placeholder="Nhập tháng (1-12)" />
          </div>
          <div class="col-md-6">
            <div v-if="month !== null && month !== ''" class="season-text fs-5 fw-semibold">
              <span v-if="month < 1 || month > 12" class="text-danger">Vui lòng nhập tháng từ 1 đến 12!</span>
              <span v-else-if="[3,4,5].includes(month)" class="text-success">🌸 Mùa Xuân</span>
              <span v-else-if="[6,7,8].includes(month)" class="text-success">🌞 Mùa Hạ</span>
              <span v-else-if="[9,10,11].includes(month)" class="text-success">🍂 Mùa Thu</span>
              <span v-else class="text-success">❄️ Mùa Đông</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Bài 3 -->
      <div class="card mb-5 shadow-lg rounded-5 border-0">
        <div class="card-header bg-gradient-success text-white fs-5 rounded-top-5">Bài 3: Danh sách bài viết (v-for)</div>
        <div class="card-body bg-white rounded-bottom-5">
          <div class="row g-4">
            <div v-for="(post, idx) in posts" :key="idx" class="col-md-4">
              <div class="card h-100 shadow-sm border-0 rounded-5 post-card hover-glow">
                <img :src="post.img" class="card-img-top rounded-top-5" style="height:180px;object-fit:cover;" />
                <div class="card-body">
                  <h5 class="card-title fw-bold text-primary">{{ post.title }}</h5>
                  <p class="card-text text-secondary">{{ post.desc }}</p>
                  <a href="#" class="btn btn-outline-info btn-sm btn-glass">Xem chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Bài 4 -->
      <div class="card shadow-lg rounded-5 border-0">
        <div class="card-header bg-gradient-warning fs-5 rounded-top-5">Bài 4: CRUD Quản lý học sinh</div>
        <div class="card-body bg-white rounded-bottom-5">
          <Bai4 />
        </div>
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
    img: 'https://cdn.tgdd.vn/Files/2021/07/22/1370067/8-loai-rau-cu-qua-giau-canxi-cho-nguoi-an-chay-202107221553573983.jpg',
    title: '8 loại rau củ quả giàu canxi',
    desc: 'Canxi là khoáng chất cần thiết đối với cơ thể người, có nhiều chất để bổ sung canxi, trong đó rau xanh cũng là nguồn cung cấp tốt nhất. Cùng tìm hiểu 8 loại rau giàu canxi...'
  },
  {
    img: 'https://cdn.tgdd.vn/Files/2021/07/22/1370067/cac-loai-gia-vi-tot-cho-suc-khoe-202107221553573983.jpg',
    title: 'Các loại gia vị tốt cho sức khỏe',
    desc: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa hoặc các loại dầu và vi chất dinh dưỡng khác. Việc sử dụng các món ăn có thêm hương thơm và vị hấp dẫn...'
  },
  {
    img: 'https://cdn.tgdd.vn/Files/2021/07/22/1370067/9-loai-dau-bo-duong-nen-dung-nhieu-202107221553573983.jpg',
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    desc: 'Đậu lăng, đậu xanh, đậu phộng, đậu Hà Lan giúp chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...'
  }
])
</script>

<style scoped>
body, html {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #e0f7fa 0%, #80deea 100%);
  color: #333;
}
.main-bg {
  background: linear-gradient(135deg, #e0f7fa 0%, #80deea 100%);
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.header {
  margin-bottom: 3rem;
}
.logo {
  height: 56px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
}
.title {
  color: #ffca28;
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}
.subtitle {
  color: #0277bd;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
}
.card {
  border-radius: 1.5rem !important;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
}
.card-header {
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 1.5rem 1.5rem 0 0 !important;
  background-image: linear-gradient(45deg, #2196f3, #21cbf3);
  color: white !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.card-header.bg-gradient-dark {
  background-image: linear-gradient(45deg, #0d47a1, #1976d2);
}
.card-header.bg-gradient-info {
  background-image: linear-gradient(45deg, #0288d1, #03a9f4);
}
.card-header.bg-gradient-success {
  background-image: linear-gradient(45deg, #2e7d32, #4caf50);
}
.card-header.bg-gradient-warning {
  background-image: linear-gradient(45deg, #f9a825, #fbc02d);
  color: #4a4a4a !important;
}
.input-glass {
  background: rgba(255, 255, 255, 0.85);
  border: none;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.6);
  border-radius: 1rem;
  padding: 0.75rem 1.25rem;
  font-size: 1.2rem;
  transition: box-shadow 0.3s ease;
}
.input-glass:focus {
  outline: none;
  box-shadow: 0 0 12px #2196f3;
}
.classification-badge .badge {
  font-size: 1.2rem;
  padding: 0.6rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.season-text {
  font-weight: 700;
}
.post-card {
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}
.post-card:hover {
  box-shadow: 0 12px 30px rgba(33, 203, 243, 0.6);
}
.btn-glass {
  border-radius: 1.5rem;
  border: 1.5px solid #21cbf3;
  color: #21cbf3;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.btn-glass:hover {
  background-color: #21cbf3;
  color: white;
}
</style>
