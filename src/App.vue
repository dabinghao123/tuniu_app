<template>
  <div id="app">
    <tab-bar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import tabBar from '@/common/tabBar'
export default {
  name: 'App',
  components: {
    tabBar
  }
}
</script>

