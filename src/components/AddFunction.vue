<template>
  <el-row>
     <!-- @click="dialogFormVisible = true"  -->
    <el-button type="text" @click="dialogVisible = true">增加卡片</el-button>

    <el-dialog title="卡片内容" v-model="dialogVisible">
      <el-form :model="form" ref="formRef" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.introduction" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addCard">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </el-row>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useStore } from '../stores';
const dialogVisible = ref(false)
const store = useStore()
const form = reactive({
  name: "",
  introduction: ""
})
const addCard = () => {
  dialogVisible.value = false;
  const {name} = form;
  form.name = '';
  form.introduction = '';
  store.ADDCARD({name});
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>