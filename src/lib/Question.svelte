<script lang="ts">
  import { onMount } from "svelte";
  import { shuffle } from "./helpers";

  export let onSubmit: (is_correct: boolean) => void;
  export let answered = false;
  export let src: string;

  let fieldset_element: HTMLFieldSetElement =
    document.createElement("fieldset");

  function onSubmitInternal(e: SubmitEvent) {
    e.preventDefault();
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) throw new Error("Not a form");
    const form_data = new FormData(form);
    const answer = form_data.get("answer");

    onSubmit(answer === "correct");
    return true;
  }

  onMount(() => {
    fieldset_element.innerHTML = src;

    // Get the set of answers (the <ul> element)
    const answer_set = fieldset_element.querySelector("ul");
    if (!answer_set) throw new Error("No answer set");

    // Get the <li> elements inside the <ul> and shuffle them
    const answers = shuffle(Array.from(answer_set.children));

    // Transform each <li> element into an answer that looks like this:
    // <li><label><input type="radio" name="answer"/>Answer Text</label></li>
    // If the answer is correct (ie. it starts with "✅"), add the value "correct" to the input
    for (const answer_li of answers) {
      // First, get the answer content, which is the whole content of the <li> element, since the <li> might
      // contain other elements, such as multiple <p> elements
      const answer_content = answer_li.innerHTML;

      // Check if the answer starts with "✅" (we check the textContent because the <li> might contain other elements)
      const is_correct = answer_li.textContent?.startsWith("✅") ?? false;

      // Then, create a new <label> element and add the answer content to it
      const answer_label = document.createElement("label");
      answer_label.className =
        "grid grid-cols-[1.5rem,1fr] gap-x-2 items-baseline";
      answer_label.innerHTML = answer_content.replace("✅ ", "");

      // Now, create a new <input> element and add the "correct" value to it (if the answer is correct)
      const answer_input = document.createElement("input");
      answer_input.type = "radio";
      answer_input.name = "answer";
      answer_input.required = true;
      if (is_correct) answer_input.value = "correct";

      // Add the answer input inside the label so we don't have to to use the for attribute
      answer_label.prepend(answer_input);

      // Add the answer label to the answer li
      answer_li.replaceChildren(answer_label);

      // Add the answer li to the answer set
      answer_set.appendChild(answer_li);
    }
  });
</script>

<form on:submit={onSubmitInternal} data-answered={answered}>
  <fieldset bind:this={fieldset_element}></fieldset>
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

  :global(blockquote) {
    display: none;
  }

  form[data-answered="true"] {
    :global(input) {
      &:is(&:checked, &[value="correct"]) {
        appearance: none;
        /* margin-left: -4px; */
        /* margin-right: 0; */
      }
      &[value="correct"]::before {
        content: "✔️";
      }
      &:checked:not([value="correct"])::before {
        content: "❌";
      }
    }

    :global(blockquote) {
      display: block;
    }

    :global(label:has([value="correct"]) > blockquote) {
      color: #22c55e;
    }

    :global(label:not(:has([value="correct"])) > blockquote) {
      color: #ef4444;
    }
  }
</style>
