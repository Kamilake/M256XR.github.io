// ==========================================
// 질문 데이터 설정 (전 15문항)
// score: 후냐오스도 가산점
// tags: 획득하는 속성 태그
// ==========================================
const questions = [
    {
        text: "Q1. 우선 기본부터. 평소 플레이 스타일은?",
        options: [
            { text: "보이스챗으로 대화한다", score: 0, tags: ["voice"] },
            { text: "무언(Mute)으로 필담이나 제스처", score: 4, tags: ["mute", "cute_move"] },
            { text: "보이스체인저를 사용해서 대화한다", score: 3, tags: ["voice", "babiniku"] },
            { text: "자고 있는 경우가 많다", score: 5, tags: ["sleep"] }
        ]
    },
    {
        text: "Q2. 메인 아바타의 신장 설정은?",
        options: [
            { text: "150cm 이상 (장신·리얼 계열)", score: 0, tags: ["cool"] },
            { text: "130cm 전후 (약간 작은 소녀/소년)", score: 2, tags: ["normal"] },
            { text: "90-110cm (VRChat 표준 사이즈)", score: 5, tags: ["standard_cute"] },
            { text: "70cm 이하 (로리·마스코트·인외)", score: 8, tags: ["small", "mascot"] }
        ]
    },
    {
        text: "Q3. 풀트래킹(FBT)은 사용하고 있어?",
        options: [
            { text: "없음 / 3포인트·데스크톱", score: 0 },
            { text: "있지만 서 있기만 하는 경우가 많다", score: 2 },
            { text: "여자 앉기나 옆으로 눕기 위해서만 쓴다", score: 7, tags: ["fbt_cute"] },
            { text: "댄스나 퍼포먼스에 사용한다", score: 1, tags: ["active"] }
        ]
    },
    {
        text: "Q4. 거울(미러) 앞에 있을 때의 행동은?",
        options: [
            { text: "내 아바타에 반해서 포즈 취하기", score: 6, tags: ["narcissist"] },
            { text: "뒤에 있는 사람들 대화에 참여", score: 1 },
            { text: "구석에서 앉아서 멍때리기", score: 4, tags: ["passive"] },
            { text: "거울은 끄고 상대를 보는 파", score: 0, tags: ["hardcore"] }
        ]
    },
    {
        text: "Q5. 친구가 「쓰담쓰담」 해줬다!",
        options: [
            { text: "「하지 마!」하고 뿌리친다", score: 3, tags: ["tsundere_check"] },
            { text: "되는 대로 맡긴다 (무저항)", score: 6, tags: ["accept"] },
            { text: "스스로 부비부비하며 「더 해줘」", score: 10, tags: ["addict"] },
            { text: "쓰담쓰담 되돌려주며 주도권을 잡는다", score: 0, tags: ["dom"] }
        ]
    },
    {
        text: "Q6. 술을 마셨을 때(브음주)의 변화는?",
        options: [
            { text: "안 마심 / 변화 없음", score: 0 },
            { text: "목소리가 커지고 오라오라 한다", score: -2, tags: ["orora"] },
            { text: "바로 잠들어 버린다", score: 5, tags: ["sleep_gap"] },
            { text: "거리감이 버그나서 애교쟁이가 된다", score: 10, tags: ["drunk_cute"] }
        ]
    },
    {
        text: "Q7. 「브감각(팬텀센스)」은 있어?",
        options: [
            { text: "시각만. 감각은 없다", score: 0 },
            { text: "쓰다듬으면 뭔가 느낌이 오는 것 같다", score: 4 },
            { text: "간지럽다·온도를 느낀다", score: 8, tags: ["sensitive"] },
            { text: "통각까지 있다 (가치세)", score: 6, tags: ["masochist"] }
        ]
    },
    {
        text: "Q8. 퍼블릭 월드에서 처음 보는 사람에 대한 대응은?",
        options: [
            { text: "내가 먼저 적극적으로 말을 건다", score: 0, tags: ["extrovert"] },
            { text: "말 걸어오면 대응한다", score: 3 },
            { text: "친구 뒤에 숨는다", score: 7, tags: ["shy"] },
            { text: "무언으로 아바타 개그를 해서 관심을 끈다", score: 6, tags: ["attention"] }
        ]
    },
    {
        text: "Q9. 「귀엽다」라고 들었을 때의 리액션",
        options: [
            { text: "「귀엽지 않거든!」 즉시 부정", score: 5, tags: ["tsundere_trigger"] },
            { text: "「고마워~」하고 솔직하게 기뻐한다", score: 3, tags: ["pure"] },
            { text: "「......///（무언으로 얼굴 빨개짐）」", score: 8, tags: ["blush"] },
            { text: "「나는 멋있는 거야!」", score: 4, tags: ["denial"] }
        ]
    },
    {
        text: "Q10. 좋아하는 「거리감」은?",
        options: [
            { text: "부딪히지 않을 정도의 거리", score: 0 },
            { text: "옆에 나란히 앉을 정도", score: 3 },
            { text: "무릎베개나 백허그", score: 8, tags: ["skinship"] },
            { text: "아바타가 겹칠 정도로 붙고 싶다", score: 10, tags: ["fusion"] }
        ]
    },
    {
        text: "Q11. 과몰입(파트너)에 대한 스탠스",
        options: [
            { text: "관심 없음·솔로가 좋다", score: 0 },
            { text: "좋은 사람이 있으면 갖고 싶다", score: 3 },
            { text: "항상 모집 중·응석받이 되고 싶다", score: 9, tags: ["want_love"] },
            { text: "이미 있고, 데레데레 중이다", score: 6, tags: ["has_sugar"] }
        ]
    },
    {
        text: "Q12. 질투심이 강한 편?",
        options: [
            { text: "전혀 신경 안 쓴다", score: 0 },
            { text: "약간 찝찝한 정도", score: 3 },
            { text: "친한 사람이 다른 사람과 쓰다듬으면 싫다", score: 7, tags: ["heavy"] },
            { text: "독점욕의 화신이다", score: 10, tags: ["yandere"] }
        ]
    },
    {
        text: "Q13. 자기 자신을 뭐라고 부르나? (1인칭)",
        options: [
            { text: "나·저", score: 0 },
            { text: "저 (정중체)", score: 2 },
            { text: "우리·본인", score: 3 },
            { text: "자기 이름·캐릭터 말투", score: 6, tags: ["rp"] }
        ]
    },
    {
        text: "Q14. 누군가를 「그래그래~」 하고 쓰다듬어주는 건 좋아해?",
        options: [
            { text: "엄청 좋아해. 쓰다듬는 쪽이다", score: -5, tags: ["top"] },
            { text: "가끔은 해줘도 괜찮다", score: 2 },
            { text: "아니, 받는 쪽이 좋다", score: 7, tags: ["bottom"] },
            { text: "서로 쓰다듬고 싶다", score: 5, tags: ["switch"] }
        ]
    },
    {
        text: "Q15. 마지막으로. 영혼의 성별은?",
        options: [
            { text: "남자다!! (즉답)", score: 0 },
            { text: "최근 자신이 없어지고 있다", score: 6, tags: ["confused"] },
            { text: "귀여우면 뭐든 상관없다", score: 4, tags: ["free"] },
            { text: "이미 미소녀입니다", score: 8, tags: ["girl"] }
        ]
    }
];

// ==========================================
// 로직 부분
// ==========================================
let currentQuestionIndex = 0;
let totalScore = 0;
let collectedTags = new Set();
const MAX_SCORE = 110; // 대략적인 만점

// 진단 시작
function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // 표시 업데이트
    document.getElementById('q-count').innerText = 
        `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${questions.length}`;
    document.getElementById('question-text').innerText = question.text;
    
    // 프로그레스 바
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    // 버튼 생성
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.innerText = option.text;
        
        // iOS 대응 클릭 이벤트
        btn.addEventListener('click', function() {
            this.disabled = true; // 연타 방지
            handleAnswer(option);
        });
        
        container.appendChild(btn);
    });
}

// 응답 처리
function handleAnswer(option) {
    totalScore += option.score;
    if (option.tags) {
        option.tags.forEach(tag => collectedTags.add(tag));
    }

    // 잠시 대기 후 다음으로
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 250);
}

// 결과 판정
function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    // 스코어 계산 (0-100%)
    let percentage = Math.round((totalScore / MAX_SCORE) * 100);
    // 보정 (마이너스나 100 초과 방지)
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    let type = "";
    let text = "";

    // --- 칭호 판정 로직 ---
    
    // 특수 조건 우선
    if (collectedTags.has("tsundere_trigger") && collectedTags.has("tsundere_check") && percentage > 40) {
        type = "교과서적인 츤데레";
        text = "「뭐, 별로 너를 위한 게 아니거든!」\n부정하면 할수록 주변은 씩 웃고 있습니다. 속으로는 쓰다듬어주길 기다리고 있는 게 다 들통났어요.";
    }
    else if (collectedTags.has("babiniku") && percentage > 60) {
        type = "영혼까지 미소녀";
        text = "목소리도 외모도 완벽한 미소녀. 안에 있는 아저씨? 그런 건 처음부터 없었습니다. VRChat이 낳은 완전 생명체입니다.";
    }
    else if (collectedTags.has("yandere") && percentage > 70) {
        type = "멘헤라·얀데레 예비군";
        text = "사랑이 무겁다. 매우 무겁다. 한번 마음을 주면 떨어지지 않는 집착 타입. 파트너에 대한 독점욕이 강하고, 주변을 위협하는 치와와 같은 귀여움과 무서움이 있습니다.";
    }
    // 스코어 기반 판정
    else if (percentage <= 15) {
        type = "절대적 포식자 (수컷)";
        text = "당신은 후냐오스가 아닙니다. 오히려 후냐오스들을 거느리는 「왕」의 자질이 있습니다. 흔들리지 않는 자아와 위엄을 가지고 있습니다.";
    }
    else if (percentage <= 35) {
        type = "일반 브쳇 유저";
        text = "건전합니다. 아바타에 맞춰 행동하는 경우는 있어도, 영혼까지 침식당하지는 않았습니다. TPO를 지키는 어른스러운 대응이 가능합니다.";
    }
    else if (percentage <= 55) {
        type = "숨겨진 후냐오스";
        text = "평소에는 시크하지만, 방심하면 「후냐」하는 부분이 나옵니다. 특히 술이 들어가거나 졸릴 때는 방어력이 제로가 됩니다.";
    }
    else if (percentage <= 75) {
        type = "사랑받는 마스코트";
        text = "거기 있는 것만으로 주변이 힐링되는 존재. 쓰다듬어지는 것에 저항이 없고, 오히려 기쁨을 느끼기 시작했습니다. 모두의 펫 포지션입니다.";
    }
    else {
        type = "심연의 암컷타락";
        text = "이미 늦었습니다. 사고회로가 「귀엽게 있는 것」에 최적화되어 있습니다. 수컷으로서의 자아는 전자의 바다에 녹아버렸습니다. 내세에 기대해 주세요.";
    }

    // DOM 반영
    document.getElementById('result-type').innerText = `【${type}】`;
    document.getElementById('result-score').innerText = `${percentage}%`;
    document.getElementById('result-text').innerText = text;

    // 태그 표시
    const tagsContainer = document.getElementById('result-tags');
    const paramList = document.getElementById('result-params');
    
    // 태그 사전
    const tagMap = {
        "voice": "보이스세", "mute": "무언세", "babiniku": "바미니쿠",
        "small": "저신장", "fbt_cute": "풀트래킹세", "drunk_cute": "취하면 데레",
        "sensitive": "고감도", "shy": "낯가림", "tsundere_trigger": "츤데레",
        "yandere": "격한 감정", "want_love": "관심종자", "top": "공격", "bottom": "수비"
    };

    // 태그 생성
    collectedTags.forEach(tag => {
        if(tagMap[tag]) {
            const span = document.createElement('span');
            span.className = 'tag';
            span.innerText = "#" + tagMap[tag];
            tagsContainer.appendChild(span);
        }
    });

    // 간이 파라미터 표시
    let paramsHTML = "";
    if (collectedTags.has("top")) paramsHTML += "<li>⚔️ 공격성：높음</li>";
    if (collectedTags.has("bottom") || collectedTags.has("addict")) paramsHTML += "<li>🛡️ 방어력：낮음</li>";
    if (collectedTags.has("narcissist")) paramsHTML += "<li>🪞 자기애：높음</li>";
    if (collectedTags.has("sensitive")) paramsHTML += "<li>💗 감도：높음</li>";
    paramList.innerHTML = paramsHTML;

    // 공유용 저장
    window.resultData = { percentage, type };
}

function shareTwitter() {
    const { percentage, type } = window.resultData;
    const url = window.location.href;
    const text = `전 15문항 VRChat 진단 완료!\n나의 후냐오스도는【${percentage}%】\n판정：${type}\n\n#VRChat후냐오스진단`;
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
}