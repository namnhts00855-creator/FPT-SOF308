<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" required>
        </div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
  error.value = ''
  try {
    const res = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })
    if (!res.ok) {
      const data = await res.json()
      error.value = data.message || 'Đăng nhập thất bại'
      return
    }
    const user = await res.json()
    localStorage.setItem('currentUser', JSON.stringify(user)) // hoặc dùng Vuex/pinia
    window.location = '/'
  } catch (e) {
    error.value = 'Lỗi kết nối server'
  }
}
</script>
