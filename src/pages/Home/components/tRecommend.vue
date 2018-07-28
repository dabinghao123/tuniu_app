<template>
    <div class="recommend-wrapper">
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" :alt="item.title">
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
    
</template>
<script>
export default {
    name: 'tRecommend',
    props: {
        recommendList: {
            type: Array
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin'
.recommend-wrapper
    width 100%
    height 100%
    overflow hidden
    .title
        margin-top: .5rem
        line-height: 1.6rem
        background: #fff
        text-indent: .5rem
        bottom 2.4rem
    .item
        overflow: hidden
        display: flex
        height: 3rem
        .item-img
            width: 3rem
            height: 100%
            padding: .25rem
        .item-info
            flex: 1
            padding: .25rem
            min-width: 0
            .item-title
                line-height: 1.35rem
                font-size: .8rem
            .item-desc
                line-height: 1rem
                color: #ccc
                ellipsis()
            .item-btn
                line-height: 1.1rem
                margin-top: .4rem
                background: #ff9300
                padding: 0 .5rem
                border-radius: .15rem
                color: #fff
</style>


