import Chart from 'chart.js'

export default {
  async mounted() {
    await this.$nextTick()
    const canvases = this.$refs.content.querySelectorAll('canvas')

    canvases.forEach(canvas => {
      const id = canvas.id
      const configEl = this.$refs.content.querySelector(`script[data-canvas="${id}"]`)

      if (!configEl) {
        throw Error(`Brakuje tagu <script> z data-canvas="${id}"`)
      }

      const config = eval(configEl.innerHTML)
      const chart = new Chart(canvas, config)

      this.$once('hook:beforeDestroy', () => {
        setTimeout(() => {
          chart.destroy()
        }, 150)
      })
    })
  }
}
