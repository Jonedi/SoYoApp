<template>
  <div class="home">
    <Entidades msg="Entidades"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Entidades from '@/components/Entidades.vue'
import { EntitiesDataMixin } from '@/mixins/EntitiesData.js'

export default {
  name: 'Home',
  mixins: [EntitiesDataMixin],
  data() {
    return {
    }
  },
  components: {
    Entidades
  }
}
</script>
