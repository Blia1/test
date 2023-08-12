<template>
    <div class="Main">
        <div class="navbar">
            <p id="Logo">QuoteVerse</p>
            <router-link to="/" id="Home">Home</router-link>
            <router-link to="/quotes" id="Quotes">Quotes</router-link>
            <router-link to="/authors" id="Authors">Authors</router-link>
          </div>
          
          <div id="title">Authors of all quotes</div>
      <button @click="authorsDropdown()" id="button1">Authors</button>
      <div id="dropdown">
      <div v-show="authorsShow">test</div>
      <div v-show="authorsShow">test</div>
      <div v-show="authorsShow">test</div>
    </div>
    </div>
    <img src="./Images/book1.png" id="book1">
    <img src="./Images/book1.png" id="book2">
</template>

<script>
export default {
      data() {
        return {
            authorsShow: false,
        }
      },

      methods: {
        authorsDropdown() {
        this.authorsShow = !this.authorsShow
        },
    },
    };
</script>

<style scoped>
.Main {
    background: linear-gradient(45deg, #182552 0%, #5D4C93 23.80%, #EE6583 50.35%, #FFCC63 80.98%, #FFF 100%);
    backdrop-filter: blur(50px);
    width: 1920px;
    height: 100vh;
  }
  #Logo {
    color: #FFF;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 60px;
    margin-top: 35px;
  }

  #Home {
    color: #FFF;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    left: 400px;
    top: 55px;
    text-decoration: none;
  }

  #Quotes {
    color: #FFF;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    left: 550px;
    top: 55px;
    text-decoration: none;
  }

  #Authors {
    color: #FFF;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    left: 720px;
    top: 55px;
    text-decoration: none;
  }

  #title {
    color: #FFF;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    margin-top: 50px;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px;

  }

  #button1 {
    width: 1200px;
    height: 50px;
    margin-left: 350px;
    margin-top: 100px;
    border-radius: 55px;
    background: linear-gradient(221deg, #182552 0%, #5D4C93 23.80%, #EE6583 50.35%, #FFCC63 80.98%, #FFF 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    outline: none;
    background-color: initial;
    color: white;
    font-weight: 700;
    font-size: 30px;
    border: initial;
    outline: none;
    transition: 0.5s;
  }

  #button1:hover {
    transform: scale(1.1);
  }

  #dropdown {
    background: linear-gradient(221deg, #182552 0%, #5D4C93 23.80%, #EE6583 50.35%, #FFCC63 80.98%, #FFF 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    outline: none;
    background-color: initial;
    border: initial;
    outline: none;
    margin-top: 20px;
    width: 1200px;
    color: white;
    text-align: center;
    margin-left: 350px;
    font-size: 26px;
    font-weight: 650;
    border-radius: 55px;
  }
   
  #book1 {
    width: 300px;
    height: 370px;
    transform: rotate(15.423deg);
    mix-blend-mode: overlay;
    position: absolute;
    top: 500px;
    left: 100px;
    animation: books-animation 2s infinite alternate;
  }

  @keyframes books-animation {
    0% {
      top: 500px;
      left: 100px;
    }

    100% {
      top: 480px;
      left: 150px;
    }
  }

  #book2 {
    width: 318.916px;
    height: 383.046px;
    transform: rotate(-28.722deg);
    mix-blend-mode: overlay;
    position: absolute;
    top: 100px;
    left: 1500px;
    animation: books-animation2 2s infinite alternate;
  }

  @keyframes books-animation2 {
    0% {
      top: 100px;
      left: 1500px;
    }

    100% {
      top: 60px;  
      left: 1500px;
    }
  }
</style>