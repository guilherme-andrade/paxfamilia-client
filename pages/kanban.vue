<template>
  <div>
    <board />
  </div>
</template>

<script>
import Board from '~/components/kanban/board'
export default {
  components: {
    Board
  },
  auth: false
}
</script>
