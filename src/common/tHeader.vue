<template>
    <div class="header-wrapper border-bottom">
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
        <transition name="fade" enter-active-class="animated jello" leave-active-class="animated shake">
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
.header-wrapper
    display flex
    justify-content space-between
    align-items center
    height 48px
    background $headerColor
    .header-left
        flex  1
        margin-left 15px
        height 33px
    .header-input
        height 30px
        border-radius 4px
        width auto
        border 1px solid #eee
        background #FFF
        .prompt
            font-size 14px
            line-height 30px
            padding-left 10px
            padding-right 10px
            color $fontColor
    .header-right
        flex 1
        font-size 14px
        min-width 1.04rem
        margin-right 10px
        color $fontColor
        ellipsis()
        .city
            font-size 0
            float right 
            .selected-city, .iconfont
                font-size 14px
.egg
    position fixed
    z-index 20
    width 80%
    height 80%
    overflow auto
    top 50%
    left 50%
    transform translate(-50%,-50%)
    border-radius 10px
    background rgba(220,220,220,.8)
    backdrop-filter blur(20px);
    // transition all 0.5s
    // &.fade-enter,&.fade-leave
    //     opacity 0
    //     filter blur(2px);
    //     background rgba(7,17,27,0)
    .header
        font-size 20px
        text-align center
        padding-top 10px
    .egg-close
        display block
        width 32px
        height 32px
        line-height 32px
        text-align center
        margin 0 auto
        bottom 0
        clear both
        font-size 20px
</style>


