// ==========================================
// 質問データ設定 (全15問)
// score: ふニャオス度加算点
// tags: 獲得する属性タグ
// ==========================================
const questions = [
    {
        text: "Q1. まずは基本から。普段のプレイスタイルは？",
        options: [
            { text: "ボイスチャットで喋る", score: 0, tags: ["voice"] },
            { text: "無言（Mute）で筆談やジェスチャー", score: 4, tags: ["mute", "cute_move"] },
            { text: "ボイチェンを使って喋る", score: 3, tags: ["voice", "babiniku"] },
            { text: "寝てることが多い", score: 5, tags: ["sleep"] }
        ]
    },
    {
        text: "Q2. メインアバターの身長設定は？",
        options: [
            { text: "150cm以上（高身長・リアル寄り）", score: 0, tags: ["cool"] },
            { text: "130cm前後（少し小柄な少女/少年）", score: 2, tags: ["normal"] },
            { text: "90-110cm（VRChat標準サイズ）", score: 5, tags: ["standard_cute"] },
            { text: "70cm以下（ロリ・マスコット・人外）", score: 8, tags: ["small", "mascot"] }
        ]
    },
    {
        text: "Q3. フルトラッキング（FBT）は使ってる？",
        options: [
            { text: "持ってない / 3点・デスクトップ", score: 0 },
            { text: "持ってるけど棒立ちが多い", score: 2 },
            { text: "女の子座りや横寝のためだけに使う", score: 7, tags: ["fbt_cute"] },
            { text: "ダンスやパフォーマンスに使う", score: 1, tags: ["active"] }
        ]
    },
    {
        text: "Q4. 鏡（ミラー）の前にいる時の行動は？",
        options: [
            { text: "自分のアバターに見惚れてポーズ", score: 6, tags: ["narcissist"] },
            { text: "後ろの人の会話に参加", score: 1 },
            { text: "端っこで座ってボーッとする", score: 4, tags: ["passive"] },
            { text: "ミラーは消して相手を見る派", score: 0, tags: ["hardcore"] }
        ]
    },
    {
        text: "Q5. フレンドに「頭なでなで」された！",
        options: [
            { text: "「やめろ！」と払いのける", score: 3, tags: ["tsundere_check"] },
            { text: "されるがまま（無抵抗）", score: 6, tags: ["accept"] },
            { text: "自分からすり寄って「もっと」", score: 10, tags: ["addict"] },
            { text: "撫で返して主導権を握る", score: 0, tags: ["dom"] }
        ]
    },
    {
        text: "Q6. お酒を飲んだ時（VRC飲み）の変化は？",
        options: [
            { text: "飲まない / 変わらない", score: 0 },
            { text: "声がデカくなってオラつく", score: -2, tags: ["orora"] },
            { text: "すぐ寝落ちする", score: 5, tags: ["sleep_gap"] },
            { text: "距離感がバグって甘えん坊になる", score: 10, tags: ["drunk_cute"] }
        ]
    },
    {
        text: "Q7. 「ファントムセンス（VR感覚）」はある？",
        options: [
            { text: "視覚のみ。感覚はない", score: 0 },
            { text: "撫でられたらフワッとする気がする", score: 4 },
            { text: "くすぐったい・温度を感じる", score: 8, tags: ["sensitive"] },
            { text: "痛覚まである（ガチ勢）", score: 6, tags: ["masochist"] }
        ]
    },
    {
        text: "Q8. Publicワールドで初対面の人への対応は？",
        options: [
            { text: "自分からガンガン話しかける", score: 0, tags: ["extrovert"] },
            { text: "話しかけられたら対応する", score: 3 },
            { text: "フレンドの後ろに隠れる", score: 7, tags: ["shy"] },
            { text: "無言でアバター芸をして気を引く", score: 6, tags: ["attention"] }
        ]
    },
    {
        text: "Q9. 「かわいい」と言われた時のリアクション",
        options: [
            { text: "「かわいくねーよ！」と即否定", score: 5, tags: ["tsundere_trigger"] },
            { text: "「ありがとう～」と素直に喜ぶ", score: 3, tags: ["pure"] },
            { text: "「......///（無言で赤面）」", score: 8, tags: ["blush"] },
            { text: "「俺はかっこいいんだよ！」", score: 4, tags: ["denial"] }
        ]
    },
    {
        text: "Q10. 好きな「距離感」は？",
        options: [
            { text: "ぶつからない程度の距離", score: 0 },
            { text: "隣に並んで座るくらい", score: 3 },
            { text: "膝枕やバックハグ", score: 8, tags: ["skinship"] },
            { text: "アバターが埋まるくらい重なりたい", score: 10, tags: ["fusion"] }
        ]
    },
    {
        text: "Q11. お砂糖（パートナー）へのスタンス",
        options: [
            { text: "興味ない・ソロでいい", score: 0 },
            { text: "いい人がいれば欲しい", score: 3 },
            { text: "常に募集してる・甘やかされたい", score: 9, tags: ["want_love"] },
            { text: "既にいて、デレデレである", score: 6, tags: ["has_sugar"] }
        ]
    },
    {
        text: "Q12. 嫉妬深いほう？",
        options: [
            { text: "全く気にしない", score: 0 },
            { text: "少しモヤッとする程度", score: 3 },
            { text: "仲良い人が他の人と撫で合ってると嫌", score: 7, tags: ["heavy"] },
            { text: "独占欲の塊である", score: 10, tags: ["yandere"] }
        ]
    },
    {
        text: "Q13. 自分のことをどう呼ぶ？（一人称）",
        options: [
            { text: "俺・僕", score: 0 },
            { text: "私（わたし）", score: 2 },
            { text: "うち・自分", score: 3 },
            { text: "自分の名前・のじゃ", score: 6, tags: ["rp"] }
        ]
    },
    {
        text: "Q14. 誰かに「よしよし」してあげるのは好き？",
        options: [
            { text: "大好き。撫でる側だ", score: -5, tags: ["top"] },
            { text: "たまにはしてあげてもいい", score: 2 },
            { text: "いや、される方がいい", score: 7, tags: ["bottom"] },
            { text: "お互いに撫で合いたい", score: 5, tags: ["switch"] }
        ]
    },
    {
        text: "Q15. 最後に。魂の性別は？",
        options: [
            { text: "男だ！！（即答）", score: 0 },
            { text: "最近自信がなくなってきた", score: 6, tags: ["confused"] },
            { text: "かわいければ何でもいい", score: 4, tags: ["free"] },
            { text: "もう美少女です", score: 8, tags: ["girl"] }
        ]
    }
];

// ==========================================
// ロジック部分
// ==========================================
let currentQuestionIndex = 0;
let totalScore = 0;
let collectedTags = new Set();
const MAX_SCORE = 110; // 概算の満点

// 診断開始
function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

// 質問表示
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    // 表示更新
    document.getElementById('q-count').innerText = 
        `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${questions.length}`;
    document.getElementById('question-text').innerText = question.text;
    
    // プログレスバー
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    // ボタン生成
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-option';
        btn.innerText = option.text;
        
        // iOS対応クリックイベント
        btn.addEventListener('click', function() {
            this.disabled = true; // 連打防止
            handleAnswer(option);
        });
        
        container.appendChild(btn);
    });
}

// 回答処理
function handleAnswer(option) {
    totalScore += option.score;
    if (option.tags) {
        option.tags.forEach(tag => collectedTags.add(tag));
    }

    // 少し待って次へ
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 250);
}

// 結果判定
function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    // スコア計算 (0-100%)
    let percentage = Math.round((totalScore / MAX_SCORE) * 100);
    // 補正（マイナスや100オーバー防止）
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    let type = "";
    let text = "";

    // --- 称号判定ロジック ---
    
    // 特殊条件優先
    if (collectedTags.has("tsundere_trigger") && collectedTags.has("tsundere_check") && percentage > 40) {
        type = "教科書通りのツンデレ";
        text = "「べ、別にあんたのためじゃないんだからね！」\n否定すればするほど周りはニヤニヤしています。内心では撫でられるのを待っているのがバレバレです。";
    }
    else if (collectedTags.has("babiniku") && percentage > 60) {
        type = "魂まで美少女";
        text = "声も見た目も完璧な美少女。中身のおじさん？そんなものは最初からいなかったのです。VRChatが生んだ完全生命体です。";
    }
    else if (collectedTags.has("yandere") && percentage > 70) {
        type = "メンヘラ・ヤンデレ予備軍";
        text = "愛が重い。非常に重い。一度懐くと離れない粘着質タイプ。パートナーへの独占欲が強く、周りを威嚇するチワワのような可愛さと怖さがあります。";
    }
    // スコアベース判定
    else if (percentage <= 15) {
        type = "絶対的捕食者（オス）";
        text = "あなたはふニャオスではありません。むしろふニャオス達を侍らせる「王」の素質があります。揺るがない自我と威厳を持っています。";
    }
    else if (percentage <= 35) {
        type = "一般VRChatter";
        text = "健全です。アバターに合わせて振る舞うことはあっても、魂までは侵食されていません。TPOをわきまえた大人の対応ができます。";
    }
    else if (percentage <= 55) {
        type = "隠れふニャオス";
        text = "普段はキリッとしていますが、気を抜くと「ふにゃ」っとした部分が出ます。特にお酒が入ったり、眠い時は防御力がゼロになります。";
    }
    else if (percentage <= 75) {
        type = "愛されマスコット";
        text = "そこにいるだけで周りが癒やされる存在。撫でられることに抵抗がなく、むしろ喜びを感じ始めています。みんなのペット枠です。";
    }
    else {
        type = "深淵のメス堕ち";
        text = "手遅れです。思考回路が「かわいくあること」に最適化されています。オスとしての自我は電子の海に溶けました。来世にご期待ください。";
    }

    // DOM反映
    document.getElementById('result-type').innerText = `【${type}】`;
    document.getElementById('result-score').innerText = `${percentage}%`;
    document.getElementById('result-text').innerText = text;

    // タグ表示
    const tagsContainer = document.getElementById('result-tags');
    const paramList = document.getElementById('result-params');
    
    // タグ辞書
    const tagMap = {
        "voice": "ボイス勢", "mute": "無言勢", "babiniku": "バ美肉",
        "small": "低身長", "fbt_cute": "フルトラ勢", "drunk_cute": "酔うとデレる",
        "sensitive": "高感度", "shy": "人見知り", "tsundere_trigger": "ツンデレ",
        "yandere": "激重", "want_love": "構ってちゃん", "top": "攻め", "bottom": "受け"
    };

    // タグ生成
    collectedTags.forEach(tag => {
        if(tagMap[tag]) {
            const span = document.createElement('span');
            span.className = 'tag';
            span.innerText = "#" + tagMap[tag];
            tagsContainer.appendChild(span);
        }
    });

    // 簡易パラメータ表示
    let paramsHTML = "";
    if (collectedTags.has("top")) paramsHTML += "<li>⚔️ 攻撃性：高</li>";
    if (collectedTags.has("bottom") || collectedTags.has("addict")) paramsHTML += "<li>🛡️ 防御力：低</li>";
    if (collectedTags.has("narcissist")) paramsHTML += "<li>🪞 自己愛：高</li>";
    if (collectedTags.has("sensitive")) paramsHTML += "<li>💗 感度：高</li>";
    paramList.innerHTML = paramsHTML;

    // シェア用保存
    window.resultData = { percentage, type };
}

function shareTwitter() {
    const { percentage, type } = window.resultData;
    const url = window.location.href;
    const text = `全15問のVRChat診断完了！\n私のふニャオス度は【${percentage}%】\n判定：${type}\n\n#VRChatふニャオス診断`;
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
}