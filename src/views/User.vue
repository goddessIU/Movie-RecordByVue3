 <template>
  <el-container style="height: 100vh; border: 1px solid #eee" class="layout-container-demo">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <div @click="toTotal">
          <el-sub-menu index="1" :class="{ chooseBgc: isChoosed === 1 }">
            <template  #title>全部记录</template>
          </el-sub-menu>
        </div>
        <div @click="toSetting">
          <el-sub-menu index="2" :class="{ chooseBgc: isChoosed === 2 }">
            <template  #title> 个人信息 </template>
          </el-sub-menu>
        </div>
      </el-menu>
    </el-aside>

     <el-container class="total">
      <el-header style="text-align: right; font-size: 12px">
        <Header class="head" />
      </el-header>

     <el-main>
        <router-view></router-view>
      </el-main>
    </el-container> 
  </el-container>
</template>

<script setup>
import Header from "../components/Header.vue";
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { Message, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
const isChoosed = ref(1)
const router = useRouter();
const route = useRoute();
onMounted(() => {
    if (route.path.includes("total")) {
        isChoosed.value = 1;
    } else if (route.path.includes("setting")) {
        isChoosed.value = 2;
    }
})
const toTotal = () => {
      router.push({ name: "total" });
}
const toSetting = () => {
      router.push({ name: "setting" });
}
watch(() => route.path, () => {
    if (route.path.includes("total")) {
        isChoosed.value = 1;
    } else if (route.path.includes("setting")) {
        isChoosed.value = 2;
    }
})
</script>

<style lang="less">
.chooseBgc {
  background-color: skyblue;
}
.total {
  min-width: 500px;
  .head {
    // width: 100%;
  }
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}

.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>