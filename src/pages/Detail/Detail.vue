<template>
<div>
    <!-- <detail-banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
        <detail-list :categoryList="categoryList"></detail-list>
    </div> -->
</div>
</template>
<script>
// import DetailBanner from './components/Banner'
// import DetailHeader from './components/Header'
// import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        // DetailBanner,
        // DetailHeader,
        // DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            categoryList: [],
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            if (res.data.ret && res.data.data) {
                let result = res.data.data
                this.sightName = result.sightName
                this.bannerImg = result.bannerImg
                this.gallaryImgs = result.gallaryImgs
                this.categoryList = result.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>
<style lang="stylus" scoped>
.content
    height 50rem
</style>