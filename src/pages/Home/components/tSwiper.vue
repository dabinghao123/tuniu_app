<template>
    <div class="swiper-wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <a href="">
                    <img class="swiper-img" :src="item.imgUrl" alt="轮播图">
                </a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'tSwiper',
    computed: {
        showSwiper () {
            return this.swiperList.length
        }
    },
    props: {
        swiperList: Array
    },
    data () {
        return {
            swiperOption: {
                pagination : '.swiper-pagination',
                autoplay : 3000,
                loop: true
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
.swiper-wrapper >>> .swiper-pagination-bullet-active
    background: $selectedColor
.swiper-wrapper >>> .swiper-pagination-bullet
    width .5rem
    height .15rem
    border-radius .25rem
    margin 0 .15rem
.swiper-wrapper
    overflow hidden
    width 100%
    height 8.5rem
    .swiper-img
        width 100%
        height 100%
</style>


