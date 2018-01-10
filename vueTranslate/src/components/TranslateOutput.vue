<template>
	<div id="tranlateOutput">
		<h2>{{translatedText}}</h2>
	</div>
	
</template>

<script>
export default {
	name: 'tranlateOutput',
	data: function(){
		return {
			translatedText:""
		}
	}
	/*props:[
		"translatedText"
	]*/
}
</script>

<style>
</style>