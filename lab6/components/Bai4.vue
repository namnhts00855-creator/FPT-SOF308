<template>
  <div class="row">
    <!-- Form Thêm/Sửa -->
    <div class="col-md-5 mb-3 mb-md-0">
      <div class="card shadow-sm border-0 rounded-4">
        <div class="card-header bg-primary text-white fw-bold rounded-top-4">
          Thêm học sinh
        </div>
        <div class="card-body bg-light rounded-bottom-4">
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label class="form-label">Họ tên:</label>
              <input v-model="student.name" type="text" class="form-control form-control-lg" placeholder="Nhập họ tên" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Điểm:</label>
              <input v-model.number="student.score" type="number" step="0.01" class="form-control form-control-lg" placeholder="Nhập điểm" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Ngày sinh:</label>
              <input v-model="student.birth" type="date" class="form-control form-control-lg" placeholder="dd/mm/yyyy" required />
            </div>
            <button class="btn btn-success w-100 py-2 fw-bold" type="submit">
              {{ editIdx === null ? 'Thêm' : 'Cập nhật' }}
            </button>
            <button v-if="editIdx !== null" class="btn btn-secondary w-100 mt-2 py-2 fw-bold" type="button" @click="resetForm">
              Hủy chỉnh sửa
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- Danh sách học sinh -->
    <div class="col-md-7">
      <div class="card shadow-sm border-0 rounded-4">
        <div class="card-header bg-warning fw-bold rounded-top-4">
          Danh sách học sinh
        </div>
        <div class="card-body bg-light rounded-bottom-4 p-0">
          <div v-if="students.length === 0" class="alert alert-secondary m-3 rounded-3">Chưa có học sinh nào.</div>
          <div v-else class="table-responsive">
            <table class="table table-bordered table-hover align-middle mb-0 rounded-3">
              <thead class="table-light">
                <tr>
                  <th>#</th>
                  <th>Họ và tên</th>
                  <th>Điểm</th>
                  <th>Ngày sinh</th>
                  <th>Xếp loại</th>
                  <th class="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sv, idx) in students" :key="idx">
                  <td>{{ idx + 1 }}</td>
                  <td>{{ sv.name }}</td>
                  <td>{{ sv.score }}</td>
                  <td>{{ sv.birth }}</td>
                  <td>
                    <span v-if="sv.score < 5" class="badge bg-danger px-3 py-2">Yếu</span>
                    <span v-else-if="sv.score < 6.5" class="badge bg-warning text-dark px-3 py-2">Trung bình</span>
                    <span v-else-if="sv.score < 8" class="badge bg-info text-dark px-3 py-2">Khá</span>
                    <span v-else-if="sv.score < 9" class="badge bg-primary px-3 py-2">Giỏi</span>
                    <span v-else class="badge bg-success px-3 py-2">Xuất sắc</span>
                  </td>
                  <td class="text-center">
                    <button class="btn btn-sm btn-warning me-2 px-3" @click="editStudent(idx)">Sửa</button>
                    <button class="btn btn-sm btn-danger px-3" @click="deleteStudent(idx)">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  resetForm()
}

function editStudent(idx) {
  student.value = { ...students.value[idx] }
  editIdx.value = idx
}

function deleteStudent(idx) {
  students.value.splice(idx, 1)
  if (editIdx.value === idx) {
    resetForm()
  }
}

function resetForm() {
  student.value = { name: '', score: null, birth: '' }
  editIdx.value = null
}
</script>

<style scoped>
.card {
  border-radius: 1.25rem !important;
}
.card-header {
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 1.25rem 1.25rem 0 0 !important;
}
.card-body {
  border-radius: 0 0 1.25rem 1.25rem !important;
}
.table th, .table td {
  vertical-align: middle;
}
.badge {
  font-size: 1rem;
  border-radius: 0.75rem;
}
input.form-control-lg {
  font-size: 1.1rem;
  padding: 0.7rem 1rem;
  border-radius: 0.75rem;
}
.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}
.btn-warning:hover {
  background-color: #e0a800;
  border-color: #d39e00;
  color: #212529;
}
.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
  color: white;
}
.btn-danger:hover {
  background-color: #bb2d3b;
  border-color: #b02a37;
  color: white;
}
</style>
</create_file>
