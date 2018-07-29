<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom" ref="hot">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button active">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hotCities"
                    :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item"
                    :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="toast" v-show="showToast">
                <span class="letter">{{this.letter}}</span>
            </div>
        </transition>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    data () {
        return {
            showToast: false
        }
    },
    computed: {
        ...mapState(['city'])
    },
    watch: {
        letter () {
            if(this.letter) {
                if (this.letter === '热') {
                    const hot = this.$refs.hot
                    this.scroll.scrollToElement(hot)
                } else {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
                this.changeToast()
            }
            
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click: true
        })
    },
    methods: {
        ...mapMutations(['changeCity']),
        handleCityClick(city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        changeToast () {
            this.showToast = true
                setTimeout(()=>{
                    this.showToast = false
            },500)
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
    overflow hidden
    position absolute
    z-index -1
    top 4.2rem
    left 0
    right 0
    bottom 0
    .title
        line-height 1.35rem
        background #eee
        font-size $fontSize
        padding-left .5rem
        color #666
    .button-list
        overflow hidden
        padding .25rem 1.5rem .25rem .25rem
        .button-wrapper
            float left
            width 33.33%
            .button
                margin .25rem
                padding .25rem 0
                text-align center
                border .05rem solid #ccc
                border-radius .15rem
            .active
                border .05rem solid #ccc
                color $selectedColor
    .item-list
        .item
            line-height 1.9rem
            color #666
            padding-left .5rem
    .toast
        position fixed
        top 50%
        left 50%
        transform translate(-50%,-50%)
        width 2.4rem
        height 2.4rem
        background $selectedColor
        text-align center
        border-radius 50%
        transition all 0.5s
        &.fade-enter
            opacity 0
        &.fade-leave,&.fade-enter-active
            opacity 1
        &.fade-leave-active
            opacity 0
        .letter
            line-height 2.4rem
            font-size 1.25rem
            color #fff
</style>


