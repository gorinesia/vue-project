<template>
  <div>
    <h1 class="button is-info is-medium">STEP.04</h1>
    <br />
    <br />
    <h2 class="is-size-4 has-text-weight-bold hero is-primary">Confirmation</h2>
    <p>
      gender:
      {{ gender }}
    </p>
    <br />
    <p>
      birthday:
      {{ form.birthday }}
    </p>
    <br />
    <p>
      question:
      {{ form.question }}
    </p>
    <br />
    <p>
      -ご相談内容-
      <br />
      {{ textMessage}}
    </p>
    <button class="button is-primary" @click="back">前へ</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      gender: this.$store.getters.gender,
      textMessage: this.$store.getters.textMessage,
    };
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
  },
  methods: {
    back() {
      this.$router.push("/textMessage");
    },
  },
};
</script>