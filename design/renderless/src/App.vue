<template>
  <div id="app">
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- ... -->
      <div slot-scope="{ response, loading}">
        <div  v-if="!loading">
          Loading...   
        </div>
        <div v-else>
          <p>name : {{ response.name }}</p>
          <p>email: {{ response.email }}</p>
        </div>
      </div>

    </fetch-data>

  </div>
</template>

<script>
import FetchData from './components/FetchData.vue';

export default {
  name: 'App',
  components: {
    FetchData,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
