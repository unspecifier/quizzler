<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";

  export let onSubmit: (is_correct: boolean) => void;
  export let answered = false;

  function onSubmitInternal(e: SubmitEvent) {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) throw new Error("Not a form");
    const form_data = new FormData(form);
    const answer = form_data.get("answer");

    onSubmit(answer === "correct");
    return true;
  }
</script>

<form on:submit={onSubmitInternal} data-answered={answered}>
  <slot />
  <footer>
    <button type="submit">Submit</button>
  </footer>
</form>

<style>
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: end;
  }
  form[data-answered="true"] {
    :global(input[value="correct"]) {
      appearance: none;
      margin-left: 2px;
      &::before {
        content: "✔️";
      }
    }

    :global(input:checked) {
      appearance: none;
      margin-left: 2px;
      &:not([value="correct"])::before {
        content: "❌";
      }
    }
  }
</style>
