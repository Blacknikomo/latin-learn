import type { Lesson, L, Tag } from '../types';

const X = (en: string, de: string, ru: string): L => ({ en, de, ru });

/* Case labels for paradigm fills. */
const NOM = X('Nominative', 'Nominativ', 'Именительный');
const GEN = X('Genitive', 'Genitiv', 'Родительный');
const DAT = X('Dative', 'Dativ', 'Дательный');
const ACC = X('Accusative', 'Akkusativ', 'Винительный');
const ABL = X('Ablative', 'Ablativ', 'Аблатив');
const sg = (c: L): L => ({ en: c.en + ' sg.', de: c.de + ' Sg.', ru: c.ru + ', ед. ч.' });
const pl = (c: L): L => ({ en: c.en + ' pl.', de: c.de + ' Pl.', ru: c.ru + ', мн. ч.' });

const CASES: Tag[] = ['nom', 'gen', 'acc', 'abl'];

const l05: Lesson = {
  id: 5,
  date: '2026-10-16',
  title: {
    en: 'Adjectives, 3rd declension, legal & medical Latin',
    de: 'Adjektive, 3. Deklination, juristisches & medizinisches Latein',
    ru: 'Прилагательные, 3-е склонение, юридическая и медицинская латынь',
  },
  goal: {
    en: 'Handle adjective agreement, recognise the 3rd declension, and decode legal and medical Latin.',
    de: 'Adjektiv-Kongruenz beherrschen, die 3. Deklination erkennen und juristisches sowie medizinisches Latein entschlüsseln.',
    ru: 'Освоить согласование прилагательных, узнавать 3-е склонение и расшифровывать юридическую и медицинскую латынь.',
  },
  sections: [
    /* ------------------------------------------------------------ 1. Review */
    {
      minutes: 5,
      title: { en: 'Review: Anki + 3 roots', de: 'Wiederholung: Anki + 3 Wurzeln', ru: 'Повторение: Anki + 3 корня' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Clear today’s Anki reviews (DCC 50–100). Then pick **three roots** from your table from lesson 4 and, for each, say aloud one word in German, English and Russian that contains it. Warm up with the quiz.',
            de: 'Erledige die heutigen Anki-Wiederholungen (DCC 50–100). Wähle dann **drei Wurzeln** aus deiner Tabelle aus Lektion 4 und nenne zu jeder laut ein deutsches, ein englisches und ein russisches Wort, das sie enthält. Zum Aufwärmen das Quiz.',
            ru: 'Разберите сегодняшние повторения в Anki (DCC 50–100). Затем выберите **три корня** из своей таблицы урока 4 и для каждого вслух назовите по одному немецкому, английскому и русскому слову с этим корнем. Для разминки — квиз.',
          },
        },
        {
          kind: 'quiz',
          id: 'l5-review',
          questions: [
            {
              prompt: { en: '*Konstruktion* contains the root of…', de: '*Konstruktion* enthält die Wurzel von…', ru: '*Конструкция* содержит корень…' },
              options: ['struere', 'stāre', 'currere'],
              answer: 0,
              explain: { en: '[[con]] + [[struere]] (pile up, build).', de: '[[con]] + [[struere]] (schichten, bauen).', ru: '[[con]] + [[struere]] (складывать, строить).' },
            },
            {
              prompt: { en: 'Which prefix hides in *support*?', de: 'Welches Präfix steckt in *Support*?', ru: 'Какая приставка скрыта в *support*?' },
              options: ['super-', 'sub-', 'ad-'],
              answer: 1,
              explain: { en: '[[sub]] + [[portāre]] → [[supportāre]]: *b* assimilates to *p*.', de: '[[sub]] + [[portāre]] → [[supportāre]]: *b* gleicht sich an *p* an.', ru: '[[sub]] + [[portāre]] → [[supportāre]]: *b* уподобляется *p*.' },
            },
            {
              prompt: { en: '*Inspektor* is literally someone who…', de: 'Ein *Inspektor* ist wörtlich jemand, der…', ru: '*Инспектор* — буквально тот, кто…' },
              options: [
                { en: 'looks into things', de: 'in etwas hineinschaut', ru: 'смотрит внутрь' },
                { en: 'writes things down', de: 'etwas aufschreibt', ru: 'записывает' },
                { en: 'carries things in', de: 'etwas hineinträgt', ru: 'вносит' },
              ],
              answer: 0,
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ 2. Adjectives */
    {
      minutes: 10,
      title: { en: 'Adjectives agree: bonus, bona, bonum', de: 'Adjektive richten sich nach dem Nomen: bonus, bona, bonum', ru: 'Прилагательные согласуются: bonus, bona, bonum' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'A Latin adjective takes the **same gender, number and case** as its noun: [[bonus dominus]] (a good master), [[bona puella]] (a good girl), [[bonum bellum]] (a good war). The most common adjectives use the endings you already know: 2nd declension for masculine and neuter, 1st for feminine. Dictionaries list them as [[bonus, -a, -um]].',
            de: 'Ein lateinisches Adjektiv nimmt **dasselbe Geschlecht, denselben Numerus und Kasus** an wie sein Nomen: [[bonus dominus]] (ein guter Herr), [[bona puella]] (ein gutes Mädchen), [[bonum bellum]] (ein guter Krieg). Die häufigsten Adjektive nutzen die Endungen, die du schon kennst: 2. Deklination für Maskulinum und Neutrum, 1. für Femininum. Im Wörterbuch stehen sie als [[bonus, -a, -um]].',
            ru: 'Латинское прилагательное принимает **тот же род, число и падеж**, что и существительное: [[bonus dominus]] (добрый господин), [[bona puella]] (хорошая девочка), [[bonum bellum]] (хорошая война). Самые частые прилагательные используют уже знакомые окончания: 2-го склонения для мужского и среднего рода, 1-го — для женского. В словаре они записываются так: [[bonus, -a, -um]].',
          },
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Russian does exactly this', de: 'Das Russische macht genau dasselbe', ru: 'В русском — ровно так же' },
          body: {
            en: 'Russian *добр-ый господин, добр-ая девочка, добр-ое дело* — three genders, one stem. Latin [[bon-us]], [[bon-a]], [[bon-um]] works the same way. German also agrees (*ein guter Herr, eine gute Frau, ein gutes Kind*), but marks it partly on the article; Latin has no articles, so everything sits on the ending.',
            de: 'Russisch *добр-ый господин, добр-ая девочка, добр-ое дело* — drei Geschlechter, ein Stamm. Lateinisch [[bon-us]], [[bon-a]], [[bon-um]] funktioniert genauso. Auch das Deutsche kongruiert (*ein guter Herr, eine gute Frau, ein gutes Kind*), markiert es aber teils am Artikel; Latein hat keine Artikel, also steckt alles in der Endung.',
            ru: '*Добр-ый господин, добр-ая девочка, добр-ое дело* — три рода, одна основа. Латинское [[bon-us]], [[bon-a]], [[bon-um]] работает так же. Немецкий тоже согласует (*ein guter Herr, eine gute Frau, ein gutes Kind*), но частично через артикль; в латыни артиклей нет, поэтому всё держится на окончании.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'bonus, bona, bonum — good', de: 'bonus, bona, bonum — gut', ru: 'bonus, bona, bonum — хороший' },
          head: [
            { en: 'Case', de: 'Kasus', ru: 'Падеж' },
            { en: 'Masc. sg.', de: 'Mask. Sg.', ru: 'М. р., ед.' },
            { en: 'Fem. sg.', de: 'Fem. Sg.', ru: 'Ж. р., ед.' },
            { en: 'Neut. sg.', de: 'Neutr. Sg.', ru: 'Ср. р., ед.' },
            { en: 'Masc. pl.', de: 'Mask. Pl.', ru: 'М. р., мн.' },
            { en: 'Fem. pl.', de: 'Fem. Pl.', ru: 'Ж. р., мн.' },
            { en: 'Neut. pl.', de: 'Neutr. Pl.', ru: 'Ср. р., мн.' },
          ],
          latinCols: [1, 2, 3, 4, 5, 6],
          rows: [
            [NOM, 'bonus', 'bona', 'bonum', 'bonī', 'bonae', 'bona'],
            [GEN, 'bonī', 'bonae', 'bonī', 'bonōrum', 'bonārum', 'bonōrum'],
            [DAT, 'bonō', 'bonae', 'bonō', 'bonīs', 'bonīs', 'bonīs'],
            [ACC, 'bonum', 'bonam', 'bonum', 'bonōs', 'bonās', 'bona'],
            [ABL, 'bonō', 'bonā', 'bonō', 'bonīs', 'bonīs', 'bonīs'],
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Word order: adjective usually after the noun', de: 'Wortstellung: Adjektiv meist nach dem Nomen', ru: 'Порядок слов: прилагательное обычно после существительного' },
          body: {
            en: 'Unlike English and German, Latin usually puts the adjective **after** the noun: [[Pāx Rōmāna]] (Roman peace), [[Homō sapiēns]] (wise human), [[terra incognita]], [[aqua vītae]]. Adjectives of size and quantity like [[magnus]] often come first: [[Magna Carta]], [[magnum opus]]. Putting the adjective first adds emphasis.\n\nTrap: agreement is about **gender**, not about looking alike. [[agricola]] (farmer) and [[nauta]] (sailor) are masculine nouns of the 1st declension, so: [[agricola bonus]], [[nauta bonus]].',
            de: 'Anders als im Englischen und Deutschen steht das Adjektiv im Lateinischen meist **nach** dem Nomen: [[Pāx Rōmāna]] (römischer Friede), [[Homō sapiēns]] (weiser Mensch), [[terra incognita]], [[aqua vītae]]. Adjektive der Größe und Menge wie [[magnus]] stehen oft vorn: [[Magna Carta]], [[magnum opus]]. Voranstellung betont das Adjektiv.\n\nFalle: Kongruenz betrifft das **Genus**, nicht die äußere Form. [[agricola]] (Bauer) und [[nauta]] (Seemann) sind Maskulina der 1. Deklination, also: [[agricola bonus]], [[nauta bonus]].',
            ru: 'В отличие от английского и немецкого, в латыни прилагательное обычно стоит **после** существительного: [[Pāx Rōmāna]] (римский мир), [[Homō sapiēns]] (человек разумный — как и по-русски!), [[terra incognita]], [[aqua vītae]]. Прилагательные размера и количества вроде [[magnus]] часто идут первыми: [[Magna Carta]], [[magnum opus]]. Препозиция подчёркивает прилагательное.\n\nЛовушка: согласование идёт по **роду**, а не по внешнему виду. [[agricola]] (земледелец) и [[nauta]] (моряк) — существительные мужского рода 1-го склонения, поэтому: [[agricola bonus]], [[nauta bonus]]. Сравните русское *мужчина* — тоже на *-а*, но *хороший мужчина*.',
          },
        },
        {
          kind: 'fill',
          id: 'l5-bonus',
          prompt: { en: 'Make *bonus* agree with each noun (macrons optional)', de: 'Passe *bonus* an jedes Nomen an (Makrons optional)', ru: 'Согласуйте *bonus* с каждым существительным (макроны необязательны)' },
          rows: [
            { label: X('[[dominus]] (m., nom. sg.)', '[[dominus]] (m., Nom. Sg.)', '[[dominus]] (м. р., им. ед.)'), stem: 'bon', ending: 'us' },
            { label: X('[[puella]] (f., nom. sg.)', '[[puella]] (f., Nom. Sg.)', '[[puella]] (ж. р., им. ед.)'), stem: 'bon', ending: 'a' },
            { label: X('[[bellum]] (n., nom. sg.)', '[[bellum]] (n., Nom. Sg.)', '[[bellum]] (ср. р., им. ед.)'), stem: 'bon', ending: 'um' },
            { label: X('[[agricola]] (m.!, nom. sg.)', '[[agricola]] (m.!, Nom. Sg.)', '[[agricola]] (м. р.!, им. ед.)'), stem: 'bon', ending: 'us' },
            { label: X('[[dominī]] (gen. sg.)', '[[dominī]] (Gen. Sg.)', '[[dominī]] (род. ед.)'), stem: 'bon', ending: 'ī' },
            { label: X('[[puellae]] (gen. sg.)', '[[puellae]] (Gen. Sg.)', '[[puellae]] (род. ед.)'), stem: 'bon', ending: 'ae' },
            { label: X('[[puellam]] (acc. sg.)', '[[puellam]] (Akk. Sg.)', '[[puellam]] (вин. ед.)'), stem: 'bon', ending: 'am' },
            { label: X('[[dominō]] (abl. sg.)', '[[dominō]] (Abl. Sg.)', '[[dominō]] (абл. ед.)'), stem: 'bon', ending: 'ō' },
            { label: X('[[bella]] (n., nom. pl.)', '[[bella]] (n., Nom. Pl.)', '[[bella]] (ср. р., им. мн.)'), stem: 'bon', ending: 'a' },
            { label: X('[[dominōs]] (acc. pl.)', '[[dominōs]] (Akk. Pl.)', '[[dominōs]] (вин. мн.)'), stem: 'bon', ending: 'ōs' },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ 3. Third declension */
    {
      minutes: 15,
      title: { en: '3rd declension: the genitive reveals the stem', de: '3. Deklination: der Genitiv verrät den Stamm', ru: '3-е склонение: родительный падеж выдаёт основу' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'The 3rd declension is the biggest group of Latin nouns — all genders, many shapes. Its **nominative is unpredictable**: [[rēx]], [[corpus]], [[homō]], [[nōmen]] look nothing alike. But the **genitive singular** always ends in [[-is]], and if you remove that *-is*, you get the **stem** that every other form — and almost every modern derived word — is built on.\n\n**Rule: always learn nominative + genitive together**: [[rēx, rēgis]], never just [[rēx]].',
            de: 'Die 3. Deklination ist die größte Gruppe lateinischer Nomen — alle Genera, viele Formen. Ihr **Nominativ ist unvorhersehbar**: [[rēx]], [[corpus]], [[homō]], [[nōmen]] sehen völlig verschieden aus. Der **Genitiv Singular** endet aber immer auf [[-is]], und ohne dieses *-is* bleibt der **Stamm**, auf dem alle anderen Formen — und fast alle modernen Ableitungen — aufbauen.\n\n**Regel: immer Nominativ + Genitiv zusammen lernen**: [[rēx, rēgis]], nie nur [[rēx]].',
            ru: '3-е склонение — самая большая группа латинских существительных: все роды, множество форм. Его **именительный падеж непредсказуем**: [[rēx]], [[corpus]], [[homō]], [[nōmen]] совсем не похожи друг на друга. Но **родительный единственного** всегда оканчивается на [[-is]], и если отбросить это *-is*, получится **основа**, на которой построены все остальные формы — и почти все современные производные слова.\n\n**Правило: всегда учите именительный + родительный вместе**: [[rēx, rēgis]], а не просто [[rēx]].',
          },
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'You know this from Russian', de: 'Das kennst du aus dem Russischen', ru: 'Вы знаете это по русскому' },
          body: {
            en: 'Russian has the same trick in a handful of nouns: *имя → имени*, *время → времени*, *знамя → знамени*. The nominative hides *-ен-*, the genitive shows it. And the match is not a coincidence: Latin [[nōmen, nōminis]] and Russian *имя, имени* are distant cousins from the same Indo-European word. English has a faint echo too: *child → children*.',
            de: 'Das Russische hat denselben Trick bei einigen Nomen: *имя → имени* (Name), *время → времени* (Zeit), *знамя → знамени* (Fahne). Der Nominativ versteckt *-ен-*, der Genitiv zeigt es. Und die Übereinstimmung ist kein Zufall: lateinisch [[nōmen, nōminis]] und russisch *имя, имени* sind entfernte Verwandte aus demselben indogermanischen Wort — wie auch deutsch *Name*.',
            ru: 'В русском тот же приём есть у нескольких слов: *имя → имени*, *время → времени*, *знамя → знамени*. Именительный прячет *-ен-*, родительный его показывает. И совпадение не случайно: латинское [[nōmen, nōminis]] и русское *имя, имени* — дальние родственники, восходящие к одному индоевропейскому слову (как и немецкое *Name*).',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Nominative + genitive → stem → modern words', de: 'Nominativ + Genitiv → Stamm → moderne Wörter', ru: 'Именительный + родительный → основа → современные слова' },
          head: [
            { en: 'Nom.', de: 'Nom.', ru: 'Им.' },
            { en: 'Gen.', de: 'Gen.', ru: 'Род.' },
            { en: 'Gender', de: 'Genus', ru: 'Род' },
            { en: 'Meaning', de: 'Bedeutung', ru: 'Значение' },
            { en: 'English', de: 'Englisch', ru: 'Английский' },
            { en: 'German', de: 'Deutsch', ru: 'Немецкий' },
            { en: 'Russian', de: 'Russisch', ru: 'Русский' },
          ],
          latinCols: [0, 1],
          rows: [
            ['rēx', 'rēgis', 'm.', X('king', 'König', 'царь, король'), 'regal, regalia', 'Regalien', 'регалии'],
            ['lēx', 'lēgis', 'f.', X('law', 'Gesetz', 'закон'), 'legal', 'legitim', 'легальный, легитимный'],
            ['corpus', 'corporis', 'n.', X('body', 'Körper', 'тело'), 'corporate', 'Korporation', 'корпорация'],
            ['homō', 'hominis', 'm.', X('human being', 'Mensch', 'человек'), 'hominid', 'Hominiden', 'гоминиды'],
            ['nōmen', 'nōminis', 'n.', X('name', 'Name', 'имя'), 'nominal', 'nominieren', 'номинация'],
            ['tempus', 'temporis', 'n.', X('time', 'Zeit', 'время'), 'temporary', 'temporär', 'темп (через итал. tempo)'],
            ['mors', 'mortis', 'f.', X('death', 'Tod', 'смерть'), 'mortal', 'Mortalität', '—'],
            ['pēs', 'pedis', 'm.', X('foot', 'Fuß', 'нога, стопа'), 'pedal', 'Pediküre', 'педаль'],
            ['caput', 'capitis', 'n.', X('head', 'Kopf', 'голова'), 'capital', 'Kapitel', 'капитал'],
            ['vōx', 'vōcis', 'f.', X('voice', 'Stimme', 'голос'), 'vocal', 'Vokal', 'вокал'],
            ['pāx', 'pācis', 'f.', X('peace', 'Frieden', 'мир'), 'pacify', 'Pazifist', 'пацифист'],
            ['pater', 'patris', 'm.', X('father', 'Vater', 'отец'), 'paternal', 'Patriarch', 'патриарх'],
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Why “corpus” but “corporate”?', de: 'Warum „corpus“, aber „corporate“?', ru: 'Почему «corpus», но «corporate»?' },
          body: {
            en: 'English and German derive words from the **stem**, and the stem is visible only in the genitive: [[corpus]] → [[corpor-is]] → *corpor-ate*. Historically the stem was *corpos-*; in early Latin an *s* between two vowels turned into *r* (**rhotacism**), so *corpos-is* became [[corporis]], while the nominative [[corpus]] kept its *s*. Same story: [[tempus, temporis]], [[genus, generis]] (→ *general*, *generieren*).',
            de: 'Englisch und Deutsch bilden Ableitungen vom **Stamm**, und der Stamm ist erst im Genitiv sichtbar: [[corpus]] → [[corpor-is]] → *Korpor-ation*. Ursprünglich lautete der Stamm *corpos-*; im frühen Latein wurde *s* zwischen zwei Vokalen zu *r* (**Rhotazismus**), also *corpos-is* → [[corporis]], während der Nominativ [[corpus]] sein *s* behielt. Genauso: [[tempus, temporis]], [[genus, generis]] (→ *generell*, *generieren*).',
            ru: 'Английский и немецкий образуют слова от **основы**, а основа видна только в родительном падеже: [[corpus]] → [[corpor-is]] → *корпор-ация*. Исторически основа звучала *corpos-*; в ранней латыни *s* между двумя гласными перешло в *r* (**ротацизм**), так что *corpos-is* стало [[corporis]], а именительный [[corpus]] сохранил *s*. Точно так же: [[tempus, temporis]], [[genus, generis]] (→ *генерал*, *генерировать*).',
          },
        },
        {
          kind: 'fill',
          id: 'l5-rex',
          title: 'rēx, rēgis (m.) — king',
          prompt: { en: 'Fill in the full paradigm of *rēx* (macrons optional)', de: 'Ergänze das vollständige Paradigma von *rēx* (Makrons optional)', ru: 'Заполните полную парадигму *rēx* (макроны необязательны)' },
          rows: [
            { label: sg(NOM), stem: 'rē', ending: 'x' },
            { label: sg(GEN), stem: 'rēg', ending: 'is' },
            { label: sg(DAT), stem: 'rēg', ending: 'ī' },
            { label: sg(ACC), stem: 'rēg', ending: 'em' },
            { label: sg(ABL), stem: 'rēg', ending: 'e' },
            { label: pl(NOM), stem: 'rēg', ending: 'ēs' },
            { label: pl(GEN), stem: 'rēg', ending: 'um' },
            { label: pl(DAT), stem: 'rēg', ending: 'ibus' },
            { label: pl(ACC), stem: 'rēg', ending: 'ēs' },
            { label: pl(ABL), stem: 'rēg', ending: 'ibus' },
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Neuter rule', de: 'Neutrum-Regel', ru: 'Правило среднего рода' },
          body: {
            en: 'In every neuter noun, **nominative = accusative**, and in the plural both end in **-a**. So [[corpus]] is both subject and object, plural [[corpora]] (→ *Korpora* in linguistics). This is why [[habeās corpus]] needs no change of ending.',
            de: 'Bei jedem Neutrum gilt: **Nominativ = Akkusativ**, und im Plural enden beide auf **-a**. [[corpus]] ist also Subjekt und Objekt zugleich, Plural [[corpora]] (→ *Korpora* in der Linguistik). Deshalb braucht [[habeās corpus]] keine Endungsänderung.',
            ru: 'У каждого существительного среднего рода **именительный = винительный**, а во множественном оба оканчиваются на **-a**. Значит, [[corpus]] — и подлежащее, и дополнение; мн. ч. [[corpora]] (→ *корпусы* текстов в лингвистике). Поэтому в [[habeās corpus]] окончание не меняется. Сравните русское *окно — вижу окно*.',
          },
        },
        {
          kind: 'fill',
          id: 'l5-corpus',
          title: 'corpus, corporis (n.) — body',
          prompt: { en: 'Fill in the neuter paradigm of *corpus*', de: 'Ergänze das Neutrum-Paradigma von *corpus*', ru: 'Заполните парадигму среднего рода *corpus*' },
          rows: [
            { label: sg(NOM), stem: 'corp', ending: 'us' },
            { label: sg(GEN), stem: 'corpor', ending: 'is' },
            { label: sg(DAT), stem: 'corpor', ending: 'ī' },
            { label: sg(ACC), stem: 'corp', ending: 'us' },
            { label: sg(ABL), stem: 'corpor', ending: 'e' },
            { label: pl(NOM), stem: 'corpor', ending: 'a' },
            { label: pl(GEN), stem: 'corpor', ending: 'um' },
            { label: pl(DAT), stem: 'corpor', ending: 'ibus' },
            { label: pl(ACC), stem: 'corpor', ending: 'a' },
            { label: pl(ABL), stem: 'corpor', ending: 'ibus' },
          ],
        },
        {
          kind: 'quiz',
          id: 'l5-stems',
          title: { en: 'Find the stem', de: 'Finde den Stamm', ru: 'Найдите основу' },
          questions: [
            {
              prompt: { en: 'Which genitive belongs to', de: 'Welcher Genitiv gehört zu', ru: 'Какой родительный падеж у' },
              la: 'homō',
              options: ['homī', 'hominis', 'homōnis'],
              answer: 1,
              explain: { en: 'Stem *homin-* → *hominid*, *ad hominem*.', de: 'Stamm *homin-* → *Hominiden*.', ru: 'Основа *homin-* → *гоминиды*.' },
            },
            {
              prompt: { en: 'German *Kapitel* comes from the stem of…', de: 'Deutsch *Kapitel* kommt vom Stamm von…', ru: 'Немецкое *Kapitel* образовано от основы…' },
              options: ['caput, capitis', 'capere, captum', 'campus, campī'],
              answer: 0,
              explain: { en: '[[capitulum]] = “little head”, a section heading — diminutive built on *capit-*.', de: '[[capitulum]] = „Köpfchen“, eine Abschnittsüberschrift — Verkleinerung auf Basis von *capit-*.', ru: '[[capitulum]] — «головка», заголовок раздела: уменьшительное от основы *capit-*.' },
            },
            {
              prompt: { en: 'Which word is NOT built on the stem of [[lēx, lēgis]]?', de: 'Welches Wort ist NICHT vom Stamm von [[lēx, lēgis]] gebildet?', ru: 'Какое слово НЕ образовано от основы [[lēx, lēgis]]?' },
              options: ['legal', 'legitim', 'Lektion'],
              answer: 2,
              explain: { en: '*Lektion* comes from [[legere]] (to read), [[lēctiō]]. Similar sound, different root.', de: '*Lektion* kommt von [[legere]] (lesen), [[lēctiō]]. Ähnlicher Klang, andere Wurzel.', ru: '*Лекция* — от [[legere]] (читать), [[lēctiō]]. Похоже звучит, но корень другой.' },
            },
            {
              prompt: { en: 'What is the accusative singular of', de: 'Wie lautet der Akkusativ Singular von', ru: 'Каков винительный падеж ед. ч. у' },
              la: 'nōmen (n.)',
              options: ['nōminem', 'nōmen', 'nōmina'],
              answer: 1,
              explain: { en: 'Neuter: accusative = nominative.', de: 'Neutrum: Akkusativ = Nominativ.', ru: 'Средний род: винительный = именительный.' },
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ 4. Phrases */
    {
      minutes: 20,
      title: { en: 'Legal & medical Latin: parse each phrase', de: 'Juristisches & medizinisches Latein: jede Wendung analysieren', ru: 'Юридическая и медицинская латынь: разбираем каждую фразу' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Law and medicine kept Latin longest, so their phrases are fossils of real grammar. For each phrase: read it aloud, guess the literal meaning, then reveal. After that, tag every word in the parse exercise — the case is what tells you *why* the phrase means what it means.',
            de: 'Recht und Medizin haben das Latein am längsten bewahrt, ihre Wendungen sind daher Fossilien echter Grammatik. Zu jeder Wendung: laut lesen, wörtliche Bedeutung raten, dann aufdecken. Danach in der Analyse-Übung jedes Wort bestimmen — der Kasus sagt dir, *warum* die Wendung bedeutet, was sie bedeutet.',
            ru: 'Право и медицина дольше всех хранили латынь, поэтому их формулы — окаменелости настоящей грамматики. Для каждой фразы: прочитайте вслух, угадайте буквальный смысл, затем откройте ответ. После этого разметьте каждое слово в упражнении на разбор — именно падеж объясняет, *почему* фраза значит то, что значит.',
          },
        },
        {
          kind: 'phrases',
          id: 'l5-phrases',
          items: [
            { la: 'habeās corpus', lit: X('you shall have the body', 'du sollst den Körper haben', 'да будет у тебя тело'), note: X('A writ ordering that a detained person be brought before a court (England, Habeas Corpus Act 1679). [[habeās]] = present subjunctive of [[habēre]].', 'Gerichtsbefehl, einen Inhaftierten einem Richter vorzuführen (England, Habeas Corpus Act 1679). [[habeās]] = Konjunktiv Präsens von [[habēre]].', 'Судебный приказ доставить задержанного к судье (Англия, Habeas Corpus Act 1679). [[habeās]] — сослагательное наклонение настоящего времени от [[habēre]].') },
            { la: 'prō bonō', lit: X('for the good', 'für das Gute', 'ради блага'), note: X('Short for [[prō bonō pūblicō]] — “for the public good”: unpaid professional work.', 'Kurz für [[prō bonō pūblicō]] — „für das öffentliche Wohl“: unentgeltliche Arbeit.', 'Сокращение от [[prō bonō pūblicō]] — «ради общественного блага»: бесплатная профессиональная работа.') },
            { la: 'in vitrō', lit: X('in glass', 'im Glas', 'в стекле'), note: X('In a test tube or dish, not in a living body — opposite: [[in vīvō]].', 'Im Reagenzglas, nicht im lebenden Körper — Gegenteil: [[in vīvō]].', 'В пробирке, а не в живом организме — противоположность: [[in vīvō]].') },
            { la: 'post mortem', lit: X('after death', 'nach dem Tod', 'после смерти'), note: X('[[mors, mortis]] → accusative [[mortem]] after [[post]].', '[[mors, mortis]] → Akkusativ [[mortem]] nach [[post]].', '[[mors, mortis]] → винительный [[mortem]] после [[post]].') },
            { la: 'meā culpā', lit: X('through my fault', 'durch meine Schuld', 'по моей вине'), note: X('Ablative of cause, from the Confiteor prayer: [[meā culpā, meā culpā, meā maximā culpā]].', 'Ablativ des Grundes, aus dem Schuldbekenntnis (Confiteor): [[meā culpā, meā culpā, meā maximā culpā]].', 'Аблатив причины, из покаянной молитвы Confiteor: [[meā culpā, meā culpā, meā maximā culpā]].') },
            { la: 'persōna nōn grāta', lit: X('an unwelcome person', 'eine unerwünschte Person', 'нежелательное лицо'), note: X('Diplomatic term for a diplomat the host state no longer accepts.', 'Diplomatischer Begriff für einen Diplomaten, den der Gaststaat nicht mehr akzeptiert.', 'Дипломатический термин: дипломат, которого принимающее государство больше не принимает.') },
            { la: 'in dubiō prō reō', lit: X('in doubt, for the defendant', 'im Zweifel für den Angeklagten', 'при сомнении — в пользу обвиняемого'), note: X('[[dubium]] = doubt, [[reus]] = defendant. Both prepositions take the ablative.', '[[dubium]] = Zweifel, [[reus]] = Angeklagter. Beide Präpositionen mit Ablativ.', '[[dubium]] — сомнение, [[reus]] — обвиняемый. Оба предлога требуют аблатива.') },
            { la: 'ad hominem', lit: X('to the person', 'auf den Menschen (gerichtet)', 'к человеку'), note: X('An argument attacking the person instead of the claim. [[homō, hominis]] → acc. [[hominem]].', 'Argument gegen die Person statt gegen die Sache. [[homō, hominis]] → Akk. [[hominem]].', 'Аргумент против личности, а не по существу. [[homō, hominis]] → вин. [[hominem]].') },
            { la: 'in flagrantī', lit: X('in the blazing (moment)', 'im Brennenden', 'в пылающем (моменте)'), note: X('Short for [[in flagrante dēlictō]] — “while the crime is blazing”: caught red-handed.', 'Kurz für [[in flagrante dēlictō]] — „während das Vergehen noch brennt“: auf frischer Tat.', 'Сокращение от [[in flagrante dēlictō]] — «пока преступление ещё пылает»: с поличным.') },
            { la: 'corpus dēlictī', lit: X('the body of the offence', 'der Körper des Vergehens', 'тело преступления'), note: X('In German usage: the piece of evidence. [[dēlictī]] = genitive of [[dēlictum]].', 'Im Deutschen: das Beweisstück. [[dēlictī]] = Genitiv von [[dēlictum]].', 'В немецком — вещественное доказательство. [[dēlictī]] — родительный от [[dēlictum]].') },
            { la: 'lēx speciālis', lit: X('the special law', 'das besondere Gesetz', 'специальный закон'), note: X('Principle: [[lēx speciālis dērogat lēgī generālī]] — the specific rule overrides the general one.', 'Grundsatz: [[lēx speciālis dērogat lēgī generālī]] — die speziellere Norm verdrängt die allgemeine.', 'Принцип: [[lēx speciālis dērogat lēgī generālī]] — специальная норма вытесняет общую.') },
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Prepositions choose the case', de: 'Präpositionen bestimmen den Kasus', ru: 'Предлог выбирает падеж' },
          body: {
            en: '- With **accusative**: [[ad]] (to), [[post]] (after), [[per]] (through), [[ante]] (before).\n- With **ablative**: [[prō]] (for, on behalf of), [[dē]] (from, about), [[ex]] (out of), [[sine]] (without), [[cum]] (with).\n- [[in]] takes **ablative** for location (*in vitrō* — in the glass) and **accusative** for direction (*in Italiam* — into Italy). Exactly like German *in dem Glas* vs *in das Glas*, Russian *в стекле* vs *в стекло*.',
            de: '- Mit **Akkusativ**: [[ad]] (zu), [[post]] (nach), [[per]] (durch), [[ante]] (vor).\n- Mit **Ablativ**: [[prō]] (für, zugunsten), [[dē]] (von, über), [[ex]] (aus), [[sine]] (ohne), [[cum]] (mit).\n- [[in]] steht mit **Ablativ** für den Ort (*in vitrō* — im Glas) und mit **Akkusativ** für die Richtung (*in Italiam* — nach Italien). Genau wie *in dem Glas* (wo?) vs. *in das Glas* (wohin?).',
            ru: '- С **винительным**: [[ad]] (к), [[post]] (после), [[per]] (через), [[ante]] (перед).\n- С **аблативом**: [[prō]] (за, в пользу), [[dē]] (с, о), [[ex]] (из), [[sine]] (без), [[cum]] (с).\n- [[in]] с **аблативом** — место (*in vitrō* — в стекле), с **винительным** — направление (*in Italiam* — в Италию). Ровно как русское *в стекле* (где?) и *в стекло* (куда?), немецкое *in dem Glas* / *in das Glas*.',
          },
        },
        {
          kind: 'parse',
          id: 'l5-parse',
          prompt: { en: 'Tag each word: case, preposition, verb…', de: 'Bestimme jedes Wort: Kasus, Präposition, Verb…', ru: 'Определите каждое слово: падеж, предлог, глагол…' },
          sentences: [
            {
              words: [
                { w: 'habeās', answer: 'subj', options: ['verb', 'subj', 'imp'], explain: X('Present subjunctive of [[habēre]]: “may you / you shall have”. Indicative would be [[habēs]].', 'Konjunktiv Präsens von [[habēre]]: „du mögest / sollst haben“. Indikativ wäre [[habēs]].', 'Сослагательное наклонение от [[habēre]]: «да имеешь ты». Изъявительное было бы [[habēs]].') },
                { w: 'corpus', answer: 'acc', options: ['nom', 'acc', 'gen'], explain: X('Object of *habeās* → accusative; neuter, so it looks like the nominative.', 'Objekt von *habeās* → Akkusativ; Neutrum, daher gleich dem Nominativ.', 'Дополнение к *habeās* → винительный; средний род, поэтому совпадает с именительным.') },
              ],
              translation: X('You shall have the body (in court).', 'Du sollst den Körper (vor Gericht) haben.', 'Да будет у тебя тело (в суде).'),
            },
            {
              words: [
                { w: 'prō', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'bonō', answer: 'abl', options: ['dat', 'abl', 'acc'], explain: X('[[prō]] + ablative. [[bonum]] used as a noun: “the good”.', '[[prō]] + Ablativ. [[bonum]] als Nomen: „das Gute“.', '[[prō]] + аблатив. [[bonum]] в роли существительного: «благо».') },
              ],
              translation: X('For the (public) good.', 'Für das (öffentliche) Wohl.', 'Ради (общественного) блага.'),
            },
            {
              words: [
                { w: 'in', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'vitrō', answer: 'abl', options: ['dat', 'abl', 'acc'], explain: X('[[in]] + ablative = location. [[vitrum]] = glass.', '[[in]] + Ablativ = Ort. [[vitrum]] = Glas.', '[[in]] + аблатив = место. [[vitrum]] — стекло.') },
              ],
              translation: X('In glass (in the test tube).', 'Im Glas (im Reagenzglas).', 'В стекле (в пробирке).'),
            },
            {
              words: [
                { w: 'post', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'mortem', answer: 'acc', options: ['nom', 'acc', 'abl'], explain: X('[[post]] + accusative. [[mors, mortis]] — 3rd declension, acc. *-em*.', '[[post]] + Akkusativ. [[mors, mortis]] — 3. Deklination, Akk. *-em*.', '[[post]] + винительный. [[mors, mortis]] — 3-е склонение, вин. *-em*.') },
              ],
              translation: X('After death.', 'Nach dem Tod.', 'После смерти.'),
            },
            {
              words: [
                { w: 'meā', answer: 'abl', options: ['nom', 'abl', 'gen'], explain: X('Possessive [[meus, mea, meum]] agreeing with *culpā*: ablative f. sg.', 'Possessiv [[meus, mea, meum]], kongruent mit *culpā*: Ablativ f. Sg.', 'Притяжательное [[meus, mea, meum]], согласовано с *culpā*: аблатив ж. р. ед. ч.') },
                { w: 'culpā', answer: 'abl', options: ['nom', 'abl', 'acc'], explain: X('Ablative of cause, no preposition: “through/by my fault”. The long *-ā* is the clue.', 'Ablativ des Grundes ohne Präposition: „durch meine Schuld“. Das lange *-ā* verrät es.', 'Аблатив причины без предлога: «по моей вине». Подсказка — долгое *-ā*.') },
              ],
              translation: X('Through my fault.', 'Durch meine Schuld.', 'По моей вине.'),
            },
            {
              words: [
                { w: 'persōna', answer: 'nom', options: ['nom', 'acc', 'abl'] },
                { w: 'nōn', answer: 'adv', options: ['adv', 'prep', 'conj'] },
                { w: 'grāta', answer: 'nom', options: ['nom', 'abl', 'verb'], explain: X('Adjective [[grātus, -a, -um]] (pleasing, welcome), agreeing with *persōna*: nom. f. sg.', 'Adjektiv [[grātus, -a, -um]] (angenehm, willkommen), kongruent mit *persōna*: Nom. f. Sg.', 'Прилагательное [[grātus, -a, -um]] (приятный, желанный), согласовано с *persōna*: им. ж. р. ед. ч.') },
              ],
              translation: X('A person not welcome.', 'Eine nicht willkommene Person.', 'Лицо нежеланное.'),
            },
            {
              words: [
                { w: 'in', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'dubiō', answer: 'abl', options: ['dat', 'abl', 'gen'], explain: X('[[in]] + ablative of [[dubium]] (doubt).', '[[in]] + Ablativ von [[dubium]] (Zweifel).', '[[in]] + аблатив от [[dubium]] (сомнение).') },
                { w: 'prō', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'reō', answer: 'abl', options: ['dat', 'abl', 'nom'], explain: X('[[prō]] + ablative of [[reus]] (defendant).', '[[prō]] + Ablativ von [[reus]] (Angeklagter).', '[[prō]] + аблатив от [[reus]] (обвиняемый).') },
              ],
              translation: X('In doubt, for the defendant.', 'Im Zweifel für den Angeklagten.', 'При сомнении — в пользу обвиняемого.'),
            },
            {
              words: [
                { w: 'ad', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'hominem', answer: 'acc', options: ['nom', 'acc', 'gen'], explain: X('[[ad]] + accusative of [[homō, hominis]].', '[[ad]] + Akkusativ von [[homō, hominis]].', '[[ad]] + винительный от [[homō, hominis]].') },
              ],
              translation: X('To the person.', 'Auf die Person (gerichtet).', 'К человеку (на личность).'),
            },
            {
              words: [
                { w: 'corpus', answer: 'nom', options: CASES },
                { w: 'dēlictī', answer: 'gen', options: CASES, explain: X('Genitive of [[dēlictum]]: “of the offence”.', 'Genitiv von [[dēlictum]]: „des Vergehens“.', 'Родительный от [[dēlictum]]: «преступления».') },
              ],
              translation: X('The body of the offence.', 'Der Körper des Vergehens.', 'Тело преступления.'),
            },
            {
              words: [
                { w: 'lēx', answer: 'nom', options: CASES },
                { w: 'speciālis', answer: 'nom', options: ['nom', 'gen', 'adv'], explain: X('3rd-declension adjective agreeing with *lēx*. Its genitive is also *speciālis* — here context decides.', 'Adjektiv der 3. Deklination, kongruent mit *lēx*. Der Genitiv lautet auch *speciālis* — hier entscheidet der Kontext.', 'Прилагательное 3-го склонения, согласовано с *lēx*. Родительный тоже *speciālis* — решает контекст.') },
              ],
              translation: X('The special law.', 'Das Spezialgesetz.', 'Специальный закон.'),
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'l5-phrases-quiz',
          title: { en: 'Check yourself', de: 'Selbstcheck', ru: 'Проверьте себя' },
          questions: [
            {
              prompt: { en: 'In *in dubio pro reo*, what case are *dubio* and *reo*?', de: 'Welcher Kasus sind *dubio* und *reo* in *in dubio pro reo*?', ru: 'В каком падеже *dubio* и *reo* во фразе *in dubio pro reo*?' },
              options: [
                { en: 'both ablative', de: 'beide Ablativ', ru: 'оба в аблативе' },
                { en: 'both dative', de: 'beide Dativ', ru: 'оба в дательном' },
                { en: 'ablative and dative', de: 'Ablativ und Dativ', ru: 'аблатив и дательный' },
              ],
              answer: 0,
              explain: { en: 'Both prepositions, [[in]] (location) and [[prō]], take the ablative. The 2nd-declension dative and ablative singular look the same (*-ō*) — the preposition decides.', de: 'Beide Präpositionen, [[in]] (Ort) und [[prō]], stehen mit Ablativ. Dativ und Ablativ Singular der 2. Deklination sehen gleich aus (*-ō*) — die Präposition entscheidet.', ru: 'Оба предлога, [[in]] (место) и [[prō]], требуют аблатива. Дательный и аблатив ед. ч. 2-го склонения совпадают (*-ō*) — решает предлог.' },
            },
            {
              prompt: { en: 'Why *post mortem* and not *post mors*?', de: 'Warum *post mortem* und nicht *post mors*?', ru: 'Почему *post mortem*, а не *post mors*?' },
              options: [
                { en: '*post* takes the accusative; *mors* is only the nominative', de: '*post* verlangt Akkusativ; *mors* ist nur der Nominativ', ru: '*post* требует винительного; *mors* — только именительный' },
                { en: '*mortem* is the plural', de: '*mortem* ist der Plural', ru: '*mortem* — множественное число' },
                { en: 'it is Church Latin spelling', de: 'das ist kirchenlateinische Schreibung', ru: 'это церковное написание' },
              ],
              answer: 0,
            },
            {
              prompt: { en: '*habeas* is…', de: '*habeas* ist…', ru: '*habeas* — это…' },
              options: [
                { en: 'present subjunctive: “may you have”', de: 'Konjunktiv Präsens: „du mögest haben“', ru: 'сослагательное наклонение: «да имеешь ты»' },
                { en: 'present indicative: “you have”', de: 'Indikativ Präsens: „du hast“', ru: 'изъявительное: «ты имеешь»' },
                { en: 'a noun meaning “custody”', de: 'ein Nomen für „Gewahrsam“', ru: 'существительное «содержание под стражей»' },
              ],
              answer: 0,
              explain: { en: 'Indicative [[habēs]], subjunctive [[habeās]]. The subjunctive expresses a command or wish.', de: 'Indikativ [[habēs]], Konjunktiv [[habeās]]. Der Konjunktiv drückt Befehl oder Wunsch aus.', ru: 'Изъявительное [[habēs]], сослагательное [[habeās]]. Сослагательное выражает повеление или пожелание.' },
            },
            {
              prompt: { en: 'Something was tested *in vitro*. Where?', de: 'Etwas wurde *in vitro* getestet. Wo?', ru: 'Что-то протестировали *in vitro*. Где?' },
              options: [
                { en: 'in a living organism', de: 'im lebenden Organismus', ru: 'в живом организме' },
                { en: 'in a lab vessel', de: 'im Laborgefäß', ru: 'в лабораторной посуде' },
                { en: 'in a computer simulation', de: 'in einer Computersimulation', ru: 'в компьютерной симуляции' },
              ],
              answer: 1,
              explain: { en: '“In glass”. The other two are [[in vīvō]] and the modern coinage *in silico*.', de: '„Im Glas“. Die anderen beiden heißen [[in vīvō]] und die moderne Neubildung *in silico*.', ru: '«В стекле». Два других — [[in vīvō]] и современное образование *in silico*.' },
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ 5. Familia Romana II */
    {
      minutes: 10,
      title: { en: 'Familia Romana cap. II: the genitive in action', de: 'Familia Romana Kap. II: der Genitiv in Aktion', ru: 'Familia Romana, гл. II: родительный падеж в действии' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Chapter II, *Familia Rōmāna*, introduces Iulius’s household: his wife, children and slaves. Its key grammar is the **genitive** — “whose?”. Listen to the chapter audio, then read it. Before that, warm up with these simple sentences written in the same style (they are practice sentences, not quotes from the book). Hover or tap words for glosses.',
            de: 'Kapitel II, *Familia Rōmāna*, stellt den Haushalt des Iulius vor: Frau, Kinder und Sklaven. Die Schlüsselgrammatik ist der **Genitiv** — „wessen?“. Hör dir das Kapitel-Audio an und lies es dann. Vorher wärmst du dich mit diesen einfachen Sätzen im gleichen Stil auf (Übungssätze, keine Zitate aus dem Buch). Fahre über die Wörter oder tippe sie an, um Glossen zu sehen.',
            ru: 'Глава II, *Familia Rōmāna*, знакомит с домом Юлия: жена, дети, рабы. Ключевая грамматика — **родительный падеж**: «чей?». Послушайте аудио к главе, затем прочитайте её. Перед этим разомнитесь на простых предложениях в том же стиле (это учебные предложения, а не цитаты из книги). Наведите курсор или нажмите на слово, чтобы увидеть пояснение.',
          },
        },
        {
          kind: 'interlinear',
          id: 'l5-familia',
          title: { en: 'Iulius and his household', de: 'Iulius und sein Haushalt', ru: 'Юлий и его дом' },
          lines: [
            {
              la: 'Iūlius vir Rōmānus est.',
              tr: X('Iulius is a Roman man.', 'Iulius ist ein römischer Mann.', 'Юлий — римский мужчина.'),
              words: [
                { w: 'vir', g: X('man (nom.)', 'Mann (Nom.)', 'муж, мужчина (им.)') },
                { w: 'Rōmānus', g: X('Roman (adj., m. nom.)', 'römisch (Adj., m. Nom.)', 'римский (прил., м. р., им.)') },
              ],
            },
            {
              la: 'Aemilia fēmina Rōmāna est.',
              tr: X('Aemilia is a Roman woman.', 'Aemilia ist eine römische Frau.', 'Эмилия — римская женщина.'),
              words: [
                { w: 'fēmina', g: X('woman (nom.)', 'Frau (Nom.)', 'женщина (им.)') },
                { w: 'Rōmāna', g: X('Roman (adj., f. nom.)', 'römisch (Adj., f. Nom.)', 'римская (прил., ж. р., им.)') },
              ],
              note: X('Same adjective, new ending: *Rōmānus* → *Rōmāna* to agree with a feminine noun.', 'Dasselbe Adjektiv, neue Endung: *Rōmānus* → *Rōmāna*, passend zum femininen Nomen.', 'То же прилагательное, новое окончание: *Rōmānus* → *Rōmāna* — согласование с женским родом.'),
            },
            {
              la: 'Iūlius dominus est. Aemilia domina est.',
              tr: X('Iulius is the master. Aemilia is the mistress.', 'Iulius ist der Herr. Aemilia ist die Herrin.', 'Юлий — господин. Эмилия — госпожа.'),
              words: [
                { w: 'dominus', g: X('master (m.)', 'Herr (m.)', 'господин (м. р.)') },
                { w: 'domina', g: X('mistress (f.)', 'Herrin (f.)', 'госпожа (ж. р.)') },
              ],
            },
            {
              la: 'Mārcus fīlius Iūliī est.',
              tr: X('Marcus is the son of Iulius.', 'Marcus ist der Sohn des Iulius.', 'Марк — сын Юлия.'),
              words: [
                { w: 'fīlius', g: X('son (nom.)', 'Sohn (Nom.)', 'сын (им.)') },
                { w: 'Iūliī', g: X('of Iulius (gen. of *Iūlius*)', 'des Iulius (Gen. von *Iūlius*)', 'Юлия (род. от *Iūlius*)') },
              ],
              note: X('Genitive 2nd decl. *-ī*: *Iūlius* → *Iūliī*. The genitive usually follows its noun, like German *der Sohn des Iulius*.', 'Genitiv 2. Dekl. *-ī*: *Iūlius* → *Iūliī*. Der Genitiv steht meist nach seinem Nomen — wie *der Sohn des Iulius*.', 'Родительный 2-го скл. *-ī*: *Iūlius* → *Iūliī*. Обычно стоит после своего существительного — как русское *сын Юлия*.'),
            },
            {
              la: 'Iūlia fīlia Iūliī et Aemiliae est.',
              tr: X('Iulia is the daughter of Iulius and Aemilia.', 'Iulia ist die Tochter von Iulius und Aemilia.', 'Юлия — дочь Юлия и Эмилии.'),
              words: [
                { w: 'fīlia', g: X('daughter (nom.)', 'Tochter (Nom.)', 'дочь (им.)') },
                { w: 'Aemiliae', g: X('of Aemilia (gen. 1st decl. *-ae*)', 'der Aemilia (Gen. 1. Dekl. *-ae*)', 'Эмилии (род. 1-го скл. *-ae*)') },
              ],
            },
            {
              la: 'Mēdus servus Iūliī est. Dēlia ancilla Aemiliae est.',
              tr: X('Medus is a slave of Iulius. Delia is a maid of Aemilia.', 'Medus ist ein Sklave des Iulius. Delia ist eine Magd der Aemilia.', 'Мед — раб Юлия. Делия — служанка Эмилии.'),
              words: [
                { w: 'servus', g: X('slave, servant (m.)', 'Sklave, Diener (m.)', 'раб, слуга (м. р.)') },
                { w: 'ancilla', g: X('maid, female slave', 'Magd, Sklavin', 'служанка, рабыня') },
              ],
            },
            {
              la: 'Iūlius pater Mārcī et Iūliae est. Aemilia māter est.',
              tr: X('Iulius is the father of Marcus and Iulia. Aemilia is the mother.', 'Iulius ist der Vater von Marcus und Iulia. Aemilia ist die Mutter.', 'Юлий — отец Марка и Юлии. Эмилия — мать.'),
              words: [
                { w: 'pater', g: X('father — 3rd decl.: *pater, patris*', 'Vater — 3. Dekl.: *pater, patris*', 'отец — 3-е скл.: *pater, patris*') },
                { w: 'Mārcī', g: X('of Marcus (gen.)', 'des Marcus (Gen.)', 'Марка (род.)') },
                { w: 'māter', g: X('mother — 3rd decl.: *māter, mātris*', 'Mutter — 3. Dekl.: *māter, mātris*', 'мать — 3-е скл.: *māter, mātris*') },
              ],
              note: X('*pater* and *māter* are 3rd declension — today’s topic. Genitive *patris* → *patriarch*, *Patron*.', '*pater* und *māter* gehören zur 3. Deklination — das heutige Thema. Genitiv *patris* → *Patriarch*, *Patron*.', '*pater* и *māter* — 3-е склонение, сегодняшняя тема. Родительный *patris* → *патриарх*, *патрон*.'),
            },
            {
              la: 'Cuius fīlius est Mārcus? Mārcus fīlius Iūliī est.',
              tr: X('Whose son is Marcus? Marcus is the son of Iulius.', 'Wessen Sohn ist Marcus? Marcus ist der Sohn des Iulius.', 'Чей сын Марк? Марк — сын Юлия.'),
              words: [
                { w: 'Cuius', g: X('whose? (gen. of *quis*)', 'wessen? (Gen. von *quis*)', 'чей? (род. от *quis*)') },
              ],
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'l5-familia-quiz',
          title: { en: 'Whose is it?', de: 'Wem gehört das?', ru: 'Чьё это?' },
          questions: [
            {
              prompt: { en: 'Choose the correct form: Dēlia ancilla ___ est. (of Aemilia)', de: 'Wähle die richtige Form: Dēlia ancilla ___ est. (der Aemilia)', ru: 'Выберите верную форму: Dēlia ancilla ___ est. (Эмилии)' },
              options: ['Aemilia', 'Aemiliae', 'Aemiliī'],
              answer: 1,
              explain: { en: '1st declension genitive: *-ae*.', de: 'Genitiv der 1. Deklination: *-ae*.', ru: 'Родительный 1-го склонения: *-ae*.' },
            },
            {
              prompt: { en: 'Choose the correct form: Mēdus servus ___ est. (of Iulius)', de: 'Wähle die richtige Form: Mēdus servus ___ est. (des Iulius)', ru: 'Выберите верную форму: Mēdus servus ___ est. (Юлия)' },
              options: ['Iūlius', 'Iūliae', 'Iūliī'],
              answer: 2,
              explain: { en: '2nd declension genitive: *-ī*.', de: 'Genitiv der 2. Deklination: *-ī*.', ru: 'Родительный 2-го склонения: *-ī*.' },
            },
            {
              prompt: { en: 'What does *fīlius rēgis* mean?', de: 'Was bedeutet *fīlius rēgis*?', ru: 'Что значит *fīlius rēgis*?' },
              options: [
                { en: 'the king’s son', de: 'der Sohn des Königs', ru: 'сын царя' },
                { en: 'the son is king', de: 'der Sohn ist König', ru: 'сын — царь' },
                { en: 'the king’s sons', de: 'die Söhne des Königs', ru: 'сыновья царя' },
              ],
              answer: 0,
              explain: { en: '3rd declension genitive *-is*: [[rēgis]] = of the king.', de: 'Genitiv der 3. Deklination *-is*: [[rēgis]] = des Königs.', ru: 'Родительный 3-го склонения *-is*: [[rēgis]] = царя.' },
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ Practice */
    {
      minutes: 0,
      title: { en: 'Practice: pairs, phrases and homework', de: 'Übung: Paare, Wendungen und Hausaufgabe', ru: 'Практика: пары, фразы и домашнее задание' },
      blocks: [
        {
          kind: 'flashcards',
          id: 'l5-cards',
          title: { en: '3rd declension: nominative + genitive', de: '3. Deklination: Nominativ + Genitiv', ru: '3-е склонение: именительный + родительный' },
          cards: [
            { la: 'rēx, rēgis (m.)', back: X('king → regal, regalia', 'König → Regalien', 'царь, король → регалии') },
            { la: 'lēx, lēgis (f.)', back: X('law → legal, legitimate', 'Gesetz → legal, legitim', 'закон → легальный, легитимный') },
            { la: 'corpus, corporis (n.)', back: X('body → corporate, corpus', 'Körper → Korporation, Korpus', 'тело → корпорация, корпус') },
            { la: 'homō, hominis (m.)', back: X('human being → hominid, ad hominem', 'Mensch → Hominiden, ad hominem', 'человек → гоминиды, ad hominem') },
            { la: 'nōmen, nōminis (n.)', back: X('name → nominal, nominate', 'Name → nominieren, Nominativ', 'имя → номинация, номинал') },
            { la: 'tempus, temporis (n.)', back: X('time → temporary, tempo', 'Zeit → temporär, Tempo', 'время → темп') },
            { la: 'mors, mortis (f.)', back: X('death → mortal, post mortem', 'Tod → Mortalität, post mortem', 'смерть → post mortem') },
            { la: 'pāx, pācis (f.)', back: X('peace → pacify, Pax Romana', 'Frieden → Pazifist', 'мир → пацифист') },
            { la: 'pater, patris (m.)', back: X('father → paternal, patriarch', 'Vater → Patriarch, Patron', 'отец → патриарх, патрон') },
            { la: 'māter, mātris (f.)', back: X('mother → maternal, alma mater', 'Mutter → Matrix, Alma Mater', 'мать → матрица, альма-матер') },
            { la: 'reus, reī (m.)', back: X('defendant, accused', 'Angeklagter', 'обвиняемый, подсудимый') },
            { la: 'culpa, culpae (f.)', back: X('fault, guilt', 'Schuld', 'вина') },
          ],
        },
        {
          kind: 'match',
          id: 'l5-match',
          prompt: { en: 'Match the phrase to its literal meaning', de: 'Ordne die Wendung ihrer wörtlichen Bedeutung zu', ru: 'Сопоставьте фразу с буквальным значением' },
          pairs: [
            { left: 'habeās corpus', right: X('you shall have the body', 'du sollst den Körper haben', 'да будет у тебя тело') },
            { left: 'prō bonō', right: X('for the good', 'für das Gute', 'ради блага') },
            { left: 'in vitrō', right: X('in glass', 'im Glas', 'в стекле') },
            { left: 'post mortem', right: X('after death', 'nach dem Tod', 'после смерти') },
            { left: 'meā culpā', right: X('through my fault', 'durch meine Schuld', 'по моей вине') },
            { left: 'persōna nōn grāta', right: X('unwelcome person', 'unerwünschte Person', 'нежелательное лицо') },
            { left: 'in dubiō prō reō', right: X('in doubt, for the defendant', 'im Zweifel für den Angeklagten', 'при сомнении — в пользу обвиняемого') },
          ],
        },
        {
          kind: 'text',
          body: {
            en: '**Homework:** find **5 Latin phrases** in German legal or news texts (Spiegel, FAZ, Süddeutsche…) — e.g. *de facto*, *ad hoc*, *in dubio pro reo*, *de jure*, *ultima ratio*, *status quo*. For each: the phrase, the source, a literal translation, and the case of every noun or adjective.',
            de: '**Hausaufgabe:** Finde **5 lateinische Wendungen** in deutschen Rechts- oder Nachrichtentexten (Spiegel, FAZ, Süddeutsche…) — z. B. *de facto*, *ad hoc*, *in dubio pro reo*, *de jure*, *ultima ratio*, *status quo*. Zu jeder: Wendung, Quelle, wörtliche Übersetzung und den Kasus jedes Nomens oder Adjektivs.',
            ru: '**Домашнее задание:** найдите **5 латинских фраз** в немецких юридических или новостных текстах (Spiegel, FAZ, Süddeutsche…) — например, *de facto*, *ad hoc*, *in dubio pro reo*, *de jure*, *ultima ratio*, *status quo*. Для каждой: фраза, источник, буквальный перевод и падеж каждого существительного или прилагательного.',
          },
        },
        {
          kind: 'notepad',
          id: 'l5-homework',
          prompt: { en: 'My 5 phrases from German texts', de: 'Meine 5 Wendungen aus deutschen Texten', ru: 'Мои 5 фраз из немецких текстов' },
          placeholder: { en: 'ultima ratio — FAZ, 12.10. — “the last reason” — ultima: adj. nom. f. sg., ratio: nom. f. sg.', de: 'ultima ratio — FAZ, 12.10. — „das letzte Mittel“ — ultima: Adj. Nom. f. Sg., ratio: Nom. f. Sg.', ru: 'ultima ratio — FAZ, 12.10. — «последний довод» — ultima: прил. им. ж. ед., ratio: им. ж. ед.' },
        },
      ],
    },
  ],
  materials: [
    { label: 'Hans H. Ørberg — Lingua Latina per se illustrata: Familia Romana, cap. II', note: { en: 'read chapter II with the audio', de: 'Kapitel II mit Audio lesen', ru: 'прочитать главу II с аудио' } },
    { label: 'William Linney — Getting Started with Latin', url: 'https://www.gettingstartedwithlatin.com/', note: { en: '3rd declension lessons as reference', de: 'Lektionen zur 3. Deklination als Nachschlagewerk', ru: 'уроки по 3-му склонению как справочник' } },
    { label: 'en.wiktionary.org', url: 'https://en.wiktionary.org', note: { en: 'look up nominative + genitive of any noun', de: 'Nominativ + Genitiv jedes Nomens nachschlagen', ru: 'смотреть именительный + родительный любого существительного' } },
  ],
  homework: [
    {
      en: 'Anki: Dickinson College Core Vocabulary (DCC), words 100–150.',
      de: 'Anki: Dickinson College Core Vocabulary (DCC), Wörter 100–150.',
      ru: 'Anki: базовый словарь Dickinson College (DCC), слова 100–150.',
    },
    {
      en: 'Find 5 Latin phrases in German legal or news texts (Spiegel, FAZ — e.g. “de facto”, “ad hoc”, “in dubio pro reo”) and parse them in the notepad above.',
      de: '5 lateinische Wendungen in deutschen Rechts- oder Nachrichtentexten finden (Spiegel, FAZ — z. B. „de facto“, „ad hoc“, „in dubio pro reo“) und im Notizfeld oben analysieren.',
      ru: 'Найти 5 латинских фраз в немецких юридических или новостных текстах (Spiegel, FAZ — например, «de facto», «ad hoc», «in dubio pro reo») и разобрать их в блокноте выше.',
    },
  ],
  doneWhen: [
    {
      en: 'I can explain why it is “corpus” but “corporate” (the genitive corporis reveals the stem).',
      de: 'Ich kann erklären, warum es „corpus“, aber „Korporation“ heißt (der Genitiv corporis zeigt den Stamm).',
      ru: 'Могу объяснить, почему «corpus», но «корпорация» (родительный corporis показывает основу).',
    },
    {
      en: 'I can name the case of each word in “in dubio pro reo” (in + ablative, pro + ablative).',
      de: 'Ich kann den Kasus jedes Wortes in „in dubio pro reo“ benennen (in + Ablativ, pro + Ablativ).',
      ru: 'Могу назвать падеж каждого слова в «in dubio pro reo» (in + аблатив, pro + аблатив).',
    },
    {
      en: 'I can make bonus, -a, -um agree with any noun I know.',
      de: 'Ich kann bonus, -a, -um an jedes bekannte Nomen anpassen.',
      ru: 'Могу согласовать bonus, -a, -um с любым знакомым существительным.',
    },
  ],
};

export default l05;
