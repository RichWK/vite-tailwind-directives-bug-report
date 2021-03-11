<template>

  <div>
    <h2>{{ name }}</h2>
    <h6>{{ measurement }}</h6>
  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Panel',
  props: {
    name: {
      type: String,
      required: true
    },
    measurement: {
      type: String,
      required: true
    }
  }
})

</script>

