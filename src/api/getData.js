import { LOCATION, CITIES_INFO, SWIPER_SLIDE } from './apiconfig'
import axios from 'axios'
export const getSwiperSlide = () => new Promise((resolve, reject) => {
    axios.get(SWIPER_SLIDE)
      .then( res => resolve(res.data))
})
export const getLocation = () => new Promise((resolve, reject) => {
    axios.get(LOCATION)
      .then( res => resolve(res))
})
export const getCitiesInfo = () => new Promise((resolve, reject) => {
    axios.get(CITIES_INFO)
      .then( res => resolve(res))
})