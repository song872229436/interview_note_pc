<template>
  <div class="home">
    <!-- <img alt="Vue logo"
         src="../assets/logo.png"> -->

  </div>
</template>

<script>
  // @ is an alias to /src
  // import Header from '@/components/default/Header.vue'

  export default {
    name: 'Home',
    components: {
      // Header
    },
    data: () => {
      return {
        process: process.env.NODE_ENV
      }
    },
    created() {
      console.log('看到我你就输了')
    }
  }
</script>
