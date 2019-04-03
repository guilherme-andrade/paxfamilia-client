<template>
  <div>something</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Insurances',
  computed: {
    ...mapGetters(['companyUnits'])
  },
  mounted() {
    this.$store.dispatch('companyUnits/GET')
  }
}
</script>
