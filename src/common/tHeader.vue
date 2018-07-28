<template>
    <div class="home-header border-bottom" v-if="headerStatus === 'home'">
        <div class="header-left" @click="showEgg">
            <img clas="header-logo" src="@/assets/imgs/logo.png" alt="途牛logo" style="height:30px;width:30px">
        </div>
        <div class="header-input">
            <span class="prompt"><i class="iconfont search">&#xe633;</i>输入景点/游玩主题</span>
        </div>
        <router-link tag='div' class="header-right" to='/city'>
            <div class="city">
                <i class="iconfont">&#xe618;</i>
                <span class="selected-city">{{this.city}}</span>
            </div>
        </router-link>
        <transition name="fade">
            <div class="egg" v-show="eggShow">
                <div class="header">
                    Vue2.5 旅途APP
                </div>
                <div class="egg-close" @click="hiddenEgg">
                    <i class="iconfont">&#xe689;</i>
                </div>
            </div>
        </transition>
    </div>
    <div class="city-header" v-else-if="headerStatus === 'city'">
        城市选择
        <router-link to="/">
            <i class="iconfont header-back" >&#xe600;</i>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'tHeader',
    data () {
        return {
            eggShow: false,
            listShow: false
        }
    },
    computed: {
        ...mapState(['city']),
        ...mapState(['headerStatus'])
    },
    methods: {
        showEgg () {
            this.eggShow = true
        },
        hiddenEgg () {
            this.eggShow = false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
@import '~styles/mixin'
.home-header
    position fixed
    z-index 100
    width 100%
    display flex
    justify-content space-between
    align-items center
    height 2.4rem
    background $headerColor
    .header-left
        flex  1
        margin-left .75rem
        height 1.65rem
    .header-input
        height 1.5rem
        border-radius .2rem
        width 100%
        margin .5rem
        border .05rem solid #eee
        background #FFF
        .prompt
            font-size .7rem
            line-height 1.5rem
            padding 0 .5rem
            color $fontColor
    .header-right
        flex 1
        font-size .7rem
        margin-right .25rem
        color $fontColor    
        .city
            font-size 0
            min-width .5rem
            ellipsis()   
            .selected-city, .iconfont
                font-size .7rem
.egg
    position fixed
    z-index 20
    width 80%
    height 80%
    overflow auto
    top 50%
    left 50%
    transform translate(-50%,-50%)
    border-radius .5rem
    background rgba(220,220,220,.8)
    backdrop-filter blur(1rem);
    transition all 0.5s
    &.fade-enter,&.fade-leave
        opacity 0
        filter blur(2px);
        background rgba(7,17,27,0)
    .header
        font-size 1rem
        text-align center
        padding-top .5rem
    .egg-close
        display block
        width 1.6rem
        height 1.6rem
        line-height 1.6rem
        text-align center
        margin 0 auto
        bottom 0
        clear both
        font-size 1rem

.city-header
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


