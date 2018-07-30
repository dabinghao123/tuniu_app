import storage from '@/model/storage'
let defaultCity = '北京'
try {
    if (storage.get(city)) {
        defaultCity = storage.get(city)
    }
} catch (e) {}

export default {
    city: defaultCity,
    cityList: [],
    headerStatus: 'home',
    isShow: true
}