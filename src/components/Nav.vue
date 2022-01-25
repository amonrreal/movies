<template>
  <div class="top-nav">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar-menu">
      <b-container>
        <b-navbar-brand :to="{ name: 'Home' }">
          Movies
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="ml-auto">
          <!-- Right aligned nav items -->
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'About' }">¿Quiénes somos?</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style lang="scss">
.navbar-collapse {
  justify-content: flex-end;
}
</style>
