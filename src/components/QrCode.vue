<template>
  <div class="qr-wrapper">
    <form class="qr-code">
      <div>
        <input ref="product_code" type="text" placeholder="Product Code" />
      </div>
      <div>
        <input ref="product_name" type="text" placeholder="Product Name" />
      </div>
      <div>
        <input ref="card_number" type="text" placeholder="Card Number" />
      </div>
    </form>
    <vue-qrcode :value="url" :options="options" />
    <div class="qr-code--url">{{ url }}</div>
    <div class="qr-code--deeplink">{{ deepLink }}</div>
    <div>
      <button @click="generateQR">{{ buttonText }}</button>
    </div>
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
      url: 'https://google.com',
      deepLink: '',
      buttonText: 'Generate QR',
      options: {
        errorCorrectionLevel: 'H',
        width: 200
      }
    }
  },
  methods: {
    generateQR() {
      const productCode = this.$refs.product_code.value
      const productName = this.$refs.product_name.value
      const cardNumber = this.$refs.card_number.value
      this.url = `https://google.com?productCode=${productCode}&productName=${productName}&cardNumber=${cardNumber}`
      this.deepLink = `franksg://${productCode}/${productName}/${cardNumber}`
    }
  }
}
</script>

<style lang="scss">
.qr-code {
  input {
    margin-top: 0.5em;
  }
  &--url,
  &--deeplink {
    margin: 0 1em 1em;
  }
}
</style>
