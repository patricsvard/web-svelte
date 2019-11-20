<script>
  /* to prevent unused css add global to style tag */
  export let title;
</script>

<style type="text/scss" global>
  @import "./theme.scss";
  @import "@material/top-app-bar/mdc-top-app-bar";

  .container {
    position: relative;
  }
</style>

<header class="container mdc-top-app-bar">
  <div class="mdc-top-app-bar__row">
    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <slot name="right" />
      <span class="mdc-top-app-bar__title">{title}</span>
    </section>
  </div>
</header>
