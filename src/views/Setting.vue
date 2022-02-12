<template>
    <el-form ref="formRef" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option selected="selected" label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">修改信息</el-button>
        </el-form-item>
    </el-form>
</template>


<script setup>
import storage from '../utils/localStorage';
import sessionStorage from '../utils/sessionStorage.js';
import { nextTick, reactive } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const form = reactive({
    name: "",
    sex: "male",
})
const onSubmit = () => {
    changeInformation(form);
    router.push({ name: 'total' })
    
}
const changeInformation = ({ name, sex }) => {
    storage.addItem(sessionStorage.getItem(), { name, sex })
}
</script>