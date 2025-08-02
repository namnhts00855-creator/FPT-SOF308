<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label>Name</label>
          <input v-model="name" type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" required>
        </div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <button class="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

function handleRegister() {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  if (users.find(u => u.email === email.value)) {
    error.value = 'Email đã tồn tại'
    return
  }
  const newUser = { name: name.value, email: email.value, password: password.value }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('currentUser', JSON.stringify(newUser))
  window.location = '/'
}
</script>
