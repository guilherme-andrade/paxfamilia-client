<template>
  <draggable
    v-model="list"
    tag="section"
    class="dropzone bg-gray-200 rounded px-4 py-3 h-100"
    :options="{ group: 'people' }"
  >
    <transition-group name="something">
      <card v-for="(card, index) in list" :key="index" :card="card" />
    </transition-group>
  </draggable>
</template>

<script>
import Card from '~/components/kanban/card'
import draggable from 'vuedraggable'

export default {
  name: 'List',
  components: {
    draggable,
    Card
  },
  props: {
    listIndex: {
      type: Number,
      default: function() {
        return 0
      }
    }
  },
  computed: {
    list: {
      get() {
        return this.$store.state.kanban.lists[this.listIndex].cards
      },
      set(val) {
        this.$store.commit('kanban/UPDATE_LIST', {
          list: val,
          index: this.listIndex
        })
      }
    }
  }
}
</script>

<style>
.dropzone span {
  height: 100%;
  display: block;
}
</style>
