<template>
  <el-row class="all">
    <el-col :span="8">
      <add-function class="add"></add-function>
    </el-col>
    <el-col :span="6">
      <span>{{ name }}您好，欢迎使用</span>
      <el-button @click="out">退出登录</el-button>
    </el-col>
  </el-row>
</template>

<script setup>
import storage from "../utils/localStorage";
import sessionStorage from "../utils/sessionStorage";
import { useRouter } from 'vue-router';
import AddFunction from './AddFunction.vue';
import { computed, watch } from "vue";
const router = useRouter();
const out = () => {
  sessionStorage.clearAll();
  router.push({ name: "login" });
}
const name = computed(() => {
  return (
    storage.getItem(JSON.stringify(sessionStorage.getItem())).name ||
    sessionStorage.getItem()
  );
})
watch(name, () => {
})
</script>

<style scoped>
</style>