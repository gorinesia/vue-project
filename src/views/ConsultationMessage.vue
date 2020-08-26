<template>
  <div>
    <div>
      <h1 class="button is-info is-medium">STEP.03</h1>
    </div>
    <div>
      <p class="is-size-4 has-text-weight-bold hero is-primary">ご相談内容をご記入ください</p>
    </div>
    <div>
      <p class="is-size-5 has-text-info">-ご相談内容-</p>
    </div>
    <div>
      <textarea class="textarea is-info is-large" type="text" v-model="textMessage" @input="setTextMessage"></textarea>
    </div>
    <div>
      <pre>TextMessage: {{ textMessage }}</pre>
    </div>
    <div>
      <button class="button is-primary" @click="back">前へ</button>
      <button class="button is-primary" @click="next">次へ</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textMessage: ''
    }
  },
  methods: {
    setTextMessage() {
      this.$store.commit('setTextMessage', {
        textMessage: this.textMessage
      })
    },
    back() {
      this.$router.push("/ChoiceQuestions");
    },
    next() {
      this.$router.push("/confirmForm");
    },
  },
};
</script>