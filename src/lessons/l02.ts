import type { Lesson, L, Tag } from '../types';

/* Case labels reused in tables, fills and quizzes. */
const C: Record<string, L> = {
  nomSg: { en: 'Nom. sg.', de: 'Nom. Sg.', ru: 'Им. ед.' },
  genSg: { en: 'Gen. sg.', de: 'Gen. Sg.', ru: 'Род. ед.' },
  datSg: { en: 'Dat. sg.', de: 'Dat. Sg.', ru: 'Дат. ед.' },
  accSg: { en: 'Acc. sg.', de: 'Akk. Sg.', ru: 'Вин. ед.' },
  ablSg: { en: 'Abl. sg.', de: 'Abl. Sg.', ru: 'Абл. ед.' },
  vocSg: { en: 'Voc. sg.', de: 'Vok. Sg.', ru: 'Зват. ед.' },
  nomPl: { en: 'Nom. pl.', de: 'Nom. Pl.', ru: 'Им. мн.' },
  genPl: { en: 'Gen. pl.', de: 'Gen. Pl.', ru: 'Род. мн.' },
  datPl: { en: 'Dat. pl.', de: 'Dat. Pl.', ru: 'Дат. мн.' },
  accPl: { en: 'Acc. pl.', de: 'Akk. Pl.', ru: 'Вин. мн.' },
  ablPl: { en: 'Abl. pl.', de: 'Abl. Pl.', ru: 'Абл. мн.' },
  vocPl: { en: 'Voc. pl.', de: 'Vok. Pl.', ru: 'Зват. мн.' },
};

const CASES: Tag[] = ['nom', 'gen', 'dat', 'acc', 'abl'];

const l02: Lesson = {
  id: 2,
  date: '2026-10-06',
  title: {
    en: 'Nouns & cases (1st–2nd declension)',
    de: 'Substantive & Kasus (1.–2. Deklination)',
    ru: 'Существительные и падежи (1-е и 2-е склонение)',
  },
  goal: {
    en: 'Understand what cases do in Latin and recognise 1st/2nd declension endings in a phrase. Recognise, don’t memorise.',
    de: 'Verstehen, was die Kasus im Lateinischen leisten, und die Endungen der 1./2. Deklination in einer Wendung wiedererkennen. Erkennen, nicht auswendig lernen.',
    ru: 'Понять, что делают падежи в латыни, и узнавать окончания 1-го и 2-го склонения во фразе. Узнавать, а не зубрить.',
  },
  sections: [
    /* ------------------------------------------------------------ 10' */
    {
      minutes: 10,
      title: { en: 'Review: session 1 phrases aloud', de: 'Wiederholung: Wendungen aus Einheit 1 laut lesen', ru: 'Повторение: фразы первого занятия вслух' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Read each phrase aloud with correct classical pronunciation and stress, say the literal meaning, then reveal. This time the notes also show something new: many of these phrases already contain **case endings** — today you learn to see them.',
            de: 'Lies jede Wendung laut mit korrekter klassischer Aussprache und Betonung, nenne die wörtliche Bedeutung, dann aufdecken. Diesmal zeigen die Notizen etwas Neues: Viele dieser Wendungen enthalten schon **Kasusendungen** — heute lernst du, sie zu sehen.',
            ru: 'Прочитайте каждую фразу вслух в классическом произношении и с правильным ударением, назовите буквальный смысл и откройте ответ. На этот раз в примечаниях есть кое-что новое: во многих фразах уже спрятаны **падежные окончания** — сегодня вы научитесь их видеть.',
          },
        },
        {
          kind: 'phrases',
          id: 'l2-review',
          title: { en: 'Session 1 phrases — now with cases', de: 'Wendungen aus Einheit 1 — jetzt mit Kasus', ru: 'Фразы первого занятия — теперь с падежами' },
          items: [
            { la: 'alma mater', lit: { en: 'nourishing mother', de: 'nährende Mutter', ru: 'кормящая мать' }, note: { en: 'both words nominative: the phrase is a subject', de: 'beide Wörter im Nominativ: die Wendung ist ein Subjekt', ru: 'оба слова в именительном: фраза — подлежащее' } },
            { la: 'terra incognita', lit: { en: 'unknown land', de: 'unbekanntes Land', ru: 'неизвестная земля' }, note: { en: 'nominative, 1st declension, adjective agrees in -a', de: 'Nominativ, 1. Deklination, Adjektiv kongruiert auf -a', ru: 'именительный, 1-е склонение, прилагательное согласовано на -a' } },
            { la: 'curriculum vitae', lit: { en: 'the course of life', de: 'der Lauf des Lebens', ru: 'бег жизни' }, note: { en: '[[vītae]] = genitive “of life” (nom. [[vīta]])', de: '[[vītae]] = Genitiv „des Lebens“ (Nom. [[vīta]])', ru: '[[vītae]] — родительный «жизни» (им. [[vīta]])' } },
            { la: 'ad infinitum', lit: { en: 'to the infinite', de: 'bis ins Unendliche', ru: 'до бесконечности' }, note: { en: '[[ad]] + accusative in -um (motion towards)', de: '[[ad]] + Akkusativ auf -um (Richtung)', ru: '[[ad]] + винительный на -um (направление)' } },
            { la: 'ex libris', lit: { en: 'from the books', de: 'aus den Büchern', ru: 'из книг' }, note: { en: '[[ex]] + ablative plural in -īs', de: '[[ex]] + Ablativ Plural auf -īs', ru: '[[ex]] + аблатив множественного числа на -īs' } },
            { la: 'in situ', lit: { en: 'in (its) place', de: 'an (seinem) Ort', ru: 'на (своём) месте' }, note: { en: '[[in]] + ablative = location (like Russian *в/на* + предложный)', de: '[[in]] + Ablativ = Ort (wie dt. *in* + Dativ)', ru: '[[in]] + аблатив — место (как *в/на* + предложный)' } },
            { la: 'de facto', lit: { en: 'from the fact', de: 'aus der Tatsache', ru: 'исходя из факта' }, note: { en: '[[dē]] + ablative in -ō (2nd declension)', de: '[[dē]] + Ablativ auf -ō (2. Deklination)', ru: '[[dē]] + аблатив на -ō (2-е склонение)' } },
            { la: 'via', lit: { en: 'by way of', de: 'auf dem Weg über', ru: 'путём, через' }, note: { en: 'really [[viā]] — ablative “by the road”', de: 'eigentlich [[viā]] — Ablativ „auf dem Weg“', ru: 'на самом деле [[viā]] — аблатив «дорогой»' } },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ 15' */
    {
      minutes: 15,
      title: { en: 'The idea of case — vs Russian and German', de: 'Die Idee des Kasus — im Vergleich mit Russisch und Deutsch', ru: 'Идея падежа — в сравнении с русским и немецким' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'In English, word order tells you who does what: *the sailor gives the girl a rose*. In Latin the **ending** does that job — so the words can stand in almost any order. Each noun form answers a question: who? whose? to whom? whom? by/with/from what? Latin has **six cases**.',
            de: 'Im Englischen verrät die Wortstellung, wer was tut. Im Lateinischen übernimmt das die **Endung** — deshalb können die Wörter fast beliebig stehen. Jede Form eines Substantivs beantwortet eine Frage: wer? wessen? wem? wen? womit/wodurch/woher? Latein hat **sechs Kasus**.',
            ru: 'В английском порядок слов показывает, кто что делает: *the sailor gives the girl a rose*. В латыни эту работу выполняет **окончание** — поэтому слова могут стоять почти в любом порядке. Каждая форма существительного отвечает на вопрос: кто? чей? кому? кого/что? чем/с кем/откуда/где? В латыни **шесть падежей**.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'The six Latin cases', de: 'Die sechs lateinischen Kasus', ru: 'Шесть латинских падежей' },
          head: [
            { en: 'Case', de: 'Kasus', ru: 'Падеж' },
            { en: 'Main job', de: 'Hauptfunktion', ru: 'Основная функция' },
            { en: 'Russian', de: 'Russisch', ru: 'Русский' },
            { en: 'German', de: 'Deutsch', ru: 'Немецкий' },
            { en: 'Example', de: 'Beispiel', ru: 'Пример' },
          ],
          latinCols: [4],
          rows: [
            [{ en: 'Nominative', de: 'Nominativ', ru: 'Номинатив' }, { en: 'subject — *who?*', de: 'Subjekt — *wer?*', ru: 'подлежащее — *кто? что?*' }, 'именительный', 'Nominativ', 'rosa'],
            [{ en: 'Genitive', de: 'Genitiv', ru: 'Генитив' }, { en: 'possession — *of*', de: 'Besitz — *wessen?*', ru: 'принадлежность — *чей? кого? чего?*' }, 'родительный', 'Genitiv', 'rosae'],
            [{ en: 'Dative', de: 'Dativ', ru: 'Датив' }, { en: 'indirect object — *to/for*', de: 'indirektes Objekt — *wem?*', ru: 'косвенное дополнение — *кому? чему?*' }, 'дательный', 'Dativ', 'rosae'],
            [{ en: 'Accusative', de: 'Akkusativ', ru: 'Аккузатив' }, { en: 'direct object; motion *to*', de: 'direktes Objekt — *wen?*; Richtung', ru: 'прямое дополнение — *кого? что?*; направление' }, 'винительный', 'Akkusativ', 'rosam'],
            [{ en: 'Ablative', de: 'Ablativ', ru: 'Аблатив' }, { en: '*by / with / from / in*', de: '*womit? wodurch? woher? wo?*', ru: '*чем? с кем? откуда? где?*' }, { en: 'творительный + предложный (+ part of родительный)', de: 'творительный + предложный (+ Teil des родительный)', ru: 'творительный + предложный (+ часть родительного)' }, { en: '— (prepositions + Dativ)', de: '— (Präpositionen + Dativ)', ru: '— (предлоги + Dativ)' }, 'rosā'],
            [{ en: 'Vocative', de: 'Vokativ', ru: 'Вокатив' }, { en: 'direct address — *O …!*', de: 'Anrede — *o …!*', ru: 'обращение — *о …!*' }, { en: 'звательный (relic: *Боже*, *Господи*)', de: 'звательный (Reste: *Боже*, *Господи*)', ru: 'звательный (остатки: *Боже*, *Господи*)' }, { en: '— (= Nominativ)', de: '— (= Nominativ)', ru: '— (= Nominativ)' }, 'domine'],
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'You already think in cases', de: 'Du denkst schon in Kasus', ru: 'Вы уже думаете падежами' },
          body: {
            en: '- **Russian** has six cases — almost the same set. *Моряк дарит девушке розу*: моряк (им.), девушке (дат.), розу (вин.). Latin does the same: [[nauta puellae rosam dat]].\n- **German** keeps four: *Der Seemann gibt dem Mädchen eine Rose.* The ending lives mostly on the article; in Latin it sits on the noun itself.\n- The odd one out is the **ablative**. Think of it as Russian *творительный* (instrument: [[rosā]] = *розой*) plus *предложный* (place: [[in Italiā]] = *в Италии*) plus “from” (separation: [[ex Italiā]] = *из Италии*).',
            de: '- **Russisch** hat sechs Fälle — fast dieselbe Ausstattung. *Моряк дарит девушке розу*: моряк (Nom.), девушке (Dat.), розу (Akk.). Latein genauso: [[nauta puellae rosam dat]].\n- **Deutsch** behält vier: *Der Seemann gibt dem Mädchen eine Rose.* Die Endung sitzt im Deutschen meist am Artikel, im Lateinischen am Substantiv selbst.\n- Der Exot ist der **Ablativ**. Im Deutschen übernehmen Präpositionen + Dativ seine Aufgaben: *mit der Rose* ([[rosā]]), *in Italien* ([[in Italiā]]), *aus Italien* ([[ex Italiā]]). Russisch hat dafür eigene Fälle: Instrumental und Präpositiv.',
            ru: '- В **русском** шесть падежей — почти тот же набор. *Моряк дарит девушке розу*: моряк (им.), девушке (дат.), розу (вин.). В латыни так же: [[nauta puellae rosam dat]].\n- В **немецком** осталось четыре: *Der Seemann gibt dem Mädchen eine Rose.* Там окончание живёт в основном на артикле, в латыни — на самом существительном.\n- Самый непривычный — **аблатив**. Представьте его как *творительный* (орудие: [[rosā]] — *розой*) плюс *предложный* (место: [[in Italiā]] — *в Италии*) плюс значение «из, от» (отделение: [[ex Italiā]] — *из Италии*).',
          },
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'No articles', de: 'Keine Artikel', ru: 'Артиклей нет' },
          body: {
            en: 'Latin has no *the* or *a*. [[rosa]] = “a rose” or “the rose” — context decides. Exactly like Russian *роза*.',
            de: 'Latein hat weder *der/die/das* noch *ein/eine*. [[rosa]] = „eine Rose“ oder „die Rose“ — der Kontext entscheidet. Genau wie im Russischen *роза*.',
            ru: 'В латыни нет артиклей. [[rosa]] — это и «a rose», и «the rose»; решает контекст. Точно как русское *роза*.',
          },
        },
        {
          kind: 'quiz',
          id: 'l2-case-idea',
          title: { en: 'Which case does the job?', de: 'Welcher Kasus erledigt das?', ru: 'Какой падеж за это отвечает?' },
          questions: [
            {
              prompt: { en: '“I give **the girl** a rose” — *the girl* is…', de: '„Ich gebe **dem Mädchen** eine Rose“ — *dem Mädchen* ist…', ru: '«Я дарю **девушке** розу» — *девушке* это…' },
              options: [{ en: 'Accusative', de: 'Akkusativ', ru: 'Винительный' }, { en: 'Dative', de: 'Dativ', ru: 'Дательный' }, { en: 'Genitive', de: 'Genitiv', ru: 'Родительный' }],
              answer: 1,
              explain: { en: 'To whom? → dative, same as German *dem Mädchen* and Russian *девушке*.', de: 'Wem? → Dativ, genau wie *dem Mädchen*.', ru: 'Кому? → дательный, как и *девушке*.' },
            },
            {
              prompt: { en: '“He writes **with a pen**” — in Latin the pen goes into the…', de: '„Er schreibt **mit einer Feder**“ — im Lateinischen steht die Feder im…', ru: '«Он пишет **пером**» — в латыни «перо» будет в…' },
              options: [{ en: 'Dative', de: 'Dativ', ru: 'Дательном' }, { en: 'Ablative', de: 'Ablativ', ru: 'Аблативе' }, { en: 'Nominative', de: 'Nominativ', ru: 'Именительном' }],
              answer: 1,
              explain: { en: 'Instrument = ablative, with no preposition — just like Russian творительный *пером*.', de: 'Mittel/Werkzeug = Ablativ, ohne Präposition — wo das Deutsche *mit* + Dativ braucht.', ru: 'Орудие = аблатив без предлога — как русский творительный *пером*.' },
            },
            {
              prompt: { en: '“**O Lord**, have mercy” — *Lord* is…', de: '„**Herr**, erbarme dich“ — *Herr* steht im…', ru: '«**Господи**, помилуй» — *Господи* это…' },
              options: [{ en: 'Vocative', de: 'Vokativ', ru: 'Звательный' }, { en: 'Nominative', de: 'Nominativ', ru: 'Именительный' }, { en: 'Genitive', de: 'Genitiv', ru: 'Родительный' }],
              answer: 0,
              explain: { en: 'Address = vocative: Latin [[Domine]], Church Slavonic *Господи*.', de: 'Anrede = Vokativ: lateinisch [[Domine]], kirchenslawisch *Господи*.', ru: 'Обращение = звательный: латинское [[Domine]], церковнославянское *Господи*.' },
            },
            {
              prompt: { en: '“She lives **in Rome**” — Latin uses…', de: '„Sie wohnt **in Rom**“ — Latein verwendet…', ru: '«Она живёт **в Риме**» — латынь использует…' },
              options: [{ en: 'in + accusative', de: 'in + Akkusativ', ru: 'in + винительный' }, { en: 'in + ablative', de: 'in + Ablativ', ru: 'in + аблатив' }, { en: 'the genitive', de: 'den Genitiv', ru: 'родительный' }],
              answer: 1,
              explain: { en: 'Place where = [[in]] + ablative (Russian *в* + предложный, German *in* + Dativ). [[in]] + accusative means motion *into* — like German *in die Stadt*.', de: 'Wo? = [[in]] + Ablativ (wie *in* + Dativ). [[in]] + Akkusativ heißt *wohin?* — wie *in die Stadt*.', ru: 'Где? = [[in]] + аблатив (*в* + предложный). [[in]] + винительный — *куда?*, как *в город*.' },
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ 20' */
    {
      minutes: 20,
      title: { en: 'Endings: 1st and 2nd declension', de: 'Endungen: 1. und 2. Deklination', ru: 'Окончания: 1-е и 2-е склонение' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'A **declension** is a family of nouns that share one set of endings. Two families cover a huge share of everyday Latin:\n\n- **1st declension** — nominative in **-a**, mostly feminine: [[rosa]], [[puella]], [[terra]], [[vīta]].\n- **2nd declension** — masculine in **-us** ([[dominus]], [[annus]], [[populus]]) and neuter in **-um** ([[bellum]], [[verbum]], [[dōnum]]).\n\nDictionaries list a noun with its genitive: [[rosa, rosae]] f., [[dominus, dominī]] m., [[bellum, bellī]] n. The genitive tells you the family.',
            de: 'Eine **Deklination** ist eine Familie von Substantiven mit denselben Endungen. Zwei Familien decken einen großen Teil des alltäglichen Lateins ab:\n\n- **1. Deklination** — Nominativ auf **-a**, meist feminin: [[rosa]], [[puella]], [[terra]], [[vīta]].\n- **2. Deklination** — maskulin auf **-us** ([[dominus]], [[annus]], [[populus]]) und neutral auf **-um** ([[bellum]], [[verbum]], [[dōnum]]).\n\nWörterbücher nennen ein Substantiv mit seinem Genitiv: [[rosa, rosae]] f., [[dominus, dominī]] m., [[bellum, bellī]] n. Der Genitiv verrät die Familie.',
            ru: '**Склонение** — это семейство существительных с общим набором окончаний. Два семейства покрывают огромную часть повседневной латыни:\n\n- **1-е склонение** — именительный на **-a**, в основном женский род: [[rosa]], [[puella]], [[terra]], [[vīta]].\n- **2-е склонение** — мужской род на **-us** ([[dominus]], [[annus]], [[populus]]) и средний на **-um** ([[bellum]], [[verbum]], [[dōnum]]).\n\nСловари дают существительное вместе с родительным падежом: [[rosa, rosae]] ж. р., [[dominus, dominī]] м. р., [[bellum, bellī]] ср. р. Родительный выдаёт семейство.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Singular', de: 'Singular', ru: 'Единственное число' },
          head: [{ en: 'Case', de: 'Kasus', ru: 'Падеж' }, 'rosa (f.)', 'dominus (m.)', 'bellum (n.)'],
          latinCols: [1, 2, 3],
          rows: [
            [C.nomSg, 'rosa', 'dominus', 'bellum'],
            [C.genSg, 'rosae', 'dominī', 'bellī'],
            [C.datSg, 'rosae', 'dominō', 'bellō'],
            [C.accSg, 'rosam', 'dominum', 'bellum'],
            [C.ablSg, 'rosā', 'dominō', 'bellō'],
            [C.vocSg, 'rosa', 'domine', 'bellum'],
          ],
        },
        {
          kind: 'table',
          caption: { en: 'Plural', de: 'Plural', ru: 'Множественное число' },
          head: [{ en: 'Case', de: 'Kasus', ru: 'Падеж' }, 'rosa (f.)', 'dominus (m.)', 'bellum (n.)'],
          latinCols: [1, 2, 3],
          rows: [
            [C.nomPl, 'rosae', 'dominī', 'bella'],
            [C.genPl, 'rosārum', 'dominōrum', 'bellōrum'],
            [C.datPl, 'rosīs', 'dominīs', 'bellīs'],
            [C.accPl, 'rosās', 'dominōs', 'bella'],
            [C.ablPl, 'rosīs', 'dominīs', 'bellīs'],
            [C.vocPl, 'rosae', 'dominī', 'bella'],
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Spot the patterns', de: 'Muster erkennen', ru: 'Ищем закономерности' },
          body: {
            en: '- **-m** = accusative singular: [[rosam]], [[dominum]] (cf. German *den*, *ihm/ihn*).\n- **-rum** = genitive plural: [[rosārum]], [[dominōrum]].\n- **-īs** = dative *or* ablative plural: [[rosīs]], [[dominīs]] — context decides.\n- **-s** in the plural (not -us) = accusative: [[rosās]], [[dominōs]].\n- **Neuters** have nominative = accusative, and the plural of both always ends in **-a**: [[bellum]] → [[bella]] (like Russian *окно → окна*).\n- Only **-us** nouns have a separate vocative: [[domine]]. Everywhere else vocative = nominative.',
            de: '- **-m** = Akkusativ Singular: [[rosam]], [[dominum]] (vgl. dt. *den*, *ihm/ihn*).\n- **-rum** = Genitiv Plural: [[rosārum]], [[dominōrum]].\n- **-īs** = Dativ *oder* Ablativ Plural: [[rosīs]], [[dominīs]] — der Kontext entscheidet.\n- **-s** im Plural (nicht -us) = Akkusativ: [[rosās]], [[dominōs]].\n- **Neutra** haben Nominativ = Akkusativ, und im Plural enden beide immer auf **-a**: [[bellum]] → [[bella]] (wie russ. *окно → окна*).\n- Nur die Wörter auf **-us** haben einen eigenen Vokativ: [[domine]]. Sonst gilt Vokativ = Nominativ.',
            ru: '- **-m** = винительный единственного: [[rosam]], [[dominum]] (ср. нем. *den*, *ihm/ihn*).\n- **-rum** = родительный множественного: [[rosārum]], [[dominōrum]].\n- **-īs** = дательный *или* аблатив множественного: [[rosīs]], [[dominīs]] — решает контекст.\n- **-s** во множественном (не -us) = винительный: [[rosās]], [[dominōs]].\n- У **среднего рода** именительный = винительный, а во множественном оба всегда на **-a**: [[bellum]] → [[bella]] (как русское *окно → окна*).\n- Отдельный звательный есть только у слов на **-us**: [[domine]]. В остальных случаях звательный = именительный.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Ambiguous forms are normal', de: 'Mehrdeutige Formen sind normal', ru: 'Неоднозначные формы — это нормально' },
          body: {
            en: '[[rosae]] can be genitive sg., dative sg. or nominative pl.; [[dominō]] can be dative or ablative. Don’t panic: the rest of the sentence (verb, preposition, other nouns) almost always settles it. Russian has the same issue: *розы* is genitive sg. or nominative pl.',
            de: '[[rosae]] kann Genitiv Sg., Dativ Sg. oder Nominativ Pl. sein; [[dominō]] kann Dativ oder Ablativ sein. Keine Panik: Der Rest des Satzes (Verb, Präposition, andere Substantive) klärt es fast immer. Im Deutschen ist *der Rose* ja auch Genitiv oder Dativ.',
            ru: '[[rosae]] может быть родительным ед., дательным ед. или именительным мн.; [[dominō]] — дательным или аблативом. Без паники: остальная часть предложения (глагол, предлог, другие слова) почти всегда всё решает. В русском то же самое: *розы* — родительный ед. или именительный мн.',
          },
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Masculine nouns in -a', de: 'Maskulina auf -a', ru: 'Мужской род на -a' },
          body: {
            en: 'A few 1st-declension nouns are masculine because they name men’s jobs: [[nauta]] (sailor), [[agricola]] (farmer), [[poēta]] (poet). They decline exactly like [[rosa]]. Russian has the same thing: *папа*, *дядя*, *мужчина* are masculine but decline like *мама*.',
            de: 'Einige Substantive der 1. Deklination sind maskulin, weil sie Männerberufe bezeichnen: [[nauta]] (Seemann), [[agricola]] (Bauer), [[poēta]] (Dichter). Sie werden genau wie [[rosa]] dekliniert. Im Russischen gibt es dasselbe: *папа*, *дядя*, *мужчина* sind maskulin, werden aber wie *мама* dekliniert.',
            ru: 'Несколько слов 1-го склонения — мужского рода, потому что называют мужские занятия: [[nauta]] (моряк), [[agricola]] (земледелец), [[poēta]] (поэт). Склоняются они точно как [[rosa]]. В русском то же самое: *папа*, *дядя*, *мужчина* — мужской род, но склоняются как *мама*.',
          },
        },
        {
          kind: 'fill',
          id: 'l2-fill-rosa',
          prompt: { en: 'Type the endings of rosa (1st declension)', de: 'Ergänze die Endungen von rosa (1. Deklination)', ru: 'Впишите окончания rosa (1-е склонение)' },
          title: 'rosa, rosae f.',
          rows: [
            { label: C.nomSg, stem: 'ros', ending: 'a' },
            { label: C.genSg, stem: 'ros', ending: 'ae' },
            { label: C.datSg, stem: 'ros', ending: 'ae' },
            { label: C.accSg, stem: 'ros', ending: 'am' },
            { label: C.ablSg, stem: 'ros', ending: 'ā' },
            { label: C.nomPl, stem: 'ros', ending: 'ae' },
            { label: C.genPl, stem: 'ros', ending: 'ārum' },
            { label: C.datPl, stem: 'ros', ending: 'īs' },
            { label: C.accPl, stem: 'ros', ending: 'ās' },
            { label: C.ablPl, stem: 'ros', ending: 'īs' },
          ],
        },
        {
          kind: 'fill',
          id: 'l2-fill-dominus',
          prompt: { en: 'Type the endings of dominus (2nd declension, masculine)', de: 'Ergänze die Endungen von dominus (2. Deklination, maskulin)', ru: 'Впишите окончания dominus (2-е склонение, мужской род)' },
          title: 'dominus, dominī m.',
          rows: [
            { label: C.nomSg, stem: 'domin', ending: 'us' },
            { label: C.genSg, stem: 'domin', ending: 'ī' },
            { label: C.datSg, stem: 'domin', ending: 'ō' },
            { label: C.accSg, stem: 'domin', ending: 'um' },
            { label: C.ablSg, stem: 'domin', ending: 'ō' },
            { label: C.vocSg, stem: 'domin', ending: 'e' },
            { label: C.nomPl, stem: 'domin', ending: 'ī' },
            { label: C.genPl, stem: 'domin', ending: 'ōrum' },
            { label: C.datPl, stem: 'domin', ending: 'īs' },
            { label: C.accPl, stem: 'domin', ending: 'ōs' },
            { label: C.ablPl, stem: 'domin', ending: 'īs' },
          ],
        },
        {
          kind: 'fill',
          id: 'l2-fill-bellum',
          prompt: { en: 'Neuter: type the endings of bellum (war)', de: 'Neutrum: Ergänze die Endungen von bellum (Krieg)', ru: 'Средний род: впишите окончания bellum (война)' },
          title: 'bellum, bellī n.',
          rows: [
            { label: C.nomSg, stem: 'bell', ending: 'um' },
            { label: C.genSg, stem: 'bell', ending: 'ī' },
            { label: C.accSg, stem: 'bell', ending: 'um' },
            { label: C.nomPl, stem: 'bell', ending: 'a' },
            { label: C.genPl, stem: 'bell', ending: 'ōrum' },
            { label: C.accPl, stem: 'bell', ending: 'a' },
          ],
        },
        {
          kind: 'quiz',
          id: 'l2-endings',
          title: { en: 'What case can this be?', de: 'Welcher Kasus kann das sein?', ru: 'Какой это может быть падеж?' },
          questions: [
            {
              prompt: { en: 'Identify the form', de: 'Bestimme die Form', ru: 'Определите форму' },
              la: 'puellārum',
              options: [C.genPl, C.datPl, C.accSg, C.nomPl],
              answer: 0,
              explain: { en: '**-rum** = genitive plural: “of the girls”.', de: '**-rum** = Genitiv Plural: „der Mädchen“.', ru: '**-rum** = родительный мн.: «девушек».' },
            },
            {
              prompt: { en: 'Identify the form', de: 'Bestimme die Form', ru: 'Определите форму' },
              la: 'annum',
              options: [C.nomSg, C.accSg, C.genPl, C.ablSg],
              answer: 1,
              explain: { en: '**-m** = accusative singular. Cf. [[per annum]] “through the year”.', de: '**-m** = Akkusativ Singular. Vgl. [[per annum]] „durch das Jahr“, „jährlich“.', ru: '**-m** = винительный ед. Ср. [[per annum]] «в течение года, ежегодно».' },
            },
            {
              prompt: { en: 'Which is NOT a possible reading of', de: 'Was ist KEINE mögliche Deutung von', ru: 'Что НЕ может означать форма' },
              la: 'terrae',
              options: [C.genSg, C.datSg, C.nomPl, C.accPl],
              answer: 3,
              explain: { en: 'Accusative plural would be [[terrās]]. [[terrae]] is gen. sg., dat. sg. or nom. pl.', de: 'Akkusativ Plural wäre [[terrās]]. [[terrae]] ist Gen. Sg., Dat. Sg. oder Nom. Pl.', ru: 'Винительный мн. был бы [[terrās]]. [[terrae]] — род. ед., дат. ед. или им. мн.' },
            },
            {
              prompt: { en: 'Identify the form', de: 'Bestimme die Form', ru: 'Определите форму' },
              la: 'verba',
              options: [C.nomSg, C.ablSg, { en: 'Nom./Acc. pl. (neuter)', de: 'Nom./Akk. Pl. (Neutrum)', ru: 'Им./вин. мн. (ср. р.)' }, C.genPl],
              answer: 2,
              explain: { en: '[[verbum]] is neuter, so its plural is [[verba]] — “words”. Not 1st declension!', de: '[[verbum]] ist Neutrum, also Plural [[verba]] — „Wörter“. Keine 1. Deklination!', ru: '[[verbum]] среднего рода, поэтому мн. ч. — [[verba]], «слова». Это не 1-е склонение!' },
            },
            {
              prompt: { en: 'What is the gender of', de: 'Welches Genus hat', ru: 'Какого рода слово' },
              la: 'nauta',
              options: [{ en: 'feminine', de: 'feminin', ru: 'женского' }, { en: 'masculine', de: 'maskulin', ru: 'мужского' }, { en: 'neuter', de: 'neutral', ru: 'среднего' }],
              answer: 1,
              explain: { en: 'A sailor is a man — masculine, though it declines like [[rosa]].', de: 'Ein Seemann ist ein Mann — maskulin, obwohl wie [[rosa]] dekliniert.', ru: 'Моряк — мужчина, значит мужской род, хотя склоняется как [[rosa]].' },
            },
            {
              prompt: { en: 'How do you address your lord?', de: 'Wie redest du deinen Herrn an?', ru: 'Как обратиться к господину?' },
              options: ['dominus!', 'domine!', 'dominī!', 'dominum!'],
              answer: 1,
              explain: { en: 'Vocative of -us nouns ends in **-e**: [[Domine]], as in *Domine, quo vadis?*', de: 'Der Vokativ der -us-Wörter endet auf **-e**: [[Domine]], wie in *Domine, quo vadis?*', ru: 'Звательный слов на -us оканчивается на **-e**: [[Domine]], как в *Domine, quo vadis?*' },
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ 10' */
    {
      minutes: 10,
      title: { en: 'Parse mottos word by word', de: 'Mottos Wort für Wort analysieren', ru: 'Разбор девизов по словам' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Real mottos are short, so every ending carries weight. Inscriptions never show macrons — here they are added to help you. Hover or tap the words for glosses, then tag each word yourself below.',
            de: 'Echte Mottos sind kurz, deshalb trägt jede Endung Gewicht. Inschriften zeigen nie Makrons — hier sind sie als Hilfe ergänzt. Fahre über die Wörter (oder tippe sie an) für Glossen, dann bestimme unten jedes Wort selbst.',
            ru: 'Настоящие девизы коротки, поэтому каждое окончание на счету. На надписях макронов никогда нет — здесь они добавлены для удобства. Наведите курсор или нажмите на слово, чтобы увидеть глоссу, а затем ниже сами разметьте каждое слово.',
          },
        },
        {
          kind: 'interlinear',
          id: 'l2-mottos',
          title: { en: 'Four mottos', de: 'Vier Mottos', ru: 'Четыре девиза' },
          lines: [
            {
              la: 'Terrā marīque',
              tr: { en: 'By land and by sea', de: 'Zu Lande und zu Wasser', ru: 'На суше и на море' },
              words: [
                { w: 'Terrā', g: { en: 'by land — abl. sg. of terra', de: 'zu Lande — Abl. Sg. von terra', ru: 'по суше — абл. ед. от terra' } },
                { w: 'marīque', g: { en: 'marī (abl. of mare, sea) + -que “and”', de: 'marī (Abl. von mare, Meer) + -que „und“', ru: 'marī (абл. от mare, море) + -que «и»' } },
              ],
              note: {
                en: '**-que** is glued to the *second* word and means “and”: [[terrā marīque]] = [[terrā et marī]]. [[mare]] is 3rd declension — you only need to recognise its ablative here. A classic naval and military motto.',
                de: '**-que** hängt am *zweiten* Wort und bedeutet „und“: [[terrā marīque]] = [[terrā et marī]]. [[mare]] gehört zur 3. Deklination — hier musst du nur den Ablativ erkennen. Klassisches Marine- und Militärmotto.',
                ru: '**-que** приклеивается ко *второму* слову и значит «и»: [[terrā marīque]] = [[terrā et marī]]. [[mare]] — 3-е склонение, здесь достаточно узнать аблатив. Классический морской и военный девиз.',
              },
            },
            {
              la: 'Annō Dominī',
              tr: { en: 'In the year of the Lord', de: 'Im Jahr des Herrn', ru: 'В лето Господне (в год Господа)' },
              words: [
                { w: 'Annō', g: { en: 'in the year — abl. of time', de: 'im Jahr — Abl. der Zeit', ru: 'в год — аблатив времени' } },
                { w: 'Dominī', g: { en: 'of the Lord — gen. sg.', de: 'des Herrn — Gen. Sg.', ru: 'Господа — род. ед.' } },
              ],
              note: {
                en: '**A.D.** The ablative alone answers “when?” — no preposition needed. Russian *в лето Господне* uses a preposition; Latin doesn’t.',
                de: '**A. D.** Der Ablativ allein beantwortet „wann?“ — ohne Präposition. Das deutsche *im Jahr* braucht eine.',
                ru: '**A.D.** Один аблатив отвечает на вопрос «когда?» — без предлога. Русскому *в лето Господне* предлог нужен, латыни — нет.',
              },
            },
            {
              la: 'Pāx Rōmāna',
              tr: { en: 'The Roman peace', de: 'Der römische Frieden', ru: 'Римский мир' },
              words: [
                { w: 'Pāx', g: { en: 'peace — nom. sg. (3rd decl., f.)', de: 'Frieden — Nom. Sg. (3. Dekl., f.)', ru: 'мир — им. ед. (3-е скл., ж. р.)' } },
                { w: 'Rōmāna', g: { en: 'Roman — adjective, fem. nom. sg., agrees with pāx', de: 'römisch — Adjektiv, fem. Nom. Sg., kongruiert mit pāx', ru: 'римский — прилагательное, ж. р. им. ед., согласовано с pāx' } },
              ],
              note: {
                en: 'Adjectives copy the gender, number and case of their noun: [[pāx]] is feminine, so [[Rōmāna]]. The adjective usually comes *after* the noun.',
                de: 'Adjektive übernehmen Genus, Numerus und Kasus ihres Substantivs: [[pāx]] ist feminin, also [[Rōmāna]]. Das Adjektiv steht meist *nach* dem Substantiv.',
                ru: 'Прилагательное копирует род, число и падеж своего существительного: [[pāx]] женского рода, значит [[Rōmāna]]. Прилагательное обычно стоит *после* существительного.',
              },
            },
            {
              la: 'Senātus Populusque Rōmānus',
              tr: { en: 'The Senate and the Roman People', de: 'Senat und Volk von Rom', ru: 'Сенат и народ римский' },
              words: [
                { w: 'Senātus', g: { en: 'the Senate — nom. sg. (4th decl.)', de: 'der Senat — Nom. Sg. (4. Dekl.)', ru: 'сенат — им. ед. (4-е скл.)' } },
                { w: 'Populusque', g: { en: 'and the people — nom. sg. + -que', de: 'und das Volk — Nom. Sg. + -que', ru: 'и народ — им. ед. + -que' } },
                { w: 'Rōmānus', g: { en: 'Roman — masc. nom. sg.', de: 'römisch — mask. Nom. Sg.', ru: 'римский — м. р. им. ед.' } },
              ],
              note: {
                en: '**SPQR** — still on Rome’s manhole covers today. Note **-que** again, and that [[Senātus]] looks like 2nd declension but isn’t (it is 4th; same nominative ending, different genitive).',
                de: '**SPQR** — bis heute auf Roms Kanaldeckeln. Wieder **-que**; und [[Senātus]] sieht nach 2. Deklination aus, ist es aber nicht (4. Deklination; gleicher Nominativ, anderer Genitiv).',
                ru: '**SPQR** — до сих пор на римских канализационных люках. Снова **-que**; а [[Senātus]] лишь выглядит как 2-е склонение, но относится к 4-му (именительный тот же, родительный другой).',
              },
            },
          ],
        },
        {
          kind: 'parse',
          id: 'l2-parse-mottos',
          prompt: { en: 'Tag each word with its case (or part of speech)', de: 'Bestimme bei jedem Wort den Kasus (oder die Wortart)', ru: 'Определите падеж (или часть речи) каждого слова' },
          sentences: [
            {
              words: [
                { w: 'Terrā', answer: 'abl', options: ['nom', 'abl', 'gen', 'dat'], explain: { en: 'long -ā = ablative', de: 'langes -ā = Ablativ', ru: 'долгое -ā = аблатив' } },
                { w: 'marīque', answer: 'abl', options: ['nom', 'abl', 'gen', 'acc'], explain: { en: 'marī + -que, parallel to terrā', de: 'marī + -que, parallel zu terrā', ru: 'marī + -que, параллельно terrā' } },
              ],
              translation: { en: 'By land and by sea', de: 'Zu Lande und zu Wasser', ru: 'На суше и на море' },
            },
            {
              words: [
                { w: 'Annō', answer: 'abl', options: ['dat', 'abl', 'nom', 'acc'], explain: { en: '-ō: dat. or abl.; “when?” → ablative of time', de: '-ō: Dat. oder Abl.; „wann?“ → Ablativ der Zeit', ru: '-ō: дат. или абл.; «когда?» → аблатив времени' } },
                { w: 'Dominī', answer: 'gen', options: ['gen', 'nom', 'voc', 'dat'], explain: { en: '“of the Lord”; could formally be nom. pl., but meaning decides', de: '„des Herrn“; formal auch Nom. Pl. möglich, die Bedeutung entscheidet', ru: '«Господа»; формально может быть и им. мн., но решает смысл' } },
              ],
              translation: { en: 'In the year of the Lord', de: 'Im Jahr des Herrn', ru: 'В лето Господне' },
            },
            {
              words: [
                { w: 'Pāx', answer: 'nom', options: ['nom', 'acc', 'gen'] },
                { w: 'Rōmāna', answer: 'adj', options: ['nom', 'adj', 'abl', 'adv'], explain: { en: 'adjective agreeing with pāx (fem. nom. sg.)', de: 'Adjektiv, kongruiert mit pāx (fem. Nom. Sg.)', ru: 'прилагательное, согласовано с pāx (ж. р. им. ед.)' } },
              ],
              translation: { en: 'The Roman peace', de: 'Der römische Frieden', ru: 'Римский мир' },
            },
            {
              words: [
                { w: 'Senātus', answer: 'nom', options: ['nom', 'gen', 'acc'] },
                { w: 'Populusque', answer: 'nom', options: ['nom', 'acc', 'conj', 'voc'], explain: { en: 'populus (nom.) + -que “and”', de: 'populus (Nom.) + -que „und“', ru: 'populus (им.) + -que «и»' } },
                { w: 'Rōmānus', answer: 'adj', options: ['adj', 'nom', 'gen'], explain: { en: 'agrees with populus', de: 'kongruiert mit populus', ru: 'согласовано с populus' } },
              ],
              translation: { en: 'The Senate and the Roman People', de: 'Senat und Volk von Rom', ru: 'Сенат и народ римский' },
            },
          ],
        },
        {
          kind: 'parse',
          id: 'l2-parse-nauta',
          prompt: { en: 'The test sentence: who gives what to whom?', de: 'Der Testsatz: Wer gibt wem was?', ru: 'Контрольная фраза: кто что кому даёт?' },
          sentences: [
            {
              words: [
                { w: 'nauta', answer: 'nom', options: ['nom', 'abl', 'voc', 'acc'], explain: { en: 'short -a = nominative: the sailor (subject; masculine 1st decl.)', de: 'kurzes -a = Nominativ: der Seemann (Subjekt; maskulin, 1. Dekl.)', ru: 'краткое -a = именительный: моряк (подлежащее; м. р., 1-е скл.)' } },
                { w: 'rosam', answer: 'acc', options: ['nom', 'acc', 'gen', 'abl'], explain: { en: '-m = accusative: the thing given', de: '-m = Akkusativ: das, was gegeben wird', ru: '-m = винительный: то, что дают' } },
                { w: 'puellae', answer: 'dat', options: ['gen', 'dat', 'nom', 'abl'], explain: { en: 'gen./dat. sg. or nom. pl.; with “gives” → dative: to the girl', de: 'Gen./Dat. Sg. oder Nom. Pl.; bei „gibt“ → Dativ: dem Mädchen', ru: 'род./дат. ед. или им. мн.; при «даёт» → дательный: девушке' } },
                { w: 'dat', answer: 'verb', options: ['verb', 'adv', 'conj'], explain: { en: '“gives” — verb at the end, as usual', de: '„gibt“ — Verb am Ende, wie üblich', ru: '«даёт» — глагол в конце, как обычно' } },
              ],
              translation: { en: 'The sailor gives the girl a rose.', de: 'Der Seemann gibt dem Mädchen eine Rose.', ru: 'Моряк дарит девушке розу.' },
            },
          ],
        },
        {
          kind: 'notepad',
          id: 'l2-wild-mottos',
          prompt: { en: 'Homework: 3 mottos / inscriptions with cases', de: 'Hausaufgabe: 3 Mottos / Inschriften mit Kasus', ru: 'Домашнее задание: 3 девиза / надписи с падежами' },
          placeholder: { en: 'motto — where — each noun: case', de: 'Motto — Fundort — jedes Substantiv: Kasus', ru: 'девиз — где — каждое существительное: падеж' },
        },
      ],
    },
    /* ------------------------------------------------------------ 5' */
    {
      minutes: 5,
      title: { en: 'Set up Anki', de: 'Anki einrichten', ru: 'Настраиваем Anki' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: '- Install **Anki** (free on desktop and Android; AnkiMobile on iOS is paid) or use AnkiWeb in the browser.\n- On AnkiWeb’s shared decks, search for **“DCC Latin Core”** and import it — it follows the Dickinson College Commentaries list of the ~1000 most frequent Latin words.\n- Set **new cards/day = 10**. Do reviews every day; it takes 5–10 minutes.',
            de: '- Installiere **Anki** (kostenlos auf Desktop und Android; AnkiMobile für iOS ist kostenpflichtig) oder nutze AnkiWeb im Browser.\n- Suche unter den geteilten Decks auf AnkiWeb nach **„DCC Latin Core“** und importiere es — es folgt der Liste der ca. 1000 häufigsten lateinischen Wörter der Dickinson College Commentaries.\n- Stelle **neue Karten/Tag = 10** ein. Wiederhole jeden Tag; das dauert 5–10 Minuten.',
            ru: '- Установите **Anki** (бесплатно на компьютере и Android; AnkiMobile для iOS платный) или пользуйтесь AnkiWeb в браузере.\n- В общих колодах AnkiWeb найдите **«DCC Latin Core»** и импортируйте её — она построена по списку Dickinson College Commentaries из ~1000 самых частотных латинских слов.\n- Поставьте **новых карточек в день = 10**. Повторяйте каждый день: это 5–10 минут.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Read the whole dictionary entry', de: 'Den ganzen Wörterbucheintrag lesen', ru: 'Читайте всю словарную статью' },
          body: {
            en: 'When a card shows [[puella, puellae f.]], say all three parts aloud: nominative, genitive, gender. The genitive tells you the declension — that habit pays off from session 4 on.',
            de: 'Wenn eine Karte [[puella, puellae f.]] zeigt, sprich alle drei Teile laut: Nominativ, Genitiv, Genus. Der Genitiv verrät die Deklination — diese Gewohnheit zahlt sich ab Einheit 4 aus.',
            ru: 'Если на карточке [[puella, puellae f.]], проговаривайте вслух все три части: именительный, родительный, род. Родительный выдаёт склонение — эта привычка окупится начиная с 4-го занятия.',
          },
        },
        {
          kind: 'links',
          items: [
            { label: 'DCC Latin Core Vocabulary', url: 'https://dcc.dickinson.edu/latin-core-list1', note: { en: 'the frequency list behind the Anki deck', de: 'die Häufigkeitsliste hinter dem Anki-Deck', ru: 'частотный список, на котором основана колода' } },
            { label: 'AnkiWeb', url: 'https://ankiweb.net/', note: { en: 'shared decks → search “DCC Latin Core”', de: 'geteilte Decks → „DCC Latin Core“ suchen', ru: 'общие колоды → искать «DCC Latin Core»' } },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ practice */
    {
      minutes: 0,
      title: { en: 'Practice: endings & vocabulary', de: 'Übung: Endungen & Wortschatz', ru: 'Практика: окончания и слова' },
      blocks: [
        {
          kind: 'match',
          id: 'l2-match',
          prompt: { en: 'Match each form to its case', de: 'Ordne jeder Form ihren Kasus zu', ru: 'Сопоставьте форму с падежом' },
          pairs: [
            { left: 'rosārum', right: C.genPl },
            { left: 'dominum', right: C.accSg },
            { left: 'domine', right: C.vocSg },
            { left: 'rosās', right: C.accPl },
            { left: 'dominōs', right: { en: 'Acc. pl. (masc.)', de: 'Akk. Pl. (mask.)', ru: 'Вин. мн. (м. р.)' } },
            { left: 'bella', right: { en: 'Nom./Acc. pl. (neuter)', de: 'Nom./Akk. Pl. (Neutrum)', ru: 'Им./вин. мн. (ср. р.)' } },
            { left: 'rosīs', right: { en: 'Dat./Abl. pl.', de: 'Dat./Abl. Pl.', ru: 'Дат./абл. мн.' } },
          ],
        },
        {
          kind: 'parse',
          id: 'l2-parse-more',
          prompt: { en: 'Same words, new roles — order doesn’t matter, endings do', de: 'Dieselben Wörter, neue Rollen — nicht die Stellung zählt, sondern die Endung', ru: 'Те же слова, новые роли — важен не порядок, а окончания' },
          sentences: [
            {
              words: [
                { w: 'puella', answer: 'nom', options: CASES },
                { w: 'nautae', answer: 'dat', options: CASES, explain: { en: 'with dat → to the sailor', de: 'bei dat → dem Seemann', ru: 'при dat → моряку' } },
                { w: 'rosās', answer: 'acc', options: CASES },
                { w: 'dat', answer: 'verb', options: ['verb', 'adv', 'conj'] },
              ],
              translation: { en: 'The girl gives the sailor roses.', de: 'Das Mädchen gibt dem Seemann Rosen.', ru: 'Девушка дарит моряку розы.' },
            },
            {
              words: [
                { w: 'rosam', answer: 'acc', options: CASES },
                { w: 'dominō', answer: 'dat', options: CASES, explain: { en: '-ō: dat. or abl.; with “gives” → dative', de: '-ō: Dat. oder Abl.; bei „gibt“ → Dativ', ru: '-ō: дат. или абл.; при «даёт» → дательный' } },
                { w: 'agricola', answer: 'nom', options: CASES, explain: { en: 'masculine 1st decl., like nauta', de: 'maskulin, 1. Dekl., wie nauta', ru: 'м. р., 1-е скл., как nauta' } },
                { w: 'dat', answer: 'verb', options: ['verb', 'adv', 'conj'] },
              ],
              translation: { en: 'The farmer gives the master a rose.', de: 'Der Bauer gibt dem Herrn eine Rose.', ru: 'Земледелец дарит господину розу.' },
            },
            {
              words: [
                { w: 'fīlia', answer: 'nom', options: CASES },
                { w: 'dominī', answer: 'gen', options: CASES, explain: { en: 'the master’s daughter', de: 'die Tochter des Herrn', ru: 'дочь господина' } },
                { w: 'dōna', answer: 'acc', options: CASES, explain: { en: 'neuter pl. -a; object of dat', de: 'Neutrum Pl. -a; Objekt zu dat', ru: 'ср. р. мн. -a; дополнение к dat' } },
                { w: 'poētīs', answer: 'dat', options: CASES, explain: { en: '-īs: dat./abl. pl.; recipients → dative', de: '-īs: Dat./Abl. Pl.; Empfänger → Dativ', ru: '-īs: дат./абл. мн.; получатели → дательный' } },
                { w: 'dat', answer: 'verb', options: ['verb', 'adv', 'conj'] },
              ],
              translation: { en: 'The master’s daughter gives gifts to the poets.', de: 'Die Tochter des Herrn gibt den Dichtern Geschenke.', ru: 'Дочь господина дарит поэтам подарки.' },
            },
          ],
        },
        {
          kind: 'flashcards',
          id: 'l2-cards',
          title: { en: 'Core nouns of the 1st & 2nd declension', de: 'Kernwörter der 1. & 2. Deklination', ru: 'Базовые слова 1-го и 2-го склонения' },
          cards: [
            { la: 'rosa, rosae f.', back: { en: 'rose', de: 'Rose', ru: 'роза' } },
            { la: 'puella, puellae f.', back: { en: 'girl', de: 'Mädchen', ru: 'девушка, девочка' } },
            { la: 'terra, terrae f.', back: { en: 'earth, land', de: 'Erde, Land', ru: 'земля, суша' } },
            { la: 'fīlia, fīliae f.', back: { en: 'daughter', de: 'Tochter', ru: 'дочь' } },
            { la: 'nauta, nautae m.', back: { en: 'sailor (masculine!)', de: 'Seemann (maskulin!)', ru: 'моряк (мужской род!)' } },
            { la: 'agricola, agricolae m.', back: { en: 'farmer (masculine!)', de: 'Bauer (maskulin!)', ru: 'земледелец (мужской род!)' } },
            { la: 'dominus, dominī m.', back: { en: 'master, lord; voc. domine', de: 'Herr; Vok. domine', ru: 'господин, хозяин; зват. domine' } },
            { la: 'annus, annī m.', back: { en: 'year', de: 'Jahr', ru: 'год' } },
            { la: 'populus, populī m.', back: { en: 'people, nation', de: 'Volk', ru: 'народ' } },
            { la: 'bellum, bellī n.', back: { en: 'war', de: 'Krieg', ru: 'война' } },
            { la: 'dōnum, dōnī n.', back: { en: 'gift', de: 'Geschenk', ru: 'дар, подарок' } },
            { la: '-que', back: { en: '“and” — attached to the second word', de: '„und“ — ans zweite Wort angehängt', ru: '«и» — приклеивается ко второму слову' } },
            { la: 'dat', back: { en: 'he/she gives', de: 'er/sie gibt', ru: 'он/она даёт' } },
          ],
        },
      ],
    },
  ],
  materials: [
    { label: 'William Linney — Getting Started with Latin, lessons 4–8', url: 'https://www.gettingstartedwithlatin.com/', note: { en: 'cases introduced one at a time; free audio/video', de: 'Kasus werden einzeln eingeführt; kostenloses Audio/Video', ru: 'падежи вводятся по одному; бесплатные аудио/видео' } },
    { label: 'Dickinson College Commentaries — Latin Core Vocabulary', url: 'https://dcc.dickinson.edu/latin-core-list1', note: { en: '~1000 most frequent Latin words', de: 'die ca. 1000 häufigsten lateinischen Wörter', ru: '~1000 самых частотных латинских слов' } },
    { label: 'AnkiWeb — “DCC Latin Core” shared deck', url: 'https://ankiweb.net/', note: { en: 'search the shared decks for “DCC Latin Core”', de: 'unter den geteilten Decks nach „DCC Latin Core“ suchen', ru: 'найти в общих колодах «DCC Latin Core»' } },
  ],
  homework: [
    {
      en: 'Anki: start the first 50 DCC core words, ~10 new cards a day.',
      de: 'Anki: mit den ersten 50 DCC-Kernwörtern beginnen, ca. 10 neue Karten pro Tag.',
      ru: 'Anki: начать первые 50 слов DCC Core, ~10 новых карточек в день.',
    },
    {
      en: 'Find 3 Latin mottos or inscriptions (university crests, coats of arms, building inscriptions around Munich) and identify the case of each noun. Write them in the note below.',
      de: 'Finde 3 lateinische Mottos oder Inschriften (Universitätswappen, Wappen, Gebäudeinschriften in München) und bestimme den Kasus jedes Substantivs. Trage sie in die Notiz unten ein.',
      ru: 'Найти 3 латинских девиза или надписи (гербы университетов, гербы городов, надписи на зданиях в Мюнхене) и определить падеж каждого существительного. Записать в заметку ниже.',
    },
  ],
  doneWhen: [
    {
      en: 'Given “nauta rosam puellae dat”, I can say who gives what to whom just from the endings.',
      de: 'Bei „nauta rosam puellae dat“ kann ich allein an den Endungen sagen, wer wem was gibt.',
      ru: 'По фразе «nauta rosam puellae dat» могу по одним окончаниям сказать, кто что кому даёт.',
    },
    {
      en: 'I can name the six cases and give a Russian or German equivalent for each.',
      de: 'Ich kann die sechs Kasus nennen und zu jedem eine russische oder deutsche Entsprechung angeben.',
      ru: 'Могу назвать шесть падежей и для каждого привести русский или немецкий аналог.',
    },
  ],
};

export default l02;
