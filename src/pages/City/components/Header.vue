<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <i class="iconfont header-back" >&#xe600;</i>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
.header
    position relative
    overflow hidden
    height 2.4rem
    line-height 2.4rem
    text-align center
    font-size .8rem
    background $headerColor
    color $fontColor
    .header-back
        position absolute
        top 0
        left 0
        width 1.6rem
        text-align center
        color $fontColor
</style>


