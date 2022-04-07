<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <span>
          <i class="material-icons" @click="closePopup">close</i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot> </slot>
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">close</button>
        <button class="submit_btn"
          @click="rightBtnAction"
        >{{ rightBtnTitle }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    rightBtnTitle: {
      type: String,
      default: "OK",
    },
    popupTitle: {
      type: String,
      default: "Popup name",
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    rightBtnAction(){
      this.$emit('rightBtnAction')
    }
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function(item) {
      if(item.target === vm.$refs["popup_wrapper"]){
        vm.closePopup()
      }
    })
  }
};
</script>

<style lang="scss">
.popup_wrapper {
  background: rgba(64,64,64, .4);
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  right: 0;
  left: 0;
  height: 100%;
  top: 0;
  bottom: 0;
  .v-popup {
    padding: $padding * 2;
    position: fixed;
    top: 10px;
    width: 400px;
    border: 1px solid rgb(191, 184, 184);
    background: rgb(255, 219, 141);
    z-index: 10;
    &__header,
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submit_btn {
      padding: $padding * 2;
      color: #fff;
      background: $blue-bg;
      outline: none;
      border: 1px solid black;
      border-radius: $radius;
    }
    .close_modal {
      padding: $padding;
      color: #fff;
      background: #fc2929;
      border: none;
    }
  }
}
</style>