<template>
  <div class="mt-3">
    <b-row v-if="index < 4" align-h="center">
      <b-col cols="8" class="text-center">
        <h3>Let's do a little experiment...</h3>
        <p>
          You just woke up and is about to have your first meal of the day. Please select the your food
          of choice from this menu of commonly available products:
        </p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col v-if="index < 4" cols="8" class="text-center">
        <h3>{{ menu[index].title }} of Choice</h3>
        <div class="mt-3 d-flex justify-content-around">
          <b-card class="shadow text-center">
            <b-img :src="getImgUrl(menu[index].img1)" height="200px"></b-img>
            <p><i>{{ menu[index].txt1 }}</i></p>
            <b-button @click="recordChoice(1)" variant="success">select</b-button>
          </b-card>
          <b-card class="shadow text-center">
            <b-img :src="getImgUrl(menu[index].img2)" height="200px"></b-img>
            <p><i>{{ menu[index].txt2 }}</i></p>
            <b-button @click="recordChoice(2)" variant="success">select</b-button>
          </b-card>
        </div>
      </b-col>
      <b-col v-else class="text-center" cols="10">
        <h3>You've {{totalSugar >= 50 ? '' : 'almost '}}exceeded your daily recommended sugar limit !</h3>
        <p>Your choices: </p>
        <div class="d-flex justify-content-around">
          <b-card v-for="(c,i) in choice" :key="i" class="shadow text-center">
            <b-img :src="getImgUrl(c.img)" height="200px"></b-img>
            <p><i>Sugar: {{ c.sug }}g</i></p>
          </b-card>
        </div>
        <p class="mt-2"><b>Total Sugar: </b>{{ totalSugar }}g</p>
        <p>
          According to the World Health Organization, the daily recommended sugar limit is about 10% of the total
          calories intake per day, which is about 50 grams of sugar. This demo is meant to show how the seemingly
          healthy food products can easily push you over the limit in just one meal.
        </p>
        <b-button to="/data" variant="primary" class="mt-2 shadow" pill>continue</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Food",
  data() {
    return {
      index: 0,
      menu: [
        {
          title: 'Soup',
          img1: 'soup1.jpg',
          txt1: 'Campbell\'s "Tomato + Tomatoes" Soup',
          sug1: 12,
          img2: 'soup2.jpg',
          txt2: 'Campbell\'s "Cream of Chicken" Soup',
          sug2: 1
        },
        {
          title: 'Main Dish',
          img1: 'cheese.jpg',
          sug1: 12,
          txt1: 'Grilled Cheese Sandwich',
          img2: 'pancake.jpeg',
          txt2: 'Pancake with Syrup',
          sug2: 48
        },
        {
          title: 'Drink',
          img1: 'snapple.jpg',
          sug1: 36,
          txt1: 'Snapple\'s "All Natural" Lemon Tea',
          img2: 'milk.jpeg',
          txt2: 'Great Value Fat Free Milk',
          sug2: 12
        },
        {
          title: 'Dessert',
          img1: 'yogurt.jpg',
          sug1: 10,
          txt1: 'Yoplait\'s "Light" Strawberry Yogurt',
          img2: 'banana.jpg',
          txt2: 'Banana',
          sug2: 14
        }
      ],
      choice: []
    }
  },
  computed: {
    totalSugar() {
      let sug = 0;
      for (let c of this.choice) {
        sug += c.sug;
      }
      return sug;
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/' + pic)
    },
    recordChoice(c) {
      this.choice.push({
        img: this.menu[this.index]['img' + c],
        sug: this.menu[this.index]['sug' + c]
      });
      this.index++;
    }
  }
}
</script>

<style scoped>

</style>