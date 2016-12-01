<template>
	<div id="secondcomponent">
		<h2>Second Page!!!!!</h2>
		<a>written by {{ author }}</a>
		<p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				author: "微信公众号 jinkey-love"
			}
		}
	}
</script>

<style>
	h2{color: green;}
</style>