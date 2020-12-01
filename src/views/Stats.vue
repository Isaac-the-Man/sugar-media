<template>
  <div>
    <b-row align-h="center">
      <b-col cols="8" class="d-flex flex-column align-items-center">
        <h1>Top Incorrectly Identified Sugar</h1>
        <ol>
          <li v-for="(m, i) in top" :key="i">"{{ m.label }}" : missed {{ m.val }} times</li>
        </ol>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  name: "Stats",
  data() {
    return {
      data: {},
    }
  },
  computed: {
    top() {
      const dict = {};
      for (let item of Object.values(this.data)) {
        for (let m of item.missed) {
          if (dict[m]) {
            dict[m] += 1;
          } else {
            dict[m] = 1;
          }
        }
      }
      const freq = [];
      for (let [key, val] of Object.entries(dict)) {
        freq.push({label: key, val: val});
      }
      freq.sort((a, b) => {
        return b.val - a.val;
      });
      return freq.slice(0, 5);
    }
  },
  async created() {
    this.data = await firebase.database().ref('/').on('value', (snap) => {
      this.data = snap.val();
    });
  }
}
</script>

<style scoped>

</style>