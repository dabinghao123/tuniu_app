<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import axios from 'axios'
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import cityAlphabet from './components/Alphabet'
export default {
    name: 'City',
    components: {
        cityHeader,
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
        getCityInfo () {
            axios.all([
                axios.get('https://elm.cangdu.org/v1/cities?type=guess'),
                axios.get('https://www.easy-mock.com/mock/5b574c739a5ff5320380791b/tuniu/citiesInfo')
                ])
                .then(axios.spread((curCityRes,cityRes) => {
                    // 上面两个请求都完成后，才执行这个回调方法
                    console.log('curCityRes', curCityRes);
                    console.log('cityRes', cityRes);
                    this.handleGetCityInfoSucc(curCityRes,cityRes)
                }))
        },
        handleGetCityInfoSucc (curCityRes,cityRes) {
            if(cityRes.data.ret && cityRes.data) {
                this.cities = cityRes.data.data.cities
                this.hotCities = cityRes.data.data.hotCities
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo ()
    }
}
</script>




