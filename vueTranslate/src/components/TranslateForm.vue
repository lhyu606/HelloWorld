<template>
	<div class="container" id="tranlateForm">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<form id="tranlateForm" class="well form-inline" v-on:submit="formSubmit">
					<input class="form-control" type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容" />
					<select class="form-control" v-model="language">
						<option value="en">English</option>
						<option value="ru">Russian</option>
						<option value="ko">Korean</option>
						<option value="ja">Janpenese</option>
					</select>
					<input class="btn" type="submit" name="" id="" value="翻译" />
				</form>
			</div>
		</div>
		
	</div>
	
</template>

<script>
export default {
	name: 'translateForm',
	data:function(){
		return {
			textToTranslate:"",
			language:""
		}
	},
	methods:{
		formSubmit:function(e){
			e.preventDefault();
			this.$emit('formSubmit',this.textToTranslate,this.language);
//			console.log(this.textToTranslate)
		}
	},
	created:function(){
		this.language = "en";
	}
}
</script>

<style>
	
</style>