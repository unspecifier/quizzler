<script lang="ts">
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

  :global(small) {
    display: none;
  }

  form[data-answered="true"] {
    :global(input) {
      &:is(&:checked, &[value="correct"]) {
        appearance: none;
        margin-left: -4px;
        margin-right: 0;
      }
      &[value="correct"]::before {
        content: "✔️";
      }
      &:checked:not([value="correct"])::before {
        content: "❌";
      }
    }

    :global(small) {
      display: block;
      padding-left: 1.75rem;
    }

    :global(label:has([value="correct"]) + small) {
      color: #22c55e;
    }

    :global(label:not(:has([value="correct"])) + small) {
      color: #ef4444;
    }
  }
</style>
