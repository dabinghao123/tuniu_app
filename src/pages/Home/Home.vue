<template>
    <div class="home">
        <t-header></t-header>
        <t-swiper :swiperList="swiperList"></t-swiper>
        <t-icon :iconList="iconList"></t-icon>
    </div>
</template>
<script>
import tHeader from '@/common/tHeader'
import tSwiper from './components/tSwiper'
import tIcon from './components/tIcon'
import { getSwiperSlide } from '@/api/getData'
export default {
    name: 'home',
    components: {
        tHeader,
        tSwiper,
        tIcon
    },
    data () {
        return {
            lastCity: '',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods: {
        getInfo () {
            getSwiperSlide().then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            if (res.ret && res.data) {
                this.swiperList = res.data.swiperList
            }
            
        }
    },
    mounted () {
        this.lastCity = this.city
        this.getInfo()
    },
    activated () {
        if (this.city !== this.lastCity) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }

}
</script>
<style lang="stylus" scoped>

</style>


