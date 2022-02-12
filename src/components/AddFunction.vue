<template>
  <el-row>
    <el-button type="text" @click="dialogFormVisible = true"
      >增加卡片</el-button
    >

    <el-dialog title="卡片内容" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.introduction" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCard"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        introduction: ""
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    addCard() {
      this.dialogFormVisible = false;
      this.$store.commit('ADDCARD', this.form);
    }
  }
};
</script>

<style>
</style>