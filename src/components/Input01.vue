<template>
  <form @input="submit">
    <h2>STEP1</h2>
    <p>お客様情報を入力してください</p>
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

}
</script>

<style>

</style>