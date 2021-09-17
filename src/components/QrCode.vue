<template>
  <div class="qr-wrapper">
    <form ref="generate" class="qr-code text-left" :class="{ 'was-validated': errors.length }" @submit.prevent="generate">
      <div v-for="field in formData" :key="field" class="form-group mb-3">
        <label :for="field.name" class="form-label">{{ field.label }}</label>
        <template v-if="field.element === 'input'">
          <input
            :id="field.name"
            v-model="field.value"
            :type="field.type"
            class="form-control"
            :pattern="field.pattern"
            :required="field.required"
          />
          <small v-if="field.helperText" class="form-text text-muted">{{ field.helperText }}</small>
        </template>
        <template v-if="field.element === 'select'">
          <select
            :id="field.name"
            v-model="field.value"
            class="custom-select"
            aria-label="Please select one"
            :required="field.required"
          >
            <option selected disabled value="">Please select one</option>
            <template v-for="option in field.options" :key="option">
              <option :value="option.value">{{ option.label }}</option>
            </template>
          </select>
        </template>
      </div>
      <div class="form-group mt-4 mb-3">
        <button class="btn btn-primary" type="submit" @click="generate">Generate</button>
      </div>
    </form>
    <template v-if="url && !errors.length">
      <div class="row">
        <div class="col-8 m-0 border text-truncate">{{ url }}</div>
        <a href="#" class="col-4 m-0 p-0 btn btn-secondary border rounded-right" @click="copy">Copy URL</a>
      </div>
      <div class="row">
        <div class="col-8 m-0 p-0">
          <vue-qrcode id="qr" :value="url" :options="options" @ready="onReady" />
        </div>
        <div class="col-4 m-0 p-0 d-flex align-items-center">
          <a class="btn btn-secondary" download="qr.png" :href="imageURL" @click="download">Download</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'QrCode',
  components: {
    VueQrcode
  },
  data() {
    return {
      formData: [
        {
          element: 'input',
          type: 'url',
          name: 'base_url',
          query: 'baseURL',
          label: 'Base URL',
          value: 'https://internet.ocbc.com/deeplink',
          helperText: 'Only accepts HTTPS protocol.',
          required: true,
          pattern: 'https://.*'
        },
        {
          element: 'input',
          type: 'text',
          name: 'product_code',
          query: 'productCode',
          label: 'Product Code',
          value: '',
          helperText: '',
          required: true
        },
        {
          element: 'select',
          type: '',
          options: [
            {
              value: 'card_activation',
              label: 'Card Activation'
            }
          ],
          name: 'redirect_to',
          query: 'redirectTo',
          label: 'Redirect To',
          value: '',
          helperText: '',
          required: true
        }
      ],
      errors: [],
      canvas: '',
      url: '',
      imageURL: '',
      isBaseURLValid: true,
      options: {
        errorCorrectionLevel: 'H',
        width: 200
      }
    }
  },
  methods: {
    onReady(canvas) {
      const context = canvas.getContext('2d')
      const image = new Image()
      image.onload = () => {
        const coverage = 0.15
        const width = Math.round(canvas.width * coverage)
        const x = (canvas.width - width) / 2
        this.drawImage(context, image, x, x, width, width)
      }
      this.canvas = canvas
    },
    drawImage(context, image, x, y, width, height, radius = 4) {
      context.shadowOffsetX = 0
      context.shadowOffsetY = 2
      context.shadowBlur = 4
      context.shadowColor = '#00000040'
      context.lineWidth = 8
      context.beginPath()
      context.moveTo(x + radius, y)
      context.arcTo(x + width, y, x + width, y + height, radius)
      context.arcTo(x + width, y + height, x, y + height, radius)
      context.arcTo(x, y + height, x, y, radius)
      context.arcTo(x, y, x + width, y, radius)
      context.closePath()
      context.strokeStyle = '#fff'
      context.stroke()
      context.clip()
      context.fillStyle = '#fff'
      context.fillRect(x, x, width, height)
      context.drawImage(image, x, x, width, height)
    },
    generate() {
      this.errors = []
      const isFormValid = this.$refs.generate.checkValidity()
      const validData = []
      for (const el of this.formData) {
        if (el.required && !el.value.length) {
          this.errors.push(el.name)
        } else {
          validData.push({
            query: el.query,
            value: el.value
          })
        }
      }
      if (isFormValid) {
        const [baseURL, productCode, redirectTo] = validData
        const formatted = `${baseURL.value}?${productCode.query}=${productCode.value}&${redirectTo.query}=${redirectTo.value}`
        this.url = formatted
      }
    },
    download() {
      const imageURL = this.canvas.toDataURL('image/png')
      this.imageURL = imageURL
    },
    async copy() {
      try {
        await navigator.clipboard.writeText(this.url)
        alert('Copied')
      } catch {
        alert('Cannot copy')
      }
    }
  }
}
</script>

<style lang="scss">
.qr-wrapper {
  margin: 0 auto;
  width: 320px;

  button {
    width: 100%;
  }
}
</style>
