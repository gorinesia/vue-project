<template>
  <div>
		<h2>Confirmation</h2>
		<p>Name: {{ form.firstName }} {{ form.lastName }}</p>
		<p>Email: {{ form.Email }}</p>
		<p>Tel: {{ form.tel }}</p>
		<p>Birthday: {{ form.birthday }}</p>
	</div>
</template>

<script>
export default {
  props:{
		form: Object
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

<style>

</style>