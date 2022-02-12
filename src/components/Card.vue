<template>
  <div>
      <h3>{{name}}</h3>
      <span>{{introduction}}</span>
      <el-button @click="deleteCard">删除</el-button>
  </div>
</template>

<script>
export default {
  props: ["name", "index"],
  methods: {   
      deleteCard() {
          this.$store.commit('DELETECARD', this.index);
      }
  }
};
</script>

<style scoped>
</style>