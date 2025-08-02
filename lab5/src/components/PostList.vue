<template>
  <div class="mt-4">
    <h3>Danh sách bài viết</h3>
    <div v-if="posts.length === 0" class="alert alert-secondary">Chưa có bài viết nào.</div>
    <div v-for="(post, idx) in posts" :key="idx" class="card mb-3 shadow"
         :style="{ backgroundColor: post.style.backgroundColor, color: post.style.color, fontWeight: post.style.fontWeight }">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Tác giả: {{ post.author }}</h6>
        <p class="card-text">{{ post.content }}</p>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-primary" @click="setStyle(idx, 'blue', 'white', 'bold')">Xanh đậm</button>
          <button class="btn btn-sm btn-outline-success" @click="setStyle(idx, 'green', 'white', 'normal')">Xanh lá</button>
          <button class="btn btn-sm btn-outline-dark" @click="setStyle(idx, '#212529', '#fff', 'normal')">Mặc định</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['posts'])
const emit = defineEmits(['update-style'])

function setStyle(idx, color, bg, weight) {
  emit('update-style', idx, { color, backgroundColor: bg, fontWeight: weight })
}
</script>
