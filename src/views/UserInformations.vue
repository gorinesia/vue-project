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
        <input type="radio" id="man" value="男性" v-model="gender" /> 男性
        <input type="radio" id="woman" value="女性" v-model="gender" /> 女性
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
        <select id="year" v-model="year">
          <option disabled value="">Please select one</option>
          <option v-for="nengo in nengoes" :value="nengo.year" :key="nengo.year">{{ nengo.label }}</option>nen
        </select>
        <div>
          <span>year: {{ year }}</span>
        </div>
      </div>年
      <div class="select is-dark">
        <select v-model="month">
          <option disabled value="">Please select one</option>
          <option v-for="month of 12" :key="month">{{ month + '月' }}</option>
        </select>
        <span>month: {{ month }}</span>
      </div>月
      <div class="select is-dark">
        <select v-model="day" @change="setUser">
          <option disabled value="">Please select one</option>
          <option v-for="day of 31" :key="day">{{ day }}</option>
        </select>
        <span>day: {{ day }}</span>
      </div>
          日
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
      nengoes: [],
    }
  },
  computed: {
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit("updateGender", value);
      },
    },
    year: {
      get() {
        return this.$store.state.year;
      },
      set(value) {
        this.$store.commit("updateYear", value);
      },
    },
    month: {
      get() {
        return this.$store.state.month;
      },
      set(value) {
        this.$store.commit("updateMonth", value);
      },
    },
    day: {
      get() {
        return this.$store.state.day;
      },
      set(value) {
        this.$store.commit("updateDay", value);
      },
    },
  },
  mounted() {
    this.nengoes = this.generate();
  },
  methods: {
    next() {
      this.$router.push("/choiceQuestions");
    },
    generate() {
      const nengoes = [];
      for (let y = 1920; y < 2021; y++) {
        if (y < 1926) {
          nengoes.push({'year': y, 'label': `${y} (大正${y - 1911})`});
        } else if (y < 1989) {
          nengoes.push({'year': y, 'label': `${y} (昭和${y - 1925})`});
        } else if (y < 2019) {
          nengoes.push({'year': y, 'label': `${y} (平成${y - 1988})`});
        } else if (y < 2021) {
          nengoes.push({'year': y, 'label': `${y} (令和${y - 2018})`});
        }
      }
      return nengoes;
    }
  }
};
</script>

<style scoped>
.birthday {
  display: flex;
  margin: 0 auto;
}

</style>