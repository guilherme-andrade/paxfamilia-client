<template>
  <article class="bg-white rounded box-shadow px-3 py-3 mb-3 shadow-sm">
    <p class="mb-0">{{ card.data.name }}</p>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default: function() {
        return { data: { name: '' } }
      }
    }
  }
}
</script>
