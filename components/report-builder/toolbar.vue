<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4 class="pb-2 mb-3">
          Widgets
        </h4>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <draggable
        v-model="widgets"
        tag="article"
        :group="{ name: 'report', pull: 'clone', put: false }"
        :clone="getType"
      >
        <b-col
          v-for="(widget, index) in widgets"
          :key="index"
          class="pr-2 pb-2"
          cols="12"
        >
          <div class="w-4rem">
            <article
              class="d-flex align-items-center justify-content-center bg-white shadow-sm rounded responsive-square"
            >
              <font-awesome-icon :icon="['fal', widget.icon]" class="w-7 h-7" />
            </article>
          </div>
        </b-col>
      </draggable>
    </b-row>
  </b-container>
</template>

<script>
import draggable from 'vuedraggable'
// import Chart from '~/components/chart'
export default {
  name: 'Toolbar',
  components: {
    draggable
  },
  data() {
    return {
      widgets: [
        {
          icon: 'chart-pie-alt',
          type: 'Chart'
        },
        {
          icon: 'analytics',
          type: 'barChart'
        },
        {
          icon: 'heading',
          type: 'title'
        },
        {
          icon: 'paragraph',
          type: 'paragraph'
        }
      ]
    }
  },
  methods: {
    getType: function(object) {
      // eslint-disable-next-line
      console.log(object.type)
      return object.type
    }
  }
}
</script>
