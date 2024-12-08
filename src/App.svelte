<script lang="ts">
  import Quiz from "./quiz.svelte";

  let num_questions: number = 307;
  let is_started = false;
  let is_dark = false;

  $: document.documentElement.classList.toggle("dark", is_dark);
</script>

<main>
  <header
    class="mb-6 grid grid-cols-[1fr,max-content,1fr] gap-4 justify-center items-center text-center"
  >
    <div></div>
    <h1 class="mb-2 text-3xl font-bold">NHA Practice Test</h1>
    <label
      class="cursor-pointer text-lg inline-grid justify-self-end justify-center items-center text-center border p-2 rounded-full size-9 hover:bg-neutral-200 dark:hover:bg-neutral-700 leading-none"
    >
      <input type="checkbox" class="hidden" bind:checked={is_dark} />
      {is_dark ? "🌙" : "☀️"}
      <small class="text-xs text-center block sr-only">Theme</small>
    </label>
  </header>

  {#if !is_started}
    <fieldset class="fancy flex flex-col items-center justify-center gap-2">
      <label for="numquestions" class="">How many questions?</label>
      <input
        type="number"
        id="numquestions"
        min="1"
        class="pl-2 py-1 rounded border border-neutral-300 dark:border-neutral-600"
        bind:value={num_questions}
      />

      <button class="mt-4" on:click={() => (is_started = true)}>Start</button>
    </fieldset>
  {:else}
    <Quiz {num_questions} />
  {/if}
</main>
