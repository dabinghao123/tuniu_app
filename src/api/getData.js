import * as APP_INFO from './apiconfig'
import axios from 'axios'
export const getHomeInfo = () => new Promise((resolve, reject) => {
    axios.get(APP_INFO.HOME_INFO)
      .then( res => resolve(res.data))
})
export const getLocation = () => new Promise((resolve, reject) => {
    axios.get(APP_INFO.LOCATION)
      .then( res => resolve(res))
})
export const getCitiesInfo = () => new Promise((resolve, reject) => {
    axios.get(APP_INFO.CITIES_INFO)
      .then( res => resolve(res))
})
export const getCategoryInfo = () => new Promise((resolve, reject) => {
    axios.get(APP_INFO.CATEGORY_INFO)
      .then( res => resolve(res))
})