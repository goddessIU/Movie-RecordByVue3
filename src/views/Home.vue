<template>
    <div class="total" id="total">
        <el-row>
            <el-col :span="4" :offset="10">
                <a @click="toLogin" :class="{ bgc: choose === 0 }">登录</a>
            </el-col>
            <el-col :span="4">
                <a @click="toRegister" :class="{ bgc: choose === 1 }">注册</a>
            </el-col>
        </el-row>
        <router-view @change-choose="changeChoose" @change-choose2="changeChoose2"></router-view>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const choose = ref(0);
const toLogin = () => {
    choose.value = 0;
    router.push({ name: "login" });
}
const toRegister = () => {
    choose.value = 1;
    router.push({ name: "register" });
}
const changeChoose = () => {
    choose.value = 0;
}
const changeChoose2 = () => {
    choose.value = 1;
}
</script>

<style lang="less" scoped>
a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
}
.bgc {
    color: rgb(98, 167, 194);
    border-top: 3px solid skyblue;
}
#total {
    height: 100vh;
    width: 100%;
    background-image: url(../assets/images/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding-top: 10%;
    min-width: 800px;
    div {
        a {
            color: #fff;
            font-size: 20px;
        }
        .bgc {
            color: rgb(98, 167, 194);
            border-top: 3px solid skyblue;
        }
    }
}
</style>