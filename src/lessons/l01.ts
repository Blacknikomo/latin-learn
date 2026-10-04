import type { Lesson } from '../types';

const l01: Lesson = {
  id: 1,
  date: '2026-10-02',
  title: {
    en: 'Pronunciation & first phrases',
    de: 'Aussprache & erste Wendungen',
    ru: 'Произношение и первые фразы',
  },
  goal: {
    en: 'Read any Latin text aloud correctly (classical style) and know where Latin sits in the history of European languages.',
    de: 'Jeden lateinischen Text korrekt (klassisch) vorlesen und wissen, wo Latein in der Geschichte der europäischen Sprachen steht.',
    ru: 'Правильно читать вслух любой латинский текст (в классическом произношении) и понимать место латыни в истории европейских языков.',
  },
  sections: [
    {
      minutes: 10,
      title: { en: 'Context: from Rome to Romance', de: 'Kontext: von Rom zu den romanischen Sprachen', ru: 'Контекст: от Рима к романским языкам' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Latin began as the dialect of a small region, **Latium**, around Rome. It spread with Roman power, split into regional spoken forms and became the Romance languages — while a written, standardised form survived for another thousand years as the language of the Church, science and diplomacy.',
            de: 'Latein war ursprünglich der Dialekt einer kleinen Region, **Latium**, rund um Rom. Mit der römischen Macht breitete es sich aus, zerfiel in regionale Sprechformen und wurde zu den romanischen Sprachen — während eine geschriebene, genormte Form noch tausend Jahre als Sprache der Kirche, Wissenschaft und Diplomatie überlebte.',
            ru: 'Латынь начиналась как диалект небольшой области **Лаций** вокруг Рима. Вместе с римской властью она распространилась, распалась на региональные разговорные формы и превратилась в романские языки — а письменная нормированная форма прожила ещё тысячу лет как язык Церкви, науки и дипломатии.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Timeline', de: 'Zeitleiste', ru: 'Хронология' },
          head: [
            { en: 'Period', de: 'Periode', ru: 'Период' },
            { en: 'Dates (approx.)', de: 'Zeit (ca.)', ru: 'Даты (примерно)' },
            { en: 'What to know', de: 'Was man wissen sollte', ru: 'Что важно' },
          ],
          rows: [
            [
              { en: 'Old Latin', de: 'Altlatein', ru: 'Архаическая латынь' },
              { en: 'to ~100 BC', de: 'bis ca. 100 v. Chr.', ru: 'до ~100 г. до н. э.' },
              { en: 'Inscriptions, early comedy (Plautus).', de: 'Inschriften, frühe Komödie (Plautus).', ru: 'Надписи, ранняя комедия (Плавт).' },
            ],
            [
              { en: 'Classical Latin', de: 'Klassisches Latein', ru: 'Классическая латынь' },
              { en: '~100 BC – AD 200', de: 'ca. 100 v. – 200 n. Chr.', ru: '~100 г. до н. э. – 200 г. н. э.' },
              { en: 'Cicero, Caesar, Virgil, Horace — the norm taught in schools.', de: 'Cicero, Caesar, Vergil, Horaz — die Schulnorm.', ru: 'Цицерон, Цезарь, Вергилий, Гораций — школьная норма.' },
            ],
            [
              { en: 'Vulgar (spoken) Latin', de: 'Vulgärlatein', ru: 'Вульгарная (разговорная) латынь' },
              { en: 'alongside, esp. AD 200–700', de: 'parallel, v. a. 200–700', ru: 'параллельно, особенно 200–700' },
              { en: 'Everyday speech; becomes Italian, Spanish, French, Portuguese, Romanian…', de: 'Alltagssprache; wird zu Italienisch, Spanisch, Französisch, Portugiesisch, Rumänisch…', ru: 'Повседневная речь; из неё выросли итальянский, испанский, французский, португальский, румынский…' },
            ],
            [
              { en: 'Church & Medieval Latin', de: 'Kirchen- & Mittellatein', ru: 'Церковная и средневековая латынь' },
              { en: '~400 – 1500', de: 'ca. 400 – 1500', ru: '~400 – 1500' },
              { en: 'Liturgy, Vulgate Bible, universities, law.', de: 'Liturgie, Vulgata, Universitäten, Recht.', ru: 'Литургия, Вульгата, университеты, право.' },
            ],
            [
              { en: 'Neo-Latin', de: 'Neulatein', ru: 'Новолатынь' },
              { en: '~1500 – 1700+', de: 'ca. 1500 – 1700+', ru: '~1500 – 1700+' },
              { en: 'Lingua franca of science: Newton, Linnaeus, Descartes.', de: 'Wissenschaftssprache: Newton, Linné, Descartes.', ru: 'Язык науки: Ньютон, Линней, Декарт.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'You already speak some Latin', de: 'Du sprichst schon etwas Latein', ru: 'Вы уже немного говорите на латыни' },
          body: {
            en: '- **German** borrowed early, practical words from Roman builders and traders: [[fenestra]] → *Fenster*, [[vinum]] → *Wein*.\n- **English** took a huge layer via French and directly: *pedestrian*, *manuscript*.\n- **Russian** received Latin mostly through Polish, German and scholarship: *лекция*, *республика*, *календарь*.',
            de: '- **Deutsch** übernahm früh praktische Wörter von römischen Bauleuten und Händlern: [[fenestra]] → *Fenster*, [[vinum]] → *Wein*.\n- **Englisch** bekam eine riesige Schicht über das Französische und direkt: *pedestrian*, *manuscript*.\n- **Russisch** erhielt Latein meist über Polnisch, Deutsch und die Wissenschaft: *лекция*, *республика*, *календарь*.',
            ru: '- **Немецкий** рано заимствовал практичные слова у римских строителей и торговцев: [[fenestra]] → *Fenster*, [[vinum]] → *Wein*.\n- **Английский** получил огромный пласт через французский и напрямую: *pedestrian*, *manuscript*.\n- **Русский** получал латынь в основном через польский, немецкий и науку: *лекция*, *республика*, *календарь*.',
          },
        },
        {
          kind: 'quiz',
          id: 'l1-context',
          title: { en: 'Quick check', de: 'Kurzer Check', ru: 'Быстрая проверка' },
          questions: [
            {
              prompt: { en: 'Which form of Latin did French and Spanish grow out of?', de: 'Aus welcher Form des Lateins sind Französisch und Spanisch entstanden?', ru: 'Из какой формы латыни выросли французский и испанский?' },
              options: [
                { en: 'Classical Latin of Cicero', de: 'Klassisches Latein Ciceros', ru: 'Классическая латынь Цицерона' },
                { en: 'Vulgar (spoken) Latin', de: 'Vulgärlatein (gesprochen)', ru: 'Вульгарная (разговорная) латынь' },
                { en: 'Church Latin', de: 'Kirchenlatein', ru: 'Церковная латынь' },
              ],
              answer: 1,
              explain: { en: 'Romance languages descend from everyday speech, not from the literary norm.', de: 'Die romanischen Sprachen stammen von der Alltagssprache ab, nicht von der Literaturnorm.', ru: 'Романские языки произошли от повседневной речи, а не от литературной нормы.' },
            },
            {
              prompt: { en: 'Roughly until when was Latin the main language of European science?', de: 'Bis wann etwa war Latein die Hauptsprache der europäischen Wissenschaft?', ru: 'Примерно до какого времени латынь была главным языком европейской науки?' },
              options: ['~AD 500', '~1700', '~1900'],
              answer: 1,
              explain: { en: 'Newton’s *Principia* (1687) is in Latin; vernaculars took over during the 18th century.', de: 'Newtons *Principia* (1687) ist lateinisch; im 18. Jh. setzten sich die Volkssprachen durch.', ru: '«Начала» Ньютона (1687) написаны на латыни; в XVIII веке её вытеснили национальные языки.' },
            },
            {
              prompt: { en: 'German *Wein* and *Fenster* came from Latin…', de: 'Deutsch *Wein* und *Fenster* kamen aus dem Lateinischen…', ru: 'Немецкие *Wein* и *Fenster* пришли из латыни…' },
              options: [
                { en: 'via Roman trade and building, very early', de: 'über römischen Handel und Bau, sehr früh', ru: 'через римскую торговлю и строительство, очень рано' },
                { en: 'via medieval universities', de: 'über mittelalterliche Universitäten', ru: 'через средневековые университеты' },
                { en: 'via French in the 18th century', de: 'über das Französische im 18. Jh.', ru: 'через французский в XVIII веке' },
              ],
              answer: 0,
            },
          ],
        },
      ],
    },
    {
      minutes: 20,
      title: { en: 'Pronunciation: classical vs ecclesiastical', de: 'Aussprache: klassisch vs. kirchlich', ru: 'Произношение: классическое и церковное' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'There are two living traditions. **Classical** (restored) pronunciation is how Cicero spoke — use it for mottos, quotes and grammar. **Ecclesiastical** (Italianate) pronunciation is how Latin is sung and prayed today — you will switch to it in sessions 6–7. Use the toggle in the top bar to choose which one the 🔊 buttons use.',
            de: 'Es gibt zwei lebendige Traditionen. Die **klassische** (rekonstruierte) Aussprache ist die Ciceros — für Mottos, Zitate und Grammatik. Die **kirchliche** (italienisch geprägte) Aussprache ist die, mit der heute gesungen und gebetet wird — dazu wechselst du in den Einheiten 6–7. Mit dem Umschalter oben wählst du, welche Aussprache die 🔊-Knöpfe nutzen.',
            ru: 'Существуют две живые традиции. **Классическое** (реконструированное) произношение — так говорил Цицерон; его используем для девизов, цитат и грамматики. **Церковное** (итальянизированное) — так латынь поют и читают в молитвах сегодня; на него перейдём в занятиях 6–7. Переключатель в верхней панели выбирает, какое произношение используют кнопки 🔊.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Letter(s)', de: 'Buchstabe(n)', ru: 'Буква(ы)' },
            { en: 'Classical', de: 'Klassisch', ru: 'Классическое' },
            { en: 'Ecclesiastical', de: 'Kirchlich', ru: 'Церковное' },
            { en: 'Example', de: 'Beispiel', ru: 'Пример' },
          ],
          latinCols: [3],
          rows: [
            ['c', { en: 'always **k**', de: 'immer **k**', ru: 'всегда **к**' }, { en: '**ch** before e, i, ae, oe', de: '**tsch** vor e, i, ae, oe', ru: '**ч** перед e, i, ae, oe' }, 'Cicero'],
            ['g', { en: 'always hard **g**', de: 'immer hartes **g**', ru: 'всегда твёрдое **г**' }, { en: '**dzh** before e, i', de: '**dsch** vor e, i', ru: '**дж** перед e, i' }, 'regina'],
            ['v', { en: '**w** (as in *wine*)', de: '**w** wie engl. *wine* (u-artig)', ru: '**у̯** (как англ. *w*)' }, { en: '**v**', de: '**w** (dt.)', ru: '**в**' }, 'veni vidi vici'],
            ['ae', { en: '**ai** (as in *eye*)', de: '**ai** wie in *Mai*', ru: '**ай**' }, { en: '**e**', de: '**e**', ru: '**э**' }, 'Caesar'],
            ['oe', { en: '**oi** (as in *boy*)', de: '**eu/oi** wie in *Heu*', ru: '**ой**' }, { en: '**e**', de: '**e**', ru: '**э**' }, 'poena'],
            ['i + vowel', { en: 'consonant **y**', de: 'Konsonant **j**', ru: 'согласный **й**' }, { en: 'consonant **y**', de: 'Konsonant **j**', ru: 'согласный **й**' }, 'Iulius'],
            ['ti + vowel', { en: '**ti**', de: '**ti**', ru: '**ти**' }, { en: '**tsi**', de: '**zi**', ru: '**ци**' }, 'gratia'],
            ['qu', { en: '**kw**', de: '**kw** (wie *Quelle*)', ru: '**кв**' }, { en: '**kw**', de: '**kw**', ru: '**кв**' }, 'aqua'],
            ['h', { en: 'light **h**', de: 'leichtes **h**', ru: 'лёгкое **х**' }, { en: 'silent', de: 'stumm', ru: 'не произносится' }, 'homo'],
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Vowel length matters', de: 'Vokallänge zählt', ru: 'Долгота гласных важна' },
          body: {
            en: 'Textbooks mark long vowels with a macron: [[ā ē ī ō ū]]. A long vowel simply lasts about twice as long. Sometimes it changes meaning: [[rosa]] (a rose, subject) vs [[rosā]] (with a rose). Romans themselves did not write macrons — they are a learner’s aid.',
            de: 'Lehrbücher markieren lange Vokale mit einem Makron: [[ā ē ī ō ū]]. Ein langer Vokal dauert etwa doppelt so lang — wie im Deutschen *Staat* vs. *Stadt*. Manchmal ändert das die Bedeutung: [[rosa]] (die Rose, Subjekt) vs. [[rosā]] (mit der Rose). Die Römer selbst schrieben keine Makrons — sie sind eine Lernhilfe.',
            ru: 'В учебниках долгие гласные отмечают макроном: [[ā ē ī ō ū]]. Долгий звук просто тянется примерно вдвое дольше. Иногда это меняет смысл: [[rosa]] (роза, подлежащее) и [[rosā]] (розой). Сами римляне макроны не писали — это подсказка для учащихся.',
          },
        },
        { kind: 'pronounce', samples: ['Cicero', 'Caesar', 'Veni vidi vici', 'Iulius', 'gratia plena', 'in excelsis', 'regina caeli', 'poena'] },
        {
          kind: 'quiz',
          id: 'l1-pron',
          title: { en: 'Classical or not?', de: 'Klassisch oder nicht?', ru: 'Классика или нет?' },
          questions: [
            { prompt: { en: 'Classical pronunciation of', de: 'Klassische Aussprache von', ru: 'Классическое произношение' }, la: 'Cicero', options: ['Kíkero', 'Tsítsero', 'Chíchero'], answer: 0 },
            { prompt: { en: 'Classical pronunciation of', de: 'Klassische Aussprache von', ru: 'Классическое произношение' }, la: 'Caesar', options: ['Tsézar', 'Káisar', 'Chézar'], answer: 1, explain: { en: 'German *Kaiser* preserves exactly this old sound.', de: 'Das deutsche *Kaiser* bewahrt genau diesen alten Klang.', ru: 'Немецкое *Kaiser* сохранило именно это древнее звучание.' } },
            { prompt: { en: 'Ecclesiastical pronunciation of', de: 'Kirchliche Aussprache von', ru: 'Церковное произношение' }, la: 'caelis', options: ['káilis', 'chélis', 'tsélis'], answer: 1 },
            { prompt: { en: 'In classical Latin, *v* in', de: 'Im klassischen Latein klingt *v* in', ru: 'В классической латыни *v* в слове' }, la: 'vinum', options: [{ en: 'sounds like English *w*', de: 'wie engl. *w*', ru: 'звучит как англ. *w*' }, { en: 'sounds like German *f*', de: 'wie dt. *f*', ru: 'звучит как нем. *f*' }, { en: 'sounds like English *v*', de: 'wie engl. *v*', ru: 'звучит как англ. *v*' }], answer: 0, explain: { en: 'Old Germanic borrowed it as *w*: [[vinum]] → *Wein*.', de: 'Das Germanische übernahm es als *w*: [[vinum]] → *Wein*.', ru: 'Германские языки заимствовали его как *w*: [[vinum]] → *Wein*.' } },
          ],
        },
      ],
    },
    {
      minutes: 10,
      title: { en: 'Stress rule', de: 'Betonungsregel', ru: 'Правило ударения' },
      blocks: [
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'The penultimate rule', de: 'Die Paenultima-Regel', ru: 'Правило предпоследнего слога' },
          body: {
            en: '- **Two syllables** → stress the first: [[RO-ma]], [[PA-ter]].\n- **Three or more** → look at the second-to-last syllable (the *penult*). If it is **long**, stress it: [[a-MĪ-cus]]. If it is **short**, stress the one before: [[DO-mi-nus]].\n- A syllable is long if it has a long vowel or a diphthong (ae, oe, au), **or** if its vowel is followed by two consonants: [[ma-GIS-ter]].\n- Never on the last syllable.',
            de: '- **Zweisilbig** → erste Silbe betont: [[RO-ma]], [[PA-ter]].\n- **Drei und mehr** → auf die vorletzte Silbe (*Paenultima*) schauen. Ist sie **lang**, wird sie betont: [[a-MĪ-cus]]. Ist sie **kurz**, die davor: [[DO-mi-nus]].\n- Eine Silbe ist lang, wenn sie einen langen Vokal oder Diphthong (ae, oe, au) hat **oder** ihrem Vokal zwei Konsonanten folgen: [[ma-GIS-ter]].\n- Nie auf der letzten Silbe.',
            ru: '- **Два слога** → ударение на первый: [[RO-ma]], [[PA-ter]].\n- **Три и больше** → смотрим на предпоследний слог. Если он **долгий** — ударение на него: [[a-MĪ-cus]]. Если **краткий** — на слог перед ним: [[DO-mi-nus]].\n- Слог долгий, если в нём долгая гласная или дифтонг (ae, oe, au), **или** если за гласной идут две согласные: [[ma-GIS-ter]].\n- Никогда на последний слог.',
          },
        },
        {
          kind: 'callout',
          tone: 'compare',
          body: {
            en: 'Russian stress is free and must be memorised (*мУка* vs *мукА*). Latin stress is **predictable** — once you know vowel lengths, you never guess.',
            de: 'Die russische Betonung ist frei und muss gelernt werden. Die lateinische ist **vorhersagbar** — kennt man die Vokallängen, muss man nie raten. Ähnlich fest wie im Deutschen, nur nach anderer Regel.',
            ru: 'В русском ударение свободное, его приходится запоминать (*мУка* — *мукА*). В латыни ударение **предсказуемо**: зная долготы, никогда не гадаешь.',
          },
        },
        {
          kind: 'stress',
          id: 'l1-stress',
          prompt: { en: 'Click the stressed syllable', de: 'Klicke die betonte Silbe an', ru: 'Нажмите на ударный слог' },
          words: [
            { syll: ['Ro', 'ma'], stress: 0, gloss: { en: 'Rome', de: 'Rom', ru: 'Рим' } },
            { syll: ['a', 'mī', 'cus'], stress: 1, gloss: { en: 'friend — ī is long', de: 'Freund — ī ist lang', ru: 'друг — ī долгий' } },
            { syll: ['do', 'mi', 'nus'], stress: 0, gloss: { en: 'lord — mi is short', de: 'Herr — mi ist kurz', ru: 'господин — mi краткий' } },
            { syll: ['for', 'tū', 'na'], stress: 1, gloss: { en: 'luck', de: 'Glück', ru: 'удача' } },
            { syll: ['ma', 'gis', 'ter'], stress: 1, gloss: { en: 'teacher — s+t make gis long', de: 'Lehrer — s+t machen gis lang', ru: 'учитель — s+t делают gis долгим' } },
            { syll: ['ve', 'ri', 'tās'], stress: 0, gloss: { en: 'truth', de: 'Wahrheit', ru: 'истина' } },
            { syll: ['a', 'gri', 'co', 'la'], stress: 1, gloss: { en: 'farmer', de: 'Bauer', ru: 'земледелец' } },
            { syll: ['in', 'fī', 'nī', 'tum'], stress: 2, gloss: { en: 'endless', de: 'unendlich', ru: 'бесконечное' } },
            { syll: ['pa', 'tri', 'a'], stress: 0, gloss: { en: 'fatherland — i before a vowel is short', de: 'Vaterland — i vor Vokal ist kurz', ru: 'отечество — i перед гласной краткий' } },
            { syll: ['Ci', 'ce', 'rō'], stress: 0 },
          ],
        },
      ],
    },
    {
      minutes: 15,
      title: { en: 'Linney, lessons 1–3', de: 'Linney, Lektionen 1–3', ru: 'Линни, уроки 1–3' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Work through **lessons 1–3** of William Linney’s *Getting Started with Latin*. Every lesson has a free audio/video walkthrough — listen first, then read the lesson, then do the exercises aloud using the rules above. Write your answers below so you can compare with the key.',
            de: 'Arbeite die **Lektionen 1–3** von William Linneys *Getting Started with Latin* durch. Zu jeder Lektion gibt es eine kostenlose Audio-/Videoerklärung — erst anhören, dann lesen, dann die Übungen laut mit den Regeln oben lösen. Notiere die Antworten unten, um sie mit dem Schlüssel zu vergleichen.',
            ru: 'Пройдите **уроки 1–3** учебника Уильяма Линни *Getting Started with Latin*. К каждому уроку есть бесплатный аудио-/видеоразбор: сначала послушайте, затем прочитайте урок, потом выполните упражнения вслух по правилам выше. Ответы запишите ниже, чтобы сверить с ключом.',
          },
        },
        {
          kind: 'links',
          items: [
            { label: 'gettingstartedwithlatin.com', url: 'https://www.gettingstartedwithlatin.com/', note: { en: 'free audio & video for every lesson', de: 'kostenloses Audio & Video zu jeder Lektion', ru: 'бесплатные аудио и видео к каждому уроку' } },
          ],
        },
        { kind: 'notepad', id: 'l1-linney', prompt: { en: 'My answers to Linney 1–3', de: 'Meine Antworten zu Linney 1–3', ru: 'Мои ответы к Линни 1–3' }, placeholder: { en: 'Exercise 1.1 …', de: 'Übung 1.1 …', ru: 'Упражнение 1.1 …' } },
      ],
    },
    {
      minutes: 5,
      title: { en: 'Start a “Latin in the wild” note', de: 'Notiz „Latein im Alltag“ beginnen', ru: 'Заметка «Латынь вокруг нас»' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'From today, collect Latin you meet by chance: inscriptions on buildings, university crests, mottos, product names, phrases in news articles. Write the phrase, where you saw it, and your best guess at its meaning. You will parse them in later sessions.',
            de: 'Sammle ab heute Latein, das dir zufällig begegnet: Inschriften an Gebäuden, Universitätswappen, Mottos, Produktnamen, Wendungen in Nachrichten. Notiere die Wendung, den Fundort und deine beste Vermutung zur Bedeutung. In späteren Einheiten analysierst du sie.',
            ru: 'С сегодняшнего дня собирайте латынь, которая попадается случайно: надписи на зданиях, гербы университетов, девизы, названия продуктов, фразы в новостях. Записывайте фразу, где её увидели, и свою догадку о значении. Разберём их на следующих занятиях.',
          },
        },
        { kind: 'notepad', id: 'l1-wild', prompt: { en: 'Latin in the wild', de: 'Latein im Alltag', ru: 'Латынь вокруг нас' }, placeholder: { en: 'phrase — where — my guess', de: 'Wendung — Fundort — meine Vermutung', ru: 'фраза — где — моя догадка' } },
      ],
    },
    {
      minutes: 0,
      title: { en: 'Practice: 20 everyday phrases', de: 'Übung: 20 Alltagswendungen', ru: 'Практика: 20 расхожих фраз' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Read each phrase aloud with correct stress, say the **literal** meaning, then reveal. Literal first — the idiomatic meaning usually follows by itself.',
            de: 'Lies jede Wendung mit richtiger Betonung laut, nenne die **wörtliche** Bedeutung, dann aufdecken. Erst wörtlich — die idiomatische Bedeutung ergibt sich meist von selbst.',
            ru: 'Прочитайте каждую фразу вслух с правильным ударением, назовите **буквальный** смысл и откройте ответ. Сначала буквально — идиоматическое значение обычно вытекает само.',
          },
        },
        {
          kind: 'phrases',
          id: 'l1-phrases',
          items: [
            { la: 'et cetera', lit: { en: 'and the other (things)', de: 'und das Übrige', ru: 'и прочее (остальное)' } },
            { la: 'per se', lit: { en: 'through itself', de: 'durch sich (selbst)', ru: 'через себя, само по себе' } },
            { la: 'alma mater', lit: { en: 'nourishing mother', de: 'nährende Mutter', ru: 'кормящая мать' }, note: { en: 'your university', de: 'die eigene Universität', ru: 'родной университет' } },
            { la: 'ad hoc', lit: { en: 'for this', de: 'hierfür, zu diesem (Zweck)', ru: 'для этого' } },
            { la: 'status quo', lit: { en: 'the state in which (things are)', de: 'der Zustand, in dem (die Dinge sind)', ru: 'положение, в котором (находятся дела)' } },
            { la: 'vice versa', lit: { en: 'the position being turned', de: 'mit umgekehrter Stellung', ru: 'при обращённой смене (мест)' }, note: { en: '[[vice]] = by turn/change, [[versa]] = turned', de: '[[vice]] = im Wechsel, [[versa]] = gewendet', ru: '[[vice]] — сменой, [[versa]] — обращённой' } },
            { la: 'bona fide', lit: { en: 'with good faith', de: 'mit gutem Glauben', ru: 'с доброй верой' } },
            { la: 'curriculum vitae', lit: { en: 'the (race)course of life', de: 'der Lauf des Lebens', ru: 'бег (ход) жизни' } },
            { la: 'ad infinitum', lit: { en: 'to the infinite', de: 'bis ins Unendliche', ru: 'до бесконечности' } },
            { la: 'a priori', lit: { en: 'from the earlier', de: 'vom Früheren her', ru: 'из предшествующего' } },
            { la: 'de facto', lit: { en: 'from the fact', de: 'aus der Tatsache', ru: 'исходя из факта' }, note: { en: 'vs [[de iure]] — from the law', de: 'vgl. [[de iure]] — aus dem Recht', ru: 'ср. [[de iure]] — по праву' } },
            { la: 'ex libris', lit: { en: 'from the books (of …)', de: 'aus den Büchern (von …)', ru: 'из книг (такого-то)' } },
            { la: 'in situ', lit: { en: 'in (its) place', de: 'an (seinem) Ort', ru: 'на (своём) месте' } },
            { la: 'magnum opus', lit: { en: 'great work', de: 'großes Werk', ru: 'великий труд' } },
            { la: 'modus operandi', lit: { en: 'way of operating', de: 'Art des Vorgehens', ru: 'способ действования' } },
            { la: 'non sequitur', lit: { en: 'it does not follow', de: 'es folgt nicht', ru: 'не следует' } },
            { la: 'quid pro quo', lit: { en: 'something for something', de: 'etwas für etwas', ru: 'что-то за что-то' } },
            { la: 'terra incognita', lit: { en: 'unknown land', de: 'unbekanntes Land', ru: 'неизвестная земля' } },
            { la: 'verbatim', lit: { en: 'word for word', de: 'Wort für Wort', ru: 'слово в слово' }, note: { en: 'medieval adverb from [[verbum]] (word)', de: 'mittelalterliches Adverb von [[verbum]] (Wort)', ru: 'средневековое наречие от [[verbum]] (слово)' } },
            { la: 'via', lit: { en: 'by the road (of)', de: 'auf dem Weg (über)', ru: 'дорогой, путём (через)' } },
          ],
        },
        {
          kind: 'match',
          id: 'l1-match',
          prompt: { en: 'Match phrase to literal meaning', de: 'Ordne die wörtliche Bedeutung zu', ru: 'Сопоставьте с буквальным значением' },
          pairs: [
            { left: 'alma mater', right: { en: 'nourishing mother', de: 'nährende Mutter', ru: 'кормящая мать' } },
            { left: 'quid pro quo', right: { en: 'something for something', de: 'etwas für etwas', ru: 'что-то за что-то' } },
            { left: 'terra incognita', right: { en: 'unknown land', de: 'unbekanntes Land', ru: 'неизвестная земля' } },
            { left: 'non sequitur', right: { en: 'it does not follow', de: 'es folgt nicht', ru: 'не следует' } },
            { left: 'a priori', right: { en: 'from the earlier', de: 'vom Früheren her', ru: 'из предшествующего' } },
            { left: 'in situ', right: { en: 'in place', de: 'an Ort und Stelle', ru: 'на месте' } },
          ],
        },
        {
          kind: 'flashcards',
          id: 'l1-cards',
          title: { en: 'Words hidden in the phrases', de: 'Wörter in den Wendungen', ru: 'Слова внутри фраз' },
          cards: [
            { la: 'mater', back: { en: 'mother', de: 'Mutter', ru: 'мать' } },
            { la: 'terra', back: { en: 'earth, land', de: 'Erde, Land', ru: 'земля' } },
            { la: 'opus', back: { en: 'work', de: 'Werk', ru: 'труд, произведение' } },
            { la: 'magnus', back: { en: 'great, big', de: 'groß', ru: 'большой, великий' } },
            { la: 'bonus', back: { en: 'good', de: 'gut', ru: 'хороший, добрый' } },
            { la: 'vita', back: { en: 'life', de: 'Leben', ru: 'жизнь' } },
            { la: 'verbum', back: { en: 'word', de: 'Wort', ru: 'слово' } },
            { la: 'liber', back: { en: 'book', de: 'Buch', ru: 'книга' } },
            { la: 'via', back: { en: 'road, way', de: 'Weg, Straße', ru: 'дорога, путь' } },
            { la: 'fides', back: { en: 'faith, trust', de: 'Glaube, Vertrauen', ru: 'вера, доверие' } },
          ],
        },
      ],
    },
  ],
  materials: [
    { label: 'William Linney — Getting Started with Latin', url: 'https://www.gettingstartedwithlatin.com/', note: { en: 'free audio/video for every lesson', de: 'kostenloses Audio/Video zu jeder Lektion', ru: 'бесплатные аудио/видео к каждому уроку' } },
    { label: 'Luke Ranieri (ScorpioMartianus) — How to pronounce Classical Latin', url: 'https://www.youtube.com/results?search_query=ScorpioMartianus+how+to+pronounce+classical+latin', note: { en: 'YouTube', de: 'YouTube', ru: 'YouTube' } },
  ],
  homework: [
    {
      en: 'Write the literal translation next to each of the 20 phrases (use the practice block above).',
      de: 'Zu jeder der 20 Wendungen die wörtliche Übersetzung notieren (Übungsblock oben).',
      ru: 'Записать буквальный перевод каждой из 20 фраз (блок практики выше).',
    },
  ],
  doneWhen: [
    {
      en: 'I can read the 20 phrases aloud with correct stress.',
      de: 'Ich kann die 20 Wendungen mit richtiger Betonung laut lesen.',
      ru: 'Могу прочитать 20 фраз вслух с правильным ударением.',
    },
    {
      en: 'I can explain each phrase literally (e.g. alma mater = “nourishing mother”).',
      de: 'Ich kann jede Wendung wörtlich erklären (z. B. alma mater = „nährende Mutter“).',
      ru: 'Могу буквально объяснить каждую фразу (например, alma mater = «кормящая мать»).',
    },
  ],
};

export default l01;
