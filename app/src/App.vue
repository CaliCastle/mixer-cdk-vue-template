<template>
  <div id="app">
    <HelloWorld msg="Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Mixer from '@/helpers/mixer';

@Component({
  components: {
    HelloWorld,
  },
})

export default class App extends Vue {
    public mounted() {
        Mixer.isLoaded();
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
