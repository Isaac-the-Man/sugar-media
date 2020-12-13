<template>
  <div class="mt-3">
    <b-row align-h="center">
      <b-col cols="10">
        <h3>Case Studies</h3>
        Here we explore some of the most bizarre cases of sugar and advertisement.
        <ol>
          <li>Milo</li>
          <li>Nutella</li>
        </ol>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="10">
        <h4>Milo</h4>
        <p>
          Nestle's <i>Milo</i> is one of the most well-known hot-chocolate brand worldwide. In Malaysia, Nestle hired
          rock stars and athletes for its commercials. It is promoted as a athletic daily drink to boost your strength.
          What's more, in one of its TV advertisement Nestle's fabricated this "Energy Gap" disease and states that 4/5
          children have it, and drinking <i>Milo</i> will improve the condition. As it turns out, each serving of <i>Milo</i>
          is actually 40% sugar ! Cure a fake disease by giving your child a sugar spike?
        </p>
        <div class="mb-3">
          <b-row>
            <b-col>
              <b-img fluid-grow class="rounded" src="../assets/milo-1.jpg"></b-img>
            </b-col>
            <b-col>
              <b-img fluid-grow class="rounded" src="../assets/milo-2.jpg"></b-img>
            </b-col>
          </b-row>
        </div>
        <p>
          Watch the ridiculous ad campaign here:
        </p>
        <b-embed type="iframe"
                 aspect="16by9"
                 src="https://www.youtube.com/embed/qnIpG7E3eOQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
                 allowfullscreen
        ></b-embed>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="10">
        <h4 class="mt-3">Nutella</h4>
        <p>
          <i>Nutella</i>, the tasty chocolate sauce we've all had before, is no better then <i>Milo</i>. It is
          advertised as a healthy breakfast that could be eaten on a daily basis. Its commercials often includes
          children enjoying product. However, this should-be chocolate sauce actually contains 56% percent of sugar !
          What's worse, out of all the ingredients, cocoa has the smallest proportion.
        </p>
        <div class="mb-3">
          <b-row>
            <b-col>
              <b-img fluid-grow class="rounded" src="../assets/nut-1.jpg"></b-img>
            </b-col>
            <b-col>
              <b-img fluid-grow class="rounded" src="../assets/nut-2.jpg"></b-img>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <b-img fluid class="rounded" src="../assets/nut-3.jpg"></b-img>
            </b-col>
          </b-row>
        </div>
        <div class="text-center">
          <b-button variant="primary" class="shadow" pill to="/end">continue</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Cases"
}
</script>

<style scoped>

</style>