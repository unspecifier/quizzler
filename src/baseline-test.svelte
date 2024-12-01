<script lang="ts">
  import { onMount } from "svelte";
  import Question from "./lib/Question.svelte";
  import baseline_test_string from "./baseline-test.html?raw";

  export let num_questions: number;

  const IS_DEBUG = false;
  const DO_SHUFFLE = true;

  let quiz_template: HTMLDivElement;

  let questions: Element[];

  let current_question: number = 0;
  let results: (boolean | undefined)[] = [];
  let quiz_start: Date;
  let elapsed_timer: number;
  let time_elapsed = "00:00:00";
  let is_finished = false;

  const quiz_template_element = document.createElement("div");
  quiz_template_element.innerHTML = baseline_test_string;
  const question_elements = Array.from(quiz_template_element.children).slice(
    0,
    num_questions,
  );

  // Shuffle answers
  for (const question of question_elements) {
    const answer_elements = question.querySelectorAll("div");
    const answers = Array.from(answer_elements).map(
      (answer) => answer.outerHTML,
    );
    shuffle(answers);
    for (const answer_el of answer_elements) {
      answer_el.outerHTML = answers.pop()!;
    }
  }

  $: {
    is_finished = results.every((val) => typeof val === "boolean");
    if (is_finished) clearInterval(elapsed_timer);
  }

  function shuffle(array: unknown[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  function next_question() {
    if (current_question <= questions.length) current_question++;
  }

  function getElapsedTime(date: Date): string {
    // Get the current date and time
    const now = new Date();

    // Calculate the difference in milliseconds
    const diff = now.getTime() - date.getTime();

    // Ensure the difference is not negative
    if (diff < 0) {
      throw new Error("The provided date is in the future.");
    }

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Format as HH:mm:ss
    const formattedTime = [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");

    return formattedTime;
  }

  onMount(() => {
    if (!quiz_template) throw new Error("no template");
    questions = Array.from(quiz_template.children).slice(0, num_questions);
    num_questions = questions.length;
    results = new Array(num_questions).fill(undefined);
    if (IS_DEBUG) {
      results = [true, true, true, true, false];
      current_question = 6;
    }
    quiz_start = new Date();
    elapsed_timer = setInterval(() => {
      time_elapsed = getElapsedTime(quiz_start);
    }, 1000);
    if (DO_SHUFFLE) shuffle(questions);
  });

  function handle_question_submit(is_correct: boolean) {
    results[current_question] = is_correct;

    if (is_correct) {
      // setTimeout(next_question, 1000);
      return;
    }
  }
</script>

<article>
  <h1 class="font-bold mb-6">NHA Baseline Test</h1>

  <nav>
    <button
      type="button"
      disabled={current_question === 0}
      on:click={() => current_question--}
    >
      Previous
    </button>

    <div class="timer">
      Timer
      <time>{time_elapsed}</time>
    </div>

    <button
      type="button"
      disabled={current_question === num_questions ||
        typeof results[current_question] !== "boolean"}
      on:click={next_question}
    >
      Next
    </button>
  </nav>
  {#if current_question < num_questions}
    <fieldset disabled={typeof results[current_question] === "boolean"}>
      <legend>Question: {current_question + 1} of {num_questions}</legend>
      {#each questions as question, i}
        <div class:hidden={current_question !== i}>
          <Question
            onSubmit={handle_question_submit}
            answered={typeof results[current_question] === "boolean"}
          >
            {@html question.outerHTML}
          </Question>
        </div>
      {/each}
    </fieldset>
  {:else}
    <h2 style="font-size: 1.5rem; font-weight: medium; margin: 0">
      Final Score
    </h2>

    <div
      style="font-size: 2rem; font-weight: bold; text-align: center; margin-bottom: 1rem"
      class="score"
      class:failed={(results.filter(Boolean).length / num_questions) * 100 < 70}
    >
      {((results.filter(Boolean).length / num_questions) * 100).toFixed(2)}%
    </div>

    <table style="margin: auto">
      <tbody>
        <tr>
          <th>Correct</th>
          <td>{results.filter(Boolean).length} out of {num_questions}</td>
        </tr>
        <tr>
          <th>Incorrect</th>
          <td>{results.filter((r) => !r).length} out of {num_questions}</td>
        </tr>
      </tbody>
    </table>
  {/if}
</article>

<div id="baseline-test" bind:this={quiz_template} style="display: none">
  {@html quiz_template_element.innerHTML}
</div>

<style>
  button {
    min-width: 100px;
  }
  h1 {
    font-size: 2rem;
    margin-top: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .timer {
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 1;
    time {
      display: block;
      font-size: 1.5rem;
    }
  }
  .hidden {
    display: none;
  }

  .score {
    color: #22c55e;

    &.failed {
      color: #ef4444;
    }
  }
</style>
