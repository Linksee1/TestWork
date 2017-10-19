<template>
  <table>
    <thead>
    <tr>
      <th>Наименование</th>
      <th class="table__cell_right">Количество</th>
      <th class="table__cell_right">Цена</th>
      <td></td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(i, index) in tableData" :key="i.__ob__.dep.id">
      <table-cell role="button" title="Редактировать значение" class="table__button table__button_edit" :data="i.name"
                  @update:data="val => i.name = val"></table-cell>
      <table-cell role="button" title="Редактировать значение" class="table__cell_right table__button table__button_edit"
                  :data="i.quantity" @update:data="val => i.quantity = val"></table-cell>
      <table-cell role="button" title="Редактировать значение" class="table__cell_right table__button table__button_edit"
                  :data="i.price" @update:data="val => i.price = val"></table-cell>
      <td role="button" class="table__button_wrapper">
        <button title="Удалить строку" class="table__button" v-on:click="removeLine(index)">Х</button>
      </td>
    </tr>
    </tbody>
    <tfoot>

    <tr>
      <td>Итого:</td>
      <td class="table__cell_right">{{calculateSum("quantity")}}</td>
      <td class="table__cell_right">{{calculateSum("price")}}</td>
      <td></td>
    </tr>
    <tr>
      <td class="table__button_wrapper" colspan="4" style="text-align: center" v-on:click="addLine()">
        <button class="table__button">Добавить строку</button>
      </td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
  import TableCell from './TableCell.vue';

  export default {
    name: 'TableBlock',
    components: {
      TableCell
    },
    data() {
      return {
        tableData: []
      }
    },
    created() {
      this.$http.get('/static/data.json').then((response) => {
        this.tableData = response.body;
      });
    },
    methods: {
      addLine() {
        this.tableData.push({
          "name": "Наименование",
          "quantity": "0",
          "price": "0"
        });
      },
      removeLine(i) {
        let tempArr = this.tableData;
        tempArr.splice(i, 1);
      },
      calculateSum(type) {
        let sum = 0;
        for (let i in this.tableData) {
          sum += +this.tableData[i][type];
        }
        return sum;
      }
    },
    watch: {
      tableData: {
        handler: function (newValue) {
          console.log(newValue)
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss">
  tr {
    border-bottom: 2px solid #858585;
  }
  td, th {
    padding: 15px;
  }

  th, tfoot{
    font-size: 15px;
    text-align: left;
  }

  .table {
    &__cell {
      &_right {
        text-align: right;
      }
    }
    &__button {
      background-color: transparent;
      outline: none;
      border: none;
      text-transform: uppercase;
      cursor: pointer;
      width: 100%;
      transition: background-color 250ms ease;
      padding: 15px;
      &:hover {
        background-color: #dff6f5;
      }
      &_edit {
        width: 33%;
        text-transform: none;
        padding: 0;
      }
      &_wrapper {
        padding: 0;
      }
    }
  }

</style>
