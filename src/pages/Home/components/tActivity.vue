<template>
    <div class="wrapper border-bottom">
        <ul class="list">
            <li class="list-content" v-for="item in activityList" :key="item.id">
                <img :src="item.imgUrl" class="list-pic"/>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'tActivity',
    props: {
        activityList: {
            type: Array
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper
    width 100%
    margin-top .5rem
    .list
        display flex
        flex-wrap wrap
        .list-content
            width 33.33%
            .list-pic
                width 100%
</style>