<template>
  <div class="container">
    <div class="text-center">
      <qr-code></qr-code>
    </div>
  </div>
</template>

<script>
import QrCode from '@/components/QrCode.vue'

export default {
  name: 'Home',
  components: {
    QrCode
  }
}
</script>
