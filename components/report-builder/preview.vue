<template>
  <draggable
    v-model="templateSections"
    tag="section"
    class="dropzone"
    :options="{ group: 'sections' }"
  >
    <transition-group name="sections">
      <report-section
        v-for="(section, index) in templateSections"
        :key="index"
        :section-index="index"
      />
    </transition-group>
  </draggable>
</template>

<script>
import ReportSection from '~/components/report-builder/sections/report-section'
export default {
  name: 'Preview',
  components: {
    ReportSection
  },
  computed: {
    templateSections: {
      get() {
        return this.$store.state.reportTemplate.sections
      },
      set(val) {
        this.$store.commit('reportTemplate/UPDATE', val)
      }
    }
  },
  methods: {
    addSection: function() {
      this.$store.commit('reportTemplate/ADD_SECTION')
    }
  }
}
</script>

<style>
.dropzone span {
  min-height: 100px;
}
</style>
