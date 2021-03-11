<template>

  <h1 class="font-serif">Ants</h1>
  <p>These are currently available to you.</p>
  <Panel
    v-for="ant in ants"
    :measurement="ant.measurement"
    :name="ant.name"
  />
  <button
    @click="count++"
    class="bg-green-300 text-green-800 font-bold mt-6 rounded px-4 pt-2 pb-3 focus:outline-none"
  >
    Count is: {{ count }}
  </button>

</template>

<script lang="ts">

// Applying TypeScript to props — it works by importing 'PropType' from Vue.
// It can then be used as demonstrated as below with 'timeOfDay'.

import { defineComponent, PropType } from 'vue'
import { timeOfDayType, AntsType } from '../types'
import Data from '../assets/data.json'

import Panel from '../components/Panel.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Panel
  },
  data() {
    return {
      'count': 0,
      ants: [] as AntsType
    }
  },
  mounted() {
    this.ants = Data;
  },
  props: {
    timeOfDay: {
      type: String as PropType<timeOfDayType>
    }
  }
})

</script>

