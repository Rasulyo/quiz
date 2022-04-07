<template>
  <div>
    <div>
      <q-btn
        outline
        text-center
        style="color: goldenrod; display: flex; margin: 20px auto"
        label="Go"
        @click="startGame()"
        v-if="!isStarted"
      />
    </div>
    <q-page class="column" v-if="isStarted" >
      <div class="flex-center" style="max-width: 400px"></div>
      <div class="game-content">
        <div>
          <div class="game-categories" v-for="item of gotCatergories" :key="item.id">
            <p class="cat-title">
              {{ item.title }}
            </p>
          </div>
        </div>
        <div class="flex">
          <questionItem
            v-for="elem of gotQuestions"
            :questions_data="elem"
            :key="elem.id"
          >
          </questionItem>
        </div>
      </div>
      <div style="display: flex; justify-content: center">
        <ul class="flex q-pa" bordered>
          <li>Name:{{ USER }}</li>
          <li>Quantity of played questions: {{ gotTotalQuantity }}</li>
          <li>True:{{ gotTrueAnswers }}</li>
          <li>False:{{ gotFalseAnswers }}</li>
          <li>Total:{{ TOTAL_VALUE }}</li>
        </ul>
        <router-link :to="{ name: 'main' }">
          <q-btn
            outline
            style="color: red; display: flex; margin: 20px auto"
            label="Finish"
            @click="deleteStats"
          />
        </router-link>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import questionItem from "./QuestionItem";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Enter",
  components: {
    questionItem,
  },
  data() {
    return {
      catergories: [],
      question: [],
      isStarted: false,
    };
  },
  computed: {
    ...mapGetters([
      "CATERGORIES",
      "QUESTIONS",
      "USER",
      "TRUE_ANSWERS",
      "FALSE_ANSWERS",
      "TOTAL_VALUE",
    ]),
    gotTotalQuantity() {
      return this.FALSE_ANSWERS + this.TRUE_ANSWERS;
    },
    gotCatergories() {
      let arr = [...this.CATERGORIES];
      return arr;
    },
    gotQuestions() {
      return this.QUESTIONS;
    },
    gotTrueAnswers() {
      console.log(this.TRUE_ANSWERS);
      return this.TRUE_ANSWERS;
    },
    gotFalseAnswers() {
      console.log(this.FALSE_ANSWERS);
      return this.FALSE_ANSWERS;
    },
    deleteStats() {
      return this.DELETE_INFO_STATE;
    },
  },
  methods: {
    ...mapActions([
      "GET_CATERGORIES_FROM_API",
      "GET_QUESTIONS_FROM_CATERGORIE",
      "SET_QUESTIONS",
      "DELETE_INFO_STATE",
    ]),
    startGame() {
      this.isStarted = true;
    },
    // startGame(){
    //   console.log(this.isStarted = true)
    //   // eslint-disable-next-line
    //   this.isStarted = true
    // }
  },
  mounted() {
    this.SET_QUESTIONS();
    this.GET_CATERGORIES_FROM_API();
    this.GET_QUESTIONS_FROM_CATERGORIE();
    this.USER;
    this.TRUE_ANSWERS;
    this.FALSE_ANSWERS;
    this.TOTAL_VALUE;
  },
});
</script>

<style scoped>
.game-content {
  display: flex;
  width: 500px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0 auto;
}

.game-categories {
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 50px;
  background: blueviolet;
}
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
