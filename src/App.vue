<template>
  <div>
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script setup>
import { computed, ref } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import fr from "element-plus/dist/locale/de.mjs";
import { useStore } from "vuex";
const store = useStore();
store.state.language = localStorage.getItem("language");
const locale = computed(() => {
  switch (store.state.language) {
    case "zh-Cn":
      return zhCn;
    case "en":
      return en;
    case "fr":
      return fr;
  }
});
</script>