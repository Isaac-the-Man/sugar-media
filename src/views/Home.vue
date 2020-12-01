<template>
  <div>
    <b-row align-h="center" class="mt-3">
      <b-col cols="8" class="text-center">
        <p>
          We all know that having too much sugar is bad for your health. However, food/beverage companies have think
          of numerous ways to label sugar. Here's a little quiz for you to test your knowledge on sugar labels. Can you
          correctly identify all alternative names of sugar?
        </p>
        <b-button class="shadow" to="/quiz" pill variant="primary" size="lg">Start Quiz</b-button>
        <div class="mt-3">
          <b-link to="/stats">view stats</b-link>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>