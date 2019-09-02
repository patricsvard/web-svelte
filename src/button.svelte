<script>
  import { createEventDispatcher } from "svelte";

  let self = this;

  export let classes = (
    raised,
    unelevated,
    stroked,
    dense,
    compact,
    background,
    color
  ) => {
    const classList = [];
    raised && classList.push("mdc-button--raised");
    unelevated && classList.push("mdc-button--unelevated");
    stroked && classList.push("mdc-button--stroked");
    dense && classList.push("mdc-button--dense");
    compact && classList.push("mdc-button--compact");
    background && classList.push("mdc-theme--" + background + "-bg");
    color && classList.push("mdc-theme--" + color);
    return classList.join(" ");
  };

  export let text = "";

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch("click", event);
  }
</script>

<style type="text/scss">
  @import "@material/button/mdc-button.scss";
</style>

<button
  role="button"
  bind:this={self}
  on:click={onClick}
  class="mdc-button {classes(true)}">
  Hi!
</button>
