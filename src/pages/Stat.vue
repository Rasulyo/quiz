<template>
  <q-page class="flex flex-center column">
    <div class="flex-center" style="max-width: 400px">
        <h1>Stats</h1>
    </div>
    <div style="display: flex; justify-content: center">
      <ul class="flex q-pa" bordered>
        <li>Name:{{USER}} </li>
        <li>Quantity of played questions: {{gotTotalQuantity}} </li>
        <li>True:{{gotTrueAnswers}}</li>
        <li>False:{{gotFalseAnswers}} </li>
        <li>Total:{{TOTAL_VALUE}} </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import {mapGetters} from 'vuex'
export default defineComponent({
  name: "Stat",
  setup() {
    return {
    
    };
  },
  computed: {
    ...mapGetters([
        "USER",
        "TRUE_ANSWERS",
        "FALSE_ANSWERS",
        "TOTAL_VALUE"
      ]),
    gotTotalQuantity(){
      return this.FALSE_ANSWERS + this.TRUE_ANSWERS
    },
    gotTrueAnswers(){
        console.log(this.TRUE_ANSWERS)
        return this.TRUE_ANSWERS
    },
     gotFalseAnswers(){
        console.log(this.FALSE_ANSWERS)
    return this.FALSE_ANSWERS
    },
  
  },
  methods: {},
  mounted(){
    this.$store.state.gameStarted;

  }
  
});
</script>

<style scoped>

ul {
  display: flex;
  justify-content: center;
  position: fixed;
  /* left: 30%; */
  margin: 0 auto;
  bottom: 10px;
}
li {
  border: 1px solid black;
  margin: 0 auto;
  padding: 10px;
  list-style-type: none;
}
</style>
