<template>
  <section class="slider">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider',

  props: {
    title: { type: String },
  },
}
</script>

<style lang="scss">
.slider {
  background: url('https://s1.1zoom.me/b3477/849/popcorn_Wood_planks_562161_2560x1440.jpg');
  min-height: 350px;
  background-position: top center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .title {
    padding: 0 20%;
    h1 {
      font-size: 50px;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
    }
  }
}
</style>
