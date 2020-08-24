<template>
  <div>
    <h1 class="button is-info is-medium">STEP.01</h1>
    <br><br>
    <p class="is-size-4 has-text-weight-bold hero is-primary">お客様の情報を入力してください</p>
    <div class="section">
      <p class="has-text-info"> -性別- </p>
      <br>
      <input type="radio" id="man" value="男性" v-model="gender"> 男性
      <input type="radio" id="woman" value="女性" v-model="gender"> 女性
      <br><br>
      <span>gender: {{ gender }}</span>
    </div> 
    <div>	
      <p class="has-text-info"> -生年月日- </p>
      <br>
      <div class="select is-dark">
        <select id="year" v-model="year">
          <option disabled value="">Please select one</option>
          <option v-for="i in 100" :value="i + 1920" :key="i">{{ (i + 1920) | nengo }}</option>
        </select>
        <span>year: {{ year }}</span>
      </div>
          年
      <div class="select is-dark">
        <select v-model="month">
          <option disabled value="">Please select one</option>
          <option v-for="month of 12" :key="month">{{ month }}</option>
        </select>
        <span>month: {{ month }}</span>
      </div>
          月
      <div class="select is-dark">
        <select v-model="date">
          <option disabled value="">Please select one</option>
          <option v-for="date of 31" :key="date">{{ date }}</option>
        </select>
        <span>date: {{ date }}</span>
      </div>
          日	
    </div>
    <br><br>
    <button class="button is-primary" @click="next">次へ</button>
  </div>
</template>

<script>
export default {
  computed: {
    gender: {
      get() {
        return this.$store.state.gender
      },
      set(value) {
        this.$store.commit('userGender', value);
      }
    },
    year: {
      get() {
        return this.$store.state.year
      },
      set(value) {
        this.$store.commit('userYear', value);
      }
    },
    month: {
      get() {
        return this.$store.state.month
      },
      set(value) {
        this.$store.commit('userMonth', value);
      }
    },
    date: {
      get() {
        return this.$store.state.date
      },
      set(value) {
        this.$store.commit('userDate', value);
      }
    },
  },
  methods: {
    next() {
      this.$router.push('/question')
    }
  },
  filters: {
		nengo(y) {
			let result;
			if (y > 2018) {
				result = `${y} (令和${y-2018}年)`;
			} else if (y > 1988) {
				result = `${y} (平成${y-1988}年)`;
			} else if (y > 1925) {
				result = `${y} (昭和${y-1925}年)`;
			} else if (y > 1911) {
				result = `${y} (大正${y-1911}年)`;
			}
			return result;
		}
	}
}
</script>

<style scoped>
</style>