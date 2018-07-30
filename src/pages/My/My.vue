<template>
    <t-scroll>
        <div class="my-header">
            <img class="avatar" src="@/assets/imgs/avatar.png" alt="头像">
            <div class="button">
                <div class="btn login">登录</div>
                <div class="btn register">注册</div>
            </div>
            <div class="background"></div>
        </div>
        <div class="my-tags">
            <div class="tag border-bottom" v-for="item in tagList" :key="item.name">
                <img class="icon" :src="item.imgUrl">
                <span class="text">{{item.name}}</span>
                <i class="iconfont right-arrow">&#xe603;</i>
            </div>
        </div>
        <div class="menus">
            <div class="menus-header"></div>
            <div class="menus-bottom">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </t-scroll>
</template>
<script>
import tScroll from '@/common/tScroll'
export default {
    name: 'my',
    components: {
        tScroll
    },
    data () {
        return {
            tagList: [
                {
                    name: '我的钱包',
                    imgUrl: 'http://hx-dl.top/api/imgs/wallet.png'
                },
                {
                    name: '首付出发',
                    imgUrl: 'http://hx-dl.top/api/imgs/sfcf.png'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.my-header
    display flex
    overflow hidden
    height 7.5rem
    flex-direction column
    justify-content center
    align-items center
    .avatar
        width 3rem
        height 3rem
        border-radius 50%
    .button
        margin-top .5rem
        display flex
        .btn
            margin 0.2rem
            text-align center
            line-height 1.5rem
            width 4.6rem
            height 1.5rem
            color #fff
            border-radius .2rem
            font-size .8rem
        .login
            background #84B75E
        .register
            background #DD5600
    .background
        position absolute
        z-index -10
        width 100%
        height 7.5rem
        background url('http://img4.tuniucdn.com/u/mainpic/pingdao/chujinggentuan/493182/Greece.jpg') no-repeat 100%
        filter blur(.2rem)
.my-tags
    width 100%
    height 2.4rem
    .tag
        margin-top .5rem
        background #fff
        padding .6rem
        font-size .8rem
        height 1.2rem
        line-height 1.2rem
        .icon
            position relative
            top -.1rem
            width 1.2rem
            height 1.2rem
            margin-right .5rem
        .right-arrow
            float right 
</style>


