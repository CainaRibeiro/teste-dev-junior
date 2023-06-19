<template>
  <div>
    <div>
      <label>Email: </label>
      <input v-model="email" type="email">
    </div>
    <div>
      <label>Password: </label>
      <input v-model="password" type="password">
    </div>
    <button @click="login">Log in</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "LoginForm",
  created() {},
  data() {
    return {
      email: '',
      password: ''
    };
  },
  props: {},
  methods: {
    async login() {
      let isAuthenticated = false
      let currentUser = null
      if(this.email && this.password) {
        const getUsersList = await axios.get('/api/v1/users')
        const getUsersData = getUsersList.data

        getUsersData.forEach(user => {
          if(this.email == user.email && this.password == user.password) {
            currentUser = user
            isAuthenticated = true
          }
        }) 
        if(isAuthenticated) {
          this.$router.push({name: 'UserDashboard', params: {id: currentUser._id}})
        } else {
          alert('No user found, please create an account!')
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>