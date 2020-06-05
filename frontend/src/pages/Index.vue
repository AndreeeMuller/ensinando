<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import ExampleComponent from 'components/CompositionComponent.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { ExampleComponent },
  data () {
  }
})
</script>
