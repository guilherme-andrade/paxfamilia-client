<template>
  <b-container>
    <b-row class="mt-2rem mb-2rem">
      <b-col v-for="report in reports" :key="report" class="mb-2rem" cols="4">
        <b-card
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 border-0"
          :title="report.title"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: function() {
    return {
      reports: [
        {
          title: 'something'
        },
        {
          title: 'something2'
        },
        {
          title: 'something3'
        },
        {
          title: 'something4'
        },
        {
          title: 'something5'
        },
        {
          title: 'something6'
        }
      ]
    }
  }
}
</script>
