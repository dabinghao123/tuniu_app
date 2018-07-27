<template>
    <ul class="alphabet">
        <li class="item" v-for="item of letters" :key="item" 
        @click="handleLetterClick" :ref="item"
        @touchstart.prevent="handleTouchStart" 
        @touchmove="handleTouchMove" @touchend="handleTouchEnd"
        >{{item}}</li>
    </ul>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            letters.unshift('热')
            return letters
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        this.startY = this.$refs['热'][0].offsetTop 
        console.log(this.startY)
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                 if (this.timer) {
                    clearTimeout (this.timer)
                }
                this.timer = setTimeout ( () => {
                    const touchY = e.touches[0].clientY - 84
                    const index = Math.floor(( touchY - this.startY ) / 18)
                    if (index >= 0) {
                        this.$emit('change', this.letters[index])
                    }
                },16) 
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin'
@import '~styles/varibles'
.alphabet
    position absolute
    top 4.2rem
    right 0
    bottom 2.4rem
    width 1.5rem
    display flex
    flex-direction column
    justify-content center
    align-items center
    .item
        height .9rem
        color $selectedColor
</style>


