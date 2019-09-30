<template>
  <img :src="guildIconUrl" :alt="guild.name">
</template>

<script>
export default {
  name: 'GuildIcon',
  props: {
    guild: Object
  },
  computed: {
    guildIconUrl () {
      return `//swgoh.gg/static/img/assets/tex.${this.guild.logo || 'guild_icon_Rebel'}.png`
    }
  }
}
</script>

<style scoped lang="stylus">
  img
    border-radius 100%
    max-width 40px
    vertical-align middle
</style>
