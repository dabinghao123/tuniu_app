<template>
    <div class="activity-wrapper border-bottom">
        <ul class="activity-list">
            <li class="list-content" v-for="item in activityList" :key="item.id">
                <img :src="item.imgUrl" class="activity-img"/>
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
.activity-wrapper
    width 100%
    margin-top .2rem
    .activity-list
        display flex
        flex-wrap wrap
        .list-content
            width 33.33%
        .activity-img
            width 100%
</style>