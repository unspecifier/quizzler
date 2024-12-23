<script lang="ts">
  import { onMount } from "svelte";
  import Question from "./lib/Question.svelte";
  import baseline_test_md_string from "./markdown/nha-baseline.md?raw";
  import nha_practice_1_md_string from "./markdown/nha-practice-1.md?raw";
  import nha_modules_md_string from "./markdown/nha-modules.md?raw";
  import { marked } from "marked";
  import { get_elapsed_time, shuffle } from "./lib/helpers";

  export let num_questions: number = 5;

  const DO_SHUFFLE = true;

  let questions: string[];

  let current_question: number = 0;
  let results: (boolean | undefined)[] = [];
  let quiz_start: Date;
  let elapsed_timer: number;
  let time_elapsed = "00:00:00";
  let is_finished = false;

  $: {
    is_finished = results.every((val) => typeof val === "boolean");
    if (is_finished) clearInterval(elapsed_timer);
  }

  function next_question() {
    if (current_question <= questions.length) current_question++;
  }

  function markdown_to_questions(md: string) {
    return marked(md, { async: false })
      .split(/^<h2>.+<\/h2>\n/gm)
      .filter(Boolean);
  }

  onMount(() => {
    questions = [
      ...markdown_to_questions(baseline_test_md_string),
      ...markdown_to_questions(nha_practice_1_md_string),
      ...markdown_to_questions(nha_modules_md_string),
    ];
    if (DO_SHUFFLE) shuffle(questions);
    questions = questions.slice(0, num_questions);
    num_questions = questions.length;
    results = new Array(num_questions).fill(undefined);
    quiz_start = new Date();
    elapsed_timer = setInterval(() => {
      time_elapsed = get_elapsed_time(quiz_start);
    }, 1000);
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
    <fieldset
      class="fancy"
      disabled={typeof results[current_question] === "boolean"}
    >
      <legend>Question: {current_question + 1} of {num_questions}</legend>
      {#each questions as question, i}
        <div class:hidden={current_question !== i}>
          <Question
            src={question}
            onSubmit={handle_question_submit}
            answered={typeof results[current_question] === "boolean"}
          ></Question>
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

<style>
  button {
    min-width: 100px;
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
