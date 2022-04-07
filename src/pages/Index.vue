<template>
  <q-page class="flex flex-center column">
    <div class="flex-center" style="max-width: 400px">
      <form @submit.prevent.stop="onSubmit"  class="q-gutter-md">
      <q-input
        ref="nameRef"
        filled
        v-model="enterInput"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="nameRules"
      />

      <div>
         <router-link :to="{ name: 'enter' }" >
        <q-btn
        type="submit"
          class="q-mt-sm"
          label="Войти в игру"
          @click="sendUser(enterInput)"
          color="primary"
        />
      </router-link>
        <!-- <q-btn label="Submit" type="submit" color="primary" /> -->
      </div>
    </form>

      <!-- <q-input
        filled
        label="Введите имя"
        v-model="enterInput"
        aria-required="name"
        :rules="[(val) => val.length >= 3 || 'Please use minimum 3 characters']"
      />

      <router-link :to="{ name: 'enter' }" >
        <q-btn
          class="q-mt-sm"
          label="Войти в игру"
          @click="sendUser(enterInput)"
          color="primary"
        />
      </router-link> -->
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { defineComponent } from "vue";
import { mapActions } from 'vuex';


export default defineComponent({
  name: "PageIndex",
  setup() {
     const $q = useQuasar()

    const enterInput = ref(null)
    const nameRef = ref(null)
    return {
      enterInput,
      nameRef,
      nameRules: [
        val => (val && val.length > 0) || 'Please type something'
      ],

      onSubmit () {
        nameRef.value.validate()

        if (nameRef.value.hasError) {
          // form has error
        }
        else if (accept.value !== true) {
          $q.notify({
            color: 'negative',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            icon: 'done',
            color: 'positive',
            message: 'Submitted'
          })
        }
      },
    };
  },
   methods: {
    ...mapActions([
      'GET_USER', //also supports payload `this.nameOfAction(amount)` 
    ]),
    sendUser(enterInput){
      alert('Game started')
      this.GET_USER(enterInput)
      console.log(this.enterInput)
    }

  },
});
</script>
