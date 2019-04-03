<template>
  <draggable
    :value="column.data"
    tag="article"
    :group="{ name: 'report', pull: false }"
    @change="addType"
  >
    <article>
      {{ column.type }}
    </article>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'ReportColumn',
  components: {
    draggable
  },
  props: {
    columnIndex: {
      type: Number,
      default: 0
    },
    sectionIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    column: {
      get() {
        return this.$store.state.reportTemplate.sections[this.sectionIndex]
          .columns[this.columnIndex]
      },
      set(val) {
        // eslint-disable-next-line
        console.log(val)
        this.$store.commit('reportTemplate/UPDATE_COLUMN', {
          value: val,
          index: this.sectionIndex
        })
      }
    }
  },
  methods: {
    addType: function({ added }) {
      this.$store.commit('reportTemplate/UPDATE_COLUMN', {
        value: added.element,
        sectionIndex: this.sectionIndex,
        columnIndex: this.columnIndex
      })
    }
  }
}
</script>
