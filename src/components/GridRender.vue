<template>
  <v-container fluid>
    <template v-for="(row, index) in dataRows">
      <RowCol :dataSet="row.child" :key="index" />
    </template>
  </v-container>
</template>
<script>
import RowCol from './RowCol.vue'
import dataset from '../data/dataset'
export default {
  components: { RowCol },
  name: 'GridRender',
  data: () => ({
    dataObject: dataset,
  }),
  computed: {
    dataRows() {
      return this.sortArray(this.dataObject.data.rows)
    },
  },
  methods: {
    sortArray(array) {
      const newArray = [...array]
      return newArray.sort((a, b) => a.order - b.order)
    },
  },
}
</script>
