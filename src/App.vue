<template>
  <div id="app">
    <t-header/>
    <keep-alive>
      <t-transition>
        <router-view/>
      </t-transition>
    </keep-alive>
    <tab-bar v-show="isShow"/>
  </div>
</template>

<script>
import tTransition from '@/common/tTransition'
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
    tHeader,
    tTransition
  }
}
</script>
<style lang="stylus">
#app
  width 100%
  height 100%
</style>
