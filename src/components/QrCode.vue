<template>
  <div class="qr-wrapper">
    <vue-qrcode value="https://google.com" />
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'QrCode',
  components: {
    VueQrcode
  }
}
</script>
