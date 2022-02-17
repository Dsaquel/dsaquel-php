<script>
// import TodoItems from "./components/TodoItems.vue";
export default {
  // components: { TodoItems },
  // component: {
  //   TodoItems,
  // },
  data() {
    return {
      text: "Recherche ton manga pref",
      data: [],
    };
  },
  methods: {
    async fetchData() {
      this.data = null;
      const res = await fetch(
        `https://api.jikan.moe/v4/seasons/upcoming?page=1`
      );
      this.data = await res.json();
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <div class="bloc_page">

    <input v-model="text">
    <p>{{ text }}</p>
    
    <div class="dsaquel-row">
      <div v-for="item in this.data.data" :key="item" class="card article">
        <div class="card_img">
          <img :src="item.images.webp.image_url" alt="" />
        </div>
        <div class="card-content">{{ item.title }}</div>
        <a :href="item.url" class="card-action">Voir</a>
      </div>
      
      
      <!-- <TodoItems
        v-for="item in mangaData"
        :card-content="item.title"
        :card_img="item.images.webp.image_url"
        :key="item.id"
      ></TodoItems> -->
    </div>
  </div>
</template>

<style>

body {
  margin: 0;
  overflow-x: hidden;
  background-color: #15202b;
  color: #fff;
}

.bloc_page {
    width: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 1400px;
}

#mangas {
  flex-wrap: wrap;
  justify-content: center;
  overflow: unset;
}

.dsaquel-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow: unset;
}

.dsaquel-row > * {
  flex-basis: 15rem;
  flex-shrink: 0;
}

.dsaquel-row .card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dsaquel-row .card > .card-content {
  flex-grow: 1;
  border-bottom: 2px solid #333;
  width: 80%;
  margin-top: 5px;
}

.dsaquel-row .card > .card-image {
  margin-top: 1rem;
  flex-basis: 20rem;
  flex-shrink: 0;
  overflow-y: hidden;
}

.card-image > img {
  width: 80%;
}

.card-action {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  text-decoration: none;
  margin-top: 5px;
}

.card-action > .button {
  margin-left: 5px;
}

.article {
  border-width: 5px;
  border-style: solid;
  border-top-color: #5271ff;
  border-bottom-color: #ffbd59;
  border-left-color: #5271ff;
  border-right-color: #ffbd59;
  text-align: center;
  margin: 5px;
  border-radius: 10px;
}
</style>