<template>
  <b-container fluid class="h-100">
    <b-row class="h-100">
      <b-col class="h-100 p-5" cols="3">
        <sections-list />
      </b-col>
      <b-col cols="6" class="h-100 p-5 bg-white rounded shadow-sm">
        <preview />
      </b-col>
      <b-col class="h-100 p-5" cols="3">
        <toolbar />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Toolbar from '~/components/report-builder/toolbar'
import Preview from '~/components/report-builder/preview'
import SectionsList from '~/components/report-builder/sections-list'
export default {
  name: 'ReportBuilder',
  components: {
    Toolbar,
    Preview,
    SectionsList
  },
  auth: false
}
</script>
