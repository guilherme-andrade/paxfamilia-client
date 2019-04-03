<template>
  <b-row>
    <b-col v-for="(list, index) in kanbanLists" :key="index">
      <list :list-index="index" :name="list.name" />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'

import List from '~/components/kanban/list'

export default {
  name: 'Board',
  components: {
    List
  },
  computed: {
    ...mapGetters({
      kanbanLists: 'kanban/lists'
    })
  }
}
</script>
