import type { Lesson, L } from '../types';

/* Person/number labels reused in tables, fills, quizzes and matches. */
const P: Record<string, L> = {
  s1: { en: '1st sg. — I', de: '1. Sg. — ich', ru: '1-е л. ед. — я' },
  s2: { en: '2nd sg. — you', de: '2. Sg. — du', ru: '2-е л. ед. — ты' },
  s3: { en: '3rd sg. — he/she/it', de: '3. Sg. — er/sie/es', ru: '3-е л. ед. — он/она/оно' },
  p1: { en: '1st pl. — we', de: '1. Pl. — wir', ru: '1-е л. мн. — мы' },
  p2: { en: '2nd pl. — you (all)', de: '2. Pl. — ihr', ru: '2-е л. мн. — вы' },
  p3: { en: '3rd pl. — they', de: '3. Pl. — sie', ru: '3-е л. мн. — они' },
};

const PROMPT_WHO: L = { en: 'Who does it?', de: 'Wer tut es?', ru: 'Кто действует?' };

const l03: Lesson = {
  id: 3,
  date: '2026-10-09',
  title: {
    en: 'Verbs: present tense & esse',
    de: 'Verben: Präsens & esse',
    ru: 'Глаголы: настоящее время и esse',
  },
  goal: {
    en: 'Recognise who does the action from the verb ending, know “esse” (to be), and get used to verb-final word order.',
    de: 'An der Verbendung erkennen, wer handelt, „esse“ (sein) beherrschen und sich an das Verb am Satzende gewöhnen.',
    ru: 'По окончанию глагола узнавать, кто совершает действие, знать «esse» (быть) и привыкнуть к глаголу в конце предложения.',
  },
  sections: [
    /* ------------------------------------------------------------ 10' */
    {
      minutes: 10,
      title: { en: 'Review: Anki + rosa / dominus aloud', de: 'Wiederholung: Anki + rosa / dominus laut', ru: 'Повторение: Anki + rosa / dominus вслух' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'First clear today’s Anki reviews. Then decline [[rosa]] and [[dominus]] aloud once, singular then plural, without looking. Then test yourself on the mixed forms below — they are in random order on purpose.',
            de: 'Erledige zuerst die heutigen Anki-Wiederholungen. Dann dekliniere [[rosa]] und [[dominus]] einmal laut, erst Singular, dann Plural, ohne nachzusehen. Danach teste dich an den gemischten Formen unten — die Reihenfolge ist absichtlich durcheinander.',
            ru: 'Сначала пройдите сегодняшние повторения в Anki. Затем один раз вслух просклоняйте [[rosa]] и [[dominus]] — сначала единственное, потом множественное число, не подглядывая. После этого проверьте себя на смешанных формах ниже — порядок нарочно перепутан.',
          },
        },
        {
          kind: 'fill',
          id: 'l3-review-fill',
          prompt: { en: 'Mixed endings: rosa & dominus', de: 'Gemischte Endungen: rosa & dominus', ru: 'Вперемешку: окончания rosa и dominus' },
          rows: [
            { label: { en: 'rosa — Acc. sg.', de: 'rosa — Akk. Sg.', ru: 'rosa — вин. ед.' }, stem: 'ros', ending: 'am' },
            { label: { en: 'dominus — Gen. pl.', de: 'dominus — Gen. Pl.', ru: 'dominus — род. мн.' }, stem: 'domin', ending: 'ōrum' },
            { label: { en: 'rosa — Abl. sg.', de: 'rosa — Abl. Sg.', ru: 'rosa — абл. ед.' }, stem: 'ros', ending: 'ā' },
            { label: { en: 'dominus — Voc. sg.', de: 'dominus — Vok. Sg.', ru: 'dominus — зват. ед.' }, stem: 'domin', ending: 'e' },
            { label: { en: 'rosa — Gen. pl.', de: 'rosa — Gen. Pl.', ru: 'rosa — род. мн.' }, stem: 'ros', ending: 'ārum' },
            { label: { en: 'dominus — Acc. pl.', de: 'dominus — Akk. Pl.', ru: 'dominus — вин. мн.' }, stem: 'domin', ending: 'ōs' },
            { label: { en: 'dominus — Dat. sg.', de: 'dominus — Dat. Sg.', ru: 'dominus — дат. ед.' }, stem: 'domin', ending: 'ō' },
            { label: { en: 'rosa — Dat./Abl. pl.', de: 'rosa — Dat./Abl. Pl.', ru: 'rosa — дат./абл. мн.' }, stem: 'ros', ending: 'īs' },
            { label: { en: 'rosa — Acc. pl.', de: 'rosa — Akk. Pl.', ru: 'rosa — вин. мн.' }, stem: 'ros', ending: 'ās' },
            { label: { en: 'dominus — Nom. pl.', de: 'dominus — Nom. Pl.', ru: 'dominus — им. мн.' }, stem: 'domin', ending: 'ī' },
          ],
        },
        {
          kind: 'parse',
          id: 'l3-review-parse',
          prompt: { en: 'Warm-up: who gives what to whom?', de: 'Aufwärmen: Wer gibt wem was?', ru: 'Разминка: кто что кому даёт?' },
          sentences: [
            {
              words: [
                { w: 'dominō', answer: 'dat', options: ['dat', 'abl', 'nom', 'gen'], explain: { en: '-ō with a verb of giving → dative', de: '-ō bei einem Verb des Gebens → Dativ', ru: '-ō при глаголе «давать» → дательный' } },
                { w: 'puellae', answer: 'nom', options: ['gen', 'dat', 'nom'], explain: { en: 'plural subject: the verb is dant (they give)', de: 'Subjekt im Plural: das Verb ist dant (sie geben)', ru: 'подлежащее во мн. ч.: глагол dant (дают)' } },
                { w: 'rosās', answer: 'acc', options: ['acc', 'nom', 'abl'] },
                { w: 'dant', answer: 'verb', options: ['verb', 'inf', 'adv'] },
              ],
              translation: { en: 'The girls give roses to the master.', de: 'Die Mädchen geben dem Herrn Rosen.', ru: 'Девушки дарят господину розы.' },
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ 15' */
    {
      minutes: 15,
      title: { en: 'Personal endings (present tense)', de: 'Personalendungen (Präsens)', ru: 'Личные окончания (настоящее время)' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'A Latin verb carries its subject inside the ending. Six endings, the same in almost every tense you will meet:\n\n- **-ō / -m** — I\n- **-s** — you (sg.)\n- **-t** — he, she, it\n- **-mus** — we\n- **-tis** — you (pl.)\n- **-nt** — they\n\nA memory hook: **m-s-t, mus-tis-nt**.',
            de: 'Ein lateinisches Verb trägt sein Subjekt in der Endung. Sechs Endungen, in fast allen Zeiten, die dir begegnen werden, dieselben:\n\n- **-ō / -m** — ich\n- **-s** — du\n- **-t** — er, sie, es\n- **-mus** — wir\n- **-tis** — ihr\n- **-nt** — sie\n\nEselsbrücke: **m-s-t, mus-tis-nt**.',
            ru: 'Латинский глагол несёт подлежащее в своём окончании. Шесть окончаний, одинаковых почти во всех временах, которые вам встретятся:\n\n- **-ō / -m** — я\n- **-s** — ты\n- **-t** — он, она, оно\n- **-mus** — мы\n- **-tis** — вы\n- **-nt** — они\n\nДля запоминания: **m-s-t, mus-tis-nt**.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'amāre — to love (1st conjugation)', de: 'amāre — lieben (1. Konjugation)', ru: 'amāre — любить (1-е спряжение)' },
          head: [{ en: 'Person', de: 'Person', ru: 'Лицо' }, 'Latin', { en: 'English', de: 'Deutsch', ru: 'Русский' }],
          latinCols: [1],
          rows: [
            [P.s1, 'amō', { en: 'I love', de: 'ich liebe', ru: 'люблю' }],
            [P.s2, 'amās', { en: 'you love', de: 'du liebst', ru: 'любишь' }],
            [P.s3, 'amat', { en: 'he/she loves', de: 'er/sie liebt', ru: 'любит' }],
            [P.p1, 'amāmus', { en: 'we love', de: 'wir lieben', ru: 'любим' }],
            [P.p2, 'amātis', { en: 'you (all) love', de: 'ihr liebt', ru: 'любите' }],
            [P.p3, 'amant', { en: 'they love', de: 'sie lieben', ru: 'любят' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Pronoun dropped — just like Russian', de: 'Pronomen weggelassen — wie im Russischen', ru: 'Местоимение опускается — как в русском' },
          body: {
            en: 'Russian says *люблю* — the ending already means “I”. Latin does the same: [[amō]] = “I love”. A pronoun ([[ego]], [[tū]]) appears only for emphasis. German and English need the pronoun because their endings are worn down: *liebe* alone is not a sentence. Note also how close the endings are: *любим / любите / любят* ~ [[amāmus]] / [[amātis]] / [[amant]] — Russian and Latin both inherited these endings from Proto-Indo-European.',
            de: 'Russisch sagt *люблю* — die Endung bedeutet schon „ich“. Latein ebenso: [[amō]] = „ich liebe“. Ein Pronomen ([[ego]], [[tū]]) steht nur zur Betonung. Deutsch braucht das Pronomen, weil seine Endungen abgeschliffen sind: *liebe* allein ist kein Satz. Auffällig ist auch die Nähe der Endungen: *любим / любите / любят* ~ [[amāmus]] / [[amātis]] / [[amant]] — Russisch und Latein haben sie beide aus dem Urindogermanischen geerbt.',
            ru: 'По-русски говорят *люблю* — окончание уже значит «я». В латыни так же: [[amō]] — «люблю». Местоимение ([[ego]], [[tū]]) ставят только для выделения. Немецкому и английскому местоимение необходимо, потому что их окончания стёрлись: *liebe* само по себе — не предложение. Заметьте и сходство окончаний: *любим / любите / любят* ~ [[amāmus]] / [[amātis]] / [[amant]] — и русский, и латынь унаследовали их из праиндоевропейского.',
          },
        },
        {
          kind: 'fill',
          id: 'l3-fill-amare',
          prompt: { en: 'Conjugate amāre in the present', de: 'Konjugiere amāre im Präsens', ru: 'Проспрягайте amāre в настоящем времени' },
          title: 'amō, amāre',
          rows: [
            { label: P.s1, stem: 'am', ending: 'ō' },
            { label: P.s2, stem: 'am', ending: 'ās' },
            { label: P.s3, stem: 'am', ending: 'at' },
            { label: P.p1, stem: 'am', ending: 'āmus' },
            { label: P.p2, stem: 'am', ending: 'ātis' },
            { label: P.p3, stem: 'am', ending: 'ant' },
          ],
        },
        {
          kind: 'match',
          id: 'l3-match-endings',
          prompt: { en: 'Match ending to person', de: 'Ordne die Endung der Person zu', ru: 'Сопоставьте окончание и лицо' },
          pairs: [
            { left: '-ō / -m', right: P.s1 },
            { left: '-s', right: P.s2 },
            { left: '-t', right: P.s3 },
            { left: '-mus', right: P.p1 },
            { left: '-tis', right: P.p2 },
            { left: '-nt', right: P.p3 },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ 10' */
    {
      minutes: 10,
      title: { en: 'esse — to be', de: 'esse — sein', ru: 'esse — быть' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'The most frequent verb in Latin is irregular — as in every European language. The endings are still the familiar ones (**-m, -s, -t, -mus, -tis, -nt**); only the stem jumps between **s-** and **es-**.',
            de: 'Das häufigste Verb des Lateinischen ist unregelmäßig — wie in jeder europäischen Sprache. Die Endungen sind trotzdem die bekannten (**-m, -s, -t, -mus, -tis, -nt**); nur der Stamm springt zwischen **s-** und **es-**.',
            ru: 'Самый частотный глагол латыни неправильный — как и во всех европейских языках. Окончания при этом знакомые (**-m, -s, -t, -mus, -tis, -nt**); скачет только основа: то **s-**, то **es-**.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'esse in three languages', de: 'esse in drei Sprachen', ru: 'esse в трёх языках' },
          head: [{ en: 'Person', de: 'Person', ru: 'Лицо' }, 'Latin', 'Deutsch', { en: 'Old Russian / Church Slavonic', de: 'Altrussisch / Kirchenslawisch', ru: 'Древнерусский / церковнославянский' }],
          latinCols: [1],
          rows: [
            [P.s1, 'sum', 'ich bin', 'есмь'],
            [P.s2, 'es', 'du bist', 'еси'],
            [P.s3, 'est', 'er/sie/es ist', 'есть'],
            [P.p1, 'sumus', 'wir sind', 'есмы'],
            [P.p2, 'estis', 'ihr seid', 'есте'],
            [P.p3, 'sunt', 'sie sind', 'суть'],
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Same family', de: 'Dieselbe Familie', ru: 'Одна семья' },
          body: {
            en: '- [[est]] ~ German *ist* ~ Russian *есть*; [[sunt]] ~ *sind* ~ *суть*. Russian still uses *суть* (“the essence”, *суть дела*) and *есть* (“there is”) — fossils of the old present of *быть*.\n- *Отче наш, иже еси на небесех* — [[es]] and *еси* are the same form, “you are”.\n- Latin, like German, says the copula out loud: [[Rōma in Italiā est]] = *Rom ist in Italien*. Modern Russian drops it: *Рим — в Италии*.',
            de: '- [[est]] ~ dt. *ist* ~ russ. *есть*; [[sunt]] ~ *sind* ~ *суть*. Im Russischen leben *суть* („das Wesen“) und *есть* („es gibt“) als Fossilien des alten Präsens von *быть* weiter.\n- Im kirchenslawischen Vaterunser *иже еси на небесех* („der du bist im Himmel“) entspricht *еси* genau [[es]], „du bist“.\n- Latein spricht die Kopula wie das Deutsche aus: [[Rōma in Italiā est]] = *Rom ist in Italien*. Das heutige Russisch lässt sie weg: *Рим — в Италии*.',
            ru: '- [[est]] ~ нем. *ist* ~ *есть*; [[sunt]] ~ *sind* ~ *суть*. В русском *суть* («суть дела») и *есть* («имеется») — окаменелости древнего настоящего времени глагола *быть*.\n- *Отче наш, иже еси на небесех* — [[es]] и *еси* одна и та же форма: «ты есть».\n- Латынь, как и немецкий, произносит связку: [[Rōma in Italiā est]] = *Rom ist in Italien*. Современный русский её опускает: *Рим — в Италии*.',
          },
        },
        {
          kind: 'fill',
          id: 'l3-fill-esse',
          prompt: { en: 'Conjugate esse in the present', de: 'Konjugiere esse im Präsens', ru: 'Проспрягайте esse в настоящем времени' },
          title: 'sum, esse',
          rows: [
            { label: P.s1, stem: 's', ending: 'um' },
            { label: P.s2, stem: 'e', ending: 's' },
            { label: P.s3, stem: 'es', ending: 't' },
            { label: P.p1, stem: 's', ending: 'umus' },
            { label: P.p2, stem: 'es', ending: 'tis' },
            { label: P.p3, stem: 's', ending: 'unt' },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ 5' */
    {
      minutes: 5,
      title: { en: 'The four conjugations (recognition only)', de: 'Die vier Konjugationen (nur erkennen)', ru: 'Четыре спряжения (только узнавать)' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Verbs fall into four families by the vowel before the infinitive ending **-re**. Don’t learn the tables — just notice that the personal endings are identical everywhere; only the connecting vowel changes.',
            de: 'Verben bilden vier Familien, je nach Vokal vor der Infinitivendung **-re**. Lerne die Tabellen nicht — achte nur darauf, dass die Personalendungen überall gleich sind; nur der Bindevokal wechselt.',
            ru: 'Глаголы делятся на четыре семейства по гласной перед окончанием инфинитива **-re**. Таблицы не учите — просто заметьте, что личные окончания везде одинаковы; меняется только соединительная гласная.',
          },
        },
        {
          kind: 'table',
          head: [{ en: 'Person', de: 'Person', ru: 'Лицо' }, '1: amāre', '2: habēre', '3: dūcere', '4: audīre'],
          latinCols: [1, 2, 3, 4],
          rows: [
            [{ en: 'meaning', de: 'Bedeutung', ru: 'значение' }, { en: 'love', de: 'lieben', ru: 'любить' }, { en: 'have, hold', de: 'haben, halten', ru: 'иметь, держать' }, { en: 'lead', de: 'führen', ru: 'вести' }, { en: 'hear', de: 'hören', ru: 'слышать' }],
            [P.s1, 'amō', 'habeō', 'dūcō', 'audiō'],
            [P.s2, 'amās', 'habēs', 'dūcis', 'audīs'],
            [P.s3, 'amat', 'habet', 'dūcit', 'audit'],
            [P.p1, 'amāmus', 'habēmus', 'dūcimus', 'audīmus'],
            [P.p2, 'amātis', 'habētis', 'dūcitis', 'audītis'],
            [P.p3, 'amant', 'habent', 'dūcunt', 'audiunt'],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Words you already know', de: 'Wörter, die du schon kennst', ru: 'Слова, которые вы уже знаете' },
          body: {
            en: '- [[amāre]] → *amateur*, French *amour*\n- [[habēre]] → *habit*, *exhibit*\n- [[dūcere]] → *Duce*, *produce*, *aqueduct*\n- [[audīre]] → *audio*, *audience*, *auditorium*',
            de: '- [[amāre]] → *Amateur*, frz. *amour*\n- [[habēre]] → engl. *habit*, *Habitus*\n- [[dūcere]] → *Duce*, *produzieren*, *Produkt*, *Viadukt*\n- [[audīre]] → *Audio*, *Audienz*, *Auditorium*',
            ru: '- [[amāre]] → *амурный*, франц. *amour*, *аматёр* (любитель)\n- [[habēre]] → *габитус*, англ. *habit*\n- [[dūcere]] → *продукт*, *акведук*, *дуче*\n- [[audīre]] → *аудио*, *аудиенция*, *аудитория*',
          },
        },
      ],
    },
    /* ------------------------------------------------------------ 5' */
    {
      minutes: 5,
      title: { en: 'Word order: the verb goes last', de: 'Wortstellung: das Verb steht am Ende', ru: 'Порядок слов: глагол в конце' },
      blocks: [
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Like a German subordinate clause', de: 'Wie ein deutscher Nebensatz', ru: 'Как немецкое придаточное' },
          body: {
            en: 'Latin prose likes the verb at the end: [[nauta puellae rosam dat]]. German does exactly this in subordinate clauses: *…, weil der Seemann dem Mädchen eine Rose **gibt***. Read to the end before deciding what happens — and trust the endings, not the position. [[Rosam nauta puellae dat]] still means the sailor gives the girl a rose; moving a word to the front only adds emphasis (“it’s a *rose* the sailor gives…”). Russian works the same way: *Розу моряк девушке дарит*.',
            de: 'Lateinische Prosa stellt das Verb gern ans Ende: [[nauta puellae rosam dat]]. Genau so macht es der deutsche Nebensatz: *…, weil der Seemann dem Mädchen eine Rose **gibt***. Lies bis zum Ende, bevor du entscheidest, was passiert — und vertraue den Endungen, nicht der Stellung. [[Rosam nauta puellae dat]] heißt immer noch, dass der Seemann dem Mädchen eine Rose gibt; ein vorangestelltes Wort wird nur betont („eine *Rose* gibt der Seemann…“). Im Russischen ebenso: *Розу моряк девушке дарит*.',
            ru: 'Латинская проза любит ставить глагол в конец: [[nauta puellae rosam dat]]. Ровно так поступает немецкое придаточное: *…, weil der Seemann dem Mädchen eine Rose **gibt***. Дочитывайте до конца, прежде чем решать, что происходит, — и доверяйте окончаниям, а не позиции. [[Rosam nauta puellae dat]] по-прежнему значит, что моряк дарит девушке розу; вынесенное вперёд слово лишь выделяется. В русском так же: *Розу моряк девушке дарит*.',
          },
        },
        {
          kind: 'quiz',
          id: 'l3-order',
          title: { en: 'Endings beat position', de: 'Endungen schlagen Stellung', ru: 'Окончания важнее позиции' },
          questions: [
            {
              prompt: { en: 'Who gives?', de: 'Wer gibt?', ru: 'Кто дарит?' },
              la: 'Puellae rosam nauta dat.',
              options: [{ en: 'the girl', de: 'das Mädchen', ru: 'девушка' }, { en: 'the sailor', de: 'der Seemann', ru: 'моряк' }, { en: 'the girls', de: 'die Mädchen', ru: 'девушки' }],
              answer: 1,
              explain: { en: '[[nauta]] is the only nominative singular, and [[dat]] is singular. [[puellae]] is the recipient.', de: '[[nauta]] ist der einzige Nominativ Singular, und [[dat]] steht im Singular. [[puellae]] ist der Empfänger.', ru: '[[nauta]] — единственный именительный ед. ч., и [[dat]] — в ед. ч. [[puellae]] — получатель.' },
            },
            {
              prompt: { en: 'Who loves whom?', de: 'Wer liebt wen?', ru: 'Кто кого любит?' },
              la: 'Dominum puella amat.',
              options: [{ en: 'the master loves the girl', de: 'der Herr liebt das Mädchen', ru: 'господин любит девушку' }, { en: 'the girl loves the master', de: 'das Mädchen liebt den Herrn', ru: 'девушка любит господина' }],
              answer: 1,
              explain: { en: '[[dominum]] has **-m** → object, even though it comes first.', de: '[[dominum]] hat **-m** → Objekt, obwohl es vorne steht.', ru: 'У [[dominum]] окончание **-m** → дополнение, хоть и стоит первым.' },
            },
            {
              prompt: { en: 'Who loves?', de: 'Wer liebt?', ru: 'Кто любит?' },
              la: 'Nautae puellās amant.',
              options: [{ en: 'the sailors', de: 'die Seeleute', ru: 'моряки' }, { en: 'the girls', de: 'die Mädchen', ru: 'девушки' }, { en: 'the sailor', de: 'der Seemann', ru: 'моряк' }],
              answer: 0,
              explain: { en: '[[amant]] = they love → plural subject. [[puellās]] is accusative plural, so the subject must be [[nautae]] (nom. pl.).', de: '[[amant]] = sie lieben → Subjekt im Plural. [[puellās]] ist Akkusativ Plural, also ist [[nautae]] (Nom. Pl.) das Subjekt.', ru: '[[amant]] — «любят» → подлежащее во мн. ч. [[puellās]] — винительный мн., значит подлежащее [[nautae]] (им. мн.).' },
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ 15' */
    {
      minutes: 15,
      title: { en: 'Sayings', de: 'Sprüche', ru: 'Изречения' },
      blocks: [
        {
          kind: 'interlinear',
          id: 'l3-sayings',
          title: { en: 'Three famous sayings', de: 'Drei berühmte Sprüche', ru: 'Три знаменитых изречения' },
          lines: [
            {
              la: 'Errāre hūmānum est.',
              tr: { en: 'To err is human.', de: 'Irren ist menschlich.', ru: 'Человеку свойственно ошибаться (букв.: ошибаться — человеческое есть).' },
              words: [
                { w: 'Errāre', g: { en: 'to err, to wander — infinitive (1st conj.)', de: 'irren, umherirren — Infinitiv (1. Konj.)', ru: 'ошибаться, блуждать — инфинитив (1-е спр.)' } },
                { w: 'hūmānum', g: { en: 'human — adjective, neuter nom. sg.', de: 'menschlich — Adjektiv, Neutrum Nom. Sg.', ru: 'человеческое — прилагательное, ср. р. им. ед.' } },
                { w: 'est', g: { en: 'is', de: 'ist', ru: 'есть' } },
              ],
              note: {
                en: 'The **infinitive is the subject** — a verb used as a noun, like German *Irren ist menschlich*. An infinitive counts as neuter, so the adjective is neuter: [[hūmānum]]. The proverb is post-classical; the thought goes back to antiquity (Cicero: *cuiusvis hominis est errare*).',
                de: 'Der **Infinitiv ist das Subjekt** — ein substantiviertes Verb wie im Deutschen *Irren ist menschlich*. Ein Infinitiv gilt als Neutrum, daher das neutrale Adjektiv [[hūmānum]]. Der Spruch selbst ist nachklassisch, der Gedanke antik (Cicero: *cuiusvis hominis est errare*).',
                ru: '**Подлежащее — инфинитив**: глагол в роли существительного, как немецкое *Irren ist menschlich*. Инфинитив считается словом среднего рода, поэтому и прилагательное среднего рода: [[hūmānum]]. Само изречение послеклассическое, а мысль античная (Цицерон: *cuiusvis hominis est errare*).',
              },
            },
            {
              la: 'Dum spīrō, spērō.',
              tr: { en: 'While I breathe, I hope.', de: 'Solange ich atme, hoffe ich.', ru: 'Пока дышу — надеюсь.' },
              words: [
                { w: 'Dum', g: { en: 'while', de: 'solange, während', ru: 'пока' } },
                { w: 'spīrō', g: { en: 'I breathe — 1st sg. of spīrāre', de: 'ich atme — 1. Sg. von spīrāre', ru: 'дышу — 1-е л. ед. от spīrāre' } },
                { w: 'spērō', g: { en: 'I hope — 1st sg. of spērāre', de: 'ich hoffe — 1. Sg. von spērāre', ru: 'надеюсь — 1-е л. ед. от spērāre' } },
              ],
              note: {
                en: 'Two verbs, no pronoun — the **-ō** says “I” twice. Note the wordplay: [[spīrō]] / [[spērō]] differ by one vowel. State motto of South Carolina. Cf. *inspiration*, *respiration*, *Spiritus*.',
                de: 'Zwei Verben, kein Pronomen — das **-ō** sagt zweimal „ich“. Achte auf das Wortspiel: [[spīrō]] / [[spērō]] unterscheiden sich in einem Vokal. Wahlspruch des US-Bundesstaats South Carolina. Vgl. *Inspiration*, *Respiration*, *Spiritus*.',
                ru: 'Два глагола и ни одного местоимения — **-ō** дважды говорит «я». Обратите внимание на игру слов: [[spīrō]] / [[spērō]] различаются одной гласной. Девиз штата Южная Каролина. Ср. *инспирация*, *респиратор*, *спирт* (от *spiritus*).',
              },
            },
            {
              la: 'Vēnī, vīdī, vīcī.',
              tr: { en: 'I came, I saw, I conquered.', de: 'Ich kam, ich sah, ich siegte.', ru: 'Пришёл, увидел, победил.' },
              words: [
                { w: 'Vēnī', g: { en: 'I came — perfect of venīre', de: 'ich kam — Perfekt von venīre', ru: 'пришёл — перфект от venīre' } },
                { w: 'vīdī', g: { en: 'I saw — perfect of vidēre', de: 'ich sah — Perfekt von vidēre', ru: 'увидел — перфект от vidēre' } },
                { w: 'vīcī', g: { en: 'I conquered — perfect of vincere', de: 'ich siegte — Perfekt von vincere', ru: 'победил — перфект от vincere' } },
              ],
              note: {
                en: '**Preview of the perfect tense**: the ending **-ī** = “I did”. Caesar’s report on his quick victory at Zela (47 BC), as told by Suetonius and Plutarch. Three verbs, three alliterating *v*’s, no pronoun.',
                de: '**Vorschau aufs Perfekt**: die Endung **-ī** = „ich habe getan“. Caesars Meldung über seinen schnellen Sieg bei Zela (47 v. Chr.), überliefert von Sueton und Plutarch. Drei Verben, dreimal alliterierendes *v*, kein Pronomen.',
                ru: '**Анонс перфекта**: окончание **-ī** = «я сделал». Донесение Цезаря о быстрой победе при Зеле (47 г. до н. э.), известное по Светонию и Плутарху. Три глагола, тройная аллитерация на *v*, ни одного местоимения.',
              },
            },
          ],
        },
        {
          kind: 'parse',
          id: 'l3-parse-sayings',
          prompt: { en: 'Tag each word', de: 'Bestimme jedes Wort', ru: 'Определите каждое слово' },
          sentences: [
            {
              words: [
                { w: 'Errāre', answer: 'inf', options: ['verb', 'inf', 'imp', 'nom'], explain: { en: '-re = infinitive, here the subject', de: '-re = Infinitiv, hier Subjekt', ru: '-re = инфинитив, здесь подлежащее' } },
                { w: 'hūmānum', answer: 'adj', options: ['acc', 'adj', 'adv'] },
                { w: 'est', answer: 'verb', options: ['verb', 'inf', 'conj'] },
              ],
              translation: { en: 'To err is human.', de: 'Irren ist menschlich.', ru: 'Человеку свойственно ошибаться.' },
            },
            {
              words: [
                { w: 'Dum', answer: 'conj', options: ['conj', 'prep', 'adv'] },
                { w: 'spīrō', answer: 'verb', options: ['verb', 'dat', 'abl'], explain: { en: '-ō here is “I”, not a dative!', de: '-ō ist hier „ich“, kein Dativ!', ru: '-ō здесь — «я», а не дательный!' } },
                { w: 'spērō', answer: 'verb', options: ['verb', 'dat', 'inf'] },
              ],
              translation: { en: 'While I breathe, I hope.', de: 'Solange ich atme, hoffe ich.', ru: 'Пока дышу — надеюсь.' },
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'l3-persons',
          title: { en: 'Who is acting? All four conjugations', de: 'Wer handelt? Alle vier Konjugationen', ru: 'Кто действует? Все четыре спряжения' },
          questions: [
            { prompt: PROMPT_WHO, la: 'habēmus', options: [P.s1, P.p1, P.p2, P.p3], answer: 1, explain: { en: '-mus = we · 2nd conj. (habēre)', de: '-mus = wir · 2. Konj. (habēre)', ru: '-mus = мы · 2-е спр. (habēre)' } },
            { prompt: PROMPT_WHO, la: 'dūcunt', options: [P.s3, P.p1, P.p3, P.p2], answer: 2, explain: { en: '-nt = they · 3rd conj. (dūcere)', de: '-nt = sie · 3. Konj. (dūcere)', ru: '-nt = они · 3-е спр. (dūcere)' } },
            { prompt: PROMPT_WHO, la: 'audīs', options: [P.s1, P.s2, P.s3, P.p2], answer: 1, explain: { en: '-s = you (sg.) · 4th conj. (audīre)', de: '-s = du · 4. Konj. (audīre)', ru: '-s = ты · 4-е спр. (audīre)' } },
            { prompt: PROMPT_WHO, la: 'amātis', options: [P.p1, P.s2, P.p2, P.p3], answer: 2, explain: { en: '-tis = you (pl.) · 1st conj.', de: '-tis = ihr · 1. Konj.', ru: '-tis = вы · 1-е спр.' } },
            { prompt: PROMPT_WHO, la: 'dūcit', options: [P.s2, P.s3, P.p3, P.s1], answer: 1, explain: { en: '-t = he/she/it', de: '-t = er/sie/es', ru: '-t = он/она/оно' } },
            { prompt: PROMPT_WHO, la: 'audiō', options: [P.s1, P.s3, P.p1, P.p3], answer: 0, explain: { en: '-ō = I · cf. *audio*!', de: '-ō = ich · vgl. *Audio*!', ru: '-ō = я · ср. *аудио*!' } },
            { prompt: PROMPT_WHO, la: 'sumus', options: [P.p1, P.p3, P.s1, P.p2], answer: 0, explain: { en: 'esse: we are', de: 'esse: wir sind', ru: 'esse: мы есть' } },
            { prompt: PROMPT_WHO, la: 'habent', options: [P.s3, P.p2, P.p3, P.p1], answer: 2 },
            {
              prompt: { en: 'Which conjugation is', de: 'Welche Konjugation ist', ru: 'Какое это спряжение:' },
              la: 'vidēre',
              options: ['1', '2', '3', '4'],
              answer: 1,
              explain: { en: 'long **-ēre** = 2nd (like [[habēre]]); short -ere = 3rd (like [[dūcere]]).', de: 'langes **-ēre** = 2. (wie [[habēre]]); kurzes -ere = 3. (wie [[dūcere]]).', ru: 'долгое **-ēre** = 2-е (как [[habēre]]); краткое -ere = 3-е (как [[dūcere]]).' },
            },
          ],
        },
        {
          kind: 'translate',
          id: 'l3-translate',
          prompt: { en: 'Translate without a dictionary, then compare', de: 'Übersetze ohne Wörterbuch, dann vergleiche', ru: 'Переведите без словаря, затем сверьтесь' },
          items: [
            { la: 'Rōma in Italiā est.', answer: { en: 'Rome is in Italy.', de: 'Rom ist in Italien.', ru: 'Рим находится в Италии.' } },
            { la: 'Italia in Eurōpā est.', answer: { en: 'Italy is in Europe.', de: 'Italien ist in Europa.', ru: 'Италия находится в Европе.' } },
            { la: 'Gallia nōn est in Italiā.', answer: { en: 'Gaul is not in Italy.', de: 'Gallien ist nicht in Italien.', ru: 'Галлия не в Италии.' } },
            { la: 'Rōma et Italia in Eurōpā sunt.', answer: { en: 'Rome and Italy are in Europe.', de: 'Rom und Italien sind in Europa.', ru: 'Рим и Италия находятся в Европе.' } },
            { la: 'Ubi est Rōma?', answer: { en: 'Where is Rome?', de: 'Wo ist Rom?', ru: 'Где Рим?' } },
            { la: 'Nauta puellam amat, sed puella nautam nōn amat.', answer: { en: 'The sailor loves the girl, but the girl does not love the sailor.', de: 'Der Seemann liebt das Mädchen, aber das Mädchen liebt den Seemann nicht.', ru: 'Моряк любит девушку, но девушка не любит моряка.' } },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ practice */
    {
      minutes: 0,
      title: { en: 'Practice: done-when check & vocabulary', de: 'Übung: Lernziel-Check & Wortschatz', ru: 'Практика: проверка цели и слова' },
      blocks: [
        {
          kind: 'parse',
          id: 'l3-parse-roma',
          prompt: { en: 'Parse the done-when sentences', de: 'Analysiere die Lernziel-Sätze', ru: 'Разберите контрольные предложения' },
          sentences: [
            {
              words: [
                { w: 'Rōma', answer: 'nom', options: ['nom', 'abl', 'acc'] },
                { w: 'in', answer: 'prep', options: ['prep', 'conj', 'adv'] },
                { w: 'Italiā', answer: 'abl', options: ['nom', 'abl', 'acc', 'gen'], explain: { en: 'in + ablative = where', de: 'in + Ablativ = wo', ru: 'in + аблатив = где' } },
                { w: 'est', answer: 'verb', options: ['verb', 'inf', 'conj'] },
              ],
              translation: { en: 'Rome is in Italy.', de: 'Rom ist in Italien.', ru: 'Рим находится в Италии.' },
            },
            {
              words: [
                { w: 'Gallia', answer: 'nom', options: ['nom', 'abl', 'voc'] },
                { w: 'nōn', answer: 'adv', options: ['adv', 'conj', 'prep'] },
                { w: 'est', answer: 'verb', options: ['verb', 'inf', 'conj'] },
                { w: 'in', answer: 'prep', options: ['prep', 'conj', 'adv'] },
                { w: 'Italiā', answer: 'abl', options: ['nom', 'abl', 'acc'] },
              ],
              translation: { en: 'Gaul is not in Italy.', de: 'Gallien ist nicht in Italien.', ru: 'Галлия не в Италии.' },
            },
          ],
        },
        {
          kind: 'flashcards',
          id: 'l3-cards',
          title: { en: 'Verbs & little words', de: 'Verben & kleine Wörter', ru: 'Глаголы и служебные слова' },
          cards: [
            { la: 'sum, esse', back: { en: 'to be', de: 'sein', ru: 'быть' } },
            { la: 'sunt', back: { en: 'they are', de: 'sie sind', ru: 'они есть (суть)' } },
            { la: 'amō, amāre', back: { en: 'to love (1)', de: 'lieben (1)', ru: 'любить (1)' } },
            { la: 'habeō, habēre', back: { en: 'to have, hold (2)', de: 'haben, halten (2)', ru: 'иметь, держать (2)' } },
            { la: 'dūcō, dūcere', back: { en: 'to lead (3)', de: 'führen (3)', ru: 'вести (3)' } },
            { la: 'audiō, audīre', back: { en: 'to hear (4)', de: 'hören (4)', ru: 'слышать (4)' } },
            { la: 'videō, vidēre', back: { en: 'to see (2)', de: 'sehen (2)', ru: 'видеть (2)' } },
            { la: 'errō, errāre', back: { en: 'to err, wander (1)', de: 'irren, umherirren (1)', ru: 'ошибаться, блуждать (1)' } },
            { la: 'spērō, spērāre', back: { en: 'to hope (1)', de: 'hoffen (1)', ru: 'надеяться (1)' } },
            { la: 'spīrō, spīrāre', back: { en: 'to breathe (1)', de: 'atmen (1)', ru: 'дышать (1)' } },
            { la: 'nōn', back: { en: 'not', de: 'nicht', ru: 'не' } },
            { la: 'dum', back: { en: 'while', de: 'solange, während', ru: 'пока' } },
            { la: 'in + abl.', back: { en: 'in, on (where?)', de: 'in, auf (wo?)', ru: 'в, на (где?)' } },
            { la: 'et', back: { en: 'and', de: 'und', ru: 'и' } },
          ],
        },
        {
          kind: 'notepad',
          id: 'l3-orberg',
          prompt: { en: 'Homework: Familia Romana, cap. I — new words & questions', de: 'Hausaufgabe: Familia Romana, cap. I — neue Wörter & Fragen', ru: 'Домашнее задание: Familia Romana, cap. I — новые слова и вопросы' },
          placeholder: { en: 'word — my guess from context — confirmed?', de: 'Wort — meine Vermutung aus dem Kontext — bestätigt?', ru: 'слово — догадка по контексту — подтвердилась?' },
        },
      ],
    },
  ],
  materials: [
    { label: 'Hans Ørberg — Lingua Latina per se Illustrata: Familia Romana, cap. I “Imperium Romanum”', note: { en: 'entirely in Latin; meaning from context and the map; covers est/sunt and -us/-a/-um', de: 'komplett auf Latein; Bedeutung aus Kontext und Karte; behandelt est/sunt und -us/-a/-um', ru: 'целиком на латыни; смысл из контекста и карты; est/sunt и -us/-a/-um' } },
    { label: 'Luke Ranieri — Familia Romana audio (YouTube)', url: 'https://www.youtube.com/results?search_query=Luke+Ranieri+Familia+Romana+Capitulum+I', note: { en: 'free reading of each chapter', de: 'kostenlose Lesung jedes Kapitels', ru: 'бесплатное чтение каждой главы' } },
    { label: 'Legentibus', url: 'https://legentibus.com/', note: { en: 'app with audio for Latin reading', de: 'App mit Audio für lateinische Lektüre', ru: 'приложение с аудио для чтения на латыни' } },
    { label: 'Logeion', url: 'https://logeion.uchicago.edu', note: { en: 'dictionary aggregator', de: 'Wörterbuch-Aggregator', ru: 'агрегатор словарей' } },
    { label: 'Whitaker’s Words', note: { en: 'parses any form you type in', de: 'analysiert jede eingegebene Form', ru: 'разбирает любую введённую форму' } },
  ],
  homework: [
    {
      en: 'Read Familia Romana, cap. I twice: once with audio, once alone. Note new words and your guesses in the notepad.',
      de: 'Familia Romana, cap. I zweimal lesen: einmal mit Audio, einmal allein. Neue Wörter und Vermutungen im Notizblock festhalten.',
      ru: 'Прочитать Familia Romana, cap. I дважды: один раз с аудио, один раз самостоятельно. Новые слова и догадки записать в заметку.',
    },
    {
      en: 'Anki: keep up with DCC words 1–50.',
      de: 'Anki: mit den DCC-Wörtern 1–50 dranbleiben.',
      ru: 'Anki: не отставать по словам DCC 1–50.',
    },
  ],
  doneWhen: [
    {
      en: 'I can translate “Roma in Italia est. Italia in Europa est. Gallia non est in Italia.” without a dictionary.',
      de: 'Ich kann „Roma in Italia est. Italia in Europa est. Gallia non est in Italia.“ ohne Wörterbuch übersetzen.',
      ru: 'Могу без словаря перевести «Roma in Italia est. Italia in Europa est. Gallia non est in Italia.».',
    },
    {
      en: 'I can conjugate amō and sum aloud.',
      de: 'Ich kann amō und sum laut konjugieren.',
      ru: 'Могу вслух проспрягать amō и sum.',
    },
  ],
};

export default l03;
