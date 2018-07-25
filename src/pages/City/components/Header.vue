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
    height .96rem
    line-height .96rem
    text-align center
    font-size .32rem
    background $headerColor
    color $fontColor
    .header-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        color $fontColor
</style>


