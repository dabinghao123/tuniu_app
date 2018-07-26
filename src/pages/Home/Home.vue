<template>
    <div class="home">
        <t-header></t-header>
        <t-swiper :swiperList="swiperList"></t-swiper>
        <t-icon :iconList="iconList"></t-icon>
        <t-activity :activityList="activityList"></t-activity>
    </div>
</template>
<script>
import tHeader from '@/common/tHeader'
import tSwiper from './components/tSwiper'
import tIcon from './components/tIcon'
import tActivity from './components/tActivity'
import { getHomeInfo } from '@/api/getData'
export default {
    name: 'home',
    components: {
        tHeader,
        tSwiper,
        tIcon,
        tActivity
    },
    data () {
        return {
            lastCity: '',
            swiperList:[],
            iconList:[],
            activityList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods: {
        getInfo () {
            getHomeInfo().then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            if (res.ret && res.data) {
                this.swiperList = res.data.swiperList
                this.iconList = res.data.iconList
                this.activityList = res.data.activityList
                this.recommendList = res.data.recommendList
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
<style lang="stylus">
.home
    background #eee
</style>