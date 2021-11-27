<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', 'Helvetica', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a, a:link, a:visited {
  text-decoration: none;
}

.fw-medium {
  font-weight: 500;
}

.fw-semibold {
  font-weight: 600;
}
</style>
