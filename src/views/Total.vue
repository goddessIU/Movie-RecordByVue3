<template>
    <el-row>
        <el-col :span="6" v-for="(name, index) in store.names" :key="index" :offset=" (index % 3) ? 3 : 0">
            <Card class="tag" :name="name" :index="index"/>
        </el-col>
    </el-row>
</template>

<script setup>
import Card from '../components/Card.vue';
import { useStore } from '../stores';
const store = useStore();
</script>

<style scoped lang="less">
.tag {
    background-color: rgba(83, 63, 63, 0.253);
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    height: 200px;
    text-align: center;
    margin-top: 10px;
}
</style>