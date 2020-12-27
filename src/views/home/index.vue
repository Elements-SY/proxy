<template>
  <div class="home_container">
    <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1>
    <el-button v-loading="loading" type="primary" @click="getTopic">send request</el-button>
  </div>
</template>
<script>
import { topics } from "@/http";
export default {
  name: "home",
  data() {
    return {
      loading: false,
      params: {
        page: 1,
        tab: "good",
        limit: 1,
      },
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {

    getTopic() {
      const loading = this.$loading({text: 'Loading...'})
      topics(this.params)
        .then((res) => {
          console.log(res)
          loading.close();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/home/index.scss";
</style>
