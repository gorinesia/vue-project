<template>
  <div>
		<h1>STEP.04</h1>
		<h2>Confirmation</h2>
		<p>Name: {{ form.firstName }} {{ form.lastName }}</p>
		<p>Email: {{ form.Email }}</p>
		<p>Tel: {{ form.tel }}</p>
		<p>Birthday: {{ form.birthday }}</p>
		<button @click="back">前へ</button>
	</div>
</template>

<script>
export default {
  computed:{
		form() {
			return this.$store.state.form
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
		back() {
			this.$router.push('/birthday')
		},
	}
}
</script>

<style>

</style>