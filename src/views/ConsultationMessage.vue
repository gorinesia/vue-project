<template>
  <div>
    <h1 class="button is-info is-medium">STEP.03</h1>
    <br />
    <br />
    <p class="is-size-4 has-text-weight-bold hero is-primary">ご相談内容をご記入ください</p>
    <br />
    <p class="is-size-5 has-text-info">-ご相談内容-</p>
    <br />
    <br />
    <div>
      <textarea class="textarea is-info is-large" type="text" v-model="textMessage"></textarea>
    </div>
    <pre>TextMessage: {{ textMessage }}</pre>
    <button class="button is-primary" @click="back">前へ</button>
    <button class="button is-primary" @click="next">次へ</button>
  </div>
</template>

<script>
export default {
  computed: {
    textMessage: {
      get() {
        return this.$store.state.textMessage;
      },
      set(value) {
        this.$store.commit("updateTextMessage", value);
      },
    },
  },
  methods: {
    back() {
      this.$router.push("/ChoiceQuestions");
    },
    next() {
      this.$router.push("/confirmForm");
    },
  },
};
</script>