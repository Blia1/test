<template>
  <div>
    <div id="home">
      <!--Navbar-->
      <div class="navbar-links">
        <Navbar />
      </div>
      <!--Background Image-->
      <div class="background-image">
        <img src="/assets/images/bgAsset1.png" class="background">
      </div>
      <!--Animation-->
      <div class="animation">
        <Animation class="animation-image" />
      </div>
      <!--Main Content-->
      <div class="main-content">
        <div class="main-content-texts">
          <div class="titles">
            <h4 class="title1">Explore world of news with</h4>
            <h4 class="title2">FREEDOM DAY</h4>
          </div>
          <p class="description">We are adding news on every friday</p>
          <div v-for="section in sections" :key="section.id">
            <button @click="scrollToSection(section.id)" id="button1">Check it out!</button>
          </div>
        </div>
      </div>
    </div>

    <!--Articles-->
    <section id="articles-section" class="news-containers">
      <div class="cardd" v-for="article in articles.slice (6, 9)">
        <div class="news-image">
          <img class="article-image" :src="article.cover_image" alt="Article Image" />
        </div>
        <div class="news-title">
          <div class="article-title" :key="article.id">
            {{ article.title }}
          </div>
        </div>
        <div class="see-more-btn-div">
          <SeeMoreBtn class="see-more-btn" />
        </div>
      </div>
      <div class="second-background">
        <img src="/assets/images/second-section-bg.png" class="background">
      </div>
    </section>

    <section id="videos">
      <div id="test">123</div>
    </section>
  </div>
</template>

<script>
import Animation from "/src/components/HomeScreenAnimation.vue";
import Navbar from "/src/components/Navbar.vue";
import SeeMoreBtn from '/src/components/SeeMoreBtn.vue';

export default {
  components: {
    Animation,
    Navbar,
    SeeMoreBtn
  },

  data() {
    return {
      sections: [
        { id: 'articles-section', label2: 'Articles' },
      ],
      articles: [],
      articleId: 1556906
    };
  },
  methods: {
    showArticles() {
      Api.get('/articles')
        .then(response => {
          this.articles = response.data;
          console.log(this.articles.Proxy);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },

    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  mounted() {
    this.showArticles();
  }
}


</script>

<style scoped>
@font-face {
  font-family: 'Bebas Neue';
  src: url('/src/components/fonts/BebasNeue-Regular.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#test {
  width: 500px;
  height: 500px;
  background: red;
  margin-top: 500px;
}

.animation {
  margin-left: 1050px;
}

.main-content-texts {
  position: absolute;
  top: 200px;
  left: 120px;
}


.titles {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 10px;
}

.second-background {
  position: absolute;
  left: 0px;
  top: 700px;
  z-index: 0;
}


.title1 {
  font-size: 44px;
  margin-right: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
}

.article-image {
  width: 400px;
  border-radius: 25px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.article-title {
  color: white;
  white-space: nowrap;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  text-shadow: black 0 2px 7px;
  margin-top: 10px;
}

.news-title {
  display: flex;
  justify-content: center;
}

.title2 {
  font-size: 48px;
  font-family: 'Bebas Neue', sans-serif;
}

.description {
  font-size: 30px;
  color: #888;
}

.navbar-links {
  position: absolute;
}

.animation-image {
  width: 600px;
  position: absolute;
  top: 100px;
}

.background-image {
  display: flex;
  justify-content: right;
}

.see-more-btn-div {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

#button1 {
  padding: 0.6em 4.5em;
  border: 4px solid #ff0000;
  border-radius: 20px;
  transition: ease-in-out 0.3s;
  background-color: transparent;
  color: #ff0000;
  font-weight: bolder;
  margin-top: 20px;
  font-size: 20px;
  transition: 0.5s;
}

#button1:hover {
  transform: scale(1.1) rotate(5deg);
  background-color: rgba(255, 0, 0, 0.3);
  color: #212529;
  border: 4px solid #212529;
}

.background {
  width: 1700px;
}

.news-containers {
  padding: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.cardd {
  padding: 20px;
  width: 450px;
  height: 400px;
  background: rgba(255, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 25px;
  border: 4px solid rgba(255, 0, 0, 0.794);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  z-index: 1;
}
</style> 