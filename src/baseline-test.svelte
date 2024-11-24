<script lang="ts">
  import { onMount } from "svelte";
  import Question from "./lib/Question.svelte";

  let quiz_template: HTMLDivElement;

  let num_questions: number;
  $: num_questions = quiz_template?.childElementCount;

  let questions: Element[];
  let current_question: number = 1;
  let results: boolean[] = [];

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

  onMount(() => {
    if (!quiz_template) throw new Error("no template");
    questions = Array.from(quiz_template.children);
    results = new Array(num_questions);
    // shuffle(questions);
  });

  function handle_question_submit(is_correct: boolean) {
    results[current_question] = is_correct;

    if (is_correct) {
      return;
    }
  }
</script>

<article>
  <h1>NHA Baseline Test</h1>
  <nav>
    <button
      type="button"
      disabled={current_question === 1}
      on:click={() => current_question--}
    >
      Previous
    </button>
    <button
      type="button"
      disabled={current_question === num_questions}
      on:click={() => current_question++}
    >
      Next
    </button>
  </nav>
  <fieldset disabled={typeof results[current_question] === "boolean"}>
    <legend>Question: {current_question} of {num_questions}</legend>
    {#each questions as question, i}
      <div class:hidden={current_question !== i + 1}>
        <Question
          onSubmit={handle_question_submit}
          answered={typeof results[current_question] === "boolean"}
        >
          {@html question.outerHTML}
        </Question>
      </div>
    {/each}
  </fieldset>
</article>

<div id="baseline-test" bind:this={quiz_template} style="display: none">
  <div>
    <h6 id="question-1-of-125">Question: 1 of 125</h6>
    <p>
      A patient has managed care insurance and has been referred to a specialist
      for gastric bypass surgery. Which of the following is needed to ensure
      payment?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Fee schedule
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Preauthorization
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Concurrent review
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Retrospective review
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-2-of-125">Question: 2 of 125</h6>
    <p>
      In which of the following scenarios is it appropriate to release a
      patient&#39;s psychiatric records without the patient&#39;s consent?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        When the patient is being investigated by the police
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        When a provider is requesting medical records for a new patient
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        When the patient admits themselves into a facility
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        When the patient is receiving hospice care
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-3-of-125">Question: 3 of 125</h6>
    <p>
      Which of the following is a document used to analyze accounts receivable
      based on dates of service?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Explanation of benefits (EOB)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Remittance advice (RA)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Itemized statement
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Aging report
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-4-of-125">Question: 4 of 125</h6>
    <p>
      A patient is covered by Medicare through managed care. Which of the
      following parts of Medicare includes this coverage?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Part A
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Part B
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Part C
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Part D
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-5-of-125">Question: 5 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A billing and coding specialist is billing for services provided by an
      assistant surgeon. Which of the following modifiers should the specialist
      use?
    </p>
    <table>
      <thead>
        <tr>
          <th>Modifier</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-47</td>
          <td>Anesthesia by Surgeon</td>
        </tr>
        <tr>
          <td>-62</td>
          <td>Two Surgeons</td>
        </tr>
        <tr>
          <td>-66</td>
          <td>surgical Team</td>
        </tr>
        <tr>
          <td>-80</td>
          <td>Assistant Surgeon</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -62
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -66
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        -80
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -47
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-6-of-125">Question: 6 of 125</h6>
    <p>
      Which of the following requires an authorization to release protected
      health information (PHI)?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Processing an insurance claim
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Life insurance policy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        <em>Subpoena duces tecum</em>
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Reporting communicable diseases
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-7-of-125">Question: 7 of 125</h6>
    <p>
      Which of the following statements is true when determining patient
      financial responsibility by reviewing the remittance advice?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Any services denied for erroneous claim data are the responsibility of the
        patient.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Any coinsurance, copayments, or deductibles should be collected from the
        patient.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The difference between the billed amount and the allowed amount should be
        collected from the patient.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Claims not billed to a third-party payer within the correct time period should
        be collected from the patient.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-8-of-125">Question: 8 of 125</h6>
    <p>
      A billing and coding specialist is coding a claim for a provider who
      performed a hysterectomy and needs to determine whether the procedure was
      done by an excisional or laparoscopic procedure.
    </p>
    <p>
      Which of the following actions should the specialist take to determine the
      correct CPT® procedure code?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Review the operative report.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Code the procedure as laparoscopic because it is the most commonly used approach.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Code the procedure as excisional because the reimbursement will be greater
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Review the provider&#39;s SOAP notes.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-9-of-125">Question: 9 of 125</h6>
    <p>
      A billing and coding specialist is reviewing a remittance advice that has
      a deductible of $100 indicated for one of the claims. The provider asks
      the specialist to write it off. Which of the following describes this
      scenario?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Fraud
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Abuse
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Adjudication
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Spend down
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-10-of-125">Question: 10 of 125</h6>
    <p>
      A billing and coding specialist is verifying coverage for a Medicare
      beneficiary. Which of the following determines Medicare coverage of
      services on a national level?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        NCD
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        PAR
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        LCD
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        EDI
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-11-of-125">Question: 11 of 125</h6>
    <p>
      Which of the following is a specified amount of money that a patient who
      has a preferred provider organization (PPO) plan is required to pay for
      each visit or medical service?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Premium
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Copayment
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Coinsurance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Deductible
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-12-of-125">Question: 12 of 125</h6>
    <p>For which of the following is the provider responsible?</p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Coinsurance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Professional courtesy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Copay
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Allowed amount
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-13-of-125">Question: 13 of 125</h6>
    <p>
      A patient&#39;s employer has not submitted a premium payment for the
      company&#39;s commercial insurance plan. Which of the following is the
      claim status the provider will receive for any claims sent to the
      third-party payer?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Invalid
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Suspended
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Denied
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Incomplete
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-14-of-125">Question: 14 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A provider documents a simple repair of a superficial wound that is 2.5 cm
      long on a patient&#39;s hand. A billing and coding specialist reports the
      code for a 5 cm simple repair. Which of the following describes the
      specialist&#39;s action?
    </p>
    <h4 id="cpt-code-set">CPT® Code Set</h4>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12001</td>
          <td>
            Simple repair of superficial wounds of scalp, neck, axillae,
            external genitalia, trunk and/or extremities (including hands and
            feet); 2.5 cm or less
          </td>
        </tr>
        <tr>
          <td>12002</td>
          <td>
            Simple repair of superficial wounds of scalp, neck, axillae,
            external genitalia, trunk and/or extremities (including hands and
            feet); 2.6 to 7.5cm
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Monitoring
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Clustering
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Upcoding
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Auditing
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-15-of-125">Question: 15 of 125</h6>
    <p>
      A billing and coding specialist is reviewing a letter from a patient&#39;s
      third-party payer about an emergency procedure that was performed for the
      patient. The letter states that preauthorization requirements were not met
      and the claim was denied. Which of the following actions should the
      specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Send an appeal letter to the third-party payer.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Write off the total amount of the bill as uncollectible.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Bill the patient for services rendered.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Resubmit the bill to the third-party payer with a different CPT® code.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-16-of-125">Question: 16 of 125</h6>
    <p>
      Which of the following identifies improper payments made for CMS claims?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Office of Inspector General (OIG)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Quality Improvement Organizations (QIOs)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Recovery Audit Contractors (RACs)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare Administrative Contractors (MACs)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-17-of-125">Question: 17 of 125</h6>
    <p>
      A billing and coding specialist is completing a claim to be submitted for
      Blue Cross Blue Shield by a provider who used to be in private practice
      but was recently hired by a group practice. Which of the following is true
      regarding the provider&#39;s national provider identifier (NPI)?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The provider&#39;s individual NPI for the group practice is the same as the
        one from the private practice.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The claim has to wait to be submitted until a new NPI is assigned to the
        provider.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Since the provider has joined a group, only the group&#39;s NPI is listed
        on the claim.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The provider&#39;s Social Security number can be substituted for the NPI
        temporarily.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-18-of-125">Question: 18 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A billing and coding specialist is reviewing the encounter form for a
      patient who has type 1 diabetes mellitus and stage III chronic kidney
      disease (CKD). Which of the following diagnosis codes should be assigned?
    </p>
    <h4 id="icd-10-cm-code-set">ICD-10-CM Code Set</h4>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>E10.22</td>
          <td>Type 1 diabetes mellitus with diabetic chronic kidney disease</td>
        </tr>
        <tr>
          <td>E11.9</td>
          <td>Type 2 diabetes mellitus without complications</td>
        </tr>
        <tr>
          <td>N18.2</td>
          <td>Chronic kidney disease, stage 2</td>
        </tr>
        <tr>
          <td>N18.6</td>
          <td>End stage renal disease</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        E119
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        N18.2
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        E10.22
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        N18.6
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-19-of-125">Question: 19 of 125</h6>
    <p>
      Which of the following should be included on a claim form that is sent
      from a specialist to a managed health care organization?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        A claims adjustment reason code
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        A prior authorization number
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The referring provider&#39;s Social Security number (SSN)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The referring provider&#39;s national provider identifier (NPI)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-20-of-125">Question: 20 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A patient is in the third trimester of pregnancy and has developed
      gestational diabetes mellitus that is diet-controlled. Which of the
      following ICD-10-CM codes should a billing and coding specialist assign to
      this patient?
    </p>
    <h4 id="icd-10-cm-code-set">ICD-10-CM Code Set</h4>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>O24.410</td>
          <td>Gestational diabetes mellitus in pregnancy. diet controlled</td>
        </tr>
        <tr>
          <td>Z79.84</td>
          <td>Long term (current) use of oral hypoglycemic</td>
        </tr>
        <tr>
          <td>Z79.4</td>
          <td>Long term (current) use of insulin</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        O24.410, Z79.84
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        O24.410, Z79.4
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        O24.410
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Z79.4, O24.410
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-21-of-125">Question: 21 of 125</h6>
    <p>
      Which of the following terms describes the amount the patient must pay for
      a service when they have an insurance plan benefit that pays 70% of the
      allowed amount and the patient is responsible for 30% of the allowed
      amount?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Coinsurance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Deductible
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Premium
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Copayment
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-22-of-125">Question: 22 of 125</h6>
    <p>
      A married couple each have group insurance through their employers. The
      patient has an appointment with the provider. Which insurance should be
      used as primary for the appointment?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The partner&#39;s policy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The policy belonging to the older person
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The policy belonging to the person who has their birthday first in the calendar
        year
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The patient&#39;s policy
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-23-of-125">Question: 23 of 125</h6>
    <p>
      A provider accepts assignment for a patient who has a $10 copayment and
      has already met $100 of their $150 deductible. The office charge is $100
      and the allowed amount is $70. How much should the provider&#39;s office
      adjust off the patient&#39;s account?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        $30
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $90
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $10
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $50
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-24-of-125">Question: 24 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      Which of the following physical status modifiers should a billing and
      coding specialist use for anesthesia services performed on a healthy 4-
      year-old patient?
    </p>
    <h4 id="cpt-physical-status-modifiers">CPT® Physical Status Modifiers</h4>
    <table>
      <thead>
        <tr>
          <th>Modifier</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-P1</td>
          <td>A normal, healthy patient</td>
        </tr>
        <tr>
          <td>-P2</td>
          <td>A patient with mild systemic disease</td>
        </tr>
        <tr>
          <td>-P3</td>
          <td>A patient with severe systemic disease</td>
        </tr>
        <tr>
          <td>-P4</td>
          <td>
            A patient with severe systemic disease that is a constant threat to
            life
          </td>
        </tr>
        <tr>
          <td>-P5</td>
          <td>
            A moribund patient who is not expected to survive without the
            operation
          </td>
        </tr>
        <tr>
          <td>-P6</td>
          <td>
            A declared brain-dead patient whose organs are being removed for
            donor purpose
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        -P1
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -P3
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -P4
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -P6
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-25-of-125">Question: 25 of 125</h6>
    <p>
      A billing and coding specialist is posting payments from an explanation of
      benefits (EOB). Which of the following equations determines how patient
      responsibility is calculated?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Charged amount - Allowed amount - Deductible amount = Patient responsibility
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Charged amount - Payment amount - Adjustment amount = Patient responsibility
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Charged amount - Allowed amount - Deductible amount - Paid amount = Patient
        responsibility
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Charged amount - Allowed amount - Adjustment amount = Patient responsibility
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-26-of-125">Question: 26 of 125</h6>
    <p>
      When coding for outpatient and professional services and procedures, a
      billing and coding specialist must sequence the diagnosis codes according
      to ICD-10-CM guidelines. Which of the following describes the first listed
      diagnosis code on a claim?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Primary diagnosis
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Manifestation
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Late effect
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Assessment
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-27-of-125">Question: 27 of 125</h6>
    <p>
      A billing and coding specialist is submitting a batch of claims to the
      clearinghouse and receives a report stating that three claims were
      rejected. Which of the following actions should the specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Bill the patient for the services that were not covered.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Review the scrubber report.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Call the third-party payer to determine the reasons for rejection.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Appeal the rejections.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-28-of-125">Question: 28 of 125</h6>
    <p>
      Which of the following information is required to include on an Advance
      Beneficiary Notice (ABN) form?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        CPT® codes
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The reason Medicare may not pay
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        ICD-10-CM codes
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The reason a patient needs a procedure
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-29-of-125">Question: 29 of 125</h6>
    <p>
      A billing and coding specialist is reviewing a claim edit report and
      identifies a rejection for missing patient demographic information. Which
      of the following missing pieces of patient demographic information would
      cause a rejection from the clearinghouse?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Middle name
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Date of birth
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Apartment number
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Emergency contact name
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-30-of-125">Question: 30 of 125</h6>
    <p>
      Claims that are submitted without an NPI number will delay payment to the
      provider due to which of the following?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The number is needed to identify the patient.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The number is needed to identify the provider.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The number is used to identify the claim.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The number is used to preauthorize the service.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-31-of-125">Question: 31 of 125</h6>
    <p>
      The HIPAA Privacy Rule requires covered entities to track which of the
      following?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Release of protected health information (PHI)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Claims adjudication
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Coordination of care
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Clinical trial participation
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-32-of-125">Question: 32 of 125</h6>
    <p>
      Which of the following procedures refers to the removal of kidney stones?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Nephrolysis
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Nephrectomy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Nephrolithotomy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Nephrotomy
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-33-of-125">Question: 33 of 125</h6>
    <p>
      A billing and coding specialist is using an accounts receivable aging
      report to determine which accounts should be sent to collections.
      According to best practices, which of the following accounts should the
      specialist send to collections?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        An account that has a balance of $600 and is 135 days old
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        An account that has a balance of $1,500 and is 60 days old
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        An account that has a balance of $60 and is 45 days old
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        An account that has a balance of $500 and is 110 days old
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-34-of-125">Question: 34 of 125</h6>
    <p>
      A billing and coding specialist is coding a claim for an autopsy. Which of
      the following CPT® codes should be included on the claim?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        80408 Aldosterone suppression evaluation panel (e.g., saline infusion)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        88000 Necropsy (autopsy), gross examination only; without central nervous
        system
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        31615 Tracheobronchoscopy through established tracheostomy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        81000 Urinalysis, by dip stick or tablet reagent for bilirubin, glucose,
        hemoglobin, ketones, leukocytes, nitrite, pH, protein, specific gravity,
        urobilinogen, any number of these constituents
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-35-of-125">Question: 35 of 125</h6>
    <p>
      A provider orders a comprehensive metabolic panel for a 70-year-old
      patient who has Medicare as their primary insurance. Which of the
      following is required to inform the patient they may be responsible for
      payment?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        HIPAA
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Advance Beneficiary Notice
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Assignment of benefits
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Claim form
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-36-of-125">Question: 36 of 125</h6>
    <p>
      Which of the following actions by a billing and coding specialist is an
      example of fraud?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Submitting a claim with errors on it
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Violating participating provider agreements with third-party payers
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Billing for services not provided to obtain higher reimbursement
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Billing noncovered services as covered services in error
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-37-of-125">Question: 37 of 125</h6>
    <p>
      Which of the following is an electronic form that is used to post
      reimbursements?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        UB-04 claim form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Electronic data interchange (EDI)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        CMS-1500 claim form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Electronic remittance advice (ERA)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-38-of-125">Question: 38 of 125</h6>
    <p>
      Which of the following does a patient sign to allow payment of claims
      directly to the provider?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Advance Beneficiary Notice (ABN)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Assignment of benefits statement
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Notice of Privacy Practices (NPP)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Release of information form
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-39-of-125">Question: 39 of 125</h6>
    <p>
      A billing and coding specialist is posting payments to accounts based on a
      remittance advice and discovers a denial of payment. Which of the
      following codes indicates why reimbursement was denied?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Claims adjustment reason code
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Unlisted code
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Category II code
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Taxonomy code
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-40-of-125">Question: 40 of 125</h6>
    <p>
      A billing and coding specialist should identify that which of the
      following statements is correct regarding the filing limit for Medicaid?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The filing limit is 1 year from the date of service.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The filing limit varies from state to state.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        There is no filing limit for Medicaid.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The filing limit is 90 days from the date of service.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-41-of-125">Question: 41 of 125</h6>
    <p>
      A patient was seen in an outpatient clinic for a cough, chest congestion,
      and a low-grade fever and was given the diagnosis of possible pneumonia.
      How should a billing and coding specialist code this encounter using
      ICD-10-CM?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Cough, fever, pneumonia
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Pneumonia
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Cough, chest congestion, and low-grade fever
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Possible pneumonia
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-42-of-125">Question: 42 of 125</h6>
    <p>
      A provider documents a patient&#39;s response to questions about various
      parts of the body. A billing and coding specialists should identify that
      this information is included in which of the following sections of the
      note?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Past medical history
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Family history
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Review of systems
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Comprehensive examination
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-43-of-125">Question: 43 of 125</h6>
    <p>
      Many third-party payers require that a patient pay a set amount of
      eligible charges per year before the patient&#39;s health care plan will
      begin to pay benefits. This refers to which of the following terms?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Coinsurance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Premium
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Deductible
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Copay
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-44-of-125">Question: 44 of 125</h6>
    <p>
      A billing and coding specialist is preparing a claim for an esophagectomy.
      Which of the following types of service is being provided?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Viewing
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Incision
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Removal
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Repair
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-45-of-125">Question: 45 of 125</h6>
    <p>
      A billing and coding specialist is posting a payment received from
      Medicare. The specialist should identify that which part of Medicare
      covers prescription costs?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Part A
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Part B
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Part C
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Part D
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-46-of-125">Question: 46 of 125</h6>
    <p>
      A billing and coding specialist is performing a coordination of benefits
      check. The patient has primary and secondary benefits. Which of the
      following applies to the guarantor?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        They are responsible for obtaining preauthorization for services.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        They are responsible for providing the lowest possible cost of health care
        services.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        They are responsible for any charges that are incurred.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        They are responsible for submitting the claim for the secondary third-party
        payer.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-47-of-125">Question: 47 of 125</h6>
    <p>
      Which of the following processes is used to verify patient benefits and
      insurance coverage for an outpatient procedure?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Preadmission review
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Precertification
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Adjudication
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Coordination of benefits
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-48-of-125">Question: 48 of 125</h6>
    <p>
      A billing and coding specialist is processing a claim for a new patient
      who came to the office for a sore throat. The provider diagnosed the
      patient with tonsilitis and wrote a prescription for antibiotics. Which of
      the following codes should the specialist use?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99213 Office or other outpatient visit for the evaluation and management
        of an established patient, which requires a medically appropriate history
        and/or examination and low level of medical decision making.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99393 Periodic comprehensive preventive medicine reevaluation and management
        of an individual including an age and gender appropriate history, exam, counseling/guidance/risk
        factor reduction interventions, and the ordering of laboratory/diagnostic
        procedures; established patient: late childhood (age 5 through 11 years)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        99203 Office or other outpatient visit for the evaluation and management
        of a new patient, which requires a medically appropriate history and/or examination
        and low level of medical decision making.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99282 Emergency department visit for the evaluation and management of a patient,
        which requires a medically appropriate history and/or examination and straightforward
        level of medical decision making.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-49-of-125">Question: 49 of 125</h6>
    <p>
      A billing and coding specialist is evaluating code assignments for a batch
      of claims. Which of the following should the specialist consult as a
      resource to check for proper code assignment based on
      procedure-to-procedure (PTP) code pair edits and medically unlikely edits
      (MUEs)?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        National correct Coding initiative (NCCI)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Recovery audit contractor (RAC) program
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare coverage database (MCD)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Office of the inspector General (OIG)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-50-of-125">Question: 50 of 125</h6>
    <p>
      A patient has a new diagnosis of hypothyroidism. In which of the following
      body systems is the thyroid gland located?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Urinary system
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Digestive system
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Endocrine system
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Lymphatic system
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-51-of-125">Question: 51 of 125</h6>
    <p>
      Which of the following government agencies is responsible for combating
      fraud and abuse in health insurance and health care delivery?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Office of inspector General (OIG)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Compliance officer
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Department of Health and Human Services (HHS)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Centers for Medicare and Medicaid Services (CMS)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-52-of-125">Question: 52 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A billing and coding specialist is coding a procedure note for a patient
      who had a diagnostic hysteroscopy that resulted in a hysteroscopic
      cervical biopsy. Which of the following CPT® codes should the specialist
      use?
    </p>
    <h4 id="cpt-code-set">CPT® Code Set</h4>
    <table>
      <thead>
        <tr>
          <th>Code / Modifier</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>58555</td>
          <td>Hysteroscopy, diagnostic (separate procedure)</td>
        </tr>
        <tr>
          <td>58558</td>
          <td>
            Hysteroscopy, surgical: with sampling (biopsy) of endometrium and/or
            polypectomy, with or without D&amp;C
          </td>
        </tr>
        <tr>
          <td>-59</td>
          <td>Distinct Procedural Service</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        58555
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        58558
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        58558, 58555-59
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        58558-59, 58555
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-53-of-125">Question: 53 of 125</h6>
    <p>
      A billing and coding specialist is contacted by a patient who requests a
      copy of the remittance advice for a recently adjudicated claim. Which of
      the following actions should the specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Remove all information other than what pertains to the patient.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Make a clear copy of the page where the patient&#39;s information is included.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Explain to the patient that this information cannot be released to them.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Refer the patient to their third-party payer for a copy of the remittance
        advice.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-54-of-125">Question: 54 of 125</h6>
    <p>
      Which of the following is the filing limit for claim submission for an
      outpatient service with TRICARE?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Within 1 year from the date of service
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Within 90 days from the date of service
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Within 60 days from the date of service
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Within 2 years from the date of service
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-55-of-125">Question: 55 of 125</h6>
    <p>
      Which of the following is an example of a breach of patient
      confidentiality?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Discussing patient information in a public space
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Sharing patient information with the patient&#39;s health care team
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Releasing patient information to someone listed on the protected health information
        (PHI) disclosure form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Giving patient information to an employer for a workers&#39; compensation
        claim
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-56-of-125">Question: 56 of 125</h6>
    <p>
      A billing and coding specialist is analyzing the health of a
      practice&#39;s revenue cycle using an aging report. Which of the following
      categories of the report should contain the lowest percentage of accounts
      receivable?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        31 to 60 days
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Greater than 120 days
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        61 to 90 days
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        0 to 30 days
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-57-of-125">Question: 57 of 125</h6>
    <p>
      A billing and coding specialist is preparing a list of delinquent accounts
      over 300 days old that have received telephone calls, letters, and have
      been referred to a collection agency with no results. Which of the
      following is the term that describes accounts receivable that are deemed
      to be &quot;uncollectable&quot;?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Bad debts
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Pending claims
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Improper payments
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Open claims
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-58-of-125">Question: 58 of 125</h6>
    <p>Which of the following is the purpose of coordination of benefits?</p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        To prevent multiple third-party payers from paying benefits covered by other
        policies
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        To compare payer edits and the patient&#39;s health plan
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        To collect and verify information about the patient and provider by sorting
        claims upon submission
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        To reduce the number of paper claims submitted
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-59-of-125">Question: 59 of 125</h6>
    <p>
      Which of the following actions should a billing and coding specialist take
      when submitting a claim to Medicaid for a patient who has primary and
      secondary insurance coverage?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Attach the remittance advice from the primary insurance along with the Medicaid
        claim.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Submit the claim and Medicaid remittance advice to the secondary insurance.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Attach the remittance advice from the patient&#39;s most recent visit to
        confirm Medicaid eligibility.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Submit both claims simultaneously and then review the remittance advice from
        both to determine which one provided more coverage.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-60-of-125">Question: 60 of 125</h6>
    <p>
      Which of the following describes an insurance company that offers plans
      that pay health care providers who render services to patients?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Fee-for-service
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Guarantor
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Third-party payer
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Clearinghouse
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-61-of-125">Question: 61 of 125</h6>
    <p>
      In which of the following departments should a patient be seen for a
      furuncle?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Cardiology
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Dermatology
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Otolaryngology
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Gastroenterology
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-62-of-125">Question: 62 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A patient who is insulin-dependent is diagnosed with diabetic retinopathy.
      According to ICD-10-CM coding guidelines, in which of the following orders
      should the codes be reported on the claim form?
    </p>
    <h4 id="icd-10-cm-code-set">ICD-10-CM Code Set</h4>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>E10.319</td>
          <td>
            Type 1 diabetes mellitus with unspecified diabetic retinopathy
            without macular edema
          </td>
        </tr>
        <tr>
          <td>E11.319</td>
          <td>
            Type 2 diabetes mellitus with unspecified diabetic retinopathy
            without macular edema (Use additional code to identify control using
            insulin Z79.4.)
          </td>
        </tr>
        <tr>
          <td>Z79.4</td>
          <td>Long term (current) use of insulin</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Z79.4, E11.319
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        E10.319, Z79.4
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        E11.319, Z79.4
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Z79.4, E10.319
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-63-of-125">Question: 63 of 125</h6>
    <p>
      A billing and coding specialist is preparing a claim for a participating
      provider whose billed amount is $175.00 for an encounter. The third-party
      payer&#39;s allowed amount is $90.00 for the service rendered, including a
      $20.00 copay. The specialist should recognize that which of the following
      is the provider&#39;s write-off amount?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $20.00
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $65.00
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $70.00
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        $85.00
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-64-of-125">Question: 64 of 125</h6>
    <p>
      Which of the following is proper supportive documentation for reporting
      CPT® and ICD-10-CM codes for the removal of a skin lesion?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Approval on previous claim forms
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Operative report
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Encounter form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Progress note
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-65-of-125">Question: 65 of 125</h6>
    <p>
      Which of the following is a document about patient rights that is required
      to be signed by the patient to acknowledge receipt and can be provided to
      the patient upon request?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Notice of Privacy Practices (NPP)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        General Equivalence Mappings (GEMs)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        UB-04 form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare Summary Notice (MSN)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-66-of-125">Question: 66 of 125</h6>
    <p>
      Which of the following requires companies with 20 or more workers to offer
      employees who are laid off the ability to buy into the company&#39;s
      health insurance coverage for 18 months?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Coordination of benefits (COB)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Health insurance Portability and Accountability Act (HIPAA)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Consolidated Omnibus Budget Reconciliation Act of 1985 (COBRA)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Competitive medical plan (CMP)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-67-of-125">Question: 67 of 125</h6>
    <p>
      A billing and coding specialist is submitting an electronic claim for a
      procedure with modifier -22 for increased procedural services. Which of
      the following actions should the specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Include an attachment to the claim.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Contact the third-party payer.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Inform the patient that the service is noncovered.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Remove modifier -22 and submit the claim.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-68-of-125">Question: 68 of 125</h6>
    <p>
      A billing and coding specialist is reviewing provider notes to complete a
      claim. They need clarification on whether the procedure performed was on
      the left side, right side, or bilaterally. Which of the following
      indicates laterality of the procedure for the claim?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        A special report
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        A modifier
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Pre-authorization
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        An add-on code
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-69-of-125">Question: 69 of 125</h6>
    <p>
      A billing and coding specialist is reviewing an operative report for a
      patient who had a graft. Which of the following is a tissue transplanted
      from one person to another?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Autograft
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Allograft
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Alloplastic graft
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Xenograft
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-70-of-125">Question: 70 of 125</h6>
    <p>
      A patient has health coverage through multiple third-party payers. A
      billing and coding specialist should identify that which of the following
      is the payer of last resort?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Medicaid
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        CHAMPVA
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        TRICARE
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-71-of-125">Question: 71 of 125</h6>
    <p>
      A surgeon performed a cholecystectomy for a patient. The billing and
      coding specialist does not know whether to code for an open or
      laparoscopic cholecystectomy. The specialist should query the provider to
      prevent which of the following types of fraud or abuse?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Upcoding
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Undercoding
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Bundling
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Unbundling
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-72-of-125">Question: 72 of 125</h6>
    <p>
      A billing and coding specialist is coding a consultation in the
      provider&#39;s office. The provider documented the appropriate history and
      exam, with low-level medical decision making. Which of the following
      Evaluation and Management (E/M) codes should the specialist report?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99253 Inpatient or observation consultation for a new or established patient,
        which requires a medically appropriate history and/or examination and low
        level of medical decision making.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99284 Emergency department visit for the evaluation and management of a patient,
        which requires a medically appropriate history and/or examination and moderate
        level of medical decision making.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        99243 Office or other outpatient consultation for a new or established patient,
        which requires a medically appropriate history and/or examination and low
        level of medical decision making.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99291 Critical care, evaluation and management of the critically ill or critically
        injured patient; first 30-74 minutes.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-73-of-125">Question: 73 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A billing and coding specialist is preparing a claim for a colonoscopy. At
      the start of the procedure, the provider determined that the patient had
      not properly prepared for the procedure, so the procedure was immediately
      stopped. Which of the following modifiers should the specialist use?
    </p>
    <table>
      <thead>
        <tr>
          <th>Modifier</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-22</td>
          <td>Increased procedural services</td>
        </tr>
        <tr>
          <td>-23</td>
          <td>Unusual anesthesia</td>
        </tr>
        <tr>
          <td>-52</td>
          <td>Reduced services</td>
        </tr>
        <tr>
          <td>-53</td>
          <td>Discontinued procedure</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -23
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        -53
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -22
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -52
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-74-of-125">Question: 74 of 125</h6>
    <p>
      Which of the following are required for professional services claims to
      specify the type of organization for the services rendered?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Qualifiers
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Place of service codes
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        National provider identifier
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Modifiers
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-75-of-125">Question: 75 of 125</h6>
    <p>Vaccine products are included in which of the following code sets?</p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        ICD-10-CM
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        HCPCS
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        CPT®
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        NDC
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-76-of-125">Question: 76 of 125</h6>
    <p>
      Chronic kidney disease is included in which of the following code sets?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        CPT®
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        ICD-10-PCS
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        ICD-10-CM
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        SNOMED
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-77-of-125">Question: 77 of 125</h6>
    <p>
      Which of the following documents should a billing and coding specialist
      use to ensure that all payers are sending reimbursement within 45 days of
      claim submission?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Utilization review
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Fee schedule
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Aging report
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Remittance advice
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-78-of-125">Question: 78 of 125</h6>
    <p>
      A patient presents to a provider with chest pain and shortness of breath.
      After an unexpected EKG result, the provider calls a cardiologist and
      summarizes the patient&#39;s symptoms. Which of the following is a portion
      of HIPAA that allows the provider to speak to the cardiologist prior to
      obtaining the patient&#39;s consent?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Title I: Health insurance Reform
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Notice of Privacy Practices
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        FERPA
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Title II: Administrative Simplification
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-79-of-125">Question: 79 of 125</h6>
    <p>HCPCS codes are used in which of the following health care settings?</p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Hospital inpatient services
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Skilled nursing facilities
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Physician clinics
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Psychiatric facility
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-80-of-125">Question: 80 of 125</h6>
    <p>
      Which of the following is a valid type of authorization used to release
      medical information to the judicial system?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Consent for treatment form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Deposition
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Signed release of information form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        <em>Subpoena duces tecum</em>
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-81-of-125">Question: 81 of 125</h6>
    <p>
      Which of the following security features is required during transmission
      of protected health information and medical claims to third-party payers?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Unique user IDs and passwords
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Role-based access controls
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Electronic data interchange
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Encryption
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-82-of-125">Question: 82 of 125</h6>
    <p>
      A claim was denied due to termination of coverage. The patient had
      recently obtained new insurance. Which of the following actions should the
      billing and coding specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Ask the patient to pay in full and submit the claim to the new third-party
        payer.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Appeal the denial.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Resubmit the claim to the original third-party payer.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Obtain the patient&#39;s updated insurance and submit the claim to the new
        third-party payer.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-83-of-125">Question: 83 of 125</h6>
    <p>
      A billing and coding specialist is reviewing a claim for services provided
      on November 30. In reviewing the insurance information, the specialist
      notes the patient&#39;s eligibility date began on December 1. The
      specialist changing the date of service to December 1 is an example of
      which of the following?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Embezzlement
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Abuse
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Compliance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Fraud
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-84-of-125">Question: 84 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A billing and coding specialist is reviewing a denied claim for a
      19-year-old patient&#39;s hysterectomy. The service was coded as 58150-26.
      Which of the following is the reason for the denial?
    </p>
    <h4 id="cpt-code-set">CPT® Code Set</h4>
    <table>
      <thead>
        <tr>
          <th>Code / Modifier</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>58150</td>
          <td>
            Total abdominal hysterectomy (corpus and cervix), with or without
            removal of tube(s), with or without removal of ovary(s)
          </td>
        </tr>
        <tr>
          <td>-26</td>
          <td>Professional component</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The age is not consistent with the procedure.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        No significantly separate service was provided on the same day by the same
        provider.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The modifier is not valid with the procedure.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Precertification was not obtained before services were performed.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-85-of-125">Question: 85 of 125</h6>
    <p>
      A billing and coding specialist is training a new specialist about
      submitting claims to a clearinghouse. Which of the following describes the
      process completed by the clearinghouse before submitting claims to a
      third-party payer?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Adjudicating claims
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Requesting review by an insurance carrier for the reconsideration of unpaid
        claims
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Reviewing claims to verify accurate payment has been received
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Checking claims against payer edits for missing, incomplete, or invalid information
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-86-of-125">Question: 86 of 125</h6>
    <p>
      Which of the following modifiers indicates that a patient has signed a
      Medicare Advance Beneficiary Notice (ABN)?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -GZ Expect item or service denied as not reasonable and necessary
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -E1 Upper left eyelid
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        -GA Waiver of liability statement issued as required by payer policy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -32 Mandated services
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-87-of-125">Question: 87 of 125</h6>
    <p>
      Which of the following is used to communicate why a claim line item was
      denied or paid differently than it was billed?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Claims adjustment reason codes
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Scrubber report
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Provider taxonomy codes
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Claim status review
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-88-of-125">Question: 88 of 125</h6>
    <p>
      A billing and coding specialist is reviewing a Medicare remittance advice
      (RA) and discovers a denial due to medical necessity. Which of the
      following actions should the specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Check the local and national coverage determination policies for diagnosis
        requirements.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Verify if secondary insurance is available to cover the charges.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Use the electronic data interchange (EDI) to verify eligibility of the patient&#39;s
        benefits.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Use a modifier to report the medical necessity.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-89-of-125">Question: 89 of 125</h6>
    <p>
      A billing and coding specialist is reviewing a patient&#39;s account and
      notes there is an outstanding balance that is 45 days old after
      third-party payer reimbursement. Which of the following actions should the
      specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Submit a request to collections to receive payment for the outstanding balance.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Record the outstanding balance as an uncollectible write-off.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Give the patient a waiver.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Send the patient an itemized statement to collect the outstanding balance.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-90-of-125">Question: 90 of 125</h6>
    <p>
      A billing and coding specialist is preparing a claim for an outpatient
      encounter. The patient was last seen in the office 2 years ago. Which of
      the following Evaluation and Management (E/M) codes should the specialist
      use?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99383 Initial comprehensive preventive medicine evaluation and management
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99347 Home or residence visit for the evaluation and management of an established
        patient
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        99213 Office or other outpatient visit for the evaluation and management
        of an established patient
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        99203 Office or other outpatient visit for the evaluation and management
        of a new patient
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-91-of-125">Question: 91 of 125</h6>
    <p>
      Which of the following are used to code provider and outpatient services?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        ICD-10-PCS codes
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        APCs
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        DRGs
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        CPT® codes
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-92-of-125">Question: 92 of 125</h6>
    <p>
      A billing and coding specialist is collecting demographic information for
      a patient who lives in Hawaii and is an active duty service member. The
      specialist should identify that the insured has which of the following
      types of insurance?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        TRICARE Prime Overseas
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        TRICARE for Life
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        TRICARE Reserve Select
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        TRICARE
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-93-of-125">Question: 93 of 125</h6>
    <p>Which of the following describes the nature of a modifier?</p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Describes additional intra-service work that has occurred
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Identifies the place of service
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Indicates that an alteration to a service or procedure has occurred
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Identifies new technology was used
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-94-of-125">Question: 94 of 125</h6>
    <p>
      A billing and coding specialist is reviewing an electronic remittance
      advice (ERA). Which of the following gives additional information about
      the denial of reimbursement?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Electronic data interchange (EDI) receipt identifier
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Common data file
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Remark code
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Preauthorization
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-95-of-125">Question: 95 of 125</h6>
    <p>
      Which of the following is a covered entity affected by HIPAA security
      rules?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        A patient
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        A beneficiary
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        A family member of a guarantor
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        A health care clearinghouse
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-96-of-125">Question: 96 of 125</h6>
    <p>
      A patient&#39;s portion of the bill should be discussed with the patient
      before a procedure is performed for which of the following reasons?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        To determine the procedure
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        To verify insurance coverage
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        To give the patient the option to negotiate their portion of the bill
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        To ensure the patient understands how much they are responsible to pay
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-97-of-125">Question: 97 of 125</h6>
    <p>
      A patient has a history of breast cancer that has metastasized to the
      liver and is undergoing chemotherapy today for the liver cancer. Which of
      the following ICD-10-CM codes should be sequenced first?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        C50.111 Primary breast cancer
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        C78.7 Secondary liver cancer
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Z51.11 Chemotherapy
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Z90.3 History of breast cancer
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-98-of-125">Question: 98 of 125</h6>
    <p>
      A billing and coding specialist is determining patient financial
      responsibility for a claim. The billed amount is $1,800, the allowed
      amount is $750, and the patient paid a $20 copayment. There is a $500
      deductible that has not been met, and the plan pays 80/20. Which of the
      following is the total patient financial responsibility?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $1050
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        $570
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $170
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        $750
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-99-of-125">Question: 99 of 125</h6>
    <p>
      A billing and coding specialist is processing a claim for a patient who
      has Medicare and Medicaid coverage. Which of the following is the type of
      claim that is automatically adjudicated by Medicare and forwarded to
      Medicaid?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Crossover
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medigap
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Managed care
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        CHAMPVA
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-100-of-125">Question: 100 of 125</h6>
    <p>
      A billing and coding specialist is preparing to create patient statements
      and has been asked to collect finance charges on any late payments.
      According to the Truth in Lending Act (TILA), which of the following is
      the way the finance charges must be disclosed on the statement?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        As an assigned dollar amount
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        As a multiple of the outstanding balance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        As an annual percentage rate
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        As an amount no higher than the outstanding balance
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-101-of-125">Question: 101 of 125</h6>
    <p>
      A patient is preauthorized to receive vitamin B12 injections from January
      1 to May 31. On June 2, the provider prescribes an additional 6 months of
      injections. In order for the patient to continue with coverage of care,
      which of the following should occur?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The patient should stop receiving the injections because the authorization
        has lapsed.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The patient should stop receiving the injections and find a new provider.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The provider should go ahead with the injections due to medical necessity.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The patient&#39;s third-party payer should be contacted to obtain a new preauthorization.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-102-of-125">Question: 102 of 125</h6>
    <p>
      Which of the following describes the term &quot;crossover&quot; as it
      relates to Medicare?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        When a third-party payer transfers data to allow coordination of benefits
        for a claim
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        When more than one third-party payer pays for the same service
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        When a third-party payer pays for a service twice
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        When a third-party payer processes data to allow adjudication of a claim
        to occur
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-103-of-125">Question: 103 of 125</h6>
    <p>Which of the following is the structure used for ICD-10-CM codes?</p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        3 to 7 alpha-numeric characters
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        5 numbers
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        5 alpha-numeric characters
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        2 letters
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-104-of-129">Question: 104 of 129</h6>
    <p>
      Which of the following is issued to active duty uniformed service
      personnel for access to TRICARE benefits?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Advance Beneficiary Notice (ABN)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Common access card
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Release of information
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        TRICARE Prime
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-105-of-125">Question: 105 of 125</h6>
    <p>
      Which of the following types of diagnosis code is to identify the presence
      of a pacemaker?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Symptom
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Late effect
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Manifestation
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Status
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-106-of-125">Question: 106 of 125</h6>
    <p>
      Which of the following is the type of service code that can have three to
      five levels of service and covers office visits, hospital visits, and
      consultations?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        New and emerging technology
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Modifiers
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        External causes of morbidity
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Evaluation and Management
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-107-of-125">Question: 107 of 125</h6>
    <p>
      A billing and coding specialist in an internal medicine practice is
      assisting a patient who is already collecting Social Security but will be
      turning 65 in the next year and has questions about what Medicare will
      cover. The specialist should know that which of the following is the
      Medicare benefit the patient will be enrolled in automatically?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Medicare Part A
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare Part B
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare Part C
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare Part D
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-108-of-125">Question: 108 of 125</h6>
    <p>Complete the following question by referencing the coding exhibit.</p>
    <p>
      A billing and coding specialist is reviewing a denied claim for a patient
      who was diagnosed with an upper respiratory infection and had a benign
      lesion removed. The codes listed on the claim were 99213 and 17000. Which
      of the following actions should the specialist take before resubmitting
      the claim?
    </p>
    <table>
      <thead>
        <tr>
          <th>Modifier</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>25</td>
          <td>
            Significant, separately identifiable evaluation and management (E/M)
            service by the same physician or other qualified health care
            professional on the same day of the procedure or other service.
          </td>
        </tr>
        <tr>
          <td>32</td>
          <td>Mandated services</td>
        </tr>
        <tr>
          <td>81</td>
          <td>Minimum assistant surgeon</td>
        </tr>
      </tbody>
    </table>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Add modifier -32 to the claim.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Add modifier -25 to the claim.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Bill each service on a separate claim.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Add modifier -81 to the claim.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-109-of-125">Question: 109 of 125</h6>
    <p>
      A patient had an x-ray for a fractured arm. The documentation does not
      indicate if the x-ray was performed on the right or left arm. Which of the
      following actions should a billing and coding specialist take?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Ask the third-party payer.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Submit the claim without a modifier.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Contact the patient.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Query the provider.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-110-of-125">Question: 110 of 125</h6>
    <p>
      A billing and coding specialist is coding a laceration repair and needs to
      determine the type of closure. The specialist queries the provider, who
      confirms retention sutures were used. The specialist should code which of
      the following types of closure?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Simple (single layer)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Intermediate (Layered closure)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Partial-thickness (Epidermis and extending into the dermis) |
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Complex (Layered closure requiring additional corrections)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-111-of-125">Question: 111 of 125</h6>
    <p>Coding manuals use which of the following conventions?</p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Edits
      </label>
      <small>
        This choice could refer to changes or modifications made to coding
        manuals, but it does not represent a convention used in coding manuals
        themselves.
      </small>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Icons
      </label>
      <small>
        This option suggests visual symbols used for guidance or representation
        in coding manuals. While icons may be present, they are not a primary
        convention of coding manuals.
      </small>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Laws
      </label>
      <small>
        This choice implies legal regulations or guidelines. While coding
        practices may be influenced by laws, they are not a convention used in
        coding manuals.
      </small>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Fee schedules
      </label>
      <small>
        This refers to the established rates for medical services and
        procedures. Fee schedules are often included in coding manuals, as they
        provide necessary information for billing and reimbursement.
      </small>
    </div>
  </div>
  <div>
    <h6 id="question-112-of-125">Question: 112 of 125</h6>
    <p>
      Which of the following introduced documentation guidelines to Medicare
      carriers to ensure that services paid for have been provided and were
      medically necessary?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        HIPAA
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        OIG
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        CMS
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        AMA
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-113-of-125">Question: 113 of 125</h6>
    <p>
      A billing and coding specialist is appealing a Medicare denial. Which of
      the following is the first step in the appeals process?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Reconsideration
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medicare Appeals Council review
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Judicial review
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Redetermination
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-114-of-125">Question: 114 of 125</h6>
    <p>
      A billing and coding specialist is reviewing a remittance advice for a
      claim that was denied for medical necessity. Which of the following is an
      example of this type of error?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The preauthorization for an appendectomy was not obtained.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The patient&#39;s current demographic information was not entered correctly
        on the claim form.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The ICD-10-CM code for tonsillitis was listed with the CPT® code for an
        appendectomy.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Appendectomies are not covered by the patient&#39;s insurance plan.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-115-of-125">Question: 115 of 125</h6>
    <p>CPT® codes are used for which of the following concepts?</p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Medical necessity
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Compliance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Revenue
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Collections
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-116-of-125">Question: 116 of 125</h6>
    <p>Which of the following is an example of an informational modifier?</p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        -24 Unrelated Evaluation and Management service by the same provider during
        a postoperative period
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -AA Anesthesia services performed personally by anesthesiologist
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -TC Technical component
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        -82 Assistant surgeon (when qualified resident surgeon not available)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-117-of-125">Question: 117 of 125</h6>
    <p>
      An internal retrospective billing account audit prevents fraud and abuse
      by reviewing and comparing completed claim forms with which of the
      following?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Documentation from patient encounters
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        A subpoena
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Documentation of compliance plans
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        An appeal letter
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-118-of-125">Question: 118 of 125</h6>
    <p>
      Which of the following is a HIPAA compliance guideline affecting
      electronic health records?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The privacy requirements cover facilities&#39; health information, whether
        paper or electronic.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Electronic health records should be sent to the third-party payer on a claim
        form.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        The electronic transmission and code set standards require every provider
        to use the health care transactions, code sets, and identifiers.
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        The Health Information Technology for Economic and Clinical Health (HITECH)
        Act encrypts provider-protected health information.
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-119-of-125">Question: 119 of 125</h6>
    <p>
      Which of the following positions is required in a provider&#39;s office to
      comply with HIPAA regulations?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Security officer
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Privacy officer
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Claims examiner
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Chargemaster coordinator
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-120-of-125">Question: 120 of 125</h6>
    <p>
      Two providers are having a conversation about a patient&#39;s test results
      at the nursing station. A different patient overhears them talking. This
      type of privacy exposure is known as which of the following?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Incidental disclosure
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Fraud
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Malfeasance
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Negligence
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-121-of-125">Question: 121 of 125</h6>
    <p>
      A billing and coding specialist is preparing a small claims court case
      against a patient for a delinquent account in the amount of $6,500. Which
      of the following is a court order that allows payments on unsecured debt
      to be made directly from a defendant&#39;s paycheck?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Skip tracing
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Garnishment
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Automatic stay
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Lien
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-122-of-125">Question: 122 of 125</h6>
    <p>
      A billing and coding specialist is submitting claims through a
      clearinghouse. The specialist should identify that which of the following
      actions is performed by the clearinghouse?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Filing for reimbursement, reconciling payments of paid claims, and resubmitting
        denied claims to the provider
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Overseeing the federal Medicare and Medicaid programs
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Helping to develop U.S. standards for electronic data exchange
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Scrubbing claims, translating them to a standard format, then sending them
        to various third-party payers
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-123-of-125">Question: 123 of 125</h6>
    <p>
      Which of the following do providers use to electronically submit claims?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Claim scrubbers
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Clearinghouse
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        CMS-1500 claim form
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Electronic remittance advice (ERA)
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-124-of-125">Question: 124 of 125</h6>
    <p>
      A billing and coding specialist is reviewing paperwork that indicates
      overpayment by Medicare for six patients over the past year. Which of the
      following describes this process?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Prospective review
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Subpoena
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Audit
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Adjudication
      </label>
    </div>
  </div>
  <div>
    <h6 id="question-125-of-125">Question: 125 of 125</h6>
    <p>
      Which of the following prohibits a provider from referring Medicare
      patients to a clinical laboratory service in which the provider has a
      financial interest?
    </p>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Federal Anti-Kickback Statute
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Health Insurance Portability and Accountability Act (HIPAA)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" />
        Consolidated Omnibus Budget Reconciliation Act (COBRA)
      </label>
    </div>
    <div>
      <label>
        <input type="radio" required name="answer" value="correct" />
        Stark Law
      </label>
    </div>
  </div>
</div>

<style>
  h1 {
    font-size: 2rem;
    margin-top: 0;
  }
  h6 {
    display: none;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .hidden {
    display: none;
  }
</style>
