<template>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
        <slot></slot>
    </transition>
</template>
<script>
export default {
    name: 'tTransition'
}
</script>
<style lang="stylus" scoped>
.v-enter, .v-leave-to
    transform translate3d(100%,0,0)
.v-enter-active, .v-leave-active
    transition: transform .3s
    transform: translate3d(0,0,0)
.animated
    animation-duration: 0.4s;

</style>


