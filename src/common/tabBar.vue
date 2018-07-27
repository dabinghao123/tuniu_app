<template>
    <div class="tabbar-wrapper">
        <div class="tabbar border-top">
            <router-link tag="div" to='/home' class="tab">
                <i class="iconfont">&#xe60b;</i>
                <span class="text">首页</span> 
            </router-link>
            <router-link tag="div" to='/destination' class="tab">
                <i class="iconfont">&#xe71a;</i>
                <span class="text">目的地</span> 
            </router-link>
            <router-link tag="div" to='/category' class="tab">
                <i class="iconfont">&#xe650;</i>
                <span class="text">分类</span>
            </router-link>
            <router-link tag="div" to='/my' class="tab">
                <i class="iconfont">&#xe60a;</i>
                <span class="text">我的</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tabBar'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
.tabbar-wrapper
  position fixed
  bottom 0
  background #fff
  width 100%
  .tabbar
    display flex
    justify-content space-around
    align-items center
    z-index 100
    height 2.4rem
    .tab
      display flex
      flex-direction column
      justify-content center
      align-items center
      color $fontColor
      .text
        display block
        margin-top .25rem
        font-size .7rem
    .active
      color $selectedColor
</style>


