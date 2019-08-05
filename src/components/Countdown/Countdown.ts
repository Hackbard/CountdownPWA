/*
 * @author     Benjamin Klein <wanted@benjamin-klein.name>
 * @copyright 2019 Benjamin Klein
 */

export default {
  components: {},
  props: {
    youtoubeId: String,
    date: {
      type: String,
      coerce: ( str: string ) => Math.trunc(Date.parse(str) / 1000)
    }
  },
  computed: {
    seconds(): any {
      const vm = this
      console.log(this)
      return (this.date - this.now) % 60
    },
    minutes(): any {
      const vm = this
      return Math.trunc((vm.date - vm.now) / 60) % 60
    },
    hours(): any {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24
    },
    days(): any {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24)
    }
  },
  data(): any {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  ready(): void {
    console.log('READY')
    window.setInterval(() => {
      console.log('INTERVALL')
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  }
}
