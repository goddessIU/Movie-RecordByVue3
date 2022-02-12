<template>
  <el-row class="all">
      <el-col :span="8">
          <add-function class="add"/>
      </el-col>
      <el-col :span='6'>
          <span>{{ name }}您好，欢迎使用</span>
    <el-button @click="out">退出登录</el-button>
      </el-col>
      
  </el-row>
    
</template>

<script>
import storage from "../utils/localStorage";
import sessionStorage from "../utils/sessionStorage";
import AddFunction from './AddFunction.vue';
export default {
  components: { AddFunction },
  methods: {
    out() {
      sessionStorage.clearAll();
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    name() {
      return (
        storage.getItem(JSON.stringify(sessionStorage.getItem())).name ||
        sessionStorage.getItem()
      );
    },
  },
};
</script>

<style scoped>
</style>