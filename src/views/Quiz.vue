<template>
  <div class="mt-3">
    <b-row align-h="center">
      <b-col cols="10">
        <div v-if="index < sugars.length" class="question mt-3 p-5 rounded shadow">
          <div class="d-flex align-items-center justify-content-center">
            <h3 class="mr-2">Q{{ index + 1 }}:</h3> Is <h1 class="display-4 mx-2 sugar font-weight-bold">
            "{{ sugars[index] }}"</h1> a sugar?
          </div>
          <div class="d-flex justify-content-around">
            <b-button pill size="lg" variant="success" @click="answer(true)">Yes</b-button>
            <b-button pill size="lg" variant="danger" @click="answer(false)">No</b-button>
          </div>
        </div>
        <div v-else class="text-center">
          <h1>Congratulation !</h1>
          <h3>
            You Scored {{ ans.length }}/{{ sugars.length }} !
          </h3>
          <h3>In fact, ALL of the chemicals in the quiz is a variant of sugar !</h3>
          <h1>List of sugars you missed...</h1>
          <ul>
            <li v-for="(a, i) in missed" :key="i">{{ a }}</li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  name: "Quiz",
  data() {
    return {
      inputName: 'hello',
      index: 0,
      sugars: [
        "Sucrose",
        "Maltose",
        "Dextrose",
        "Brown Sugar",
        "Beet Sugar",
        "Malt",
        "Golden Caster Juice",
        "Organic Sugar",
        "Dark Muscovado",
        "Crystallized Fructose",
        "Raw Sugar",
        "Corn Sugar",
        "Cane Sugar",
        "Invert Sugar",
        "Jaggery",
        "Honey",
        "Agave Syrup",
        "Barley Malt Syrup",
        "Brown Rice Syrup",
        "Carob Syrup",
        "Corn Syrup",
        "Malt Syrup",
        "Maple Syrup",
        "Sorghum Syrup",
        "Sugar Beet Syrup",
        "Coconut Blossom Nectar",
        "Coconut Sugar",
        "Molasses",
        "Blackstrap Molasses",
        "Treacle",
        "Palm Sugar",
        "Cane Juice",
        "De hydrated Cane Juice",
        "Evaporated Cane Juice",
        "Caramel",
        "Agave Nectar",
        "Apple Juice Concentrate",
        "Fruit Juice Concentrate",
        "Grape Sugar",
        "Glucose",
        "Glucose Syrup",
        "Iso Glucose",
        "Date Syrup",
        "Date Sugar",
        "Maple Sugar",
      ],
      ans: [],
      missed: []
    }
  },
  methods: {
    answer(option) {
      if (option) {
        this.ans.push(this.sugars[this.index]);
      } else {
        this.missed.push(this.sugars[this.index]);
      }
      if (this.index === this.sugars.length - 1) {
        this.pushData();
      }
      ++this.index;
    },
    pushData() {
      firebase.database().ref('/').push({
        ans: this.ans,
        missed: this.missed
      });
    }
  }
}
</script>

<style>
.sugar {
  color: #311b92;
}

.question {
  background-color: #fffffb;
}

ul {
  list-style-type: none;
}
</style>