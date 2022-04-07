<template>
  <button class="question-item"  :disabled="isDisabled" >
    <div >
      <p class="list-item"  @click="openModal" v-if="questions_data.category_id === 11496"  >
        {{ questions_data.value }}
      </p>

      <p class="list-item" @click="openModal" v-if="questions_data.category_id === 11498">
        {{ questions_data.value }}
      </p>

      <p class="list-item" @click="openModal" v-if="questions_data.category_id === 11499">
        {{ questions_data.value }}
      </p>

      <p class="list-item" @click="openModal" v-if="questions_data.category_id === 11504">
        {{ questions_data.value }}
      </p>

      <p class="list-item" @click="openModal" v-if="questions_data.category_id === 11544">
        {{ questions_data.value }}
      </p>
    </div>
    <!-- modal -->
    <div>
      <q-dialog v-model="dialog" persistent>
        <q-card>
          <div class="modal-content">
            <div class="modal-item" v-if="questions_data.category_id === 11496">
              <p class="item-question">
                {{ questions_data.question }}
              </p>
              <p class="item-question">
                {{ questions_data.answer }}
              </p>
              <input type="text" v-model="answer" />
              <div>
                <q-btn
                  color="primary"
                  label="Ответить"
                  @click.stop.prevent="checkAnswer(questions_data.id)"
                />
              </div>
            </div>
            <div class="modal-item" v-if="questions_data.category_id === 11498">
              <p class="item-question">
                {{ questions_data.question }}
              </p>
              <p class="item-question">
                {{ questions_data.answer }}
              </p>
              <input type="text" v-model="answer" />
              <div>
                <q-btn
                  color="primary"
                  label="Ответить"
                  @click.stop.prevent="checkAnswer(questions_data.id)"
                />
              </div>
            </div>
            <div class="modal-item" v-if="questions_data.category_id === 11499">
              <p class="item-question">
                {{ questions_data.question }}
              </p>
              <p class="item-question">
                {{ questions_data.answer }}
              </p>
              <input type="text" v-model="answer" />
              <div>
                <q-btn
                  color="primary"
                  label="Ответить"
                  @click.stop.prevent="checkAnswer(questions_data.id)"
                />
              </div>
            </div>
            <div class="modal-item" v-if="questions_data.category_id === 11504">
              <p class="item-question">
                {{ questions_data.question }}
              </p>
              <p class="item-question">
                {{ questions_data.answer }}
              </p>
              <input type="text" v-model="answer" />
              <div>
                <q-btn
                  color="primary"
                  label="Ответить"
                  @click.stop.prevent="checkAnswer(questions_data.id)"
                />
              </div>
            </div>
            <div class="modal-item" v-if="questions_data.category_id === 11544">
              <p class="item-question">
                {{ questions_data.question }}
              </p>
              <p class="item-question">
                {{ questions_data.answer }}
              </p>
              <input type="text" v-model="answer" />
              <div>
                <q-btn
                  color="primary"
                  label="Ответить"
                  @click.stop.prevent="checkAnswer(questions_data.id)"
                />
              </div>
            </div>
          </div>

          <!-- Notice v-close-popup -->
          <q-card-actions align="right">
            <q-btn flat label="close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </button>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Question-item",
  setup() {
    // const progress = ref(60);
    return {
      isModalOpened: true,
      dialog: ref(false),
      cancelEnabled: ref(false),
      answer: "",
      isDisabled: false,
      // isAnswered: true,
      counter: 0,
      counter1: 0,
      // randomize() {
      //   progress.value = timerCount
      // },
    };
  },
  props: {
    questions_data: {
      type: Object,
      default() {},
    },
  },

  computed: {},
  methods: {
    ...mapActions([
      "GET_TRUE_ANSWER_FROM_USER",
      "GET_FALSE_ANSWER_FROM_USER",
      "GET_TOTAL_VALUE"
    ]),
    openModal() {
      this.dialog = true;
      setTimeout(() => {
        this.dialog = false;
      }, 30000);
    },
    checkAnswer() {
      if (this.answer.toLowerCase() === this.questions_data.answer.toLowerCase()) {
        let count = this.counter+1
        this.GET_TRUE_ANSWER_FROM_USER(count)
        let total = this.questions_data.value
        this.GET_TOTAL_VALUE(total)
        this.isDisabled = true;
      } else {  
        let count1 = this.counter1+1
        this.GET_FALSE_ANSWER_FROM_USER(count1)
        let total = this.questions_data.value
        this.GET_TOTAL_VALUE(-total)
        this.isDisabled = true;
      }
      this.answer = "";
      this.dialog = false;
    },
  },
  mounted() {
    // console.log('questions data in store', this.QUESTIONS);
    // setTimeout(() => {
    //   console.log('item', this.questions_data)
    // })
  },
});
</script>

<style scoped>
.question-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0;
  background: rgb(193, 255, 106);
  /* padding: 2px;   */
  height: 50px;
  width: 80px;
  flex-wrap: wrap;
}
.item-question {
  font-size: 16px;
  width: 100%;
}
.modal-content{
  padding: 0;
  margin: 0;
}
.modal-item {
  background: rgb(94, 94, 94);
  padding: 10%;
  color: #fff;
  width: 500px;
}
.list-item{
  margin: 0;
  padding: 0;
}
</style>
