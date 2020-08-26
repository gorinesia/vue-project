<template>
  <div>
    <div>
      <h1 class="button is-info is-medium">STEP.02</h1>
    </div>
    <div>
      <p class="is-size-4 has-text-weight-bold hero is-primary">以下にお答えください</p>
    </div>
    <div>
      <div>
        <p class="has-text-info">現在、生命保険に加入されていますか？</p>
        <label for="Gender"></label>
        <input type="radio" id="yes" value="はい" @click="nextQuestion1" v-model="question1" setQuestion @change="setQuestion"/> はい
        <input type="radio" id="no" value="いいえ" @click="nextQuestion1" v-model="question1" setQuestion @change="setQuestion"/> いいえ
      </div>
      <div>
        <span>select: {{ question1 }}</span>
      </div>
    </div>
    <div v-if="select1">
      <div>
        <p class="has-text-info">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <label for="Gender"></label>
        <input type="radio" id="yes" value="はい" @click="nextQuestion2" v-model="question2" setQuestion @change="setQuestion"/> はい
        <input type="radio" id="no" value="いいえ" @click="nextQuestion2" v-model="question2" setQuestion @change="setQuestion"/> いいえ
      </div>
      <div>
        <span>select: {{ question2 }}</span>
      </div>
    </div>
    <div v-if="select2">
      <div>
        <p class="has-text-info">過去5年以内に、病気やけがで手術をうけたこと、または継続して7日以上の入院をしたことがありますか？</p>
        <label for="Gender"></label>
        <input type="radio" id="yes" value="はい" v-model="question3" setQuestion @change="setQuestion"/> はい
        <input type="radio" id="no" value="いいえ" v-model="question3" setQuestion @change="setQuestion"/> いいえ
      </div>
      <div>
        <span>select: {{ question3 }}</span>
      </div>
    </div>
    <div>
      <button class="button is-primary" @click="back">前へ</button>
      <button class="button is-primary" @click="next">次へ</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      question1: '',
      question2: '',
      question3: '',
      select1: false,
      select2: false
    };
  },
  methods: {
    setQuestion() {
      this.$store.commit('setQuestion', {
        question1: this.question1,
        question2: this.question2,
        question3: this.question3,
      })
    },
    nextQuestion1() {
      this.select1 = !this.select1
    },
    nextQuestion2() {
      this.select2 = !this.select2
    },
    back() {
      this.$router.push("/");
    },
    next() {
      this.$router.push("/consultationMessage");
    },
  },
};
</script>