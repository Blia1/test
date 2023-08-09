<template>
    <div>
      <button @click="quoteDropdown()">Quotes</button>
      <div v-for="quote in quotes" :key="quote.id">
      <div v-show="quoteShow">{{ quote.text }}</div>
      <div v-show="quoteShow">{{ quote.author.name }}</div>
      <div v-show="quoteShow">sandlyag</div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';  
  
    export default {
      data() {
        return {
          quoteShow: false,
          quotes: [
            {
              id: "string",
              text: "string",
              author: {
                id: "string",
                name: "string",
              }
            }
          ]
        }
      },

      mounted() {
        this.fetchQuotes();
      },
  
      methods: {
        quoteDropdown() {
        this.quoteShow = !this.quoteShow 
        },
  
        async fetchQuotes() {
        try {
          const response = await Api.get('/quotes');
        this.quotes = response.data;
        } catch (error) {
          console.error('Error fetching quotes:', error);
          }
        }
      },
  };
  </script>
  
  
  <style scoped>
  </style>
  