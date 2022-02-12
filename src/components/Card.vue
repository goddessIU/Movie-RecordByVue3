<template>
  <div>
    <h3>{{ props.name }}</h3>
    <el-button @click="deleteCard">删除</el-button>
  </div>
</template>

<script setup>
import { useStore } from "../stores";
const store = useStore();
const props = defineProps(['name', 'index'])
const deleteCard = () => {
  store.DELETECARD(props.index);
}
</script>

<style scoped>
</style>