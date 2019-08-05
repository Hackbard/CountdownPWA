<!--
  - @author     Benjamin Klein <wanted@benjamin-klein.name>
  - @copyright 2019 Benjamin Klein
  -->

<template>
    <div id="app">
        <div id="nav">
            <Countdown date="August 15, 2016" youtoube-id="Iop2xlvXbOE"/>
        </div>
    </div>
</template>

<style lang="less">
    /*
    * @author     Benjamin Klein <wanted@benjamin-klein.name>
    * @copyright  2016 Benjamin Klein
    */
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
<script>
  import Countdown from './components/Countdown/Countdown.vue'

  export default {
    components: {
      Countdown
    }
  }
</script>
