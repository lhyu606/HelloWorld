<template>
  <div id="app">
  <h1>在线翻译</h1>
  <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
    <TranslateOutput v-text="translatedText"></TranslateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'app',
  data:function(){
  	return {
  		translatedText:""
  	}
  },
  components: {
    TranslateForm,TranslateOutput
  },
  methods:{
  	translateText:function(text,language){
//		console.log(text)
			this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?'
			+'key=trnsl.1.1.20171122T032310Z.869d38338f554c78.0b75bacdf223c10c0c00a5fa6bacc619c6313f4e'
			+'&lang='+language+'&text='+text)
			.then((response)=>{
				// console.log(response.body.text[0])
				this.translatedText = response.body.text[0];
			})
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
