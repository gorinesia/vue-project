<template>
  <div>
    <h1 class="button is-info is-medium">STEP.01</h1>
    <br />
    <br />
    <p class="is-size-4 has-text-weight-bold hero is-primary">お客様の情報を入力してください</p>
    <div class="section">
      <p class="has-text-info">-性別-</p>
      <br />
      <input type="radio" id="man" value="男性" v-model="gender" /> 男性
      <input type="radio" id="woman" value="女性" v-model="gender" /> 女性
      <br />
      <br />
      <span>gender: {{ gender }}</span>
    </div>
    <div>
      <p class="has-text-info">-生年月日-</p>
      <br />
      <div class="select is-dark">
        <select id="year" v-model="year">
          <option disabled value="">Please select one</option>
          <option v-for="nengo in nengoes" :value="nengo.year" :key="nengo.year">{{ nengo.label }}</option>
        </select>
        <span>year: {{ year }}</span>
      </div>年
      <div class="select is-dark">
        <select v-model="month">
          <option disabled value="">Please select one</option>
          <option v-for="month of 12" :key="month">{{ month + '月' }}</option>
        </select>
        <span>month: {{ month }}</span>
      </div>月
      <div class="select is-dark">
        <select v-model="day">
          <option disabled value="">Please select one</option>
          <option v-for="day of 31" :key="day">{{ day + '日' }}</option>
        </select>
        <span>day: {{ day }}</span>
      </div>日
    </div>
    <br />
    <br />
    <button class="button is-primary" @click="next">次へ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "",
      year: "",
      month: "",
      day: "",
      nengoes: [],
    }
  },
  mounted() {
    this.nengoes = this.generate();
  },
  methods: {
    next() {
      this.$router.push("/question");
    },
    generate() {
      const nengoes = [];
      for (let y = 1920; y < 2021; y++) {
        if (y < 1926) {
          nengoes.push({'year': y, 'label': `${y} (大正${y - 1911}年)`});
        } else if (y < 1989) {
          nengoes.push({'year': y, 'label': `${y} (昭和${y - 1925}年)`});
        } else if (y < 2019) {
          nengoes.push({'year': y, 'label': `${y} (平成${y - 1988}年)`});
        } else if (y < 2021) {
          nengoes.push({'year': y, 'label': `${y} (令和${y - 2018}年)`});
        }
      }
      return nengoes;
    }
  }
};
</script>