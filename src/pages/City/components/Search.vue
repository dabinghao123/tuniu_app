<template>
<div>
    <div class="search">
        <input class="search-input" type="search" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
            <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配项</li>
        </ul>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    methods: {
        handleCityClick(city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return 
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach( (value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                           result.push(value) 
                        }
                    })
                }
                this.list = result
            }, 100);
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search,{
            click: true
        })
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
.search
    height 1.8rem
    background #eee
    padding 0 .25rem
    .search-input
        box-sizing border-box
        padding 0 .25rem
        width 100%
        height 1.55rem
        line-height 1.55rem
        text-align center
        border-radius .15rem
.search-content
    overflow hidden
    z-index 1
    position absolute
    top 4.2rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
        line-height 1.55rem
        padding-left .5rem
        color #666
        background #fff
</style>


