<template>
  <form class="row g-2 align-items-end mb-4" @submit.prevent="submitPost">
    <div class="col-md-3">
      <input v-model="title" type="text" class="form-control" placeholder="Tiêu đề" required />
    </div>
    <div class="col-md-3">
      <input v-model="author" type="text" class="form-control" placeholder="Tác giả" required />
    </div>
    <div class="col-md-4">
      <input v-model="content" type="text" class="form-control" placeholder="Nội dung" required />
    </div>
    <div class="col-md-2">
      <button class="btn btn-primary w-100" type="submit">Đăng bài</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add-post'])
const title = ref('')
const author = ref('')
const content = ref('')

function submitPost() {
  emit('add-post', {
    title: title.value,
    author: author.value,
    content: content.value,
    style: { color: '#212529', backgroundColor: '#fff', fontWeight: 'normal' }
  })
  title.value = ''
  author.value = ''
  content.value = ''
}
</script>
