<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Blog App</router-link>
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Trang chủ</router-link>
        <router-link class="nav-link" to="/post-editor">Đăng bài</router-link>
        <router-link class="nav-link" to="/profile">Thông tin cá nhân</router-link>
        <router-link class="nav-link" to="/login">Đăng nhập</router-link>
      </div>
    </div>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import { ref } from 'vue'

const user = ref(JSON.parse(localStorage.getItem('user')))

function login(userData) {
  user.value = userData
  localStorage.setItem('user', JSON.stringify(userData))
}
function logout() {
  user.value = null
  localStorage.removeItem('user')
}
function register(userData) {
  user.value = userData
  localStorage.setItem('user', JSON.stringify(userData))
}
function updateUser(newUser) {
  user.value = newUser
  localStorage.setItem('user', JSON.stringify(newUser))
}
</script>

