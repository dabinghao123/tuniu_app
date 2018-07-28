export default {
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {}
        
    },
    addCityData (state, data) {
        state.cityList = data
    },
    show (state) {
        state.isShow = true
    },
    hidden (state) {
        state.isShow = false
    },
    changeCityHeader (state) {
        state.headerStatus = 'city'
    },
    changeHomeHeader (state) {
        state.headerStatus = 'home'
    },
    changeNormalHeader (state) {
        state.headerStatus = 'normal'
    },
}