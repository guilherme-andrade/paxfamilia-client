<template>
  <b-row>
    <b-col>
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        :move="onMove"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" :name="'flip-list'">
          <li
            class="list-group-item border-gray-100"
            v-for="element in list"
            :key="element.order"
          >
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            {{ element.name }}
            <span class="badge">{{ element.order }}</span>
          </li>
        </transition-group>
      </draggable>
    </b-col>

    <b-col>
      <draggable
        element="span"
        v-model="list2"
        v-bind="dragOptions"
        :move="onMove"
      >
        <transition-group name="no" class="list-group" tag="ul">
          <li
            class="list-group-item border-gray-100"
            v-for="element in list2"
            :key="element.order"
          >
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            {{ element.name }}
            <span class="badge">{{ element.order }}</span>
          </li>
        </transition-group>
      </draggable>
    </b-col>
  </b-row>
</template>

<script>
import draggable from 'vuedraggable'
const message = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs'
]

export default {
  name: 'hello',
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false }
      }),
      list2: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
