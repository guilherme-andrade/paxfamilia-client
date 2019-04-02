<template>
  <b-container class="d-flex justify-content-center">
    <b-jumbotron class="bg-white w-75">
      <h3>Watch the Tutorial</h3>
      <hr />
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen
      />
      <br />
      <div class="d-flex justify-content-end">
        <b-button variant="outline-primary">Cancel</b-button>
        <b-button variant="primary ml-1rem">Continue</b-button>
      </div>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  name: 'App'
}
</script>
