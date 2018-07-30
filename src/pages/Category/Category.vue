<template>
	<t-scroll>
		<ul class="category">
			<router-link tag="li" :to="'/detail/'+item.id" class="list border-bottom" v-for="item of categoryList" :key="item.id">
				<div class="item-left">
					<img class="item-icon" :src="item.imgUrl" :alt="item.title">
				</div>
				<div class="item-content">
					<h4 class="item-title">{{item.title}}</h4>
					<span class="item-note">{{item.note}}</span>
				</div>
				<div class="item-right">
					<i class="iconfont right-arrow">&#xe603;</i>
				</div>
			</router-link>
		</ul>
	</t-scroll>
</template>
<script>
import tScroll from '@/common/tScroll'
import { getCategoryInfo } from '@/api/getData'
export default {
	name: 'category',
	data () {
		return {
			categoryList: []
		}
	},
	components: {
		tScroll
	},
	methods: {
		getInfo() {
			getCategoryInfo().then(this.getInfoSucc)
		},
		getInfoSucc(res) {
			if (res.data) {
				this.categoryList = res.data.data.categoryList
				console.log(this.categoryList)
			}
			
		}
	},
	mounted () {
		this.getInfo()
	}
}
</script>
<style lang="stylus" scoped>
.list
	background #fff
	padding .5rem	.75rem
	display flex
	text-align justify
	.item-left
		display table-cell
		vertical-align top
		padding-right .5rem
		.item-icon
			width 2.4rem
			height 2.4rem
	.item-content
		flex: 1;
		.item-title
			font-size .9rem
			margin .3rem 0
			font-weight 500
			color: #317eac
		.item-note
			color #999
			font-size $fontSize
	.item-right
		padding: .3rem 0
		.right-arrow
			color #999
			font-size: $fontSize
</style>


