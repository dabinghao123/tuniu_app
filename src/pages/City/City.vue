<template>
    <div class="city-wrapper">
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import citySearch from './components/Search'
import cityList from './components/List'
import cityAlphabet from './components/Alphabet'
import { getCitiesInfo } from '@/api/getData'
import {  mapMutations } from 'vuex' 
export default {
    name: 'City',
    components: {
        citySearch,
        cityList,
        cityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods: {
        ...mapMutations(['changeCityHeader','hidden','addCityData','changeCity']),
        getCityInfo () {
            getCitiesInfo().then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            if(res.data.ret && res.data) {
                let cityList = res.data.data
                this.addCityData(cityList)
                this.cities = cityList.cities
                this.hotCities = cityList.hotCities
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    },
    activated () {
        this.changeCityHeader()
        this.hidden()
    },
    mounted () {
        this.getCityInfo ()
    }
}
</script>





