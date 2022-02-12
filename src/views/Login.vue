<template>
    <el-row>
        <el-col :push="8" :span="8" class="midHeight">
            <el-form
                :model="numberValidateForm"
                ref="ruleFormRef"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item
                    label="账号"
                    prop="account"
                >
                    <el-input
                        type="account"
                        v-model.number="numberValidateForm.account"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input
                        type="password"
                        v-model.number="numberValidateForm.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
                    <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <Dialog ref="dialog" />
    </el-row>
</template>

<!-- <script setup>

export default {
  mounted() {
    this.$emit('change-choose');
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        let res = storage.getItem(this.numberValidateForm.account);
        if (valid && res && res.password === JSON.stringify(this.numberValidateForm.password)) {
          sessionStorage.clearAll();
          sessionStorage.setItem(this.numberValidateForm.account);
          this.$refs.dialog.openDialog();
        } else {
          return false;
        }
      });
    },
  },
};
</script> -->
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { ElForm } from 'element-plus'
import Dialog from '../components/Dialog.vue';
import storage from '../utils/localStorage';
import sessionStorage from '../utils/sessionStorage';
import { getCurrentInstance } from '@vue/runtime-core';

const currentInstance = getCurrentInstance();

type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()

const numberValidateForm = reactive({
    account: "",
    password: "",
})

const dialog = ref(null);
const emit = defineEmits(['change-choose'])

onMounted(() => {
    emit('change-choose')
})

// const rules = reactive({
//   account: [{ validator: validatePass, trigger: 'blur' }],
//   password: [{ validator: validatePass2, trigger: 'blur' }]
// })

const submitForm = (formEl: FormInstance | undefined) => {
    
    if (!formEl) return
    formEl.validate((valid) => {
        let res = storage.getItem(numberValidateForm.account);
        if (valid && res && res.password === JSON.stringify(numberValidateForm.password)) {
            sessionStorage.clearAll();
            sessionStorage.setItem(numberValidateForm.account);
            // alert('success')
            dialog.value.openDialog()
            // currentInstance.ctx.$refs.dialog.openDialog();
        } else {
            return false;
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"] {
    -moz-appearance: textfield;
}
</style>