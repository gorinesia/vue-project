<template>
  <div>
    <h1 class="button is-info is-medium">STEP.02</h1>
    <p class="is-size-4 has-text-weight-bold hero is-primary">以下にお答えください</p>
    <br>
    <div>
      <p class="has-text-info">現在、生命保険に加入されていますか？</p>
      <label for="Gender"></label>
      <input type="radio" id="yes" value="はい" @click="ok = !ok" v-model="picked1"> はい
      <input type="radio" id="no" value="いいえ" @click="ok = !ok" v-model="picked1"> いいえ
      <br><br>
      <span>select: {{ picked1 }}</span>
    </div>	
    <br><br>
    <div v-if="ok">
      <p class="has-text-info">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <label for="Gender"></label>
        <input type="radio" id="yes" value="はい" @click="ok2 = !ok2" v-model="picked2"> はい
        <input type="radio" id="no" value="いいえ" @click="ok2 = !ok2" v-model="picked2"> いいえ
        <br><br>
        <span>select: {{ picked2 }}</span>
    </div>
    <br><br>
    <div v-if="ok2">
      <p class="has-text-info">過去5年以内に、病気やけがで手術をうけたこと、または継続して7日以上の入院をしたことがありますか？</p>
      <label for="Gender"></label>
      <input type="radio" id="yes" value="はい" v-model="picked3"> はい
      <input type="radio" id="no" value="いいえ" v-model="picked3"> いいえ
      <br><br>
      <span>select: {{ picked3 }}</span>
    </div>
    <button class="button is-primary" @click="back">前へ</button>
    <button class="button is-primary" @click="next">次へ</button>
  </div>
</template>

<script>
export default {
  data: function(){
		return {
				picked: '',
				picked1: '',
				picked2: '',
				picked3: '',
				ok: false,
				ok2: false
		}
	},
	methods: {
    back() {
			this.$router.push('/')
		},
    next() {
      this.$router.push('/birthday')
    }
	}
}
</script>

<style>
button {
  margin: 5px;
}

</style>