import { LOCATION, CITIES_INFO, HOME_INFO } from './apiconfig'
import axios from 'axios'
export const getHomeInfo = () => new Promise((resolve, reject) => {
    axios.get(HOME_INFO)
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