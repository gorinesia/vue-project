<template>
  <form @input="submit">
    <h1>STEP1</h1>
    <h2>Name Info</h2>
    <div class="form-group">
      <label for="firstName">FirstName</label>
      <input type="text" class="form-control" v-model="firstName" placeholder="Enter First Name">
    </div>
    <div class="form-group">
      <label for="lastName">LastName</label>
      <input type="text" class="form-control" v-model="lastName" placeholder="Enter Last Name">
    </div>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: null,
      lastName: null
    }
  },
  methods: {
    submit: function() {
      this.$emit('update', {
        firstName: this.firstName,
        lastName: this.lastName
      })
    }
  }
}
</script>

<style>

</style>