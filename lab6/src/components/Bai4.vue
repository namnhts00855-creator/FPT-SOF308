<template>
  <form class="row g-2 align-items-end mb-4" @submit.prevent="onSubmit">
    <div class="col-md-4">
      <input v-model="student.name" type="text" class="form-control" placeholder="Họ tên" required />
    </div>
    <div class="col-md-3">
      <input v-model.number="student.score" type="number" step="0.01" class="form-control" placeholder="Điểm" required />
    </div>
    <div class="col-md-3">
      <input v-model="student.birth" type="date" class="form-control" required />
    </div>
    <div class="col-md-2">
      <button class="btn btn-primary w-100" type="submit">{{ editIdx === null ? 'Thêm' : 'Cập nhật' }}</button>
    </div>
  </form>
  <div v-if="students.length === 0" class="alert alert-secondary">Chưa có học sinh nào.</div>
  <table v-else class="table table-bordered table-striped align-middle">
    <thead class="table-dark">
      <tr>
        <th>#</th>
        <th>Họ tên</th>
        <th>Điểm</th>
        <th>Ngày sinh</th>
        <th>Xếp loại</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(sv, idx) in students" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ sv.name }}</td>
        <td>{{ sv.score }}</td>
        <td>{{ sv.birth }}</td>
        <td>
          <span v-if="sv.score < 5" class="badge bg-danger">Yếu</span>
          <span v-else-if="sv.score < 6.5" class="badge bg-warning text-dark">Trung bình</span>
          <span v-else-if="sv.score < 8" class="badge bg-info text-dark">Khá</span>
          <span v-else-if="sv.score < 9" class="badge bg-primary">Giỏi</span>
          <span v-else class="badge bg-success">Xuất sắc</span>
        </td>
        <td>
          <button class="btn btn-sm btn-outline-info me-2" @click="editStudent(idx)">Sửa</button>
          <button class="btn btn-sm btn-outline-danger" @click="deleteStudent(idx)">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue'

const students = ref([])
const student = ref({ name: '', score: null, birth: '' })
const editIdx = ref(null)

function onSubmit() {
  if (editIdx.value === null) {
    students.value.push({ ...student.value })
  } else {
    students.value[editIdx.value] = { ...student.value }
    editIdx.value = null
  }
  student.value = { name: '', score: null, birth: '' }
}

function editStudent(idx) {
  student.value = { ...students.value[idx] }
  editIdx.value = idx
}

function deleteStudent(idx) {
  students.value.splice(idx, 1)
  if (editIdx.value === idx) {
    student.value = { name: '', score: null, birth: '' }
    editIdx.value = null
  }
}
</script>
