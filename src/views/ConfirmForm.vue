<template>
  <div>
    <h1 class="button is-info is-medium">STEP.04</h1>
    <br />
    <br />
    <h2 class="is-size-4 has-text-weight-bold hero is-primary">Confirmation</h2>
		<p class="has-text-info"> -性別- </p>
		<p>gender: {{ gender }}</p>
		<br>
		<p class="has-text-info"> -生年月日- </p>
		<p>birthday: {{ year }}年 {{ month }} {{ day }}</p>
		<br>
		<p class="has-text-info">-現在、生命保険に加入されていますか？-</p>
		<p>question1: {{ question1 }}</p>
		<br>
		<p class="has-text-info">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
		<p>question2: {{ question2 }}</p>
		<br>
		<p class="has-text-info">-過去5年以内に、病気やけがで手術をうけたこと、または継続して7日以上の入院をしたことがありますか？-</p>
		<p>question3: {{ question3 }}</p>
		<br>
		<p class="has-text-info">-ご相談内容-</p>
		<p>textMessage: {{ textMessage }}</p>
    <button class="button is-primary" @click="back">前へ</button>
    <button class="button is-primary">送信</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      gender: this.$store.state.gender,
      year: this.$store.state.year,
      month: this.$store.state.month,
      day: this.$store.state.day,
      question1: this.$store.state.question1,
      question2: this.$store.state.question2,
      question3: this.$store.state.question3,
      textMessage: this.$store.state.textMessage,
    };
  },
  methods: {
    back() {
      this.$router.push("/consultationMessage");
    },
  },
};
</script>