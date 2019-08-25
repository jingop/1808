<template>
  <div class="home">
    <div class="loading"
         v-if="loading">加载中...</div>
    <div v-else>请求完成之后显示数据{{result}}</div>
    <button class='btn'
            @click="getL">发送请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import { getList } from '../api';

export default {
  name: 'home',
  data () {
    return {
      result : []
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  created () {},
  methods: {
    async getL () {
      this.result = await getList()
      console.log(this.result)
    }
  }
}
</script>
<style  scoped>
* {
  font-size: 40px;
}
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  top: 0;
  opacity: 0.6;
}
.btn {
  width: 200px;
  height: 60px;
  font-size: 40px;
}
</style>
