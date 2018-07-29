<template>
    <t-scroll>
        <div class="home-wrapper">
            <t-swiper :swiperList="swiperList"/>
            <t-icon :iconList="iconList"/>
            <t-activity :activityList="activityList"/>
            <t-recommend :recommendList="recommendList"/>
        </div>
    </t-scroll>
</template>
<script>
import tSwiper from './components/tSwiper'
import tIcon from './components/tIcon'
import tActivity from './components/tActivity'
import tRecommend from './components/tRecommend'
import Bscroll from 'better-scroll'
import tScroll from '@/common/tScroll'
import { getHomeInfo, getLocation } from '@/api/getData'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'home',
    components: {
        tSwiper,
        tIcon,
        tActivity,
        tRecommend,
        tScroll
    },
    computed: {
        ...mapState(['city'])
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
        ...mapMutations(['changeHomeHeader','changeCity', 'show']),
        getCity () {
            getLocation().then(this.handleCurrentCity)
        },
        getHomeInfo () {
            getHomeInfo().then(this.getHomeInfoSucc)   
        },
        handleCurrentCity (res) {
            if(res.data.name) {
                this.changeCity(res.data.name)
            }
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
        this.getCity()
        this.getHomeInfo()
    },
    activated () {
        this.changeHomeHeader()
        this.show()
        if (this.city !== this.lastCity) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>
