<template>
  <td>
    <button class="cell__button" v-on:click="changeValue(externalData)" v-show="!visible">{{externalData}}
    </button>
    <input class="cell__input" v-show="visible" type="text" ref="activeInput" v-model="externalData"
           v-on:blur="cancel()"
           v-on:keyup.enter="submitValue(externalData)">
  </td>
</template>

<script>
  export default {
    name: 'TableCell',
    props: ['data'],
    data() {
      return {
        externalData: null,
        visible: false,
        submitted: false
      }
    },
    created() {
      this.externalData = this.data;
    },
    methods: {
      changeValue(data) {
        this.visible = true;
        this.submitted = false;
        this.$nextTick(() => {
          this.$refs.activeInput.focus();
        })
      },
      submitValue() {
        this.$emit('update:data', this.externalData);
        this.visible = false;
        this.submitted = true;
      },
      cancel() {
        if (this.submitted === true) {
          return
        }
        this.visible = false;
        this.externalData = this.data;
      }
    }
  }
</script>

<style scoped lang="scss">
  .cell {
    &__button {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      text-align: inherit;
      padding: 15px;
      font-size: inherit;
      cursor: pointer;
      box-sizing: border-box;
    }
    &__input {
      padding: 15px;
      width: 100%;
      box-sizing: border-box;
      outline: none;
      border: none;
      text-align: inherit;
      font-size: 14px;
    }
  }
</style>
