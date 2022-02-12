<template>
  <el-dialog title="提示" v-model="dialogVisible" width="30%" :before-close="handleClose">
    <span>登录成功</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const openDialog = () => {
  dialogVisible.value = true;
}
defineExpose({
  openDialog
})
const router = useRouter();

const dialogVisible = ref(false)



const handleClose = (done: () => void) => {
  dialogVisible.value = false;
  router.push({ name: "user" });
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>