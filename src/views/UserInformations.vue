<template>
  <div>
    <div>
      <h1 class="button is-info is-medium">STEP.01</h1>
    </div>
    <div>
      <p class="is-size-4 has-text-weight-bold hero is-primary">お客様の情報を入力してください</p>
    </div>
    <div>
      <div>
        <p class="has-text-info">-性別-</p>
      </div>
      <div>
        <input type="radio" id="man" value="男性" v-model="gender" @change="setUser" /> 男性
        <input type="radio" id="woman" value="女性" v-model="gender" @change="setUser" /> 女性
      </div>
      <div>
        <span>gender: {{ gender }}</span>
      </div>
    </div>
    <div>
      <p class="has-text-info">-生年月日-</p>
    </div>
    <div class="birthday">
      <div class="select is-dark">
        <select id="year" v-model="year" @change="setUser">
          <option disabled value>Please select one</option>
          <option
            v-for="selectYear in selectYears"
            :value="selectYear.year"
            :key="selectYear.year"
          >{{ selectYear.label }}</option>
        </select>
        <div>
          <span>year: {{ year }}</span>
        </div>
      </div>年
      <div class="select is-dark">
        <select v-model="month" @change="setUser">
          <option disabled value>Please select one</option>
          <option v-for="month of 12" :key="month">{{ month }}</option>
        </select>
        <div>
          <span>month: {{ month }}</span>
        </div>
      </div>月
      <div class="select is-dark" @change="setUser">
        <select v-model="day" @change="setUser">
          <option disabled value>Please select one</option>
          <option v-for="day of 31" :key="day">{{ day }}</option>
        </select>
        <div>
          <span>day: {{ day }}</span>
        </div>
      </div>日
    </div>
    <div>
      <button class="button is-primary" @click="next">次へ</button>
    </div>
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
      selectYears: [],
    };
  },
  mounted() {
    this.selectYears = this.defineGenerationsOfBirth();
  },
  methods: {
    setUser() {
      this.$store.commit("setUser", {
        gender: this.gender,
        year: this.year,
        month: this.month,
        day: this.day,
      });
    },
    next() {
      this.$router.push("/choiceQuestions");
    },
    defineGenerationsOfBirth() {
      const selectYears = [];
      for (let y = 1920; y < 2021; y++) {
        if (y < 1926) {
          selectYears.push({ year: y, label: `${y} (大正${y - 1911})` });
        } else if (y < 1989) {
          selectYears.push({ year: y, label: `${y} (昭和${y - 1925})` });
        } else if (y < 2019) {
          selectYears.push({ year: y, label: `${y} (平成${y - 1988})` });
        } else if (y < 2021) {
          selectYears.push({ year: y, label: `${y} (令和${y - 2018})` });
        }
      }
      return selectYears;
    },
  },
};
</script>

<style scoped>
.birthday {
  display: flex;
  margin: 0;
}
</style>