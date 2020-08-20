<template>
  <div id="app">
    <div id="nav">
    <router-view/>
    </div>
      <!-- <router-link to="/">Name</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/birthday">BirthDay</router-link> |
      <router-link to="/confirm">Confirm</router-link> -->
  </div>
</template>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
