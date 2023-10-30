import { defineStore } from 'pinia'
import axios from 'axios'

export const userInfoStore = defineStore('userID', {
  state: () => ({
    /* User Data */
    userName: 'kminchelle', // Has Carts
    password: '0lelplR', // Has Carts
    // userName: 'hbingley1', // No Carts
    // password: 'CQutx25i8r', // No Carts
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    newsletter: null,
    token: null,

    /* Products Data */
    allProducts: null,
    singleProduct: null,
    singleProductID: null,

    /* Carts Data */
    carts: null,
    singleProductQuantity: 1,

    /* Currency Data */
    currency: 'USD'
  }),
  getters: {},
  actions: {
    signIn() {
      axios
        .post('https://dummyjson.com/auth/login', {
          username: this.userName,
          password: this.password,
          expiresInMins: 15
        })
        .then((res) => {
          if (res.status == 200) {
            this.userName = res.data.username
            this.id = res.data.id
            this.firstName = res.data.firstName
            this.lastName = res.data.lastName
            this.email = res.data.email
            this.newsletter = res.data.newsletter
            this.token = res.data.token
          }
        })
        .then(() => this.getUserCart())
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    signUp() {
      axios
        .post('https://dummyjson.com/users/add', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          newsletter: this.newsletter
        })
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data)
            alert(`Hello ${this.firstName} Sign Up Sucess`)
          }
        })
        .catch((err) => {
          alerts(err.message)
        })
    },
    signOut() {
      this.userName = null
      this.password = null
      this.id = null
      this.firstName = null
      this.lastName = null
      this.email = null
      this.newsletter = null
      this.token = null
      this.allProducts = null
      this.singleProduct = null
      this.carts = null
    },
    getAllProducts() {
      axios('https://dummyjson.com/products/').then((res) => {
        this.allProducts = res.data.products
      })
    },
    getSingleProduct() {
      const randNum = Math.trunc(Math.random() * 100) + 1
      if (this.singleProductID) {
        this.singleProductID = this.singleProductID
      } else {
        this.singleProductID = randNum
      }
      axios(`https://dummyjson.com/products/${this.singleProductID}`).then((res) => {
        this.singleProduct = res.data
      })
    },
    getUserCart() {
      axios(`https://dummyjson.com/carts/user/${this.id}`)
        .then((res) => {
          this.carts = res.data.carts
        })
        .catch((err) => {
          console.warn(err.message)
        })
    },
    addNewCart() {
      // Need Edit
      axios
        .post('https://dummyjson.com/carts/add', {
          userId: this.id,
          products: [
            {
              id: this.singleProductID,
              quantity: this.singleProductQuantity
            },
            {
              id: 50,
              quantity: this.singleProductQuantity
            }
          ]
        })
        .then(console.log)
    }
  }
})
