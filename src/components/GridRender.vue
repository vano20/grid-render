<template>
  <v-container fluid>
    <template v-for="(row, index) in dataRows">
      <RowCol :dataSet="row.child" :key="index" />
    </template>
  </v-container>
</template>
<script>
import RowCol from './RowCol.vue'
export default {
  components: { RowCol },
  name: 'GridRender',
  data: () => ({
    dataObject: {
      data: {
        rows: [
          {
            order: 1,
            defaultWide: 12,
            child: [
              {
                order: 1,
                content: 'row 1 col 1',
                defaultWide: 12,
              },
              {
                order: 2,
                content: 'row 1 col 2',
                defaultWide: 12,
              },
            ],
          },
          {
            order: 2,
            defaultWide: 12,
            child: [
              {
                order: 1,
                content: 'row 2 col 1',
                defaultWide: 6,
              },
              {
                order: 2,
                defaultWide: 6,
                child: [
                  {
                    order: 1,
                    content: 'row 2.2 col 1',
                    defaultWide: 12,
                  },
                  {
                    order: 2,
                    content: 'row 2.2 col 2',
                    defaultWide: 12,
                  },
                  {
                    order: 3,
                    content: 'row 2.2 col 3',
                    defaultWide: 12,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
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
