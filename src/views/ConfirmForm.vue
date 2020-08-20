<template>
  <div>
		<h1 class="button is-info is-medium">STEP.04</h1>
		<h2 class="is-size-4 has-text-weight-bold hero is-primary">Confirmation</h2>
		<p>gender: 
			{{ form.gender }}
		</p>
		<br>
		<p>birthday: 
			{{ form.birthday }}
		</p>
		<br>
		<p>question: 
			{{ form.question }}
		</p>
		<br>
		<p>textMessage: 
			{{ form.textMessage}}
		</p>
		<button class="button is-primary" @click="back">前へ</button>
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
			this.$router.push('/textMessage')
		},
	}
}
</script>

<style>

</style>