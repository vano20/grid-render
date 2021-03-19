<template>
  <v-row>
    <template v-for="(col, index) in dataSet">
      <v-col :cols="col.defaultWide" :key="index">
        <template v-if="isHasChild(col)">
          <RowCol :dataSet="sortArray(col.child)" />
        </template>
        <template v-else>
          <EmptyCard :title="col.content" />
        </template>
      </v-col>
    </template>
  </v-row>
</template>
<script>
import EmptyCard from './EmptyCard'
import RowCol from './RowCol.vue'

export default {
  name: 'RowCol',
  components: {
    EmptyCard,
    RowCol,
  },
  props: {
    dataSet: Array,
  },
  methods: {
    isHasChild(object) {
      return Object.prototype.hasOwnProperty.call(object, 'child')
    },
    sortArray(array) {
      const newArray = [...array]
      return newArray.sort((a, b) => a.order - b.order)
    },
  },
}
</script>
