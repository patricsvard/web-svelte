<script>

</script>

<style type="text/scss">
  .container {
    display: flex;
    flex-direction: row;

    @media (max-width: 420px) {
      flex-direction: column;
    }
  }
  .child-top {
    @media (min-width: 421px) {
      flex: 1 0 50%;
    }
    height: 50px;
    background-color: red;
  }
  .child-bottom {
    @media (min-width: 421px) {
      max-width: 230px;
      flex: 0 0 50%;
    }
    height: 50px;
    background-color: blue;
  }
</style>

<div class="container">
  <div class="child-top">Top/Left</div>
  <div class="child-bottom">Bottom/Right</div>
</div>
