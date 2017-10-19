<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  @import url(./reset.scss);
  body{
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
</style>
