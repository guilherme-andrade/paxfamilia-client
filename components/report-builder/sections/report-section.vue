<template>
  <div>
    <draggable
      v-model="columns"
      tag="section"
      class="dropzone px-4 py-3 row"
      :options="{ group: 'columns' }"
    >
      <report-column
        v-for="(column, index) in columns"
        :key="index"
        class="border border-dashed p-4 mb-3"
        :column-index="index"
        :section-index="sectionIndex"
        :class="numberOfColumns(column.width)"
      />

      <b-button
        slot="footer"
        v-b-modal="`${sectionIndex}`"
        variant="default"
        class="w-100 bg-gray-100 rounded-0 justify-self-end"
      >
        <font-awesome-icon :icon="['fal', 'plus']" />
      </b-button>
    </draggable>

    <b-modal
      :id="`${sectionIndex}`"
      :ref="`modal-${sectionIndex}`"
      size="xl"
      centered
      hide-footer
      hide-header
    >
      <b-row class="min-h-50vh text-center align-items-center spacer-pb-6">
        <b-col cols="12">
          <h3 class="py-4">
            How many columns would you like to add?
          </h3>
        </b-col>
        <b-col cols="4" class="pl-5">
          <button
            class="btn btn-light border border-dashed responsive-square"
            @click="addColumns(1)"
          >
            <span
              class="object-overlay d-flex align-items-center justify-content-center flex-column"
            >
              <span class="h-5rem d-flex">
                <span
                  class="border bg-gray-700 rounded h-100 w-2rem mx-1"
                ></span>
              </span>
              <p class="h5 mt-2">One</p>
            </span>
          </button>
        </b-col>
        <b-col cols="4" class="pr-5">
          <button
            class="btn btn-light border border-dashed responsive-square"
            @click="addColumns(2)"
          >
            <span
              class="object-overlay d-flex align-items-center justify-content-center flex-column"
            >
              <span class="h-5rem d-flex">
                <span
                  class="border bg-gray-700 rounded h-100 w-2rem mx-1"
                ></span>
                <span
                  class="border bg-gray-700 rounded h-100 w-2rem mx-1"
                ></span>
              </span>
              <p class="h5 mt-2">Two</p>
            </span>
          </button>
        </b-col>
        <b-col cols="4" class="pr-5">
          <button
            class="btn btn-light border border-dashed responsive-square"
            @click="addColumns(3)"
          >
            <span
              class="object-overlay d-flex align-items-center justify-content-center flex-column"
            >
              <span class="h-5rem d-flex">
                <span
                  class="border bg-gray-700 rounded h-100 w-2rem mx-1"
                ></span>
                <span
                  class="border bg-gray-700 rounded h-100 w-2rem mx-1"
                ></span>
                <span
                  class="border bg-gray-700 rounded h-100 w-2rem mx-1"
                ></span>
              </span>
              <p class="h5 mt-2">Three</p>
            </span>
          </button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ReportColumn from '~/components/report-builder/sections/report-column'
export default {
  name: 'ReportSection',
  components: {
    draggable,
    ReportColumn
  },
  props: {
    sectionIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    columns: {
      get() {
        return this.$store.state.reportTemplate.sections[this.sectionIndex]
          .columns
      },
      set(val) {
        this.$store.commit('reportTemplate/UPDATE_SECTION', {
          value: val,
          index: this.sectionIndex
        })
      }
    }
  },
  methods: {
    addColumns(number) {
      this.$store.commit('reportTemplate/ADD_COLUMNS', {
        number: number,
        sectionIndex: this.sectionIndex
      })
      this.$refs[`modal-${this.sectionIndex}`].hide()
    },
    numberOfColumns(width) {
      return `col-${(12 * width) / 100}`
    }
  }
}
</script>
