<template>
  <b-navbar
    type="light"
    variant="white"
    class="w-7rem px-0 pb-5rem d-flex flex-shrink-0 justify-content-center text-center"
  >
    <b-navbar-nav class="flex-column mb-5">
      <b-nav-item to="/" exact active-class="active">
        <font-awesome-icon :icon="['fal', 'home']" />
        <br />
        Home
      </b-nav-item>

      <b-nav-item to="/companies" active-class="active">
        <font-awesome-icon :icon="['fal', 'building']" />
        <br />
        Companies
      </b-nav-item>

      <b-nav-item to="/users" active-class="active">
        <font-awesome-icon :icon="['fal', 'users']" />
        <br />
        Users
      </b-nav-item>

      <b-nav-item to="/reports" active-class="active">
        <font-awesome-icon :icon="['fal', 'file-chart-line']" />
        <br />
        Reports
      </b-nav-item>

      <b-nav-item to="/kanban" active-class="active">
        <font-awesome-icon :icon="['fal', 'clipboard-list']" />
        <br />
        Kanban
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
