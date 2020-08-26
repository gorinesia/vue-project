<template>
  <div>
    <h1 class="button is-info is-medium">STEP.02</h1>
    <br><br>
    <p class="is-size-4 has-text-weight-bold hero is-primary">以下にお答えください</p>
    <br>
    <div>
      <p class="has-text-info">現在、生命保険に加入されていますか？</p>
      <label for="Gender"></label>
      <input type="radio" id="yes" value="はい" @click="nextQuestion" v-model="question1" @change="setQuestion"> はい
      <input type="radio" id="no" value="いいえ" @click="nextQuestion" v-model="question1" @change="setQuestion"> いいえ
      <br><br>
      <span>choice: {{ question1 }}</span>
    </div>	
    <br><br>
    <div v-if="select" class="question2">
      <p class="has-text-info">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <label for="Gender"></label>
        <input type="radio" id="yes" value="はい" @click="nextQuestion2" v-model="question2" @change="setQuestion"> はい
        <input type="radio" id="no" value="いいえ" @click="nextQuestion2" v-model="question2" @change="setQuestion"> いいえ
        <br><br>
        <span>choice: {{ question2 }}</span>
    </div>
    <br><br>
    <div v-if="select2">
      <p class="has-text-info">過去5年以内に、病気やけがで手術をうけたこと、または継続して7日以上の入院をしたことがありますか？</p>
      <label for="Gender"></label>
      <input type="radio" id="yes" value="はい" v-model="question3" @change="setQuestion"> はい
      <input type="radio" id="no" value="いいえ" v-model="question3" @change="setQuestion"> いいえ
      <br><br>
      <span>choice: {{ question3 }}</span>
    </div>
    <br>
    <button class="button is-primary" @click="back">前へ</button>
    <button class="button is-primary" @click="next">次へ</button>
  </div>
</template>

<script>
export default {
  data() {
		return {
      question1:'',
      question2: '',
      question3: '',
      select: false,
      select2: false
		}
  },
	methods: {
    setQuestion() {
      this.$store.commit('setQuestion', {
        question1: this.question1, 
        question2: this.question2, 
        question3: this.question3, 
      })
    },
    nextQuestion() {
      this.select = !this.select
    },
    nextQuestion2() {
      this.select2 = !this.select2
    },
    back() {
			this.$router.push('/')
		},
    next() {
      this.$router.push('/textMessage')
    }
	}
}
</script>

<style>
button {
  margin: 5px;
}

</style>