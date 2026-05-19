const flow = [
    {
        type: 'interstitial',
        id: 'intro',
        title: 'Welcome',
        image: '/assets/quiz/start-welcome-trial/img/fme_welcome_quiz.jpeg',
        heading: `Don't just remember them.<br>Talk with them`,
        body: [
            '25 Questions. One Eternal Memory.',
            '3-minute quiz.'
        ],
        buttonText: 'Continue'
    },
    {
        type: 'question',
        id: 'q1',
        title: 'Whose legacy and wisdom do you wish to preserve for eternity?',
        tag: 'Legacy',
        options: [
            { label: 'My Parent', value: 'my_parent' },
            { label: 'Myself', value: 'myself' },
            { label: 'My Spouse', value: 'my_spouse' },
            { label: 'A close loved one', value: 'close_loved_one' }
        ]
    },
    {
        type: 'question', id: 'q2', tag: 'Value',
        title: 'If you could ask a late grandparent one life question right now, how valuable would their answer be?',
        options: [
            { label: 'Priceless', value: 'priceless' },
            { label: 'Extremely Important', value: 'extremely_important' },
            { label: 'Just curious', value: 'just_curious' }
        ]
    },
    {
        type: 'question', id: 'q3', tag: 'Soul',
        title: 'Do you believe a silent photograph is enough to convey a "soul" to someone who never met them?',
        options: [
            { label: 'No, a photo is too quiet', value: 'photo_too_quiet' },
            { label: 'I want them to hear the voice', value: 'hear_voice' },
            { label: 'I want more than just an image', value: 'more_than_image' }
        ]
    },
    {
        type: 'question', id: 'q4', tag: 'Recall',
        title: 'On a scale of 1–10, how accurately could you recall Your Loved One’s unique laugh in your mind right now?',
        options: Array.from({ length: 10 }, (_, i) => ({ label: String(i + 1), value: String(i + 1) }))
    },
    {
        type: 'thinking',
        id: 'thinking_after_q4'
    },
    {
        type: 'question', id: 'q5', tag: 'Memory',
        title: 'How often do you notice specific details of your family’s stories starting to blur or fade?',
        options: [
            { label: 'Frequently', value: 'opt_1' },
            { label: 'Occasionally', value: 'opt_2' },
            { label: 'I remember everything (but I’m afraid)', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q6', tag: 'Guilt',
        title: 'Do you feel "digital guilt" having 5,000 photos of food, but less than 10 mins of Your Loved One speaking from the heart?',
        options: [
            { label: 'Yes, I feel it', value: 'opt_1' },
            { label: 'No, but I need more', value: 'opt_2' },
            { label: 'I never thought about it', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q7', tag: 'Risk',
        title: "How much of Your Loved One's essence is lost in unorganized digital clutter that your children will never sift through?",
        options: [
            { label: 'Over 90% (it’s a mess)', value: 'opt_1' },
            { label: 'About half', value: 'opt_2' },
            { label: 'Most is only in my head', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q8', tag: 'Archive',
        title: 'How many hours of high-quality audio of Your Loved Ones sharing life lessons do you actually own?',
        options: [
            { label: '10+ hours', value: 'opt_1' },
            { label: '1-2 hours', value: 'opt_2' },
            { label: 'Almost nothing, just silent photos', value: 'opt_3' },
        ]
    },
    {
        type: 'quoteBreak',
        id: 'quote_after_q8'
    },
    {
        type: 'question', id: 'q9', tag: 'Questions',
        title: 'How many "unasked questions" do you have for your parents that you keep putting off for "later"?',
        options: [
            { label: 'Too many to count', value: 'opt_1' },
            { label: 'A few critical ones', value: 'opt_2' },
            { label: 'I ask everything', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q10', tag: 'Future',
        title: 'Imagine your grandchildren 30 years from now. How well will they know the voice and character of Your Loved One?',
        options: [
            { label: "Won't know at all", value: 'opt_1' },
            { label: 'Only through photos', value: 'opt_2' },
            { label: 'Through ForeverMe', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q11', tag: 'Support',
        title: 'If your child faces a major life crisis, how much would Your Loved One’s voice of encouragement mean to them?',
        options: [
            { label: 'Everything', value: 'opt_1' },
            { label: 'A lot', value: 'opt_2' },
            { label: 'Not sure', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q12', tag: 'Legacy risk',
        title: 'Family stories often vanish within 3 generations. Are you okay with Your Loved One becoming just a silent name?',
        options: [
            { label: 'No, I will secure it', value: 'opt_1' },
            { label: 'I am worried', value: 'opt_2' },
            { label: 'Yes', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q13', tag: 'Mentor value',
        title: 'What is the value of a mentor who knows you perfectly and can guide your descendants forever?',
        options: [
            { label: 'Priceless', value: 'opt_1' },
            { label: 'Worth thousands', value: 'opt_2' },
            { label: 'Hard to say', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q14', tag: 'Spending',
        title: 'How much does your family typically spend on a single weekend dinner that is forgotten by Monday?',
        options: [
            { label: 'Less than $50', value: 'opt_1' },
            { label: 'More than $50', value: 'opt_2' },
        ]
    },
    {
        type: 'question', id: 'q15', tag: 'Priority',
        title: 'Is a permanent digital bridge to your ancestors more valuable than one night of dining out?',
        options: [
            { label: 'Definitely yes', value: 'opt_1' },
            { label: 'Probably', value: 'opt_2' },
            { label: 'No', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q16', tag: 'Worth',
        title: 'If you could pay for one more hour with a loved one who is gone, what would that hour be worth to you?',
        options: [
            { label: '$1,000+', value: 'opt_1' },
            { label: '$100', value: 'opt_2' },
            { label: 'Any amount', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q17', tag: 'Guidance',
        title: 'In a moment of crisis, is there one person whose calm guidance would be most irreplaceable?',
        options: [
            { label: 'Yes, Your Loved One', value: 'opt_1' },
            { label: 'Multiple people', value: 'opt_2' },
            { label: 'No', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q18', tag: 'Plan B',
        title: 'Do you have a "Plan B" to prevent your family\'s oral history from being erased by time?',
        options: [
            { label: 'No', value: 'opt_1' },
            { label: 'I thought photos were enough', value: 'opt_2' },
            { label: 'Yes', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q19', tag: 'Reflection',
        title: 'When was the last time you thought: "I wish I could hear exactly what Your Loved One would say about this"?',
        options: [
            { label: 'Constantly', value: 'opt_1' },
            { label: 'In times of crisis', value: 'opt_2' },
            { label: 'Occasionally', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q20', tag: 'Backup',
        title: "If you lost your phone today, what percentage of Your Loved One's digital soul would be deleted forever?",
        options: [
            { label: '100% (High risk)', value: 'opt_1' },
            { label: 'Over 50%', value: 'opt_2' },
            { label: 'I have backups', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q21', tag: 'Urgency',
        title: 'How much would you regret not capturing their essence while their mind and memory are still sharp?',
        options: [
            { label: 'Deeply regret', value: 'opt_1' },
            { label: 'Somewhat', value: 'opt_2' },
            { label: 'Not sure', value: 'opt_3' },
        ]
    },
    {
        type: 'question', id: 'q22', tag: 'Commitment',
        title: 'Are you ready to invest 30 minutes today to ensure Your Loved One’s presence remains in your family forever?',
        options: [
            { label: "Yes, I'm ready", value: 'opt_1' },
            { label: "I'll risk it later", value: 'opt_2' },
        ]
    },
    {
        type: 'question', id: 'q23', tag: 'Decision',
        title: 'Will you be the generation that lets your family line go silent for the sake of $49?',
        options: [
            { label: 'No, I will secure the legacy', value: 'opt_1' },
            { label: 'I am still undecided', value: 'opt_2' },
        ]
    },
    {
        type: 'question', id: 'q24', tag: 'Choice',
        title: 'Will you witness the "Digital Resurrection" of your history, or let it fade into gray?',
        options: [
            { label: 'SECURE LEGACY NOW', value: 'opt_1' },
            { label: 'Fade away', value: 'opt_2' },
        ]
    },
    {
        type: 'nameInput',
        id: 'q25',
        title: 'What is your name?',
        tag: 'Final step',
        buttonText: 'NEXT'
    },
    {
        type: 'loader',
        id: 'name_loader',
        title: 'Preparing your personalized legacy access',
        description: 'Analyzing your answers and creating an offer tailored for your family.',
        score: 100,
        duration: 3000,
        items: [
            'Analyzing emotional priorities',
            'Mapping legacy preservation risk',
            'Building your personalized offer'
        ]
    },
    {
        type: 'email',
        id: 'email'
    },
    {
        type: 'paywall',
        id: 'paywall'
    }
];
let pendingPaymentData = null;
let paymentEmail = null;
const state = {
    step: 0,
    answers: {},
    selectedValue: null,
    email: '',
    ageGroup: null
};




const host = document.getElementById('screenHost');
const progressFill = document.getElementById('progressFill');
const continueBtn = document.getElementById('continueBtn');
const backBtn = document.getElementById('backBtn');
const stickyBar = document.getElementById('stickyBar');
const stickyStep = document.getElementById('stickyStep');
const stickyHint = document.getElementById('stickyHint');
const heroNote = document.getElementById('heroNote');
const timerText = document.getElementById('timerText');
const timerPill = document.getElementById('timerPill');

const totalQuestions = flow.filter(item => item.type === 'question' || item.type === 'nameInput').length;
let timerSeconds = 10 * 60;
let timerInterval = null;
let promoTimerInterval = null;
let interstitialSliderInterval = null;
gtag('event', 'quiz_started', {
    quiz_name: 'personality_quiz',
    total_questions: totalQuestions
});
function stopInterstitialSlider() {
    if (interstitialSliderInterval) {
        clearInterval(interstitialSliderInterval);
        interstitialSliderInterval = null;
    }
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timerSeconds = Math.max(0, timerSeconds - 1);
        const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
        const seconds = String(timerSeconds % 60).padStart(2, '0');
        timerText.textContent = `${minutes}:${seconds}`;
        if (timerSeconds <= 120) timerPill.classList.add('timer-danger');
        if (timerSeconds === 0) clearInterval(timerInterval);
    }, 1000);
}

function questionIndexForStep(step) {
    let count = 0;
    for (let i = 0; i <= step; i++) {
        if (flow[i].type === 'question' || flow[i].type === 'nameInput') count += 1;
    }
    return count;
}

function updateProgress() {
    const current = flow[state.step];
    let value = 0;
    if (current.type === 'question') {
        value = (questionIndexForStep(state.step) - 1) / totalQuestions * 100;
    } else if (current.type === 'email' || current.type === 'paywall') {
        value = 100;
    } else if (current.type === 'loader') {
        value = 92;
    } else {
        value = Math.min((questionIndexForStep(state.step)) / totalQuestions * 100, 90);
    }
    const safeProgress = Math.max(4, value);
    progressFill.style.width = `${safeProgress}%`;
}

function setSticky({ stepLabel, hint, show = true, continueText = 'Continue', continueDisabled = false, backHidden = false, continueHidden = false }) {
    stickyBar.classList.toggle('hidden', !show);
    stickyStep.textContent = stepLabel || '';
    stickyHint.textContent = hint || '';
    continueBtn.textContent = continueText;
    continueBtn.disabled = !!continueDisabled;
    continueBtn.classList.toggle('hidden', !!continueHidden);
    backBtn.classList.toggle('hidden', !!backHidden);
}

function renderQuestion(item) {
    state.selectedValue = state.answers[item.id] || null;
    const qNumber = questionIndexForStep(state.step);
    if (item.id === 'q4') {
        const defaultValue = parseInt(state.answers[item.id] || '5', 10);
        host.innerHTML = `
    <section class="screen-card fade-in">
      <div class="question-meta">
        <div class="question-label">Question ${qNumber} of ${totalQuestions}</div>
        <div class="question-tag">${item.tag}</div>
      </div>
      <h2 class="question-title">${item.title}</h2>
      <div class="range-scale">
        <input id="q4Range" class="range-track" type="range" min="1" max="10" step="1" value="${defaultValue}">
        <div class="range-endpoints"><span>1</span><span>10</span></div>
      </div>
    </section>
  `;
        const range = document.getElementById('q4Range');
        const commitValue = (value) => {
            const normalized = String(value);
            state.selectedValue = normalized;
            state.answers[item.id] = normalized;
        };
        range.addEventListener('input', () => commitValue(range.value));
        commitValue(defaultValue);
        setSticky({
            stepLabel: `Question ${qNumber} of ${totalQuestions}`,
            hint: 'Move the slider and continue.',
            continueText: 'Continue',
            continueDisabled: false,
            continueHidden: false,
            backHidden: state.step === 0
        });
        return;
    }
    host.innerHTML = `
    <section class="screen-card fade-in">
      <div class="question-meta">
        <div class="question-label">Question ${qNumber} of ${totalQuestions}</div>
        <div class="question-tag">${item.tag}</div>
      </div>
      <h2 class="question-title">${item.title}</h2>
      <div class="answers-grid">
        ${item.options.map(opt => `
          <button class="answer-card ${state.selectedValue === opt.value ? 'selected' : ''}" type="button" data-value="${opt.value}">
            ${opt.icon ? `<span class="answer-icon" aria-hidden="true">${opt.icon}</span>` : ''}
            <span class="answer-label">${opt.label}</span>
          </button>
        `).join('')}
      </div>
    </section>
  `;

    host.querySelectorAll('.answer-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.value;
            state.selectedValue = value;
            state.answers[item.id] = value;
            host.querySelectorAll('.answer-card').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            const qNumber = questionIndexForStep(state.step);
            const progressPercent = Math.round((qNumber / totalQuestions) * 100);


                gtag('event', 'quiz_question_answered', {
                    quiz_name: 'personality_quiz',
                    question_number: qNumber,
                    question_key: item.id,
                    question_type: item.type,
                    answer_value: value,
                    progress_percent: progressPercent
                });





            setTimeout(() => nextStep(), 140);
        });
    });

    setSticky({
        stepLabel: `Question ${qNumber} of ${totalQuestions}`,
        hint: 'Choose the answer that feels most true right now.',
        continueHidden: true,
        backHidden: state.step === 0
    });
}


function renderNameInput(item) {
    const currentValue = state.answers[item.id] || '';
    host.innerHTML = `
    <section class="screen-card fade-in">
      <div class="question-meta">
        <div class="question-label">Question ${questionIndexForStep(state.step)} of ${totalQuestions}</div>
        <div class="question-tag">${item.tag || 'Final step'}</div>
      </div>
      <h2 class="question-title">${item.title}</h2>
      <div class="mt-3">
        <input id="nameInput" class="form-control form-control-lg" placeholder="Type your name" value="${currentValue.replace(/"/g, '&quot;')}">
      </div>
    </section>
  `;

    const input = document.getElementById('nameInput');
    const update = () => {
        const value = input.value.trim();
        state.answers[item.id] = value;
        continueBtn.disabled = value.length === 0;
    };
    input.addEventListener('input', update);

    setSticky({
        stepLabel: `Question ${questionIndexForStep(state.step)} of ${totalQuestions}`,
        hint: 'Enter your name to continue.',
        continueText: item.buttonText || 'NEXT',
        continueDisabled: !currentValue,
        backHidden: false,
        continueHidden: false
    });
}

function renderAgeGate(item) {
    const ageImages = {
        '25_49': '/assets/quiz/start-welcome-trial/img/age-25-49.jpg',
        '50_59': '/assets/quiz/start-welcome-trial/img/age-50-59.jpg',
        '60_69': '/assets/quiz/start-welcome-trial/img/age-60-69.jpg',
        '70_plus': '/assets/quiz/start-welcome-trial/img/age-70+.jpg'
    };

    host.innerHTML = `
    <section class="screen-card age-gate-card fade-in">
      <h2 class="question-title age-title">${item.title}</h2>
      <div class="age-grid">
        ${item.options.map(opt => `
          <button class="age-option" type="button" data-value="${opt.value}">
            <img class="age-photo" src="${ageImages[opt.value]}" alt="Age group ${opt.label}">
            <span class="age-pill">${opt.label}</span>
          </button>
        `).join('')}
      </div>
      <p class="age-note">${item.note}</p>
    </section>
  `;

    host.querySelectorAll('.age-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.value;
            state.ageGroup = value;
            setTimeout(() => nextStep(), 100);
        });
    });

    setSticky({
        stepLabel: 'Getting started',
        hint: 'Choose your age group to continue.',
        continueHidden: true,
        backHidden: state.step === 0
    });
}

function renderInterstitial(item) {
    stopInterstitialSlider();

    if (item.layout === 'collage') {
        const collageImages = [
            '/assets/quiz/start-welcome-trial/img/screen3_img1.jpg',
            '/assets/quiz/start-welcome-trial/img/screen3_img2.jpg',
            '/assets/quiz/start-welcome-trial/img/screen3_img3.jpg',
            '/assets/quiz/start-welcome-trial/img/screen3_img4.jpg',
            '/assets/quiz/start-welcome-trial/img/screen3_img5.jpg',
            '/assets/quiz/start-welcome-trial/img/screen3_img6.jpg',
            '/assets/quiz/start-welcome-trial/img/screen3_img7.jpg',
            '/assets/quiz/start-welcome-trial/img/screen3_img8.jpg'
        ];

        host.innerHTML = `
      <section class="screen-card interstitial-card interstitial-collage-card fade-in">
        <h2 class="collage-heading">${item.heading}</h2>
        <div class="collage-wrap" aria-hidden="true">
          <div class="collage-rings">
            <span></span><span></span><span></span>
          </div>
          <img class="collage-center" src="/assets/quiz/start-welcome-trial/img/screen3_centreimg.jpg" alt="Happy user">
          ${collageImages.map((src, index) => `
            <img class="collage-orbit orbit-${index + 1}" src="${src}" alt="User portrait ${index + 1}">
          `).join('')}
        </div>
        <button class="interstitial-continue-btn" type="button" id="interstitialContinueBtn">${item.buttonText || 'Continue'}</button>
      </section>
    `;

        document.getElementById('interstitialContinueBtn').addEventListener('click', () => nextStep());
        setSticky({
            stepLabel: item.title,
            hint: 'See why so many users choose this experience.',
            continueHidden: true,
            backHidden: false
        });
        return;
    }

    if (item.logoImages?.length) {
        host.innerHTML = `
      <section class="screen-card interstitial-card fade-in">
        ${item.heading ? `<h3 class="interstitial-heading">${item.heading}</h3>` : ''}
        ${item.subQuote ? `<blockquote class="interstitial-subquote">${item.subQuote}</blockquote>` : ''}
        <div class="interstitial-logo-list ${item.logosStyle === 'floating' ? 'floating' : 'stacked'}">
          ${item.logoImages.map((logoSrc, index) => `
            <div class="logo-chip logo-image-only ${item.logosStyle === 'floating' ? `float-logo float-logo-${index + 1}` : ''}">
              <img src="${logoSrc}" alt="" class="logo-chip-icon" aria-hidden="true">
            </div>
          `).join('')}
        </div>
        <button class="interstitial-continue-btn" type="button" id="interstitialContinueBtn">${item.buttonText || 'Tap to continue'}</button>
      </section>
    `;

        document.getElementById('interstitialContinueBtn').addEventListener('click', () => nextStep());
        setSticky({
            stepLabel: item.title,
            hint: 'Read this note and continue when ready.',
            continueHidden: true,
            backHidden: false
        });
        return;
    }

    if (item.heading || item.body?.length) {
        host.innerHTML = `
      <section class="screen-card interstitial-card fade-in">
        <img class="interstitial-top-image" src="${item.image || '/assets/quiz/start-welcome-trial/img/age-50-59.jpg'}" alt="Pause and reflect illustration">
        ${item.heading ? `<h3 class="interstitial-heading">${item.heading}</h3>` : ''}
        <div class="interstitial-body">
          ${(item.body || []).map(line => `<p>${line}</p>`).join('')}
        </div>
        <button class="interstitial-continue-btn" type="button" id="interstitialContinueBtn">${item.buttonText || 'Tap to continue'}</button>
      </section>
    `;

        document.getElementById('interstitialContinueBtn').addEventListener('click', () => nextStep());
        setSticky({
            stepLabel: item.title,
            hint: 'Read this note and continue when ready.',
            continueHidden: true,
            backHidden: false
        });
        return;
    }

    host.innerHTML = `
    <section class="screen-card interstitial-card fade-in">
      ${item.sliderImages?.length ? `
        <div class="interstitial-top-slider" id="interstitialTopSlider" aria-label="Support images">
          ${item.sliderImages.map((imgSrc, index) => `
            <img class="interstitial-top-image slide-image ${index === 0 ? 'is-active' : ''}" src="${imgSrc}" alt="Pause and reflect illustration ${index + 1}">
          `).join('')}
        </div>
      ` : `<img class="interstitial-top-image" src="${item.image || '/assets/quiz/start-welcome-trial/img/age-50-59.jpg'}" alt="Pause and reflect illustration">`}
      <blockquote>“${item.quote}”</blockquote>
      ${item.cite ? `<cite>— ${item.cite}</cite>` : ''}
      <button class="interstitial-continue-btn" type="button" id="interstitialContinueBtn">${item.buttonText || 'Tap to continue'}</button>
    </section>
  `;

    if (item.sliderImages?.length > 1) {
        const slideImages = Array.from(host.querySelectorAll('.slide-image'));
        let currentSlide = 0;
        interstitialSliderInterval = setInterval(() => {
            slideImages[currentSlide].classList.remove('is-active');
            currentSlide = (currentSlide + 1) % slideImages.length;
            slideImages[currentSlide].classList.add('is-active');
        }, 2600);
    }

    document.getElementById('interstitialContinueBtn').addEventListener('click', () => nextStep());

    setSticky({
        stepLabel: item.title,
        hint: 'Read this note and continue when ready.',
        continueHidden: true,
        backHidden: false
    });
}

function renderThinkingBreak() {
    host.innerHTML = `
    <section class="screen-card thinking-card fade-in">
      <h2 class="thinking-title">Psychologists identify the "Third Death" as the moment the last living memory of a person vanishes.</h2>

      <div class="thinking-panel">
        <div class="thinking-row">
          <span>Based on our calculations, your Loved One's digital legacy risk is high</span>
          <strong id="thinkingRiskValue">0%</strong>
        </div>
        <div class="thinking-bar">
          <span id="thinkingRiskBar"></span>
        </div>
      </div>

      <div class="thinking-status-list">
        <div class="thinking-status-row">
          <span>We are calculating your Heritage Protection Plan</span>
          <span class="status is-loading"><span class="status-text">Analyzing</span><span class="pulse-dots"><span></span><span></span><span></span></span></span>
        </div>
        <div class="thinking-status-row">
          <span>Analyzing memory fragility</span>
          <span class="status is-loading"><span class="status-text">Analyzing</span><span class="pulse-dots"><span></span><span></span><span></span></span></span>
        </div>
      </div>
    </section>
  `;

    setSticky({
        stepLabel: 'Assessment in progress',
        hint: 'Please wait while we complete your interim analysis.',
        continueText: 'Continue',
        continueDisabled: true,
        backHidden: true
    });

    const riskValueEl = document.getElementById('thinkingRiskValue');
    const riskBarEl = document.getElementById('thinkingRiskBar');
    const target = Math.floor(Math.random() * 11) + 75;
    let value = 0;
    const timer = setInterval(() => {
        value += 3;
        const safeValue = Math.min(target, value);
        riskValueEl.textContent = `${safeValue}%`;
        riskBarEl.style.width = `${safeValue}%`;
        riskBarEl.classList.toggle('is-hot', safeValue >= 70);
        if (safeValue >= target) {
            clearInterval(timer);
        }
    }, 100);

    setTimeout(() => {
        const thinkingStatuses = Array.from(host.querySelectorAll('.thinking-status-row .status'));
        thinkingStatuses.forEach((statusEl) => {
            statusEl.classList.remove('is-loading');
            statusEl.classList.add('is-done');
            statusEl.innerHTML = '<span class="done-check" aria-hidden="true">✓</span><span class="status-text">Done</span>';
        });
        continueBtn.disabled = false;
    }, 3000);
}

function renderQuoteBreak() {
    host.innerHTML = `
    <section class="screen-card interstitial-card quote-break-card fade-in">
      <blockquote>"I lost my father 3 months after creating his avatar. Yesterday, my son asked 'Grandpa, what was your favorite thing about being a pilot?' and heard his real voice answer. It’s the best investment I’ve ever made"</blockquote>
      <cite>Sarah K., 42 · Austin, TX</cite>
      <button class="interstitial-continue-btn" type="button" id="interstitialContinueBtn">Continue</button>
    </section>
  `;
    document.getElementById('interstitialContinueBtn').addEventListener('click', () => nextStep());
    setSticky({
        stepLabel: 'Real family story',
        hint: 'Continue when you are ready.',
        continueHidden: true,
        backHidden: false
    });
}

function animateLoader(item) {
    host.innerHTML = `
    <section class="screen-card loader-card fade-in">
      <div class="loader-ring-wrap">
        <div class="loader-ring" id="loaderRing"></div>
        <div class="loader-ring-value" id="loaderScore">0%</div>
      </div>
      <h2>${item.title}</h2>
      <p>${item.description.replaceAll('\n', '<br>')}</p>
      <div class="loader-list">
        ${item.items.map(label => `
          <div class="loader-row">
            <span class="loader-row-label">${label}</span>
            <span class="status is-loading">
              <span class="status-text">Analyzing</span>
              <span class="pulse-dots"><span></span><span></span><span></span></span>
            </span>
          </div>
        `).join('')}
      </div>
    </section>
  `;

    setSticky({
        stepLabel: 'Building your result',
        hint: 'We are processing your answers and matching the best conversion path.',
        continueText: 'Please wait…',
        continueDisabled: true,
        backHidden: true
    });

    const scoreEl = document.getElementById('loaderScore');
    const ringEl = document.getElementById('loaderRing');
    const statusEls = Array.from(host.querySelectorAll('.loader-row .status'));
    const target = parseInt(item.score, 10);
    let current = 0;
    const intervalStep = Math.max(18, Math.floor(item.duration / Math.max(target, 1)));
    let finalized = false;

    const countUp = setInterval(() => {
        current += 1;
        const safeValue = Math.min(current, target);
        scoreEl.textContent = `${safeValue}%`;
        ringEl.style.setProperty('--progress', `${safeValue}%`);
        if (safeValue >= target && !finalized) {
            finalized = true;
            clearInterval(countUp);
            finalizeLoaderRows(statusEls, () => nextStep());
        }
    }, intervalStep);
}

function finalizeLoaderRows(statusEls, onDone) {
    let index = 0;
    const markNext = () => {
        if (index >= statusEls.length) {
            setTimeout(() => onDone(), 600);
            return;
        }
        const statusEl = statusEls[index];
        statusEl.classList.remove('is-loading');
        statusEl.classList.add('is-done');
        statusEl.innerHTML = '<span class="done-check" aria-hidden="true">✓</span><span class="status-text">Analysis complete</span>';
        index += 1;
        setTimeout(markNext, 650);
    };
    markNext();
}



function renderVoiceDemo() {
    const maxBytes = 1024 * 1024;
    const maxRecordMs = 20000;
    const fixedText = `I cherish my loved ones and want our stories to live forever. This is more than just a recording or dusty pictures — it’s about preserving our wisdom and our history. With ForeverMe, I’m making sure our voices and personalities are never lost. This is my gift to the next generation.`;
    const acceptedTypes = ['audio/mpeg', 'audio/wav', 'audio/x-wav', 'audio/mp4', 'audio/x-m4a', 'audio/webm', 'audio/ogg'];
    const acceptedTypePrefixes = ['audio/webm', 'audio/mp4', 'audio/ogg'];

    host.innerHTML = `
    <section class="screen-card voice-demo-card fade-in">
      <div class="eyebrow">Voice preview</div>
      <h2 class="question-title">Hear how your avatar can sound</h2>
      <p class="form-note mb-3">Upload your audio (up to 1 MB) or record a 20-second sample in browser.</p>

      <div class="voice-script">
        <div class="voice-script-label">Please read this text while recording:</div>
        <p class="voice-script-text">${fixedText}</p>
      </div>

      <div class="voice-actions">
        <label class="voice-upload-btn" for="voiceUploadInput">Upload file</label>
        <input id="voiceUploadInput" class="hidden" type="file" accept=".mp3,.wav,.m4a,.webm,.ogg,audio/*">
        <button type="button" class="voice-record-btn" id="voiceRecordBtn">Start recording (20s)</button>
      </div>

      <div class="voice-status" id="voiceStatus">Choose a file or record your voice sample.</div>
      <div class="voice-loader hidden" id="voiceLoader"><span></span><span></span><span></span>Processing voice demo…</div>

      <div class="voice-result hidden" id="voiceResult">
        <div class="voice-result-title">Your synthesized voice preview</div>
        <audio controls id="voiceResultAudio"></audio>
        <p class="form-note mb-0">Like what you hear? Start your free trial to create the full avatar.</p>
      </div>
    </section>
  `;

    const uploadInput = document.getElementById('voiceUploadInput');
    const recordBtn = document.getElementById('voiceRecordBtn');
    const statusEl = document.getElementById('voiceStatus');
    const loaderEl = document.getElementById('voiceLoader');
    const resultEl = document.getElementById('voiceResult');
    const resultAudio = document.getElementById('voiceResultAudio');

    let recordTimer = null;
    let isRecording = false;
    let mediaStream = null;
    let mediaRecorder = null;
    let recordedChunks = [];

    const setStatus = (text, isError = false) => {
        statusEl.textContent = text;
        statusEl.classList.toggle('is-error', isError);
    };

    const validateFile = (file) => {
        if (!file) return 'No file selected.';
        if (file.size > maxBytes) return 'Audio must be up to 1 MB.';
        const mimeType = (file.type || '').toLowerCase();
        if (mimeType) {
            const isExactAllowed = acceptedTypes.includes(mimeType);
            const isPrefixAllowed = acceptedTypePrefixes.some((prefix) => mimeType.startsWith(prefix));
            if (!isExactAllowed && !isPrefixAllowed) return 'Unsupported format. Use MP3, WAV, M4A, WEBM, or OGG.';
        }
        return '';
    };

    const sendAudio = async (file) => {
        const err = validateFile(file);
        if (err) { setStatus(err, true); return; }

        loaderEl.classList.remove('hidden');
        resultEl.classList.add('hidden');
        setStatus('Uploading and generating your preview…');

        const formData = new FormData();
        formData.append('text', 'It means the world to know my voice lives on through you. Because of you, our loved ones will never have to feel alone. It feels like a miracle, but it’s real, and its here. To build the full ForeverMe avatar and keep us connected, start your free trial now.');
        formData.append('audio_file', file, file.name || 'recorded_audio.m4a');

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const res = await fetch('https://foreverme.love/api/v1/avatars/voice-demo/synthesize', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },

            });
            const data = await res.json();
            if (!res.ok || !data?.success || !data?.data?.url) throw new Error(data?.message || 'Request failed');

            resultAudio.src = data.data.url;
            resultEl.classList.remove('hidden');
            setStatus('Success! Listen to your voice demo below.');
        } catch (e) {
            setStatus(`Failed to generate voice demo: ${e.message}`, true);
        } finally {
            loaderEl.classList.add('hidden');
        }
    };


    const getRecorderMimeType = () => {
        const candidates = ['audio/mp4', 'audio/x-m4a', 'audio/webm;codecs=opus', 'audio/webm'];
        return candidates.find((type) => window.MediaRecorder?.isTypeSupported?.(type)) || '';
    };

    const stopRecording = async () => {
        clearTimeout(recordTimer);
        if (!isRecording) return;
        isRecording = false;

        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            await new Promise((resolve) => {
                mediaRecorder.addEventListener('stop', resolve, { once: true });
                mediaRecorder.stop();
            });
        }

        if (mediaStream) mediaStream.getTracks().forEach(track => track.stop());

        recordBtn.textContent = 'Start recording (20s)';

        const mimeType = mediaRecorder?.mimeType || 'audio/mp4';
        const extension = mimeType.includes('webm') ? 'webm' : 'm4a';
        const audioBlob = new Blob(recordedChunks, { type: mimeType });
        recordedChunks = [];

        if (!audioBlob.size) {
            setStatus('Recording failed. Please try again.', true);
            return;
        }

        const file = new File([audioBlob], `voice_recording.${extension}`, { type: mimeType });
        sendAudio(file);
    };

    uploadInput.addEventListener('change', () => sendAudio(uploadInput.files?.[0]));

    recordBtn.addEventListener('click', async () => {
        if (isRecording) {
            await stopRecording();
            return;
        }

        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mimeType = getRecorderMimeType();
            mediaRecorder = mimeType ? new MediaRecorder(mediaStream, { mimeType }) : new MediaRecorder(mediaStream);
            recordedChunks = [];

            mediaRecorder.addEventListener('dataavailable', (event) => {
                if (event.data && event.data.size > 0) recordedChunks.push(event.data);
            });

            mediaRecorder.start();
            isRecording = true;
            recordBtn.textContent = 'Stop recording';
            setStatus('Recording M4A… please read the text. Auto-stop at 20 seconds.');
            recordTimer = setTimeout(() => {
                stopRecording();
            }, maxRecordMs);
        } catch (e) {
            setStatus('Microphone access failed. Please allow microphone permissions.', true);
        }
    });

    setSticky({
        stepLabel: 'Voice preview',
        hint: '',
        continueText: 'Start Free Trial',
        continueDisabled: false,
        backHidden: false
    });
}

function renderEmail() {
  const randomPromoCode = `TRIAL-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  host.innerHTML = `
    <section class="screen-card email-card fade-in">
      <div class="eyebrow">Your access point</div>
      <h2 class="question-title">Get your free trial access</h2>
      <p class="form-note mb-4">
        Start your free trial.
      </p>
      <div class="promo-code-banner mb-4" id="promoCodeBanner">
        <div class="promo-code-headline">Your Enhanced Trial Code</div>
        <div class="promo-code-row">
          <div class="promo-code-value">${randomPromoCode}</div>
          <button class="promo-apply-btn" type="button" id="promoApplyBtn">
            <span class="promo-apply-icon" aria-hidden="true">✓</span>
            <span>Apply</span>
          </button>
        </div>
        <div class="promo-timer-wrap" id="promoTimerWrap">
          <div class="promo-timer-bar" id="promoTimerBar"></div>
        </div>
        <div class="promo-code-label" id="promoTimerLabel">Promo code active: 60 sec</div>
      </div>
      <div class="promo-applied-note hidden" id="promoAppliedNote">This promo code gave you increased trial limits.</div>

      <div class="mb-3">
        <label class="form-label-soft" for="emailInput">Email address</label>
        <input type="email" class="form-control form-control-xl" id="emailInput" placeholder="name@email.com" value="${state.email || ''}">
      </div>
      <div class="form-note">
        By continuing, you agree to receive access instructions, onboarding emails, and your customized Heritage Protection Plan.
      </div>

      <div class="assurance-grid">
        <div class="assurance-card">
          <div class="assurance-title">3-day free trial</div>
          <div class="assurance-text">Begin with full access before your subscription starts.</div>
        </div>
        <div class="assurance-card">
          <div class="assurance-title">Cancel anytime</div>
          <div class="assurance-text">No friction, no pressure, no long-term commitment on day one.</div>
        </div>
      </div>
    </section>
  `;

  const input = document.getElementById('emailInput');
  const promoApplyBtn = document.getElementById('promoApplyBtn');
  const promoTimerBar = document.getElementById('promoTimerBar');
  const promoTimerWrap = document.getElementById('promoTimerWrap');
  const promoTimerLabel = document.getElementById('promoTimerLabel');
  const promoCodeBanner = document.getElementById('promoCodeBanner');
  const promoAppliedNote = document.getElementById('promoAppliedNote');

  if (promoTimerInterval) {
    clearInterval(promoTimerInterval);
    promoTimerInterval = null;
  }

  let promoRemainingSeconds = 60;
  promoTimerBar.style.width = '100%';
  promoTimerInterval = setInterval(() => {
    promoRemainingSeconds = Math.max(0, promoRemainingSeconds - 1);
    const pct = (promoRemainingSeconds / 60) * 100;
    promoTimerBar.style.width = `${pct}%`;
    promoTimerLabel.textContent = `Promo code active: ${promoRemainingSeconds} sec`;
    if (promoRemainingSeconds === 0) {
      clearInterval(promoTimerInterval);
      promoTimerInterval = null;
      promoTimerLabel.textContent = 'Last chance !';
    }
  }, 1000);

  promoApplyBtn.addEventListener('click', () => {
    if (promoTimerInterval) {
      clearInterval(promoTimerInterval);
      promoTimerInterval = null;
    }
    promoTimerWrap.classList.add('hidden');
    promoApplyBtn.disabled = true;
    promoCodeBanner.classList.add('promo-code-applied');
    promoTimerLabel.textContent = 'Promo code applied';
    promoAppliedNote.classList.remove('hidden');
  });

    const validate = () => {
        state.email = input.value.trim();
        const isValid = /^\S+@\S+\.\S+$/.test(state.email);
        continueBtn.disabled = !isValid;

        // Сохраняем для Stripe
        if (isValid) {
            paymentEmail = state.email;
            localStorage.setItem('quiz_email', state.email);
        }
    };
  input.addEventListener('input', validate);
  validate();

  setSticky({
    stepLabel: 'Secure trial access',
    hint: 'Enter the best email for onboarding and your personalized access link.',
    continueText: 'Start Free Trial',
    continueDisabled: true,
    backHidden: false
  });
}

function renderPaywall() {
    host.innerHTML = `
    <section class="screen-card paywall-card fade-in">
      <div class="paywall-block hero-block" style="background: none;border: none;">
        <div class="comparison-grid">
          <div class="comparison-col comparison-col-before">
            <div class="comparison-label">Before</div>
            <div class="comparison-visual">
              <img src="/assets/quiz/start-welcome-trial/img/before_quiz_final.jpg?v=1" alt="Before ForeverMe experience" class="comparison-image">
            </div>
            <ul class="comparison-list">
              <li>Voice vanishes into horrifying silence</li>
              <li>Cruelty of "never again"</li>
              <li>Fading into dust</li>
            </ul>
          </div>
          <div class="comparison-col comparison-col-highlight">
            <div class="comparison-label">With</div>
            <div class="comparison-visual">
              <img src="/assets/quiz/start-welcome-trial/img/after_quiz_final.jpg?v=1" alt="With ForeverMe experience" class="comparison-image">
            </div>
            <ul class="comparison-list">
              <li>Conversation That Never Ends</li>
              <li>Love that outlives the goodbye</li>
              <li>Guiding future Generations</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="paywall-block offer-block">
        <div class="trial-badge">Free 3-day trial</div>
        <h2 class="question-title">Avatar Setup & Essential Plan</h2>
        <p class="form-note">Create your avatar and start chatting right away. Enjoy full access during your free trial.</p>
        <div class="price-stack">
          <div class="price-main">$0.00</div>
          <div class="price-sub">for 3 days</div>
          <div class="price-then">Then 29.99/m</div>
        </div>
        <p class="form-note">Cancel anytime. You won't be charged if you cancel before the 3-day trial ends.</p>
        <div class="offer-labels">
          <span>Most Popular</span>
          <span>Best to start today</span>
        </div>
      </div>

      <div class="paywall-block">
        <h3>What you get & plan details</h3>
        <p class="plan-price-line">$29.99 / month after the trial</p>
        <ul class="plan-list">
          <li>Avatar Setup create your avatar and start chatting right away</li>
          <li>Essential plan with full access to chat and storage features</li>
          <li>3-day free trial, then billed monthly at $29.99</li>
          <li>10,000 text characters</li>
          <li>45 voice minutes</li>
          <li>10 photo uploads</li>
        </ul>
        <p class="form-note">Trial lasts 3 days. Cancel anytime to avoid charges. After the trial, your subscription renews monthly at $29.99.</p>
      </div>

      <div class="paywall-block">
        <details class="demo-accordion">
          <summary>
            <span class="demo-summary-icon" aria-hidden="true"><i class="bi bi-play-circle"></i></span>
            <span>
              <strong>See a quick video demo</strong>
              <small>Tap to preview how ForeverMe works in the app.</small>
            </span>
            <span class="demo-summary-chevron" aria-hidden="true"><i class="bi bi-chevron-down"></i></span>
          </summary>
          <div class="demo-video-wrap">
            <video
              class="demo-video"
              src="https://foreverme.love/assets/video/fme_liveapp_video_cycle.mp4?v=1"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </div>
        </details>
      </div>

      <div class="paywall-block">
        <h3>How it works</h3>
        <ol class="how-list">
          <li>
            <span class="how-icon" aria-hidden="true"><i class="bi bi-rocket-takeoff"></i></span>
            <div><strong>Start 3-day trial</strong><span>Tap the button below to continue.</span></div>
          </li>
          <li>
            <span class="how-icon" aria-hidden="true"><i class="bi bi-phone"></i></span>
            <div><strong>Download the app</strong><span>Use the same email and password to activate your purchase.</span></div>
          </li>
          <li>
            <span class="how-icon" aria-hidden="true"><i class="bi bi-person-vcard"></i></span>
            <div><strong>Create a profile</strong><span>Add key details about your loved one.</span></div>
          </li>
          <li>
            <span class="how-icon" aria-hidden="true"><i class="bi bi-mic"></i></span>
            <div><strong>Create and teach an avatar</strong><span>Have your loved one answer questions using voice or text to build their digital avatar.</span></div>
          </li>
          <li>
            <span class="how-icon" aria-hidden="true"><i class="bi bi-stars"></i></span>
            <div><strong>Your avatar is ready</strong><span>More answers make the avatar sound even more like your loved one.</span></div>
          </li>
        </ol>
      </div>

      <div class="paywall-block">
        <h3>Why ForeverMe</h3>
        <p class="form-note">ForeverMe helps you capture and relive voice, personality, and stories — so a legacy can stay with your family for generations.</p>
        <ul class="plan-list">
          <li>Preserve a loved one's voice and personality</li>
          <li>Real conversations when you miss them</li>
          <li>Meaningful legacy for kids and future generations</li>
          <li>Fully secure, your family's memories stay protected</li>
          <li>Capture it now, before it's too late</li>
        </ul>
      </div>

      <div class="paywall-block legal-note">
        By purchasing, you agree to our Terms.<br>
        Free for 3 days, then $29.99/month. Cancel anytime during the trial.
      </div>

      <!-- Stripe Embedded Checkout Container -->
      <div id="stripe-checkout-container" class="stripe-container" style="display: none;">
        <div id="payment-element"></div>
        <div id="payment-message" class="hidden"></div>
      </div>

      <div class="paywall-cta-zone">
        <button class="btn btn-dark btn-main paywall-cta-btn" type="button" id="activateTrialBtn"><span class="btn-text">Activate Free Trial</span></button>
      </div>
    </section>
  `;

    setSticky({ show: false });
    initStripeCheckout();
}

// Глобальные переменные для Stripe
let stripe = null;
let elements = null;
let paymentElement = null;
let stripeInitialized = false;

async function initStripeCheckout() {
    const button = document.getElementById('activateTrialBtn');
    const container = document.getElementById('stripe-checkout-container');

    // Защита от повторной инициализации
    if (stripeInitialized) return;



    button.addEventListener('click', async () => {
        // Защита от повторного клика
        if (stripeInitialized) return;
        stripeInitialized = true;

        const paywallBlocks = document.querySelectorAll('.screen-card .paywall-block');
        paywallBlocks.forEach(block => {
            block.style.display = 'none';
        });

        const stickyBar = document.getElementById('stickyBar');
        if (stickyBar) {
            stickyBar.style.display = 'none';
        }


        const btnText = button.querySelector('.btn-text');

        // Показываем загрузку
        button.disabled = true;
        btnText.textContent = 'Preparing checkout...';

        try {
            // 1. Получаем PaymentIntent от бэкенда
            const response = await apiRequest('/payments/create-stripe-payment-intent', 'POST', {
                plan_id: 2,
                gateway: 'stripe',
                email: state.email || paymentEmail,
                user_id: localStorage.getItem('user_id'),
                answers: state.answers,
                ageGroup: state.ageGroup,
                free_trial: true
            });

            if (!response.success || !response.data.client_secret) {
                throw new Error(response.message || 'Failed to initialize payment');
            }

            // 2. Инициализируем Stripe
            if (!stripe) {
                stripe = Stripe(response.data.publishable_key);
            }

            window.currentIntentHasTrial = response.data.has_trial || false;

            // 3. Создаем элементы оплаты
            if (elements) {
                elements = null;
            }

            elements = stripe.elements({
                clientSecret: response.data.client_secret,
                appearance: {
                    theme: 'stripe',
                    variables: {
                        colorPrimary: '#6366f1',
                        colorBackground: '#ffffff',
                        colorText: '#1f2937',
                        colorDanger: '#dc2626',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        borderRadiusLarge: '16px'
                    },
                    rules: {
                        '.Input': {
                            padding: '12px 16px',
                            fontSize: '16px'
                        },
                        '.Label': {
                            fontSize: '14px',
                            fontWeight: '500',
                            marginBottom: '6px'
                        }
                    }
                }
            });

            // 4. Создаем payment element
            paymentElement = elements.create('payment');

            // 5. Показываем контейнер и монтируем элемент
            container.style.display = 'block';
            paymentElement.mount('#payment-element');

            button.disabled = false;
            btnText.textContent = 'Subscribe Now';

            const oldButton = button;
            const newButton = oldButton.cloneNode(true);
            oldButton.parentNode.replaceChild(newButton, oldButton);
            newButton.addEventListener('click', handleStripeSubmit);

            // Плавно скроллим к форме
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        } catch (error) {
            console.error('Stripe init error:', error);
            showToast(error.message || 'Failed to initialize payment', 'danger');
            button.disabled = false;
            btnText.textContent = 'Activate Free Trial';
            stripeInitialized = false; // Сбрасываем флаг при ошибке
        }
    });
}

async function handleStripeSubmit() {
    const button = document.getElementById('activateTrialBtn');
    setSticky({ show: false });
    const btnText = button.querySelector('.btn-text');


    if (!stripe || !elements) {
        showToast('Payment system not ready. Please refresh and try again.', 'danger');
        return;
    }


    button.disabled = true;
    btnText.textContent = 'Processing...';

    try {
        const { error: submitError } = await elements.submit();
        if (submitError) {
            showToast(submitError.message, 'danger');
            button.disabled = false;
            btnText.textContent = 'Subscribe Now';
            return;
        }

        // Определяем тип интента по has_trial
        const isTrial = true; // сохрани при инициализации

        if (isTrial) {
            // Используем confirmSetup для trial
            const { error } = await stripe.confirmSetup({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/quiz-payment-success`,
                },
                redirect: 'if_required'
            });

            if (error) {
                showToast(error.message, 'danger');
            } else {
                showToast('Trial activated successfully! Redirecting...', 'success');
                setTimeout(() => {
                    window.location.href = '/quiz-payment-success?trial=true';
                }, 1500);
            }
        } else {
            // Используем confirmPayment для обычной оплаты
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/quiz-payment-success`,
                },
                redirect: 'if_required'
            });

            if (error) {
                showToast(error.message, 'danger');
            } else if (paymentIntent.status === 'succeeded') {
                gtag('event', 'quiz_purchase_complete', {
                    value: 29.99,
                    currency: 'USD',
                    transaction_id: paymentIntent.id
                });
                showToast('Payment successful! Redirecting...', 'success');

                setTimeout(() => {
                    window.location.href = '/quiz-payment-success?payment_intent=' + paymentIntent.id;
                }, 1500);
            }
        }

    } catch (error) {
        console.error('Stripe payment error:', error);
        showToast('Payment failed. Please try again.', 'danger');
    } finally {
        button.disabled = false;
        btnText.textContent = 'Subscribe Now';
    }
}


function renderSelfRedirect() {
  host.innerHTML = `
    <section class="screen-card interstitial-card fade-in">
      <div class="eyebrow">Alternate path detected</div>
      <blockquote>It looks like you selected <strong>Myself</strong>. In production, this answer can route visitors into your second quiz funnel focused on self-legacy creation.</blockquote>
      <cite>For this prototype, the main loved-one flow continues after this screen.</cite>
      <div class="continue-note">Continue to the loved-one protection flow</div>
    </section>
  `;
  setSticky({
    stepLabel: 'Branching logic ready',
    hint: 'This step demonstrates where your second funnel redirect can happen.',
    continueDisabled: false,
    backHidden: false
  });
}

function renderCurrentStep() {
  startTimer();
  updateProgress();
  stopInterstitialSlider();

  const item = flow[state.step];
  heroNote.classList.add('hidden');

  if (item.type === 'question') return renderQuestion(item);
  if (item.type === 'nameInput') return renderNameInput(item);
  if (item.type === 'thinking') return renderThinkingBreak();
  if (item.type === 'quoteBreak') return renderQuoteBreak();
  if (item.type === 'interstitial') return renderInterstitial(item);
  if (item.type === 'loader') return animateLoader(item);
  if (item.type === 'voiceDemo') return renderVoiceDemo();
  if (item.type === 'email') return renderEmail();
  if (item.type === 'paywall') return renderPaywall();
}

function nextStep() {
  const current = flow[state.step];

    if (current?.type === 'question') {
        const currentQuestionNum = questionIndexForStep(state.step);
        if (currentQuestionNum === totalQuestions) {

        }
    }

  if (state.step < flow.length - 1) {
    state.step += 1;
    const next = flow[state.step];
    renderCurrentStep();
  }
}

function prevStep() {
  if (state.step === 0) return;
  state.step -= 1;
  while (flow[state.step] && flow[state.step].type === 'loader') {
    state.step -= 1;
  }


  if (state.step < 0) state.step = 0;
  renderCurrentStep();
}

continueBtn.addEventListener('click', async () => {
    const current = flow[state.step];

    if (current.type === 'email') {
        const emailInput = document.getElementById('emailInput');
        if (emailInput) {
            state.email = emailInput.value.trim();
            paymentEmail = state.email;
            localStorage.setItem('quiz_email', state.email);
        }

        try {
            const success = await registerUser();
            if (!success) {
                return;
            }
            nextStep();
        } catch (error) {
            console.error("Registration error:", error);
            showToast('Registration failed. Please try again.', 'danger');
        }
        return;
    }

    nextStep();
});

backBtn.addEventListener('click', prevStep);

document.body.insertAdjacentHTML('beforeend', `
  <div class="modal fade" id="fallbackCheckoutModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Checkout setup required</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Lemon Squeezy checkout could not be loaded. Please try again in a few moments.
        </div>
      </div>
    </div>
  </div>
`);

renderCurrentStep();
    window.createPayment = async function() {
        try {
            // Отправка регистрации
            const response = await apiRequest('/payments/payment-for-subscription', 'POST', {
                plan_id: 2
            });

            if (response.data && response.success) {
                pendingPaymentData = response.data;
                console.log(pendingPaymentData)
            } else {
                showLoading(false);
                showToast('Registration failed. Please try again!!', 'danger');
            }

        } catch (error) {
            showLoading(false);

            // 🎯 Обработка ошибки из вашего API
            let errorMessage = 'Registration failed. Please try again!';

            if (error.response) {
                // Axios помещает ответ в error.response
                const errorData = error.response.data;

                if (errorData.message) {
                    errorMessage = errorData.message;
                }
                // Если есть errors объект (валидация)
                else if (errorData.errors) {
                    const firstErrorKey = Object.keys(errorData.errors)[0];
                    if (firstErrorKey && errorData.errors[firstErrorKey][0]) {
                        errorMessage = errorData.errors[firstErrorKey][0];
                    }
                }
            }
            // Если ошибка в самом объекте error (не в response)
            else if (error.message) {
                errorMessage = error.message;
            }

            showToast(errorMessage, 'danger');
        }
    };

window.addEventListener('beforeunload', function() {

    const currentStep = flow[state.step];
    const isOnPaywall = currentStep?.type === 'paywall';
    const isOnEmail = currentStep?.type === 'email';
    const isOnVoiceDemo = currentStep?.type === 'voiceDemo';

    const answeredQuestionsCount = Object.keys(state.answers).filter(key => /^q\d+$/.test(key)).length;
    const isQuizCompleted = answeredQuestionsCount === totalQuestions;

    if (!isOnPaywall && !isQuizCompleted && !isOnEmail && !isOnVoiceDemo) {
        const lastQuestionNumber = answeredQuestionsCount;
        const completionRate = Math.round((answeredQuestionsCount / totalQuestions) * 100);


            gtag('event', 'quiz_abandoned', {
                quiz_name: 'personality_quiz',
                last_question: lastQuestionNumber,
                total_questions: totalQuestions,
                completion_rate: completionRate,
                answers_count: answeredQuestionsCount
            });
    }
});
window.registerUser = async function() {
    const email = document.getElementById('emailInput').value;


    if (!email || !email.includes('@')) {
        return;
    }


    try {
        // Отправка регистрации
        const response = await apiRequest('/register-quiz', 'POST', {
            email: email,
            agree: true
        });
        paymentEmail = email;

        if (response.data && response.data.token) {
            localStorage.setItem('auth_token', response.data.token);
            localStorage.setItem('user_id', response.data.user.user_id);

            const totalAnswersCount = Object.keys(state.answers).filter(key => state.answers[key] !== null && state.answers[key] !== undefined).length;

                gtag('event', 'quiz_registration_completed', {
                    quiz_name: 'personality_quiz',
                    user_id: response.data.user?.user_id || response.data.user?.id || null,
                    email: email,
                    total_answers: totalAnswersCount
                });

            showToast('Registration successful!', 'success');

            setTimeout(() => {
                showLoading(false);
            }, 500);
                gtag('event', 'quiz_all_questions_completed', {
                    quiz_name: 'personality_quiz',
                    total_questions: totalQuestions
                });
            return true;
            //window.location.href = '/quiz-special-offer-subscription?registration=1';
        } else {
            showLoading(false);
            showToast('Registration failed. Please try again.', 'danger');
        }

    } catch (error) {
        showLoading(false);

        // 🎯 Обработка ошибки из вашего API
        let errorMessage = 'Registration failed. Please try again.';

        if (error.response) {
            // Axios помещает ответ в error.response
            const errorData = error.response.data;

            if (errorData.message) {
                errorMessage = errorData.message;
            }
            // Если есть errors объект (валидация)
            else if (errorData.errors) {
                const firstErrorKey = Object.keys(errorData.errors)[0];
                if (firstErrorKey && errorData.errors[firstErrorKey][0]) {
                    errorMessage = errorData.errors[firstErrorKey][0];
                }
            }
        }
        // Если ошибка в самом объекте error (не в response)
        else if (error.message) {
            errorMessage = error.message;
        }

        showToast(errorMessage, 'danger');
        return false;
    }
};
