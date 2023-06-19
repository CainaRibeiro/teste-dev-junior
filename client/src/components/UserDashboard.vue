<template>
  <div>
    <h1>Shorten a long link</h1>
    <div>
      <label>Paste a  long URL</label>
      <input v-model="originalLink" type="text" :placeholder="'Exemple: ExtremelyLongUrl.com/blablablabla'">
    </div>
    <div>
      <div>
        <h3>Domain</h3>
        <input v-model="domain" type="text" :placeholder="'bit.ly'">
      </div>
      <span>/</span>
      <div>
        <h3>Enter a back-half</h3>
      </div>
      <input v-model="backHalf" type="text">
    </div>
    <button @click="getShortnedLink">Get your link</button>
    <p>{{ shortnedLink }}</p>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "UserDashboard",
  mounted() {
  },
  data() {
    return {
      originalLink: '',
      shortnedLink: '',
      backHalf: '',
      domain:''
    };
  },
  props: ['id'],
  methods: {
    async getShortnedLink() {
      const shortnedLink = `${this.domain}/${this.backHalf}`
      this.shortnedLink = shortnedLink
      console.log(shortnedLink)

      alert('Link shortned with success')
      await axios.patch(`/api/v1/users/${this.id}`, {
        "links": [this.shortnedLink],
        "originalLinks": [this.originalLink]
      })

    }
  }
}

</script>

<style lang="scss" scoped></style>