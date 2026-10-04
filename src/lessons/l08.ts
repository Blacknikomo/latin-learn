import type { Lesson } from '../types';

const l08: Lesson = {
  id: 8,
  date: '2026-10-27',
  title: {
    en: 'Past tense & participles — famous quotes',
    de: 'Perfekt & Partizipien — berühmte Zitate',
    ru: 'Прошедшее время и причастия — знаменитые цитаты',
  },
  goal: {
    en: 'Recognise past actions and participles — the key to most famous quotes and a lot of modern vocabulary.',
    de: 'Vergangene Handlungen und Partizipien erkennen — der Schlüssel zu den meisten berühmten Zitaten und zu sehr viel modernem Wortschatz.',
    ru: 'Узнавать прошедшие действия и причастия — ключ к большинству знаменитых цитат и к огромной части современной лексики.',
  },
  sections: [
    {
      minutes: 5,
      title: { en: 'Review: Anki + Dies irae', de: 'Wiederholung: Anki + Dies irae', ru: 'Повторение: Anki + Dies irae' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Clear your Anki reviews first. Then read the first stanza of the **Dies irae** aloud in ecclesiastical pronunciation, tap each word you are unsure about, and only then open the translation.',
            de: 'Zuerst die fälligen Anki-Karten abarbeiten. Dann die erste Strophe des **Dies irae** in kirchlicher Aussprache laut lesen, unsichere Wörter antippen und erst danach die Übersetzung aufdecken.',
            ru: 'Сначала пройдите все карточки Anki на сегодня. Затем прочитайте вслух первую строфу **Dies irae** в церковном произношении, нажмите на слова, в которых не уверены, и только потом откройте перевод.',
          },
        },
        {
          kind: 'interlinear',
          id: 'l8-diesirae',
          title: { en: 'Dies irae, stanza 1', de: 'Dies irae, Strophe 1', ru: 'Dies irae, строфа 1' },
          lines: [
            {
              la: 'Dies irae, dies illa,',
              tr: { en: 'Day of wrath, that day,', de: 'Tag des Zorns, jener Tag,', ru: 'День гнева, тот день,' },
              words: [
                { w: 'Dies', g: { en: 'day (nom.)', de: 'Tag (Nom.)', ru: 'день (им. п.)' } },
                { w: 'irae', g: { en: 'of wrath (gen. of *ira*)', de: 'des Zorns (Gen. von *ira*)', ru: 'гнева (род. п. от *ira*)' } },
                { w: 'dies', g: { en: 'day (nom.)', de: 'Tag (Nom.)', ru: 'день (им. п.)' } },
                { w: 'illa', g: { en: 'that (fem. — *dies* is feminine here)', de: 'jener (fem. — *dies* ist hier feminin)', ru: 'тот (ж. р. — *dies* здесь женского рода)' } },
              ],
            },
            {
              la: 'solvet saeclum in favilla,',
              tr: { en: 'will dissolve the world into ash,', de: 'wird die Welt in Asche auflösen,', ru: 'обратит мир в пепел,' },
              words: [
                { w: 'solvet', g: { en: 'will dissolve (future of *solvo*)', de: 'wird auflösen (Futur von *solvo*)', ru: 'растворит (будущее от *solvo*)' } },
                { w: 'saeclum', g: { en: 'age, world (acc.; = *saeculum*)', de: 'Zeitalter, Welt (Akk.; = *saeculum*)', ru: 'век, мир (вин. п.; = *saeculum*)' } },
                { w: 'in', g: { en: 'in, into', de: 'in', ru: 'в' } },
                { w: 'favilla', g: { en: 'ash (abl.)', de: 'Asche (Abl.)', ru: 'пепел (абл.)' } },
              ],
            },
            {
              la: 'teste David cum Sibylla.',
              tr: { en: 'as David bears witness, together with the Sibyl.', de: 'wie David bezeugt, zusammen mit der Sibylle.', ru: 'по свидетельству Давида и Сивиллы.' },
              words: [
                { w: 'teste', g: { en: 'witness (abl.) — “with … as witness”', de: 'Zeuge (Abl.) — „mit … als Zeugen“', ru: 'свидетель (абл.) — «при свидетеле …»' } },
                { w: 'David', g: { en: 'David (indeclinable)', de: 'David (undeklinierbar)', ru: 'Давид (не склоняется)' } },
                { w: 'cum', g: { en: 'with (+ abl.)', de: 'mit (+ Abl.)', ru: 'с (+ абл.)' } },
                { w: 'Sibylla', g: { en: 'the Sibyl (abl.)', de: 'die Sibylle (Abl.)', ru: 'Сивилла (абл.)' } },
              ],
              note: { en: '*teste David* is an ablative absolute: “David being witness”. You will meet this construction in every church text.', de: '*teste David* ist ein Ablativus absolutus: „wobei David Zeuge ist“. Diese Konstruktion begegnet dir in jedem Kirchentext.', ru: '*teste David* — ablativus absolutus: «при том, что Давид — свидетель». Эта конструкция встречается в любом церковном тексте.' },
            },
          ],
        },
      ],
    },
    {
      minutes: 15,
      title: { en: 'The perfect tense', de: 'Das Perfekt', ru: 'Перфект' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'The Latin **perfect** covers both “I loved” and “I have loved” — a completed action. Good news: its endings are the **same for every verb** in the language. Bad news: the stem they attach to often changes. Strategy for reading: **recognise the ending, look up the stem.**',
            de: 'Das lateinische **Perfekt** deckt sowohl „ich liebte“ als auch „ich habe geliebt“ ab — eine abgeschlossene Handlung. Die gute Nachricht: Die Endungen sind **bei allen Verben gleich**. Die schlechte: Der Stamm, an den sie treten, verändert sich oft. Lesestrategie: **Endung erkennen, Stamm nachschlagen.**',
            ru: 'Латинский **перфект** передаёт и «я любил», и «я полюбил / я любил (и это завершено)» — законченное действие. Хорошая новость: его окончания **одинаковы у всех глаголов** языка. Плохая: основа, к которой они присоединяются, часто меняется. Стратегия чтения: **узнай окончание, посмотри основу в словаре.**',
          },
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Perfect endings', de: 'Perfektendungen', ru: 'Окончания перфекта' },
          body: {
            en: '- 1st sg. **-ī** · 2nd sg. **-istī** · 3rd sg. **-it**\n- 1st pl. **-imus** · 2nd pl. **-istis** · 3rd pl. **-ērunt**\n\nThe signal is the **-is-** in the 2nd persons and the **-ērunt** in the 3rd plural — no present tense has them.',
            de: '- 1. Sg. **-ī** · 2. Sg. **-istī** · 3. Sg. **-it**\n- 1. Pl. **-imus** · 2. Pl. **-istis** · 3. Pl. **-ērunt**\n\nErkennungszeichen sind das **-is-** in den 2. Personen und das **-ērunt** in der 3. Person Plural — kein Präsens hat sie.',
            ru: '- 1 л. ед. ч. **-ī** · 2 л. ед. ч. **-istī** · 3 л. ед. ч. **-it**\n- 1 л. мн. ч. **-imus** · 2 л. мн. ч. **-istis** · 3 л. мн. ч. **-ērunt**\n\nОпознавательные знаки — **-is-** во 2-м лице и **-ērunt** в 3-м лице мн. ч.: в настоящем времени их нет.',
          },
        },
        {
          kind: 'fill',
          id: 'l8-fill-amavi',
          title: 'amō → amāvī',
          prompt: { en: 'Type the perfect endings of *amāre* (to love). Macrons optional.', de: 'Trage die Perfektendungen von *amāre* (lieben) ein. Makrons optional.', ru: 'Впишите окончания перфекта глагола *amāre* (любить). Макроны необязательны.' },
          rows: [
            { label: { en: 'I loved', de: 'ich liebte', ru: 'я любил' }, stem: 'amāv', ending: 'ī' },
            { label: { en: 'you loved (sg.)', de: 'du liebtest', ru: 'ты любил' }, stem: 'amāv', ending: 'istī' },
            { label: { en: 'he/she loved', de: 'er/sie liebte', ru: 'он/она любил(а)' }, stem: 'amāv', ending: 'it' },
            { label: { en: 'we loved', de: 'wir liebten', ru: 'мы любили' }, stem: 'amāv', ending: 'imus' },
            { label: { en: 'you loved (pl.)', de: 'ihr liebtet', ru: 'вы любили' }, stem: 'amāv', ending: 'istis' },
            { label: { en: 'they loved', de: 'sie liebten', ru: 'они любили' }, stem: 'amāv', ending: 'ērunt' },
          ],
        },
        {
          kind: 'fill',
          id: 'l8-fill-fui',
          title: 'sum → fuī',
          prompt: { en: '*esse* (to be) has a completely different perfect stem: **fu-**. Same endings.', de: '*esse* (sein) hat einen ganz anderen Perfektstamm: **fu-**. Gleiche Endungen.', ru: 'У *esse* (быть) совсем другая основа перфекта: **fu-**. Окончания те же.' },
          rows: [
            { label: { en: 'I was / have been', de: 'ich war / bin gewesen', ru: 'я был' }, stem: 'fu', ending: 'ī' },
            { label: { en: 'you were (sg.)', de: 'du warst', ru: 'ты был' }, stem: 'fu', ending: 'istī' },
            { label: { en: 'he/she was', de: 'er/sie war', ru: 'он/она был(а)' }, stem: 'fu', ending: 'it' },
            { label: { en: 'we were', de: 'wir waren', ru: 'мы были' }, stem: 'fu', ending: 'imus' },
            { label: { en: 'you were (pl.)', de: 'ihr wart', ru: 'вы были' }, stem: 'fu', ending: 'istis' },
            { label: { en: 'they were', de: 'sie waren', ru: 'они были' }, stem: 'fu', ending: 'ērunt' },
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Familiar from German and English', de: 'Bekannt aus dem Deutschen und Englischen', ru: 'Знакомо по немецкому и английскому' },
          body: {
            en: 'Stem change in the past is nothing exotic: English *see → saw*, *come → came*; German *sehen → sah*, *kommen → kam*. Latin does the same: [[videō]] → [[vīdī]], [[veniō]] → [[vēnī]]. Just as you learnt *gehen – ging – gegangen*, a Latin dictionary lists **principal parts**: present, infinitive, perfect, participle.',
            de: 'Stammwechsel in der Vergangenheit ist nichts Exotisches: *sehen → sah*, *kommen → kam*; englisch *see → saw*, *come → came*. Latein macht dasselbe: [[videō]] → [[vīdī]], [[veniō]] → [[vēnī]]. So wie man *gehen – ging – gegangen* lernt, nennt ein lateinisches Wörterbuch die **Stammformen**: Präsens, Infinitiv, Perfekt, Partizip.',
            ru: 'Смена основы в прошедшем — ничего экзотического: англ. *see → saw*, *come → came*; нем. *sehen → sah*, *kommen → kam*. Латынь делает то же самое: [[videō]] → [[vīdī]], [[veniō]] → [[vēnī]]. Как в немецком учат *gehen – ging – gegangen*, так латинский словарь даёт **основные формы**: настоящее время, инфинитив, перфект, причастие.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Principal parts: how the stem changes', de: 'Stammformen: wie sich der Stamm ändert', ru: 'Основные формы: как меняется основа' },
          head: [
            { en: 'Present', de: 'Präsens', ru: 'Настоящее' },
            { en: 'Perfect', de: 'Perfekt', ru: 'Перфект' },
            { en: 'Participle', de: 'Partizip', ru: 'Причастие' },
            { en: 'Meaning', de: 'Bedeutung', ru: 'Значение' },
            { en: 'Modern words', de: 'Moderne Wörter', ru: 'Современные слова' },
          ],
          latinCols: [0, 1, 2],
          rows: [
            ['amō', 'amāvī', 'amātum', { en: 'love', de: 'lieben', ru: 'любить' }, { en: 'amateur (← amātor)', de: 'Amateur (← amātor)', ru: 'аматёр, устар. (← amātor)' }],
            ['videō', 'vīdī', 'vīsum', { en: 'see', de: 'sehen', ru: 'видеть' }, { en: 'video, vision, visa', de: 'Video, Vision, Visum', ru: 'видео, виза, визит' }],
            ['veniō', 'vēnī', 'ventum', { en: 'come', de: 'kommen', ru: 'приходить' }, { en: 'event, adventure', de: 'Advent, Event', ru: 'конвент, адвент' }],
            ['vincō', 'vīcī', 'victum', { en: 'conquer', de: 'siegen', ru: 'побеждать' }, { en: 'victor, victory', de: 'Viktor, Viktoria (Sieg)', ru: 'Виктор, виктория' }],
            ['dīcō', 'dīxī', 'dictum', { en: 'say', de: 'sagen', ru: 'говорить' }, { en: 'dictate, dictionary', de: 'Diktat, Diktator', ru: 'диктант, диктатор' }],
            ['faciō', 'fēcī', 'factum', { en: 'do, make', de: 'machen, tun', ru: 'делать' }, { en: 'fact, factory', de: 'Fakt, Faktor', ru: 'факт, фактор' }],
            ['scrībō', 'scrīpsī', 'scrīptum', { en: 'write', de: 'schreiben', ru: 'писать' }, { en: 'script, manuscript', de: 'Skript, Manuskript', ru: 'скрипт, манускрипт' }],
            ['agō', 'ēgī', 'āctum', { en: 'do, drive, act', de: 'handeln, treiben', ru: 'действовать, вести' }, { en: 'act, action', de: 'Akt, Akte, Aktion', ru: 'акт, акция' }],
            ['dō', 'dedī', 'datum', { en: 'give', de: 'geben', ru: 'давать' }, { en: 'data, date', de: 'Datum, Daten', ru: 'дата' }],
            ['mittō', 'mīsī', 'missum', { en: 'send', de: 'schicken', ru: 'посылать' }, { en: 'mission, missile', de: 'Mission', ru: 'миссия' }],
          ],
        },
        {
          kind: 'quiz',
          id: 'l8-perf',
          title: { en: 'Present or perfect?', de: 'Präsens oder Perfekt?', ru: 'Настоящее или перфект?' },
          questions: [
            {
              prompt: { en: 'Which tense and person?', de: 'Welches Tempus, welche Person?', ru: 'Какое время и лицо?' },
              la: 'dīxērunt',
              options: [
                { en: 'perfect, they', de: 'Perfekt, sie (Pl.)', ru: 'перфект, они' },
                { en: 'present, they', de: 'Präsens, sie (Pl.)', ru: 'настоящее, они' },
                { en: 'perfect, you (pl.)', de: 'Perfekt, ihr', ru: 'перфект, вы' },
              ],
              answer: 0,
              explain: { en: '**-ērunt** only ever marks the perfect 3rd plural: “they said”.', de: '**-ērunt** steht nur für Perfekt 3. Pl.: „sie sagten“.', ru: '**-ērunt** бывает только в перфекте 3 л. мн. ч.: «они сказали».' },
            },
            {
              prompt: { en: 'Which tense and person?', de: 'Welches Tempus, welche Person?', ru: 'Какое время и лицо?' },
              la: 'vīdistī',
              options: [
                { en: 'present, you (sg.)', de: 'Präsens, du', ru: 'настоящее, ты' },
                { en: 'perfect, you (sg.)', de: 'Perfekt, du', ru: 'перфект, ты' },
                { en: 'perfect, I', de: 'Perfekt, ich', ru: 'перфект, я' },
              ],
              answer: 1,
              explain: { en: '**-istī** = perfect 2nd sg.: “you saw”. Present would be [[vidēs]].', de: '**-istī** = Perfekt 2. Sg.: „du sahst“. Präsens wäre [[vidēs]].', ru: '**-istī** — перфект 2 л. ед. ч.: «ты увидел». В настоящем было бы [[vidēs]].' },
            },
            {
              prompt: { en: 'What is the dictionary (present) form of', de: 'Wie lautet die Wörterbuchform (Präsens) von', ru: 'Какова словарная форма (настоящее время)' },
              la: 'fēcit',
              options: ['faciō', 'fēlīx', 'fīō'],
              answer: 0,
              explain: { en: '[[fēcit]] “he made” ← [[faciō]]. Painters signed works *… fecit* — “… made (this)”.', de: '[[fēcit]] „er hat gemacht“ ← [[faciō]]. Maler signierten mit *… fecit* — „… hat (es) gemacht“.', ru: '[[fēcit]] «он сделал» ← [[faciō]]. Художники подписывали работы *… fecit* — «… сделал (это)».' },
            },
            {
              prompt: { en: 'Which form means “we came”?', de: 'Welche Form heißt „wir sind gekommen“?', ru: 'Какая форма значит «мы пришли»?' },
              options: ['venīmus', 'vēnimus', 'vēnērunt'],
              answer: 1,
              explain: { en: 'Present [[venīmus]] vs perfect [[vēnimus]] — only vowel length (and stress) differ. In unmarked texts, context decides.', de: 'Präsens [[venīmus]] vs. Perfekt [[vēnimus]] — nur Vokallänge (und Betonung) unterscheiden sie. In Texten ohne Makrons entscheidet der Kontext.', ru: 'Настоящее [[venīmus]] и перфект [[vēnimus]] различаются только долготой (и ударением). В текстах без макронов решает контекст.' },
            },
          ],
        },
      ],
    },
    {
      minutes: 15,
      title: { en: 'Participles — and why “Student” looks like that', de: 'Partizipien — und warum „Student“ so aussieht', ru: 'Причастия — и почему «студент» выглядит именно так' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'A participle is a verb used as an adjective — and very often as a noun. Latin has three you need for reading. Each became a factory for modern vocabulary, because medieval and early-modern scholars simply took the Latin form and used it as a word.',
            de: 'Ein Partizip ist ein Verb, das wie ein Adjektiv — und sehr oft wie ein Substantiv — gebraucht wird. Fürs Lesen brauchst du drei. Jedes wurde zur Fabrik für modernen Wortschatz, weil Gelehrte im Mittelalter und in der frühen Neuzeit die lateinische Form einfach als Wort übernahmen.',
            ru: 'Причастие — это глагол в роли прилагательного, а очень часто и существительного. Для чтения нужны три латинских причастия. Каждое стало фабрикой современной лексики: средневековые и новоевропейские учёные просто брали латинскую форму и использовали её как слово.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'The three participles you will meet', de: 'Die drei Partizipien, die dir begegnen', ru: 'Три причастия, которые вы встретите' },
          head: [
            { en: 'Type', de: 'Art', ru: 'Тип' },
            { en: 'Endings', de: 'Endungen', ru: 'Окончания' },
            { en: 'Meaning', de: 'Bedeutung', ru: 'Значение' },
            { en: 'Latin', de: 'Latein', ru: 'Латынь' },
            'DE',
            'EN',
            'RU',
          ],
          latinCols: [3],
          rows: [
            [{ en: 'Perfect passive', de: 'Partizip Perfekt Passiv (PPP)', ru: 'Страдательное прошедшего времени' }, '-tus, -ta, -tum', { en: 'having been …-ed', de: 'ge…-t worden', ru: '…-нный, сделанный' }, 'factum', 'Fakt', 'fact', 'факт'],
            ['', '', '', 'scrīptum', 'Skript', 'script', 'скрипт'],
            ['', '', '', 'āctum', 'Akt', 'act', 'акт'],
            ['', '', '', 'data', 'Daten', 'data', 'данные'],
            [{ en: 'Present active', de: 'Partizip Präsens Aktiv (PPA)', ru: 'Действительное настоящего времени' }, '-ns, gen. -ntis', { en: '…-ing, one who …', de: '…-end, einer der …', ru: '…-щий, тот, кто …' }, 'studēns, studentis', 'Student', 'student', 'студент'],
            ['', '', '', 'docēns, docentis', 'Dozent', 'docent', 'доцент'],
            ['', '', '', 'agēns, agentis', 'Agent', 'agent', 'агент'],
            ['', '', '', 'patiēns, patientis', 'Patient', 'patient', 'пациент'],
            [{ en: 'Gerundive', de: 'Gerundivum', ru: 'Герундив' }, '-ndus, -nda, -ndum', { en: 'to be …-ed, must be …-ed', de: 'zu …-end, muss ge…-t werden', ru: 'подлежащий …, который надо …' }, 'agenda', 'Agenda', 'agenda', 'повестка (агенда)'],
            ['', '', '', 'memorandum', 'Memorandum', 'memorandum', 'меморандум'],
            ['', '', '', 'referendum', 'Referendum', 'referendum', 'референдум'],
            ['', '', '', 'dīvidendum', 'Dividende', 'dividend', 'дивиденд'],
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Why Student has a -t', de: 'Warum Student ein -t hat', ru: 'Почему в «студенте» есть -т' },
          body: {
            en: 'The nominative [[studēns]] hides the stem; the genitive [[studentis]] shows it: **student-**. Modern languages almost always borrow the **stem** of the oblique cases, so: *Student, Dozent, Agent, Patient*. Same with [[amāns]], [[amantis]] → *amant*.',
            de: 'Der Nominativ [[studēns]] verdeckt den Stamm; der Genitiv [[studentis]] zeigt ihn: **student-**. Moderne Sprachen übernehmen fast immer den **Stamm der obliquen Kasus**, deshalb: *Student, Dozent, Agent, Patient*. Ebenso [[amāns]], [[amantis]] → *Amant*.',
            ru: 'Именительный падеж [[studēns]] скрывает основу, родительный [[studentis]] показывает её: **student-**. Современные языки почти всегда заимствуют **основу косвенных падежей**, поэтому: *студент, доцент, агент, пациент*. Так же [[amāns]], [[amantis]] → франц. *amant* (любовник).',
          },
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Data = “things given”', de: 'Daten = „Gegebenes“', ru: 'Данные = «то, что дано»' },
          body: {
            en: '[[datum]] is the neuter perfect participle of [[dō]]: “(a thing) given”. [[data]] is its plural: “things given”. That is why purists treat *data* as plural. German *Datum* (a date) is the same word: medieval letters ended *datum Romae …* — “given at Rome on …”. Russian **данные** is a perfect calque: *данные* = “given (things)”.',
            de: '[[datum]] ist das neutrale Partizip Perfekt von [[dō]]: „(etwas) Gegebenes“. [[data]] ist der Plural: „Gegebenes, Gegebenheiten“. Deshalb ist *Daten* ein Plural. Das deutsche *Datum* ist dasselbe Wort: Mittelalterliche Briefe endeten mit *datum Romae …* — „gegeben zu Rom am …“. Russisch **данные** ist eine perfekte Lehnübersetzung: „die gegebenen (Dinge)“.',
            ru: '[[datum]] — причастие перфекта среднего рода от [[dō]]: «(нечто) данное». [[data]] — множественное число: «данные вещи». Поэтому пуристы считают английское *data* множественным числом. Немецкое *Datum* (дата) — то же слово: средневековые письма заканчивались *datum Romae …* — «дано в Риме …». А русское **данные** — точная калька: «то, что дано».',
          },
        },
        {
          kind: 'callout',
          tone: 'culture',
          title: { en: 'Agenda, memorandum, Amanda', de: 'Agenda, Memorandum, Amanda', ru: 'Agenda, memorandum, Amanda' },
          body: {
            en: 'The gerundive says what **must** happen. [[agenda]] = “things to be done” (neuter plural of [[agendus]], from [[agō]]). [[memorandum]] = “(a thing) to be remembered”. [[referendum]] = “(a matter) to be referred” to the people. And the name **Amanda** is the feminine gerundive of [[amō]]: “she who must be loved”.',
            de: 'Das Gerundivum sagt, was geschehen **muss**. [[agenda]] = „was zu tun ist“ (Neutrum Plural von [[agendus]], zu [[agō]]). [[memorandum]] = „(etwas) zu Erinnerndes“. [[referendum]] = „(eine Sache,) die dem Volk vorzulegen ist“. Und der Name **Amanda** ist das feminine Gerundivum von [[amō]]: „die zu Liebende“.',
            ru: 'Герундив говорит о том, что **должно** произойти. [[agenda]] = «то, что надлежит сделать» (ср. р. мн. ч. от [[agendus]], от [[agō]]). [[memorandum]] = «(то, что) следует помнить». [[referendum]] = «(вопрос,) который надо передать» народу. А имя **Аманда** — герундив женского рода от [[amō]]: «та, которую должно любить».',
          },
        },
        {
          kind: 'match',
          id: 'l8-match-part',
          prompt: { en: 'Match the Latin source to the modern word(s)', de: 'Ordne die lateinische Quelle dem modernen Wort zu', ru: 'Сопоставьте латинский источник и современное слово' },
          pairs: [
            { left: 'studēns, studentis', right: 'Student / student / студент' },
            { left: 'docēns, docentis', right: 'Dozent / docent / доцент' },
            { left: 'agenda', right: 'Agenda / agenda / повестка дня' },
            { left: 'memorandum', right: 'Memorandum / memo / меморандум' },
            { left: 'referendum', right: 'Referendum / referendum / референдум' },
            { left: 'data', right: 'Daten / data / данные' },
            { left: 'factum', right: 'Fakt / fact / факт' },
            { left: 'scrīptum', right: 'Skript / script / скрипт' },
            { left: 'cōnsēnsus', right: 'Konsens / consensus / консенсус' },
            { left: 'cōnspectus', right: 'Konspekt / conspectus / конспект' },
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Careful: not everything is a participle', de: 'Vorsicht: nicht alles ist ein Partizip', ru: 'Осторожно: не всё — причастие' },
          body: {
            en: '- [[cōnsēnsus]] and [[cōnspectus]] are **4th-declension nouns** built on the participle stem of [[cōnsentiō]] (“agree”) and [[cōnspiciō]] (“look at”): “agreement”, “overview”. Same stem, different word class.\n- [[documentum]] (*Dokument*) is **not** a participle at all: it is [[doceō]] (“teach, show”) + the noun suffix **-mentum** = “a means of showing, proof”. Compare [[monumentum]], [[instrumentum]].',
            de: '- [[cōnsēnsus]] und [[cōnspectus]] sind **Substantive der u-Deklination**, gebildet auf dem Partizipstamm von [[cōnsentiō]] („übereinstimmen“) und [[cōnspiciō]] („erblicken“): „Übereinstimmung“, „Überblick“. Gleicher Stamm, andere Wortart.\n- [[documentum]] (*Dokument*) ist **gar kein** Partizip: Es ist [[doceō]] („lehren, zeigen“) + Substantivsuffix **-mentum** = „Mittel zum Zeigen, Beweis“. Vergleiche [[monumentum]], [[instrumentum]].',
            ru: '- [[cōnsēnsus]] и [[cōnspectus]] — **существительные 4-го склонения**, образованные от причастной основы глаголов [[cōnsentiō]] («соглашаться») и [[cōnspiciō]] («обозревать»): «согласие», «обзор». Основа та же, часть речи другая.\n- [[documentum]] (*документ*) — **вовсе не** причастие: это [[doceō]] («учить, показывать») + суффикс существительного **-mentum** = «средство показать, доказательство». Ср. [[monumentum]], [[instrumentum]].',
          },
        },
        {
          kind: 'quiz',
          id: 'l8-part-quiz',
          title: { en: 'Which participle?', de: 'Welches Partizip?', ru: 'Какое причастие?' },
          questions: [
            {
              prompt: { en: 'A *referendum* is literally…', de: 'Ein *Referendum* ist wörtlich…', ru: '*Референдум* буквально — это…' },
              options: [
                { en: 'something that has been referred', de: 'etwas, das vorgelegt worden ist', ru: 'то, что уже передано' },
                { en: 'something to be referred', de: 'etwas, das vorzulegen ist', ru: 'то, что следует передать' },
                { en: 'someone who refers', de: 'jemand, der vorlegt', ru: 'тот, кто передаёт' },
              ],
              answer: 1,
              explain: { en: '**-nd-** = gerundive = “to be done”.', de: '**-nd-** = Gerundivum = „zu tun“.', ru: '**-nd-** = герундив = «подлежащее исполнению».' },
            },
            {
              prompt: { en: 'An *agent* is etymologically…', de: 'Ein *Agent* ist etymologisch…', ru: '*Агент* этимологически — это…' },
              options: [
                { en: 'one who acts', de: 'einer, der handelt', ru: 'тот, кто действует' },
                { en: 'a thing done', de: 'eine getane Sache', ru: 'сделанное дело' },
                { en: 'a thing to be done', de: 'etwas zu Tuendes', ru: 'то, что надо сделать' },
              ],
              answer: 0,
              explain: { en: '[[agēns, agentis]] — present active participle of [[agō]]. Compare [[agenda]] (gerundive) and [[āctum]] (perfect passive) from the same verb.', de: '[[agēns, agentis]] — Partizip Präsens Aktiv von [[agō]]. Vergleiche [[agenda]] (Gerundivum) und [[āctum]] (PPP) vom selben Verb.', ru: '[[agēns, agentis]] — действительное причастие настоящего времени от [[agō]]. Ср. [[agenda]] (герундив) и [[āctum]] (страд. причастие) от того же глагола.' },
            },
            {
              prompt: { en: 'Which of these is NOT built on a participle?', de: 'Welches Wort ist NICHT auf einem Partizip gebaut?', ru: 'Какое слово НЕ образовано от причастия?' },
              options: ['Fakt', 'Dokument', 'Student', 'Agenda'],
              answer: 1,
              explain: { en: '*Dokument* ← [[documentum]] = [[doceō]] + **-mentum**.', de: '*Dokument* ← [[documentum]] = [[doceō]] + **-mentum**.', ru: '*Документ* ← [[documentum]] = [[doceō]] + **-mentum**.' },
            },
            {
              prompt: { en: 'In *alea iacta est*, the word *iacta* is…', de: 'In *alea iacta est* ist *iacta*…', ru: 'В *alea iacta est* слово *iacta* — это…' },
              options: [
                { en: 'perfect passive participle, feminine', de: 'PPP, feminin', ru: 'страдательное причастие прошедшего времени, ж. р.' },
                { en: 'perfect active, “she threw”', de: 'Perfekt Aktiv, „sie warf“', ru: 'перфект действ. залога, «она бросила»' },
                { en: 'gerundive', de: 'Gerundivum', ru: 'герундив' },
              ],
              answer: 0,
              explain: { en: '[[iacta]] agrees with feminine [[ālea]]: “the die (is) thrown”. *est + participle* = perfect passive: “has been thrown”.', de: '[[iacta]] richtet sich nach dem femininen [[ālea]]: „der Würfel (ist) geworfen“. *est + Partizip* = Perfekt Passiv: „ist geworfen worden“.', ru: '[[iacta]] согласуется с [[ālea]] женского рода: «жребий брошен». *est + причастие* = перфект страдательного залога.' },
            },
          ],
        },
      ],
    },
    {
      minutes: 20,
      title: { en: 'Eight famous quotes: parse & attribute', de: 'Acht berühmte Zitate: analysieren & zuordnen', ru: 'Восемь знаменитых цитат: разбор и авторство' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Tag every word, then read the literal translation and the source. Notice how many of these quotes are built on exactly what you just learnt: imperatives, perfects and participles.',
            de: 'Bestimme jedes Wort, dann lies die wörtliche Übersetzung und die Quelle. Achte darauf, wie viele dieser Zitate genau auf dem beruhen, was du gerade gelernt hast: Imperative, Perfektformen und Partizipien.',
            ru: 'Определите каждое слово, затем прочитайте буквальный перевод и источник. Обратите внимание, сколько цитат построено ровно на том, что мы только что прошли: повелительное наклонение, перфект и причастия.',
          },
        },
        {
          kind: 'parse',
          id: 'l8-parse-quotes',
          prompt: { en: 'Tag each word of the quote', de: 'Bestimme jedes Wort des Zitats', ru: 'Определите каждое слово цитаты' },
          sentences: [
            {
              words: [
                { w: 'Carpe', answer: 'imp', options: ['verb', 'imp', 'inf'], explain: { en: 'imperative sg. of [[carpō]] “pluck, pick”', de: 'Imperativ Sg. von [[carpō]] „pflücken“', ru: 'повелит. накл. ед. ч. от [[carpō]] «срывать»' } },
                { w: 'diem', answer: 'acc', options: ['nom', 'acc', 'abl'], explain: { en: 'acc. of [[diēs]] “day” — the object', de: 'Akk. von [[diēs]] „Tag“ — das Objekt', ru: 'вин. п. от [[diēs]] «день» — дополнение' } },
              ],
              translation: { en: '“Pluck the day.” — Horace, *Odes* 1.11', de: '„Pflücke den Tag.“ — Horaz, *Oden* 1,11', ru: '«Срывай день». — Гораций, *Оды* 1.11' },
            },
            {
              words: [
                { w: 'Memento', answer: 'imp', options: ['imp', 'verb', 'part'], explain: { en: 'imperative of the defective verb [[meminī]] “remember”', de: 'Imperativ des defektiven Verbs [[meminī]] „sich erinnern“', ru: 'повелит. накл. недостаточного глагола [[meminī]] «помнить»' } },
                { w: 'mori', answer: 'inf', options: ['inf', 'gen', 'imp'], explain: { en: 'infinitive of [[morior]] “die”', de: 'Infinitiv von [[morior]] „sterben“', ru: 'инфинитив от [[morior]] «умирать»' } },
              ],
              translation: { en: '“Remember to die” → remember that you will die. — traditional', de: '„Gedenke zu sterben“ → bedenke, dass du sterben wirst. — traditionell', ru: '«Помни умереть» → помни, что ты смертен. — традиционное изречение' },
            },
            {
              words: [
                { w: 'Cogito', answer: 'verb', options: ['verb', 'inf', 'nom'], explain: { en: '1st sg. present: “I think”', de: '1. Sg. Präsens: „ich denke“', ru: '1 л. ед. ч. наст. вр.: «я мыслю»' } },
                { w: 'ergo', answer: 'conj', options: ['conj', 'prep', 'verb'], explain: { en: '“therefore” — strictly an adverb used as a connector', de: '„also“ — eigentlich ein Adverb in verbindender Funktion', ru: '«следовательно» — строго говоря, наречие в роли союза' } },
                { w: 'sum', answer: 'verb', options: ['verb', 'acc', 'pron'], explain: { en: '“I am”', de: '„ich bin“', ru: '«я существую»' } },
              ],
              translation: { en: '“I think, therefore I am.” — Descartes (Latin in *Principia philosophiae*, 1644; French in the *Discours*, 1637)', de: '„Ich denke, also bin ich.“ — Descartes (lateinisch in den *Principia philosophiae*, 1644; französisch im *Discours*, 1637)', ru: '«Мыслю, следовательно, существую». — Декарт (по-латыни в *Principia philosophiae*, 1644; по-французски в «Рассуждении о методе», 1637)' },
            },
            {
              words: [
                { w: 'Alea', answer: 'nom', options: ['nom', 'abl', 'acc'], explain: { en: '“the die” — subject', de: '„der Würfel“ — Subjekt', ru: '«жребий (игральная кость)» — подлежащее' } },
                { w: 'iacta', answer: 'part', options: ['part', 'verb', 'adj'], explain: { en: 'perfect passive participle of [[iaciō]] “throw”', de: 'PPP von [[iaciō]] „werfen“', ru: 'страд. причастие прош. вр. от [[iaciō]] «бросать»' } },
                { w: 'est', answer: 'verb', options: ['verb', 'conj', 'part'] },
              ],
              translation: { en: '“The die has been cast.” — Caesar crossing the Rubicon, 49 BC, as reported by Suetonius (*Divus Iulius* 32)', de: '„Der Würfel ist geworfen.“ — Caesar am Rubikon, 49 v. Chr., überliefert von Sueton (*Divus Iulius* 32)', ru: '«Жребий брошен». — Цезарь при переходе Рубикона, 49 г. до н. э., в передаче Светония (*Божественный Юлий*, 32)' },
            },
            {
              words: [
                { w: 'Sic', answer: 'adv', options: ['adv', 'conj', 'prep'], explain: { en: '“thus, so”', de: '„so“', ru: '«так»' } },
                { w: 'transit', answer: 'verb', options: ['verb', 'part', 'inf'], explain: { en: '3rd sg. of [[trānseō]] “go across, pass”', de: '3. Sg. von [[trānseō]] „hinübergehen, vergehen“', ru: '3 л. ед. ч. от [[trānseō]] «переходить, проходить»' } },
                { w: 'gloria', answer: 'nom', options: ['nom', 'abl', 'gen'] },
                { w: 'mundi', answer: 'gen', options: ['gen', 'nom', 'dat'], explain: { en: '“of the world”', de: '„der Welt“', ru: '«мира»' } },
              ],
              translation: { en: '“Thus passes the glory of the world.” — from the papal coronation ritual', de: '„So vergeht der Ruhm der Welt.“ — aus dem Ritus der Papstkrönung', ru: '«Так проходит слава мира». — из обряда папской коронации' },
            },
            {
              words: [
                { w: 'Per', answer: 'prep', options: ['prep', 'adv', 'conj'], explain: { en: '“through” + acc.', de: '„durch“ + Akk.', ru: '«через» + вин. п.' } },
                { w: 'aspera', answer: 'acc', options: ['acc', 'nom', 'abl'], explain: { en: 'neuter pl. of [[asper]] “rough”: “rough things, hardships”', de: 'Neutrum Pl. von [[asper]] „rau“: „Raues, Mühsal“', ru: 'ср. р. мн. ч. от [[asper]] «шероховатый, суровый»: «тернии, трудности»' } },
                { w: 'ad', answer: 'prep', options: ['prep', 'adv', 'conj'], explain: { en: '“to, towards” + acc.', de: '„zu, hin zu“ + Akk.', ru: '«к» + вин. п.' } },
                { w: 'astra', answer: 'acc', options: ['acc', 'nom', 'gen'], explain: { en: 'pl. of [[astrum]] “star”', de: 'Pl. von [[astrum]] „Stern“', ru: 'мн. ч. от [[astrum]] «звезда»' } },
              ],
              translation: { en: '“Through rough things to the stars.” — traditional motto; compare Seneca, *Hercules Furens*: “non est ad astra mollis e terris via”', de: '„Durch das Raue zu den Sternen.“ — traditionelles Motto; vgl. Seneca, *Hercules furens*: „non est ad astra mollis e terris via“', ru: '«Через тернии к звёздам». — традиционный девиз; ср. Сенека, «Геркулес в безумии»: «non est ad astra mollis e terris via»' },
            },
            {
              words: [
                { w: 'Veni', answer: 'verb', options: ['verb', 'imp', 'inf'], explain: { en: 'perfect 1st sg. of [[veniō]]', de: 'Perfekt 1. Sg. von [[veniō]]', ru: 'перфект 1 л. ед. ч. от [[veniō]]' } },
                { w: 'vidi', answer: 'verb', options: ['verb', 'imp', 'inf'], explain: { en: 'perfect 1st sg. of [[videō]]', de: 'Perfekt 1. Sg. von [[videō]]', ru: 'перфект 1 л. ед. ч. от [[videō]]' } },
                { w: 'vici', answer: 'verb', options: ['verb', 'imp', 'inf'], explain: { en: 'perfect 1st sg. of [[vincō]]', de: 'Perfekt 1. Sg. von [[vincō]]', ru: 'перфект 1 л. ед. ч. от [[vincō]]' } },
              ],
              translation: { en: '“I came, I saw, I conquered.” — Caesar after the battle of Zela, 47 BC (reported by Suetonius and Plutarch)', de: '„Ich kam, ich sah, ich siegte.“ — Caesar nach der Schlacht bei Zela, 47 v. Chr. (überliefert von Sueton und Plutarch)', ru: '«Пришёл, увидел, победил». — Цезарь после битвы при Зеле, 47 г. до н. э. (сообщают Светоний и Плутарх)' },
            },
            {
              words: [
                { w: 'Acta', answer: 'part', options: ['part', 'verb', 'acc'], explain: { en: 'perfect passive participle of [[agō]] “act, perform”, feminine to agree with *fabula*', de: 'PPP von [[agō]] „aufführen“, feminin wegen *fabula*', ru: 'страд. причастие прош. вр. от [[agō]] «играть (пьесу)», ж. р. по *fabula*' } },
                { w: 'est', answer: 'verb', options: ['verb', 'conj', 'part'] },
                { w: 'fabula', answer: 'nom', options: ['nom', 'abl', 'acc'], explain: { en: '“story, play”', de: '„Geschichte, Theaterstück“', ru: '«история, пьеса»' } },
              ],
              translation: { en: '“The play has been performed.” — traditionally linked with Augustus’ death (see note below)', de: '„Das Stück ist gespielt.“ — traditionell mit dem Tod des Augustus verbunden (siehe Hinweis unten)', ru: '«Пьеса сыграна». — по традиции связывается со смертью Августа (см. примечание ниже)' },
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'culture',
          title: { en: 'Behind the quotes', de: 'Hinter den Zitaten', ru: 'За цитатами' },
          body: {
            en: '- **Carpe diem**: [[carpō]] is a farmer’s word — picking fruit while it is ripe. The line goes on: *quam minimum credula postero* — “trusting as little as possible in tomorrow”.\n- **Alea iacta est**: Suetonius gives the order *iacta alea est*; Plutarch says Caesar spoke the line in Greek, quoting the comic poet Menander.\n- **Sic transit gloria mundi**: during a papal coronation a strand of flax was burnt before the new pope while these words were said.\n- **Acta est fabula**: Suetonius (*Augustus* 99) reports that the dying Augustus asked his friends whether he had played his part in the farce (*mimus*) of life well, and asked for their applause. The Latin phrase itself is the traditional summary; Roman comedies ended with the call *plaudite!* — “applaud!”.',
            de: '- **Carpe diem**: [[carpō]] ist ein Bauernwort — Früchte pflücken, solange sie reif sind. Der Vers geht weiter: *quam minimum credula postero* — „und traue so wenig wie möglich dem morgigen Tag“.\n- **Alea iacta est**: Sueton hat die Wortstellung *iacta alea est*; Plutarch berichtet, Caesar habe den Satz auf Griechisch gesagt, als Zitat des Komödiendichters Menander.\n- **Sic transit gloria mundi**: Bei der Papstkrönung wurde vor dem neuen Papst ein Büschel Flachs verbrannt, während diese Worte gesprochen wurden.\n- **Acta est fabula**: Sueton (*Augustus* 99) berichtet, der sterbende Augustus habe seine Freunde gefragt, ob er seine Rolle im Possenspiel (*mimus*) des Lebens gut gespielt habe, und um Beifall gebeten. Der lateinische Satz selbst ist die traditionelle Zusammenfassung; römische Komödien endeten mit dem Ruf *plaudite!* — „klatscht Beifall!“.',
            ru: '- **Carpe diem**: [[carpō]] — крестьянское слово: срывать плоды, пока они спелые. Стих продолжается: *quam minimum credula postero* — «как можно меньше доверяя завтрашнему дню».\n- **Alea iacta est**: у Светония порядок слов *iacta alea est*; Плутарх сообщает, что Цезарь произнёс эти слова по-гречески, цитируя комедиографа Менандра.\n- **Sic transit gloria mundi**: при коронации папы перед ним сжигали пучок льна, произнося эти слова.\n- **Acta est fabula**: Светоний (*Август*, 99) рассказывает, что умирающий Август спросил друзей, хорошо ли он сыграл свою роль в фарсе (*mimus*) жизни, и попросил аплодисментов. Сама латинская фраза — традиционная формула; римские комедии заканчивались призывом *plaudite!* — «рукоплещите!».',
          },
        },
        {
          kind: 'quiz',
          id: 'l8-attrib',
          title: { en: 'Who said it?', de: 'Wer hat es gesagt?', ru: 'Кто это сказал?' },
          questions: [
            { prompt: { en: 'Source of', de: 'Quelle von', ru: 'Источник' }, la: 'Carpe diem', options: [{ en: 'Horace', de: 'Horaz', ru: 'Гораций' }, { en: 'Virgil', de: 'Vergil', ru: 'Вергилий' }, { en: 'Seneca', de: 'Seneca', ru: 'Сенека' }], answer: 0 },
            { prompt: { en: 'Which quote contains three perfect-tense verbs?', de: 'Welches Zitat enthält drei Perfektformen?', ru: 'В какой цитате три глагола в перфекте?' }, options: ['Veni vidi vici', 'Cogito ergo sum', 'Carpe diem'], answer: 0 },
            { prompt: { en: 'Which quotes contain a perfect passive participle?', de: 'Welche Zitate enthalten ein PPP?', ru: 'В каких цитатах есть страдательное причастие прошедшего времени?' }, options: ['Alea iacta est / Acta est fabula', 'Memento mori / Carpe diem', 'Per aspera ad astra / Sic transit gloria mundi'], answer: 0 },
            { prompt: { en: '*Memento* is the imperative of…', de: '*Memento* ist der Imperativ von…', ru: '*Memento* — повелительное наклонение от…' }, options: ['meminī', 'memoria', 'mēns'], answer: 0, explain: { en: '[[meminī]] is defective: perfect in form, present in meaning (“I remember”). Its imperative is [[mementō]].', de: '[[meminī]] ist defektiv: Perfektform, Präsensbedeutung („ich erinnere mich“). Sein Imperativ ist [[mementō]].', ru: '[[meminī]] — недостаточный глагол: форма перфекта, значение настоящего («помню»). Его повелительное наклонение — [[mementō]].' } },
            { prompt: { en: 'In which year did Descartes publish the Latin *cogito ergo sum*?', de: 'In welchem Jahr veröffentlichte Descartes das lateinische *cogito ergo sum*?', ru: 'В каком году Декарт опубликовал латинское *cogito ergo sum*?' }, options: ['1637', '1644', '1687'], answer: 1, explain: { en: '*Principia philosophiae*, 1644. The 1637 *Discours* has the French *je pense, donc je suis*.', de: '*Principia philosophiae*, 1644. Der *Discours* von 1637 hat das französische *je pense, donc je suis*.', ru: '*Principia philosophiae*, 1644. В «Рассуждении о методе» 1637 года — французское *je pense, donc je suis*.' } },
          ],
        },
        {
          kind: 'translate',
          id: 'l8-translate-quotes',
          prompt: { en: 'Translate each quote literally, then compare', de: 'Übersetze jedes Zitat wörtlich, dann vergleiche', ru: 'Переведите каждую цитату буквально, затем сверьте' },
          items: [
            { la: 'Carpe diem', answer: { en: 'Pluck (seize) the day.', de: 'Pflücke (nutze) den Tag.', ru: 'Срывай (лови) день.' } },
            { la: 'Memento mori', answer: { en: 'Remember to die — remember that you are mortal.', de: 'Gedenke zu sterben — bedenke, dass du sterblich bist.', ru: 'Помни умереть — помни, что ты смертен.' } },
            { la: 'Cogito ergo sum', answer: { en: 'I think, therefore I am.', de: 'Ich denke, also bin ich.', ru: 'Мыслю, следовательно, существую.' } },
            { la: 'Alea iacta est', answer: { en: 'The die has been thrown.', de: 'Der Würfel ist geworfen (worden).', ru: 'Жребий брошен.' } },
            { la: 'Sic transit gloria mundi', answer: { en: 'Thus passes the glory of the world.', de: 'So vergeht der Ruhm der Welt.', ru: 'Так проходит слава мира.' } },
            { la: 'Per aspera ad astra', answer: { en: 'Through rough things to the stars.', de: 'Durch das Raue zu den Sternen.', ru: 'Через тернии (трудности) к звёздам.' } },
            { la: 'Veni vidi vici', answer: { en: 'I came, I saw, I conquered.', de: 'Ich kam, ich sah, ich siegte.', ru: 'Пришёл, увидел, победил.' } },
            { la: 'Acta est fabula', answer: { en: 'The play has been performed (is over).', de: 'Das Stück ist gespielt (aus).', ru: 'Пьеса сыграна (окончена).' } },
          ],
        },
      ],
    },
    {
      minutes: 5,
      title: { en: 'Harry Mount: pick 2 chapters', de: 'Harry Mount: 2 Kapitel auswählen', ru: 'Гарри Маунт: выбрать 2 главы' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Harry Mount’s *Amo, Amas, Amat and All That* is light and anecdotal — perfect for evenings. Skim the table of contents and pick **two chapters** for this week, ideally ones that touch today’s topics (verbs, famous quotes, Latin in English). If momentum is good, also try *Familia Romana* cap. III–IV.',
            de: 'Harry Mounts *Amo, Amas, Amat and All That* ist leicht und voller Anekdoten — ideal für den Abend. Überfliege das Inhaltsverzeichnis und wähle **zwei Kapitel** für diese Woche, am besten solche zu den heutigen Themen (Verben, berühmte Zitate, Latein im Englischen). Wenn es gut läuft, zusätzlich *Familia Romana* cap. III–IV.',
            ru: '*Amo, Amas, Amat and All That* Гарри Маунта — лёгкая книга, полная анекдотов, как раз для вечера. Просмотрите оглавление и выберите **две главы** на эту неделю — лучше те, что касаются сегодняшних тем (глаголы, знаменитые цитаты, латынь в английском). Если темп хороший — ещё *Familia Romana*, главы III–IV.',
          },
        },
        { kind: 'notepad', id: 'l8-mount', prompt: { en: 'My two chapters for this week', de: 'Meine zwei Kapitel für diese Woche', ru: 'Мои две главы на эту неделю' }, placeholder: { en: 'Chapter … — why …', de: 'Kapitel … — warum …', ru: 'Глава … — почему …' } },
      ],
    },
    {
      minutes: 0,
      title: { en: 'Practice & homework', de: 'Übung & Hausaufgabe', ru: 'Практика и домашнее задание' },
      blocks: [
        {
          kind: 'flashcards',
          id: 'l8-cards',
          title: { en: 'Verbs and words from the quotes', de: 'Verben und Wörter aus den Zitaten', ru: 'Глаголы и слова из цитат' },
          cards: [
            { la: 'videō, vīdī, vīsum', back: { en: 'see', de: 'sehen', ru: 'видеть' } },
            { la: 'veniō, vēnī, ventum', back: { en: 'come', de: 'kommen', ru: 'приходить' } },
            { la: 'vincō, vīcī, victum', back: { en: 'conquer, win', de: 'siegen, besiegen', ru: 'побеждать' } },
            { la: 'dīcō, dīxī, dictum', back: { en: 'say', de: 'sagen', ru: 'говорить' } },
            { la: 'faciō, fēcī, factum', back: { en: 'do, make', de: 'machen, tun', ru: 'делать' } },
            { la: 'scrībō, scrīpsī, scrīptum', back: { en: 'write', de: 'schreiben', ru: 'писать' } },
            { la: 'agō, ēgī, āctum', back: { en: 'do, drive, perform', de: 'handeln, treiben, aufführen', ru: 'действовать, вести, играть (пьесу)' } },
            { la: 'dō, dedī, datum', back: { en: 'give', de: 'geben', ru: 'давать' } },
            { la: 'sum, fuī', back: { en: 'be', de: 'sein', ru: 'быть' } },
            { la: 'meminī', back: { en: 'I remember (perfect form, present meaning)', de: 'ich erinnere mich (Perfektform, Präsensbedeutung)', ru: 'помню (форма перфекта, значение настоящего)' } },
            { la: 'carpō', back: { en: 'pluck, pick, seize', de: 'pflücken, ergreifen', ru: 'срывать, ловить' } },
            { la: 'cōgitō', back: { en: 'think', de: 'denken', ru: 'мыслить, думать' } },
            { la: 'ālea', back: { en: 'die, dice game, risk', de: 'Würfel, Würfelspiel, Wagnis', ru: 'игральная кость, азартная игра, риск' } },
            { la: 'glōria', back: { en: 'glory, fame', de: 'Ruhm', ru: 'слава' } },
            { la: 'mundus', back: { en: 'world', de: 'Welt', ru: 'мир' } },
            { la: 'astrum', back: { en: 'star', de: 'Stern', ru: 'звезда' } },
            { la: 'fābula', back: { en: 'story, play', de: 'Geschichte, Theaterstück', ru: 'история, пьеса' } },
          ],
        },
        {
          kind: 'notepad',
          id: 'l8-hw-words',
          prompt: { en: 'Homework: 5 modern words from participles — trace each one', de: 'Hausaufgabe: 5 moderne Wörter aus Partizipien — jedes zurückverfolgen', ru: 'Домашнее задание: 5 современных слов от причастий — проследить происхождение' },
          placeholder: {
            en: 'word — Latin form — which participle — literal meaning\ne.g. Konsens — cōnsēnsus (noun on the participle stem of cōnsentiō) — “agreement”',
            de: 'Wort — lateinische Form — welches Partizip — wörtliche Bedeutung\nz. B. Konsens — cōnsēnsus (Substantiv auf dem Partizipstamm von cōnsentiō) — „Übereinstimmung“',
            ru: 'слово — латинская форма — какое причастие — буквальное значение\nнапр. конспект — cōnspectus (существительное на основе причастия cōnspiciō) — «обзор»',
          },
        },
      ],
    },
  ],
  materials: [
    { label: 'Harry Mount — Amo, Amas, Amat and All That', note: { en: 'light, anecdotal; good for context', de: 'leicht, anekdotisch; gut für den Kontext', ru: 'лёгкая, с анекдотами; хороша для контекста' } },
    { label: 'Ørberg — Lingua Latina per se illustrata: Familia Romana, cap. III–IV', note: { en: 'optional, if momentum is good', de: 'optional, wenn es gut läuft', ru: 'по желанию, если темп хороший' } },
  ],
  homework: [
    {
      en: 'Anki: DCC core vocabulary, words 250–300.',
      de: 'Anki: DCC-Grundwortschatz, Wörter 250–300.',
      ru: 'Anki: базовая лексика DCC, слова 250–300.',
    },
    {
      en: 'Find 5 modern words that come from participles (German, English or Russian — e.g. Konsens, конспект; careful with Dokument, which is a -mentum noun) and trace each one to its Latin form.',
      de: 'Finde 5 moderne Wörter, die von Partizipien stammen (deutsch, englisch oder russisch — z. B. Konsens, конспект; Vorsicht bei Dokument, einem -mentum-Substantiv) und verfolge jedes zu seiner lateinischen Form zurück.',
      ru: 'Найти 5 современных слов, происходящих от причастий (немецких, английских или русских — например, Konsens, конспект; осторожно с «документом» — это существительное на -mentum) и проследить каждое до латинской формы.',
    },
    {
      en: 'Read the two Harry Mount chapters you picked.',
      de: 'Die zwei ausgewählten Kapitel von Harry Mount lesen.',
      ru: 'Прочитать две выбранные главы Гарри Маунта.',
    },
  ],
  doneWhen: [
    {
      en: 'I can explain why “Student”, “agenda” and “data” look the way they do.',
      de: 'Ich kann erklären, warum „Student“, „Agenda“ und „Daten“ so aussehen, wie sie aussehen.',
      ru: 'Могу объяснить, почему слова «студент», «agenda» и «data» выглядят именно так.',
    },
    {
      en: 'I can translate all 8 quotes literally.',
      de: 'Ich kann alle 8 Zitate wörtlich übersetzen.',
      ru: 'Могу буквально перевести все 8 цитат.',
    },
  ],
};

export default l08;
