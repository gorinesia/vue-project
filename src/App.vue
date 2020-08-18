<template>
  <div id="app" class="container mt-5">
	<div class="row">
		<div class="col-md-8">
		<h1>Step:{{ stepNumber }}</h1>
		<keep-alive>

      <NameForm v-if="stepNumber === 1" @update="updateForm"></NameForm>
      <ContactForm v-if="stepNumber === 2" @update="updateForm"></ContactForm>
      <BirthDayForm v-if="stepNumber === 3" @update="updateForm"></BirthDayForm>
      <ConfirmForm v-if="stepNumber === 4" v-bind:form="form"></ConfirmForm>
		</keep-alive>

		<button class="btn btn-primary" @click="backStep" v-show="stepNumber != 1">Back</button>
		<button class="btn btn-primary" @click="nextStep" v-show="stepNumber != 4">Next</button>

		</div>


		<pre><code>{{ form }}</code></pre>

	</div>
</div>
</template>

<script>
import NameForm from './components/NameForm'
import ContactForm from './components/ContactForm'
import BirthDayForm from './components/BirthDayForm'
import ConfirmForm from './components/ConfirmForm'
// import Name from './components/Name';
// import NextButton from './components/NextButton';
// import BackButton from './components/BackButton';


export default {
  name: 'App',
  components: {
    NameForm,
    ContactForm,
    BirthDayForm,
    ConfirmForm,
    // Name,
    // NextButton,
    // BackButton
  },
  data: function() {
    return {
      stepNumber: 1,
      form: {
        firstName: null,
        lastName: null,
        Email: null,
        tel: null,
        birthday: null
      }
    }
	},
  methods:{
		updateForm:function(formData){
			Object.assign(this.form, formData);
		},
		backStep:function(){
			this.stepNumber--;
		},			
		nextStep:function(){
			this.stepNumber++;
    },
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
