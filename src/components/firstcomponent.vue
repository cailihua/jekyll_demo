<template>
	<div id="firstcomponent">
		<h2>First Page!!!!</h2>
		<a>written by {{ author }}</a>
		<h3>Select 二级联动：</h3>
		<select v-model="selected">
			<option v-for="item in items" :value="item.text">
				{{ item.text }}
			</option>
		</select>
		<select>
			<option v-for="opt in selection" :value="opt.text" :selected="$index == 0 ? true : false">
				{{ opt.text }}
			</option>
		</select>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				author: "微信公众号 jinkey-love",
				selected:'信息学院',
				items: [
					{
						text: '信息学院',
						opts: [
							{text: '软件工程'},
							{text: '信息安全'},
							{text: '计算机科学与技术'}
						]
					},
					{
						text: '商学院',
						opts: [
							{text: '旅游管理'},
							{text: '行政管理'},
							{text: '工商管理'}
						]
					}
				]
			}
		},
		computed: {
			selection: {
				get: function() {
					var that = this;
					return this.items.filter(function(X,index){
						return X.text == that.selected;
					})[0].opts;
				}
			}
		}
	}
</script>

<style>
	h2{color: red;}
	h3{color: red;}
</style>