<template>
  <div id="app">
    <t-header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab-bar v-show="isShow"/>
  </div>
</template>

<script>
import tabBar from '@/common/tabBar'
import tHeader from '@/common/tHeader'
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['isShow'])
  },
  components: {
    tabBar,
    tHeader
  }
}
</script>
<style lang="stylus">
#app
  width 100%
  height 100%
</style>
