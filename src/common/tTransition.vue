<template>
    <transition enter-active-class="animated flip">
        <slot></slot>
    </transition>
</template>
<script>
export default {
    name: 'tTransition'
}
</script>
<style lang="stylus" scoped>
.animated
    animation-duration: 0.4s;
</style>


