<template>
  <div
    class="position-absolute position-top-0 position-left-0 w-100vw h-100vh d-flex"
  >
    <sidebar />

    <section class="flex-grow-1 position-relative d-flex flex-column">
      <navbar />
      <main class="flex-grow-1 overflow-y-scroll p-4">
        <nuxt />
      </main>
    </section>
  </div>
</template>

<script>
import Sidebar from '~/layouts/components/sidebar'
import Navbar from '~/layouts/components/navbar'

export default {
  components: {
    navbar: Navbar,
    sidebar: Sidebar
  }
}
</script>
