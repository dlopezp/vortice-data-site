<template>
  <div class="platoon-unit" :class="cssClass">
    <UnitAvatar :unitId="unitKey" />
  </div>
</template>

<script>
import UnitAvatar from '@/components/UnitAvatar'

export default {
  name: 'PlatoonUnit',
  components: { UnitAvatar },
  props: {
    unitKey: String,
    availability: String
  },
  computed: {
    cssClass () {
      return 'platoon-unit ' + (this.availability ? `platoon-unit__${this.availability}` : '')
    }
  }
}
</script>

<style lang="stylus">
  @import '~variables'

  .platoon-unit
    text-align center

  .platoon-unit__impossible
    background-color $negative

  .platoon-unit__hard
    background-color $warning

  .platoon-unit__difficult
    background-color $info

</style>
