import type { Lesson } from '../types';

const l07: Lesson = {
  id: 7,
  date: '2026-10-23',
  title: {
    en: 'Church Latin — Ave Maria, Gloria, Mass responses',
    de: 'Kirchenlatein — Ave Maria, Gloria, Antworten der Messe',
    ru: 'Церковная латынь — Ave Maria, Gloria, возгласы мессы',
  },
  goal: {
    en: 'Understand the core liturgical texts and hear them in music you already know.',
    de: 'Die zentralen liturgischen Texte verstehen und sie in Musik wiedererkennen, die du schon kennst.',
    ru: 'Понимать основные литургические тексты и узнавать их в уже знакомой музыке.',
  },
  sections: [
    {
      minutes: 5,
      title: { en: 'Review: Pater Noster aloud', de: 'Wiederholung: Pater Noster laut', ru: 'Повторение: Pater Noster вслух' },
      blocks: [
        {
          kind: 'callout',
          tone: 'tip',
          body: {
            en: 'Check that the pronunciation toggle in the top bar is still on **Ecclesiastical** — all texts today are sung in that style.',
            de: 'Prüfe, dass der Aussprache-Umschalter oben noch auf **Kirchlich** steht — alle heutigen Texte werden so gesungen.',
            ru: 'Проверьте, что переключатель произношения в верхней панели всё ещё стоит на **церковном** — все сегодняшние тексты поются именно так.',
          },
        },
        {
          kind: 'text',
          body: {
            en: 'Recite the Pater Noster from memory (or from the sheet in session 6). After each line, say the word-for-word meaning. Then rate yourself.',
            de: 'Sprich das Pater Noster auswendig (oder vom Blatt aus Einheit 6). Nenne nach jeder Zeile die Wort-für-Wort-Bedeutung. Dann bewerte dich.',
            ru: 'Прочитайте Pater Noster наизусть (или по тексту из занятия 6). После каждой строки дайте пословный перевод. Затем оцените себя.',
          },
        },
        {
          kind: 'rating',
          id: 'l7-review',
          prompt: { en: 'Pater Noster check (1 = need the sheet, 5 = by heart)', de: 'Pater-Noster-Check (1 = brauche das Blatt, 5 = auswendig)', ru: 'Проверка Pater Noster (1 = нужен текст, 5 = наизусть)' },
          items: [
            { en: 'Reciting the text', de: 'Text aufsagen', ru: 'Чтение текста' },
            { en: 'Word-for-word meaning', de: 'Wort-für-Wort-Bedeutung', ru: 'Пословный перевод' },
            { en: 'Spotting imperatives (*da, dimitte, libera*) and subjunctives (*sanctificetur, adveniat, fiat, inducas*)', de: 'Imperative (*da, dimitte, libera*) und Konjunktive (*sanctificetur, adveniat, fiat, inducas*) erkennen', ru: 'Узнавание повелительных (*da, dimitte, libera*) и сослагательных (*sanctificetur, adveniat, fiat, inducas*)' },
          ],
        },
      ],
    },
    {
      minutes: 15,
      title: { en: 'Ave Maria', de: 'Ave Maria', ru: 'Ave Maria' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'The first half of the Ave Maria comes from the Gospel of Luke (the angel’s greeting and Elizabeth’s words); the second half, *Sancta Maria…*, is a later petition. Tap each word, then reveal.',
            de: 'Die erste Hälfte des Ave Maria stammt aus dem Lukasevangelium (Gruß des Engels und Worte Elisabeths); die zweite Hälfte, *Sancta Maria…*, ist eine spätere Bitte. Tippe jedes Wort an, dann aufdecken.',
            ru: 'Первая половина Ave Maria взята из Евангелия от Луки (приветствие ангела и слова Елисаветы); вторая, *Sancta Maria…*, — более поздняя просьба. Нажимайте на каждое слово, затем открывайте перевод.',
          },
        },
        { kind: 'pronounce', samples: ['Ave Maria', 'gratia plena', 'Dominus tecum', 'benedicta tu in mulieribus', 'fructus ventris tui', 'ora pro nobis peccatoribus'] },
        {
          kind: 'interlinear',
          id: 'l7-ave',
          title: { en: 'Ave Maria', de: 'Ave Maria', ru: 'Ave Maria' },
          lines: [
            {
              la: 'Ave Maria, gratia plena, Dominus tecum.',
              tr: { en: 'Hail Mary, full of grace, the Lord (is) with you.', de: 'Gegrüßet seist du, Maria, voll der Gnade, der Herr ist mit dir.', ru: 'Радуйся, Мария, благодати полная, Господь с тобой.' },
              words: [
                { w: 'Ave', g: { en: '**hail!** — greeting; formally an imperative (“be well!”)', de: '**sei gegrüßt!** — Gruß; formal ein Imperativ („sei wohl!“)', ru: '**радуйся! здравствуй!** — приветствие; формально повелительное («будь здрав!»)' } },
                { w: 'Maria,', g: { en: '**Mary** — voc. sg.', de: '**Maria** — Vok. Sg.', ru: '**Мария** — зват. ед.' } },
                { w: 'gratia', g: { en: '**with grace** — abl. sg. of *gratia* (f.); *plenus* takes abl. (or gen.) of what something is full of', de: '**an Gnade** — Abl. Sg. von *gratia* (f.); *plenus* steht mit Abl. (oder Gen.) dessen, wovon etwas voll ist', ru: '**благодатью** — абл. ед. от *gratia* (ж. р.); *plenus* управляет абл. (или род.) — чем полон' } },
                { w: 'plena,', g: { en: '**full** — voc. sg. f. of *plenus*, agrees with *Maria*', de: '**voll** — Vok. Sg. f. von *plenus*, kongruent mit *Maria*', ru: '**полная** — зват. ед. ж. р. от *plenus*, согласовано с *Maria*' } },
                { w: 'Dominus', g: { en: '**the Lord** — nom. sg. of *dominus* (m., 2nd decl.); verb “is” understood', de: '**der Herr** — Nom. Sg. von *dominus* (m., 2. Dekl.); „ist“ ergänzen', ru: '**Господь** — им. ед. от *dominus* (м. р., 2-е скл.); «есть» подразумевается' } },
                { w: 'tecum.', g: { en: '**with you** = *cum te*; *cum* is attached after personal pronouns (*mecum, tecum, nobiscum, vobiscum*)', de: '**mit dir** = *cum te*; *cum* wird an Personalpronomen angehängt (*mecum, tecum, nobiscum, vobiscum*)', ru: '**с тобой** = *cum te*; *cum* присоединяется после личных местоимений (*mecum, tecum, nobiscum, vobiscum*)' } },
              ],
              note: {
                en: 'Latin happily drops *est* (“is”). Ablative *gratiā* with *plena*: “full **with** grace”.',
                de: 'Latein lässt *est* („ist“) gern weg — wie das Russische. Ablativ *gratiā* bei *plena*: „voll **an** Gnade“.',
                ru: 'Латынь охотно опускает *est* («есть») — как и русский. Аблатив *gratiā* при *plena*: «полная **благодатью**».',
              },
            },
            {
              la: 'Benedicta tu in mulieribus,',
              tr: { en: 'Blessed (are) you among women,', de: 'Du bist gebenedeit unter den Frauen,', ru: 'Благословенна ты между жёнами,' },
              words: [
                { w: 'Benedicta', g: { en: '**blessed** — perfect passive participle of *benedicere* (“to speak well of, bless”), nom. sg. f.', de: '**gesegnet, gebenedeit** — Partizip Perfekt Passiv von *benedicere* („gut sprechen von, segnen“), Nom. Sg. f.', ru: '**благословенная** — причастие прош. вр. страд. залога от *benedicere* («благословлять», букв. «хорошо говорить»), им. ед. ж. р.' } },
                { w: 'tu', g: { en: '**you** — nom. sg.; “are” understood', de: '**du** — Nom. Sg.; „bist“ ergänzen', ru: '**ты** — им. ед.; «есть» подразумевается' } },
                { w: 'in', g: { en: '**among** — + abl.', de: '**unter** — + Abl.', ru: '**среди, между** — + абл.' } },
                { w: 'mulieribus,', g: { en: '**women** — abl. pl. of *mulier, mulieris* (f., 3rd decl.)', de: '**Frauen** — Abl. Pl. von *mulier, mulieris* (f., 3. Dekl.)', ru: '**жёнами** — абл. мн. от *mulier, mulieris* (ж. р., 3-е скл.)' } },
              ],
              note: {
                en: '*bene* “well” + *dictus* “said” → **benedictus** “well-spoken-of, blessed”. The participle declines like an adjective: *benedicta* (f.) for Mary, *benedictus* (m.) in the next line. Names: *Benedict*, *Bengt*.',
                de: '*bene* „gut“ + *dictus* „gesagt“ → **benedictus** „gut besprochen, gesegnet“ (dt. *gebenedeit*). Das Partizip wird wie ein Adjektiv dekliniert: *benedicta* (f.) für Maria, *benedictus* (m.) in der nächsten Zeile. Name: *Benedikt*.',
                ru: '*bene* «хорошо» + *dictus* «сказанный» → **benedictus** «благословенный» (ср. слав. *благо-словенный* — та же калька!). Причастие склоняется как прилагательное: *benedicta* (ж.) о Марии, *benedictus* (м.) в следующей строке. Имя: *Бенедикт*.',
              },
            },
            {
              la: 'et benedictus fructus ventris tui, Iesus.',
              tr: { en: 'and blessed (is) the fruit of your womb, Jesus.', de: 'und gebenedeit ist die Frucht deines Leibes, Jesus.', ru: 'и благословен плод чрева твоего, Иисус.' },
              words: [
                { w: 'et', g: { en: '**and**', de: '**und**', ru: '**и**' } },
                { w: 'benedictus', g: { en: '**blessed** — perf. pass. participle, nom. sg. m., agrees with *fructus*', de: '**gebenedeit** — PPP, Nom. Sg. m., kongruent mit *fructus*', ru: '**благословенный** — прич. прош. страд., им. ед. м. р., согласовано с *fructus*' } },
                { w: 'fructus', g: { en: '**fruit** — nom. sg. of *fructus, -us* (m., 4th decl.)', de: '**Frucht** — Nom. Sg. von *fructus, -us* (m., 4. Dekl.)', ru: '**плод** — им. ед. от *fructus, -us* (м. р., 4-е скл.)' } },
                { w: 'ventris', g: { en: '**of the womb** — gen. sg. of *venter, ventris* (m., 3rd decl.; “belly, womb”)', de: '**des Leibes** — Gen. Sg. von *venter, ventris* (m., 3. Dekl.; „Bauch, Leib“)', ru: '**чрева** — род. ед. от *venter, ventris* (м. р., 3-е скл.; «живот, чрево»)' } },
                { w: 'tui,', g: { en: '**your** — gen. sg. m. of *tuus*, agrees with *ventris*', de: '**deines** — Gen. Sg. m. von *tuus*, kongruent mit *ventris*', ru: '**твоего** — род. ед. м. р. от *tuus*, согласовано с *ventris*' } },
                { w: 'Iesus.', g: { en: '**Jesus** — nom., in apposition to *fructus*', de: '**Jesus** — Nom., Apposition zu *fructus*', ru: '**Иисус** — им., приложение к *fructus*' } },
              ],
              note: {
                en: '**Genitive** = “of”: *fructus ventris* “fruit of the womb”. *venter* gives *ventral* and *ventriloquist* (“belly-speaker”).',
                de: '**Genitiv** = „des/der“: *fructus ventris* „Frucht des Leibes“. Von *venter* kommen *ventral* und *Ventriloquist* („Bauchredner“ — wörtlich!).',
                ru: '**Родительный** = «чего/кого»: *fructus ventris* «плод чрева». От *venter* — *вентральный* и англ. *ventriloquist* («чревовещатель» — буквальная калька!).',
              },
            },
            {
              la: 'Sancta Maria, Mater Dei,',
              tr: { en: 'Holy Mary, Mother of God,', de: 'Heilige Maria, Mutter Gottes,', ru: 'Святая Мария, Матерь Божия,' },
              words: [
                { w: 'Sancta', g: { en: '**holy** — voc. sg. f. of *sanctus*', de: '**heilige** — Vok. Sg. f. von *sanctus*', ru: '**святая** — зват. ед. ж. р. от *sanctus*' } },
                { w: 'Maria,', g: { en: '**Mary** — voc. sg.', de: '**Maria** — Vok. Sg.', ru: '**Мария** — зват. ед.' } },
                { w: 'Mater', g: { en: '**mother** — voc. sg. (= nom.) of *mater, matris* (f., 3rd decl.)', de: '**Mutter** — Vok. Sg. (= Nom.) von *mater, matris* (f., 3. Dekl.)', ru: '**мать** — зват. ед. (= им.) от *mater, matris* (ж. р., 3-е скл.)' } },
                { w: 'Dei,', g: { en: '**of God** — gen. sg. of *Deus* (m., 2nd decl.)', de: '**Gottes** — Gen. Sg. von *Deus* (m., 2. Dekl.)', ru: '**Божия** — род. ед. от *Deus* (м. р., 2-е скл.)' } },
              ],
              note: {
                en: 'All vocative: she is being addressed. *Mater Dei* — another genitive “of”. Russian *Божия* is an adjective doing the same job.',
                de: 'Alles Vokativ: Sie wird angeredet. *Mater Dei* — wieder ein Genitiv. Wie dt. *Mutter Gottes* mit vorangestelltem Genitiv in *Gottesmutter*.',
                ru: 'Всё в звательном: к ней обращаются. *Mater Dei* — снова родительный. Русское *Божия* — прилагательное, выполняющее ту же роль.',
              },
            },
            {
              la: 'ora pro nobis peccatoribus,',
              tr: { en: 'pray for us sinners,', de: 'bitte für uns Sünder,', ru: 'молись за нас, грешных,' },
              words: [
                { w: 'ora', g: { en: '**pray!** — 2nd sg. imperative of *orare* (1st conj.)', de: '**bitte! bete!** — 2. Sg. Imperativ von *orare* (a-Konj.)', ru: '**молись!** — 2 л. ед. повелит. от *orare* (1-е спр.)' } },
                { w: 'pro', g: { en: '**for, on behalf of** — preposition + abl.', de: '**für** — Präposition + Abl.', ru: '**за** — предлог + абл.' } },
                { w: 'nobis', g: { en: '**us** — abl. pl. of *nos* (after *pro*)', de: '**uns** — Abl. Pl. von *nos* (nach *pro*)', ru: '**нас** — абл. мн. от *nos* (после *pro*)' } },
                { w: 'peccatoribus,', g: { en: '**sinners** — abl. pl. of *peccator, peccatoris* (m., 3rd decl.), in apposition to *nobis*', de: '**Sündern** — Abl. Pl. von *peccator, peccatoris* (m., 3. Dekl.), Apposition zu *nobis*', ru: '**грешных** — абл. мн. от *peccator, peccatoris* (м. р., 3-е скл.), приложение к *nobis*' } },
              ],
              note: {
                en: '*nobis* is dative **or** ablative — the preposition *pro* (+ abl.) decides. *peccatoribus* takes the same case as the word it explains. *orare* → *oration*, *oratory*.',
                de: '*nobis* ist Dativ **oder** Ablativ — die Präposition *pro* (+ Abl.) entscheidet. *peccatoribus* steht im selben Fall wie das Wort, das es erklärt. *orare* → *Oration*, *Oratorium*.',
                ru: '*nobis* — дательный **или** аблатив; решает предлог *pro* (+ абл.). *peccatoribus* стоит в том же падеже, что и поясняемое слово. *orare* → *оратор*, *оратория*.',
              },
            },
            {
              la: 'nunc et in hora mortis nostrae. Amen.',
              tr: { en: 'now and at the hour of our death. Amen.', de: 'jetzt und in der Stunde unseres Todes. Amen.', ru: 'ныне и в час смерти нашей. Аминь.' },
              words: [
                { w: 'nunc', g: { en: '**now** — adverb', de: '**jetzt, nun** — Adverb', ru: '**ныне, сейчас** — наречие' } },
                { w: 'et', g: { en: '**and**', de: '**und**', ru: '**и**' } },
                { w: 'in', g: { en: '**at, in** — + abl. (time when)', de: '**in** — + Abl. (Zeitpunkt)', ru: '**в** — + абл. (время, когда)' } },
                { w: 'hora', g: { en: '**hour** — abl. sg. of *hora* (f., 1st decl.)', de: '**Stunde** — Abl. Sg. von *hora* (f., 1. Dekl.)', ru: '**час** — абл. ед. от *hora* (ж. р., 1-е скл.)' } },
                { w: 'mortis', g: { en: '**of death** — gen. sg. of *mors, mortis* (f., 3rd decl.)', de: '**des Todes** — Gen. Sg. von *mors, mortis* (f., 3. Dekl.)', ru: '**смерти** — род. ед. от *mors, mortis* (ж. р., 3-е скл.)' } },
                { w: 'nostrae.', g: { en: '**our** — gen. sg. f., agrees with *mortis*', de: '**unseres** — Gen. Sg. f., kongruent mit *mortis*', ru: '**нашей** — род. ед. ж. р., согласовано с *mortis*' } },
                { w: 'Amen.', g: { en: '**so be it**', de: '**so sei es**', ru: '**аминь, истинно**' } },
              ],
              note: {
                en: '*nostrae* is feminine because *mors* is feminine — agreement follows grammar, not meaning. *mors* → *mortal*, *post-mortem*.',
                de: '*nostrae* ist feminin, weil *mors* feminin ist — Kongruenz folgt der Grammatik, nicht der Bedeutung (anders als dt. *der Tod*). *mors* → *mortal*, *post mortem*.',
                ru: '*nostrae* в женском роде, потому что *mors* женского рода (как и русская *смерть*). *mors* → *мортальный*, *post mortem*.',
              },
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Two things to notice', de: 'Zwei Dinge zum Merken', ru: 'Две вещи, которые стоит заметить' },
          body: {
            en: '- **Perfect passive participle** (*-tus, -ta, -tum*) = “having been …-ed”: [[benedictus]] blessed, [[benedicta]] blessed (f.). It behaves like an adjective and agrees with its noun.\n- **Genitive “of”**: [[Dei]] of God (2nd decl. *-i*), [[ventris]] of the womb and [[mortis]] of death (3rd decl. *-is*), [[nostrae]] of our (1st/2nd decl. f. *-ae*).',
            de: '- **Partizip Perfekt Passiv** (*-tus, -ta, -tum*) = „…-t worden“: [[benedictus]] gesegnet, [[benedicta]] gesegnet (f.). Es verhält sich wie ein Adjektiv und richtet sich nach seinem Nomen.\n- **Genitiv**: [[Dei]] Gottes (2. Dekl. *-i*), [[ventris]] des Leibes und [[mortis]] des Todes (3. Dekl. *-is*), [[nostrae]] unseres (f. *-ae*).',
            ru: '- **Причастие прошедшего времени страдательного залога** (*-tus, -ta, -tum*) = «…-нный»: [[benedictus]] благословенный, [[benedicta]] благословенная. Ведёт себя как прилагательное и согласуется с существительным.\n- **Родительный «чего/кого»**: [[Dei]] Бога (2-е скл. *-i*), [[ventris]] чрева и [[mortis]] смерти (3-е скл. *-is*), [[nostrae]] нашей (ж. р. *-ae*).',
          },
        },
        {
          kind: 'quiz',
          id: 'l7-ave-quiz',
          title: { en: 'Ave Maria check', de: 'Ave-Maria-Check', ru: 'Проверка: Ave Maria' },
          questions: [
            { prompt: { en: 'What does *tecum* mean?', de: 'Was bedeutet *tecum*?', ru: 'Что значит *tecum*?' }, la: 'Dominus tecum', options: [{ en: 'with you', de: 'mit dir', ru: 'с тобой' }, { en: 'for you', de: 'für dich', ru: 'за тебя' }, { en: 'your house', de: 'dein Haus', ru: 'твой дом' }], answer: 0, explain: { en: '*te* + *cum* — *cum* is stuck on the end of personal pronouns.', de: '*te* + *cum* — *cum* wird an Personalpronomen angehängt.', ru: '*te* + *cum* — *cum* присоединяется в конце личных местоимений.' } },
            { prompt: { en: 'Which case is *ventris*?', de: 'Welcher Fall ist *ventris*?', ru: 'Какой падеж у *ventris*?' }, options: [{ en: 'genitive', de: 'Genitiv', ru: 'родительный' }, { en: 'nominative', de: 'Nominativ', ru: 'именительный' }, { en: 'ablative', de: 'Ablativ', ru: 'аблатив' }], answer: 0, explain: { en: 'Nom. *venter*, gen. *ventris* — “of the womb”.', de: 'Nom. *venter*, Gen. *ventris* — „des Leibes“.', ru: 'Им. *venter*, род. *ventris* — «чрева».' } },
            { prompt: { en: 'Why *benedicta* but *benedictus*?', de: 'Warum *benedicta*, aber *benedictus*?', ru: 'Почему *benedicta*, но *benedictus*?' }, options: [{ en: 'The participle agrees in gender: Mary (f.), fructus (m.)', de: 'Das Partizip richtet sich nach dem Genus: Maria (f.), fructus (m.)', ru: 'Причастие согласуется в роде: Мария (ж.), fructus (м.)' }, { en: 'One is a verb, one a noun', de: 'Eines ist Verb, eines Nomen', ru: 'Одно — глагол, другое — существительное' }, { en: 'Different tenses', de: 'Verschiedene Zeiten', ru: 'Разные времена' }], answer: 0 },
            { prompt: { en: 'What form is *ora*?', de: 'Welche Form ist *ora*?', ru: 'Что за форма *ora*?' }, options: [{ en: 'imperative “pray!”', de: 'Imperativ „bitte!“', ru: 'повелительное «молись!»' }, { en: 'noun “hour”', de: 'Nomen „Stunde“', ru: 'существительное «час»' }, { en: 'subjunctive', de: 'Konjunktiv', ru: 'сослагательное' }], answer: 0, explain: { en: 'Don’t confuse with *hora* “hour” — in church pronunciation the h is silent, so they sound alike!', de: 'Nicht mit *hora* „Stunde“ verwechseln — kirchlich ist h stumm, beide klingen gleich!', ru: 'Не путайте с *hora* «час» — в церковном произношении h немое, и звучат они одинаково!' } },
            { prompt: { en: 'Why is it *nostrae* (f.) in *mortis nostrae*?', de: 'Warum *nostrae* (f.) in *mortis nostrae*?', ru: 'Почему *nostrae* (ж. р.) в *mortis nostrae*?' }, options: [{ en: '*mors* is feminine', de: '*mors* ist feminin', ru: '*mors* женского рода' }, { en: 'Mary is a woman', de: 'Maria ist eine Frau', ru: 'Мария — женщина' }, { en: 'It is plural', de: 'Es ist Plural', ru: 'Это множественное число' }], answer: 0 },
          ],
        },
      ],
    },
    {
      minutes: 15,
      title: { en: 'Mass ordinary: the short pieces', de: 'Messordinarium: die kurzen Stücke', ru: 'Ординарий мессы: короткие тексты' },
      blocks: [
        {
          kind: 'callout',
          tone: 'culture',
          title: { en: 'What “Ordinary” means', de: 'Was „Ordinarium“ bedeutet', ru: 'Что такое «ординарий»' },
          body: {
            en: 'The **Ordinary** of the Mass is the set of texts that stay the same every time: **Kyrie, Gloria, Credo, Sanctus (with Benedictus), Agnus Dei**. Because they never change, composers set them to music again and again — that’s why “Mass in B minor” or “Missa solemnis” all share these words. A **Requiem** is the Mass for the dead, with its own extra texts (*Requiem aeternam*, *Dies irae*, *Lacrimosa*…).',
            de: 'Das **Ordinarium** der Messe sind die Texte, die immer gleich bleiben: **Kyrie, Gloria, Credo, Sanctus (mit Benedictus), Agnus Dei**. Weil sie sich nie ändern, wurden sie immer wieder vertont — darum teilen „h-Moll-Messe“ oder „Missa solemnis“ dieselben Worte. Ein **Requiem** ist die Totenmesse mit eigenen Zusatztexten (*Requiem aeternam*, *Dies irae*, *Lacrimosa*…).',
            ru: '**Ординарий** мессы — тексты, которые неизменны на каждой службе: **Kyrie, Gloria, Credo, Sanctus (с Benedictus), Agnus Dei**. Поскольку они не меняются, композиторы снова и снова клали их на музыку — поэтому «Месса си минор» и «Missa solemnis» звучат на одни и те же слова. **Реквием** — заупокойная месса со своими дополнительными текстами (*Requiem aeternam*, *Dies irae*, *Lacrimosa*…).',
          },
        },
        {
          kind: 'interlinear',
          id: 'l7-kyrie',
          title: { en: 'Kyrie — this one is Greek!', de: 'Kyrie — das ist Griechisch!', ru: 'Kyrie — это по-гречески!' },
          lines: [
            {
              la: 'Kyrie eleison. Christe eleison. Kyrie eleison.',
              tr: { en: 'Lord, have mercy. Christ, have mercy. Lord, have mercy.', de: 'Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.', ru: 'Господи, помилуй. Христе, помилуй. Господи, помилуй.' },
              words: [
                { w: 'Kyrie', g: { en: '**Lord** — Greek vocative of *kyrios*', de: '**Herr** — griechischer Vokativ von *kyrios*', ru: '**Господи** — греч. звательный от *кюриос*' } },
                { w: 'eleison.', g: { en: '**have mercy!** — Greek imperative', de: '**erbarme dich!** — griechischer Imperativ', ru: '**помилуй!** — греч. повелительное' } },
                { w: 'Christe', g: { en: '**Christ** — vocative (Greek *Christos*, “anointed”); Latin-style voc. in *-e*', de: '**Christus** — Vokativ (griech. *Christos*, „Gesalbter“); lateinischer Vok. auf *-e*', ru: '**Христе** — звательный (греч. *Христос*, «помазанник»); звательный на *-e*' } },
                { w: 'eleison.', g: { en: '**have mercy!**', de: '**erbarme dich!**', ru: '**помилуй!**' } },
                { w: 'Kyrie', g: { en: '**Lord** (voc.)', de: '**Herr** (Vok.)', ru: '**Господи** (зват.)' } },
                { w: 'eleison.', g: { en: '**have mercy!**', de: '**erbarme dich!**', ru: '**помилуй!**' } },
              ],
              note: {
                en: 'The only Greek text in the Latin Mass — a survival from when the Roman church still prayed in Greek. Each line is traditionally sung three times. Russian *Господи, помилуй* is a direct translation of the same Greek words.',
                de: 'Der einzige griechische Text der lateinischen Messe — ein Überbleibsel aus der Zeit, als die römische Kirche noch griechisch betete. Traditionell wird jede Zeile dreimal gesungen. Das Wort *Kirche* geht übrigens auf griech. *kyriakon* („dem Herrn gehörig“) zurück.',
                ru: 'Единственный греческий текст в латинской мессе — пережиток времён, когда римская церковь ещё молилась по-гречески. Каждую строку традиционно поют трижды. Русское *Господи, помилуй* — прямой перевод тех же греческих слов.',
              },
            },
          ],
        },
        {
          kind: 'interlinear',
          id: 'l7-gloria',
          title: { en: 'Gloria (opening)', de: 'Gloria (Anfang)', ru: 'Gloria (начало)' },
          lines: [
            {
              la: 'Gloria in excelsis Deo',
              tr: { en: 'Glory to God in the highest', de: 'Ehre sei Gott in der Höhe', ru: 'Слава в вышних Богу' },
              words: [
                { w: 'Gloria', g: { en: '**glory** — nom. sg. of *gloria* (f., 1st decl.); “(be)” understood', de: '**Ehre, Ruhm** — Nom. Sg. von *gloria* (f., 1. Dekl.); „sei“ ergänzen', ru: '**слава** — им. ед. от *gloria* (ж. р., 1-е скл.); «да будет» подразумевается' } },
                { w: 'in', g: { en: '**in** — + abl.', de: '**in** — + Abl.', ru: '**в** — + абл.' } },
                { w: 'excelsis', g: { en: '**the highest (places)** — abl. pl. of *excelsus* “lofty”, used as a noun', de: '**den Höhen** — Abl. Pl. von *excelsus* „erhaben, hoch“, substantiviert', ru: '**вышних** — абл. мн. от *excelsus* «высокий», в роли существительного' } },
                { w: 'Deo', g: { en: '**to God** — dat. sg. of *Deus*', de: '**Gott** (wem?) — Dat. Sg. von *Deus*', ru: '**Богу** — дат. ед. от *Deus*' } },
              ],
              note: {
                en: 'Dative *Deo*: glory (is given) **to** God. Words from the song of the angels at Bethlehem (Luke 2:14).',
                de: 'Dativ *Deo*: Ehre (gebührt) Gott. Worte aus dem Gesang der Engel in Betlehem (Lukas 2,14).',
                ru: 'Дательный *Deo*: слава (воздаётся) **Богу**. Слова ангельской песни в Вифлееме (Лк 2:14).',
              },
            },
            {
              la: 'et in terra pax hominibus bonae voluntatis.',
              tr: { en: 'and on earth peace to people of good will.', de: 'und auf Erden Friede den Menschen guten Willens.', ru: 'и на земле мир людям доброй воли.' },
              words: [
                { w: 'et', g: { en: '**and**', de: '**und**', ru: '**и**' } },
                { w: 'in', g: { en: '**on** — + abl.', de: '**auf** — + Abl.', ru: '**на** — + абл.' } },
                { w: 'terra', g: { en: '**earth** — abl. sg.', de: '**Erde** — Abl. Sg.', ru: '**земле** — абл. ед.' } },
                { w: 'pax', g: { en: '**peace** — nom. sg. of *pax, pacis* (f., 3rd decl.)', de: '**Friede** — Nom. Sg. von *pax, pacis* (f., 3. Dekl.)', ru: '**мир** — им. ед. от *pax, pacis* (ж. р., 3-е скл.)' } },
                { w: 'hominibus', g: { en: '**to people** — dat. pl. of *homo, hominis* (m., 3rd decl.; “human being”)', de: '**den Menschen** — Dat. Pl. von *homo, hominis* (m., 3. Dekl.)', ru: '**людям** — дат. мн. от *homo, hominis* (м. р., 3-е скл.; «человек»)' } },
                { w: 'bonae', g: { en: '**good** — gen. sg. f., agrees with *voluntatis*', de: '**guten** — Gen. Sg. f., kongruent mit *voluntatis*', ru: '**доброй** — род. ед. ж. р., согласовано с *voluntatis*' } },
                { w: 'voluntatis.', g: { en: '**of will** — gen. sg. of *voluntas* (f.); genitive of quality', de: '**Willens** — Gen. Sg. von *voluntas* (f.); Genitiv der Eigenschaft', ru: '**воли** — род. ед. от *voluntas* (ж. р.); родительный качества' } },
              ],
              note: {
                en: '**Genitive of quality**: *homines bonae voluntatis* “people of good will” — describes what kind of people. *voluntas* you met in *fiat voluntas tua*.',
                de: '**Genitiv der Eigenschaft**: *homines bonae voluntatis* „Menschen guten Willens“ — beschreibt, was für Menschen. *voluntas* kennst du aus *fiat voluntas tua*.',
                ru: '**Родительный качества**: *homines bonae voluntatis* «люди доброй воли» — какие именно люди. *voluntas* вы уже встречали в *fiat voluntas tua*.',
              },
            },
          ],
        },
        {
          kind: 'interlinear',
          id: 'l7-dominus',
          title: { en: 'Greeting and response', de: 'Gruß und Antwort', ru: 'Приветствие и ответ' },
          lines: [
            {
              la: 'Dominus vobiscum.',
              tr: { en: 'The Lord (be) with you.', de: 'Der Herr sei mit euch.', ru: 'Господь с вами.' },
              words: [
                { w: 'Dominus', g: { en: '**the Lord** — nom. sg.', de: '**der Herr** — Nom. Sg.', ru: '**Господь** — им. ед.' } },
                { w: 'vobiscum.', g: { en: '**with you (pl.)** = *cum vobis*; abl. pl. of *vos* + *cum*', de: '**mit euch** = *cum vobis*; Abl. Pl. von *vos* + *cum*', ru: '**с вами** = *cum vobis*; абл. мн. от *vos* + *cum*' } },
              ],
              note: {
                en: 'The priest to the people — plural *vos*, compare *tecum* (sg.) in the Ave Maria.',
                de: 'Der Priester zur Gemeinde — Plural *vos*, vergleiche *tecum* (Sg.) im Ave Maria.',
                ru: 'Священник — к народу: множественное *vos*, сравните *tecum* (ед.) в Ave Maria.',
              },
            },
            {
              la: 'Et cum spiritu tuo.',
              tr: { en: 'And with your spirit.', de: 'Und mit deinem Geiste.', ru: 'И со духом твоим.' },
              words: [
                { w: 'Et', g: { en: '**and (also)**', de: '**und (auch)**', ru: '**и**' } },
                { w: 'cum', g: { en: '**with** — + abl.', de: '**mit** — + Abl.', ru: '**с** — + абл.' } },
                { w: 'spiritu', g: { en: '**spirit** — abl. sg. of *spiritus, -us* (m., 4th decl.; lit. “breath”)', de: '**Geist** — Abl. Sg. von *spiritus, -us* (m., 4. Dekl.; wörtl. „Atem, Hauch“)', ru: '**духом** — абл. ед. от *spiritus, -us* (м. р., 4-е скл.; букв. «дыхание»)' } },
                { w: 'tuo.', g: { en: '**your** (sg.) — abl. sg. m.', de: '**deinem** — Abl. Sg. m.', ru: '**твоим** — абл. ед. м. р.' } },
              ],
              note: {
                en: 'The people’s answer to the priest — back to singular *tuo*: many speak to one. *spiritus* → *spirit*, *inspire*, *respiration*.',
                de: 'Die Antwort der Gemeinde — wieder Singular *tuo*: viele sprechen zu einem. *spiritus* → *Spiritus*, *inspirieren*, *Respiration*.',
                ru: 'Ответ народа — снова единственное *tuo*: многие обращаются к одному. *spiritus* → *спирт*, *инспирация*, *респиратор*.',
              },
            },
          ],
        },
        {
          kind: 'interlinear',
          id: 'l7-agnus',
          title: { en: 'Agnus Dei', de: 'Agnus Dei', ru: 'Agnus Dei' },
          lines: [
            {
              la: 'Agnus Dei, qui tollis peccata mundi, miserere nobis.',
              tr: { en: 'Lamb of God, who take away the sins of the world, have mercy on us.', de: 'Lamm Gottes, du nimmst hinweg die Sünden der Welt, erbarme dich unser.', ru: 'Агнец Божий, берущий на себя грехи мира, помилуй нас.' },
              words: [
                { w: 'Agnus', g: { en: '**lamb** — nom. sg. of *agnus* (m., 2nd decl.), used as an address (classical voc. would be *agne*)', de: '**Lamm** — Nom. Sg. von *agnus* (m., 2. Dekl.), als Anrede gebraucht (klass. Vok. wäre *agne*)', ru: '**агнец** — им. ед. от *agnus* (м. р., 2-е скл.) в роли обращения (классич. звательный — *agne*)' } },
                { w: 'Dei,', g: { en: '**of God** — gen. sg.', de: '**Gottes** — Gen. Sg.', ru: '**Божий** — род. ед.' } },
                { w: 'qui', g: { en: '**who** — rel. pron., nom. sg. m.', de: '**der** — Relativpronomen, Nom. Sg. m.', ru: '**который** — относит. мест., им. ед. м. р.' } },
                { w: 'tollis', g: { en: '**(you) take away, lift** — 2nd sg. present of *tollere*', de: '**(du) nimmst weg, hebst auf** — 2. Sg. Präsens von *tollere*', ru: '**(ты) берёшь, уносишь** — 2 л. ед. наст. от *tollere*' } },
                { w: 'peccata', g: { en: '**sins** — acc. pl. of *peccatum* (n., 2nd decl.)', de: '**Sünden** — Akk. Pl. von *peccatum* (n., 2. Dekl.)', ru: '**грехи** — вин. мн. от *peccatum* (ср. р., 2-е скл.)' } },
                { w: 'mundi,', g: { en: '**of the world** — gen. sg. of *mundus* (m., 2nd decl.)', de: '**der Welt** — Gen. Sg. von *mundus* (m., 2. Dekl.)', ru: '**мира** — род. ед. от *mundus* (м. р., 2-е скл.)' } },
                { w: 'miserere', g: { en: '**have mercy!** — 2nd sg. imperative of the deponent *misereri*', de: '**erbarme dich!** — 2. Sg. Imperativ des Deponens *misereri*', ru: '**помилуй!** — 2 л. ед. повелит. отложительного глагола *misereri*' } },
                { w: 'nobis.', g: { en: '**on us** — dat. pl. of *nos*', de: '**unser** — Dat. Pl. von *nos*', ru: '**нас** — дат. мн. от *nos*' } },
              ],
              note: {
                en: '*qui tollis* — 2nd person because the Lamb is being addressed (“you who take away”). *miserere* + **dative** *nobis* is the liturgical usage; classical Latin puts the person pitied in the genitive. *peccatum* → *peccadillo*; *impeccable* = “not sinning”.',
                de: '*qui tollis* — 2. Person, weil das Lamm angeredet wird („der du hinwegnimmst“). *miserere* + **Dativ** *nobis* ist liturgischer Sprachgebrauch; klassisch steht die Person im Genitiv (vgl. dt. *erbarme dich unser* — auch Genitiv!). *peccatum* → engl. *impeccable* „makellos“.',
                ru: '*qui tollis* — 2-е лицо, потому что к Агнцу обращаются («ты, который берёшь»). *miserere* + **дательный** *nobis* — литургическое употребление; в классической латыни того, кого милуют, ставят в родительный. *peccatum* → англ. *impeccable* «безупречный» («безгрешный»).',
              },
            },
            {
              la: 'Agnus Dei, qui tollis peccata mundi, dona nobis pacem.',
              tr: { en: 'Lamb of God, who take away the sins of the world, grant us peace.', de: 'Lamm Gottes, du nimmst hinweg die Sünden der Welt, gib uns deinen Frieden.', ru: 'Агнец Божий, берущий на себя грехи мира, даруй нам мир.' },
              words: [
                { w: 'Agnus', g: { en: '**lamb** (address)', de: '**Lamm** (Anrede)', ru: '**агнец** (обращение)' } },
                { w: 'Dei,', g: { en: '**of God**', de: '**Gottes**', ru: '**Божий**' } },
                { w: 'qui', g: { en: '**who**', de: '**der**', ru: '**который**' } },
                { w: 'tollis', g: { en: '**(you) take away**', de: '**(du) nimmst weg**', ru: '**берёшь**' } },
                { w: 'peccata', g: { en: '**sins** — acc. pl.', de: '**Sünden** — Akk. Pl.', ru: '**грехи** — вин. мн.' } },
                { w: 'mundi,', g: { en: '**of the world** — gen. sg.', de: '**der Welt** — Gen. Sg.', ru: '**мира** — род. ед.' } },
                { w: 'dona', g: { en: '**give, grant!** — 2nd sg. imperative of *donare* (1st conj.)', de: '**schenke, gib!** — 2. Sg. Imperativ von *donare* (a-Konj.)', ru: '**даруй!** — 2 л. ед. повелит. от *donare* (1-е спр.)' } },
                { w: 'nobis', g: { en: '**to us** — dat. pl.', de: '**uns** — Dat. Pl.', ru: '**нам** — дат. мн.' } },
                { w: 'pacem.', g: { en: '**peace** — acc. sg. of *pax, pacis* (f.)', de: '**Frieden** — Akk. Sg. von *pax, pacis* (f.)', ru: '**мир** — вин. ед. от *pax, pacis* (ж. р.)' } },
              ],
              note: {
                en: 'The third repetition ends with *dona nobis pacem* instead of *miserere nobis*. *pax* (nom.) → *pacem* (acc.) — the 3rd-decl. stem *pac-* shows up outside the nominative (*pacifist*). *donare* → *donation*, *donor*.',
                de: 'Die dritte Wiederholung endet mit *dona nobis pacem* statt *miserere nobis*. *pax* (Nom.) → *pacem* (Akk.) — der Stamm *pac-* der 3. Dekl. zeigt sich außerhalb des Nominativs (*Pazifist*). *donare* → *Donation*, *Spender (Donor)*.',
                ru: 'Третье повторение заканчивается *dona nobis pacem* вместо *miserere nobis*. *pax* (им.) → *pacem* (вин.) — основа *pac-* 3-го скл. видна вне именительного (*пацифист*). *donare* → *донор*, *донация*.',
              },
            },
          ],
        },
        {
          kind: 'interlinear',
          id: 'l7-requiem',
          title: { en: 'Requiem aeternam', de: 'Requiem aeternam', ru: 'Requiem aeternam' },
          lines: [
            {
              la: 'Requiem aeternam dona eis, Domine,',
              tr: { en: 'Eternal rest grant them, O Lord,', de: 'Ewige Ruhe gib ihnen, o Herr,', ru: 'Вечный покой даруй им, Господи,' },
              words: [
                { w: 'Requiem', g: { en: '**rest** — acc. sg. of *requies* (f.)', de: '**Ruhe** — Akk. Sg. von *requies* (f.)', ru: '**покой** — вин. ед. от *requies* (ж. р.)' } },
                { w: 'aeternam', g: { en: '**eternal** — acc. sg. f. of *aeternus*, agrees with *requiem*', de: '**ewige** — Akk. Sg. f. von *aeternus*, kongruent mit *requiem*', ru: '**вечный** — вин. ед. ж. р. от *aeternus*, согласовано с *requiem*' } },
                { w: 'dona', g: { en: '**grant!** — imperative of *donare*', de: '**gib!** — Imperativ von *donare*', ru: '**даруй!** — повелит. от *donare*' } },
                { w: 'eis,', g: { en: '**to them** — dat. pl. of *is, ea, id*', de: '**ihnen** — Dat. Pl. von *is, ea, id*', ru: '**им** — дат. мн. от *is, ea, id*' } },
                { w: 'Domine,', g: { en: '**O Lord** — voc. sg. of *Dominus*', de: '**o Herr** — Vok. Sg. von *Dominus*', ru: '**Господи** — зват. ед. от *Dominus*' } },
              ],
              note: {
                en: 'The whole genre is named after the first word — *Requiem* is just the accusative “rest”. **Vocative** *Domine*: 2nd-decl. *-us* → *-e*, exactly like Russian *Господь* → *Господи*.',
                de: 'Die ganze Gattung ist nach dem ersten Wort benannt — *Requiem* ist einfach der Akkusativ „Ruhe“. **Vokativ** *Domine*: 2. Dekl. *-us* → *-e*.',
                ru: 'Весь жанр назван по первому слову — *Requiem* просто винительный «покой». **Звательный** *Domine*: 2-е скл. *-us* → *-e*, ровно как *Господь* → *Господи*.',
              },
            },
            {
              la: 'et lux perpetua luceat eis.',
              tr: { en: 'and may perpetual light shine on them.', de: 'und das ewige Licht leuchte ihnen.', ru: 'и свет вечный да сияет им.' },
              words: [
                { w: 'et', g: { en: '**and**', de: '**und**', ru: '**и**' } },
                { w: 'lux', g: { en: '**light** — nom. sg. of *lux, lucis* (f., 3rd decl.)', de: '**Licht** — Nom. Sg. von *lux, lucis* (f., 3. Dekl.)', ru: '**свет** — им. ед. от *lux, lucis* (ж. р., 3-е скл.)' } },
                { w: 'perpetua', g: { en: '**perpetual** — nom. sg. f. of *perpetuus*', de: '**immerwährend** — Nom. Sg. f. von *perpetuus*', ru: '**вечный, непрестанный** — им. ед. ж. р. от *perpetuus*' } },
                { w: 'luceat', g: { en: '**may (it) shine** — 3rd sg. present **subjunctive** of *lucere* (2nd conj.)', de: '**es leuchte** — 3. Sg. Präsens **Konjunktiv** von *lucere* (e-Konj.)', ru: '**да сияет** — 3 л. ед. наст. **сослагат.** от *lucere* (2-е спр.)' } },
                { w: 'eis.', g: { en: '**for/on them** — dat. pl.', de: '**ihnen** — Dat. Pl.', ru: '**им** — дат. мн.' } },
              ],
              note: {
                en: 'Imperative to God (*dona*), then a jussive subjunctive in the 3rd person (*luceat*) — the same pair as in the Pater Noster. *lucet* “shines” → *luceat* “may it shine”. *perpetuum mobile*, *lucid*.',
                de: 'Imperativ an Gott (*dona*), dann ein jussiver Konjunktiv in der 3. Person (*luceat*) — dasselbe Paar wie im Pater Noster. *lucet* „leuchtet“ → *luceat* „es leuchte“. Vgl. *Perpetuum mobile*, *luzide*.',
                ru: 'Повелительное к Богу (*dona*), затем юссив в 3-м лице (*luceat*) — та же пара, что и в Pater Noster. *lucet* «сияет» → *luceat* «да сияет». Ср. *перпетуум мобиле*.',
              },
            },
          ],
        },
        {
          kind: 'parse',
          id: 'l7-parse',
          prompt: { en: 'Tag each word', de: 'Bestimme jedes Wort', ru: 'Определите каждое слово' },
          sentences: [
            {
              words: [
                { w: 'Requiem', answer: 'acc', options: ['nom', 'acc', 'voc'], explain: { en: 'Object of *dona*.', de: 'Objekt zu *dona*.', ru: 'Дополнение при *dona*.' } },
                { w: 'aeternam', answer: 'adj', options: ['adj', 'adv', 'acc'] },
                { w: 'dona', answer: 'imp', options: ['imp', 'subj', 'nom'], explain: { en: 'Imperative of *donare* (not a noun here).', de: 'Imperativ von *donare* (hier kein Nomen).', ru: 'Повелительное от *donare* (здесь не существительное).' } },
                { w: 'eis', answer: 'dat', options: ['dat', 'acc', 'gen'] },
                { w: 'Domine', answer: 'voc', options: ['nom', 'voc', 'abl'], explain: { en: '*-us* → *-e* when addressed.', de: '*-us* → *-e* in der Anrede.', ru: '*-us* → *-e* при обращении.' } },
              ],
              translation: { en: 'Eternal rest grant them, O Lord', de: 'Ewige Ruhe gib ihnen, o Herr', ru: 'Вечный покой даруй им, Господи' },
            },
            {
              words: [
                { w: 'lux', answer: 'nom', options: ['nom', 'acc', 'abl'] },
                { w: 'perpetua', answer: 'adj', options: ['adj', 'abl', 'adv'] },
                { w: 'luceat', answer: 'subj', options: ['imp', 'subj', 'verb'], explain: { en: '2nd conj. + *-a-* → “may it shine”.', de: 'e-Konj. + *-a-* → „es leuchte“.', ru: '2-е спр. + *-a-* → «да сияет».' } },
                { w: 'eis', answer: 'dat', options: ['dat', 'abl', 'acc'] },
              ],
              translation: { en: 'may perpetual light shine on them', de: 'das ewige Licht leuchte ihnen', ru: 'свет вечный да сияет им' },
            },
            {
              words: [
                { w: 'Gloria', answer: 'nom', options: ['nom', 'abl', 'voc'] },
                { w: 'in', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'excelsis', answer: 'abl', options: ['abl', 'dat', 'acc'] },
                { w: 'Deo', answer: 'dat', options: ['dat', 'abl', 'gen'], explain: { en: 'Glory **to** God.', de: 'Ehre **Gott** (wem?).', ru: 'Слава **Богу** (кому?).' } },
              ],
              translation: { en: 'Glory to God in the highest', de: 'Ehre sei Gott in der Höhe', ru: 'Слава в вышних Богу' },
            },
          ],
        },
      ],
    },
    {
      minutes: 20,
      title: { en: 'Listen while reading (pick 2)', de: 'Hören und mitlesen (2 auswählen)', ru: 'Слушаем, следя по тексту (выберите 2)' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Choose **two** works. Open the Latin–English text on cpdl.org (search the work name), start the recording, and follow the words with your finger. Composers repeat and overlap lines — when you get lost, wait for a word you know (*Domine*, *pacem*, *lux*) and re-sync.',
            de: 'Wähle **zwei** Werke. Öffne den lateinisch-englischen Text auf cpdl.org (Werktitel suchen), starte die Aufnahme und folge den Worten mit dem Finger. Komponisten wiederholen und überlagern Zeilen — wenn du dich verlierst, warte auf ein bekanntes Wort (*Domine*, *pacem*, *lux*) und finde wieder hinein.',
            ru: 'Выберите **два** произведения. Откройте латинско-английский текст на cpdl.org (поиск по названию), включите запись и следите за словами пальцем. Композиторы повторяют и накладывают строки — если потерялись, дождитесь знакомого слова (*Domine*, *pacem*, *lux*) и подхватите снова.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Four works — what to listen to', de: 'Vier Werke — was du hören solltest', ru: 'Четыре произведения — что слушать' },
          head: [
            { en: 'Work', de: 'Werk', ru: 'Произведение' },
            { en: 'Listen to', de: 'Anhören', ru: 'Что слушать' },
            { en: 'Texts you already know', de: 'Texte, die du schon kennst', ru: 'Знакомые тексты' },
          ],
          rows: [
            [
              'Vivaldi — Gloria, RV 589',
              { en: 'The whole Gloria, movement by movement; at least *Gloria in excelsis Deo*, *Et in terra pax*, *Domine Deus, Agnus Dei*, *Qui tollis peccata mundi*, *Cum Sancto Spiritu*', de: 'Das ganze Gloria Satz für Satz; mindestens *Gloria in excelsis Deo*, *Et in terra pax*, *Domine Deus, Agnus Dei*, *Qui tollis peccata mundi*, *Cum Sancto Spiritu*', ru: 'Всё Gloria по частям; как минимум *Gloria in excelsis Deo*, *Et in terra pax*, *Domine Deus, Agnus Dei*, *Qui tollis peccata mundi*, *Cum Sancto Spiritu*' },
              { en: 'Gloria; *Agnus Dei, qui tollis peccata mundi, miserere nobis*', de: 'Gloria; *Agnus Dei, qui tollis peccata mundi, miserere nobis*', ru: 'Gloria; *Agnus Dei, qui tollis peccata mundi, miserere nobis*' },
            ],
            [
              'Mozart — Requiem, K. 626',
              { en: '**Introitus** *Requiem aeternam*, **Dies irae**, **Lacrimosa**', de: '**Introitus** *Requiem aeternam*, **Dies irae**, **Lacrimosa**', ru: '**Introitus** *Requiem aeternam*, **Dies irae**, **Lacrimosa**' },
              { en: '*Requiem aeternam dona eis, Domine…*; Kyrie follows the Introitus directly', de: '*Requiem aeternam dona eis, Domine…*; das Kyrie folgt direkt auf den Introitus', ru: '*Requiem aeternam dona eis, Domine…*; сразу за Introitus идёт Kyrie' },
            ],
            [
              'J. S. Bach — Mass in B minor, BWV 232',
              { en: '**Kyrie** (opening chorus), **Gloria** (*Gloria in excelsis* + *Et in terra pax*), **Agnus Dei** and the final *Dona nobis pacem*', de: '**Kyrie** (Eingangschor), **Gloria** (*Gloria in excelsis* + *Et in terra pax*), **Agnus Dei** und das abschließende *Dona nobis pacem*', ru: '**Kyrie** (вступительный хор), **Gloria** (*Gloria in excelsis* + *Et in terra pax*), **Agnus Dei** и финальное *Dona nobis pacem*' },
              { en: 'Kyrie, Gloria, Agnus Dei — all from today', de: 'Kyrie, Gloria, Agnus Dei — alles von heute', ru: 'Kyrie, Gloria, Agnus Dei — всё из сегодняшнего урока' },
            ],
            [
              'Arvo Pärt — Magnificat; Credo',
              { en: 'Minimalist, slow, text very audible — ideal for following word by word', de: 'Minimalistisch, langsam, Text sehr gut hörbar — ideal zum Wort-für-Wort-Mitlesen', ru: 'Минимализм, медленно, текст хорошо слышен — идеально для пословного слежения' },
              { en: '*Magnificat anima mea Dominum* “My soul magnifies the Lord” (Luke 1); *Credo* “I believe”', de: '*Magnificat anima mea Dominum* „Meine Seele preist den Herrn“ (Lukas 1); *Credo* „Ich glaube“', ru: '*Magnificat anima mea Dominum* «Величит душа моя Господа» (Лк 1); *Credo* «Верую»' },
            ],
          ],
        },
        {
          kind: 'links',
          title: { en: 'Texts and recordings', de: 'Texte und Aufnahmen', ru: 'Тексты и записи' },
          items: [
            { label: 'cpdl.org — Choral Public Domain Library', url: 'https://www.cpdl.org', note: { en: 'search the work name for Latin–English texts side by side', de: 'Werktitel suchen: lateinisch-englische Paralleltexte', ru: 'ищите по названию: латинский и английский тексты рядом' } },
            { label: 'YouTube: Vivaldi Gloria RV 589', url: 'https://www.youtube.com/results?search_query=Vivaldi+Gloria+RV+589', note: { en: 'full work', de: 'ganzes Werk', ru: 'целиком' } },
            { label: 'YouTube: Mozart Requiem Introitus', url: 'https://www.youtube.com/results?search_query=Mozart+Requiem+Introitus', note: { en: 'Requiem aeternam', de: 'Requiem aeternam', ru: 'Requiem aeternam' } },
            { label: 'YouTube: Mozart Requiem Dies irae', url: 'https://www.youtube.com/results?search_query=Mozart+Requiem+Dies+irae', note: { en: 'homework text', de: 'Text der Hausaufgabe', ru: 'текст домашнего задания' } },
            { label: 'YouTube: Mozart Requiem Lacrimosa', url: 'https://www.youtube.com/results?search_query=Mozart+Requiem+Lacrimosa', note: { en: 'the most famous movement', de: 'der berühmteste Satz', ru: 'самая известная часть' } },
            { label: 'YouTube: Bach Mass in B minor Kyrie', url: 'https://www.youtube.com/results?search_query=Bach+Mass+in+B+minor+Kyrie', note: { en: 'opening chorus', de: 'Eingangschor', ru: 'вступительный хор' } },
            { label: 'YouTube: Bach Mass in B minor Dona nobis pacem', url: 'https://www.youtube.com/results?search_query=Bach+Mass+in+B+minor+Dona+nobis+pacem', note: { en: 'final chorus', de: 'Schlusschor', ru: 'заключительный хор' } },
            { label: 'YouTube: Arvo Pärt Magnificat', url: 'https://www.youtube.com/results?search_query=Arvo+Part+Magnificat', note: { en: 'a cappella choir', de: 'A-cappella-Chor', ru: 'хор a cappella' } },
            { label: 'YouTube: Arvo Pärt Credo', url: 'https://www.youtube.com/results?search_query=Arvo+Part+Credo', note: { en: 'choir, piano, orchestra', de: 'Chor, Klavier, Orchester', ru: 'хор, фортепиано, оркестр' } },
          ],
        },
        {
          kind: 'interlinear',
          id: 'l7-introitus',
          title: { en: 'Mozart Requiem — full Introitus text', de: 'Mozart-Requiem — vollständiger Introitus', ru: 'Реквием Моцарта — полный текст Introitus' },
          lines: [
            {
              la: 'Requiem aeternam dona eis, Domine, et lux perpetua luceat eis.',
              tr: { en: 'Eternal rest grant them, O Lord, and may perpetual light shine on them.', de: 'Ewige Ruhe gib ihnen, o Herr, und das ewige Licht leuchte ihnen.', ru: 'Вечный покой даруй им, Господи, и свет вечный да сияет им.' },
              note: { en: 'Choir — first the basses, then the other voices take it up. Already glossed above.', de: 'Chor — erst die Bässe, dann übernehmen die anderen Stimmen. Oben schon glossiert.', ru: 'Хор — сначала басы, затем подхватывают другие голоса. Разобрано выше.' },
            },
            {
              la: 'Te decet hymnus, Deus, in Sion,',
              tr: { en: 'A hymn befits you, O God, in Zion,', de: 'Dir gebührt ein Loblied, o Gott, in Zion,', ru: 'Тебе подобает песнь, Боже, в Сионе,' },
              words: [
                { w: 'Te', g: { en: '**you** — acc. sg. of *tu*', de: '**dir** (lat. Akk.) — Akk. Sg. von *tu*', ru: '**тебе** (лат. вин.) — вин. ед. от *tu*' } },
                { w: 'decet', g: { en: '**befits, is proper for** — impersonal verb + acc.', de: '**gebührt, ziemt sich für** — unpersönliches Verb + Akk.', ru: '**подобает** — безличный глагол + вин.' } },
                { w: 'hymnus,', g: { en: '**hymn** — nom. sg. (m.)', de: '**Hymnus, Loblied** — Nom. Sg. (m.)', ru: '**песнь, гимн** — им. ед. (м. р.)' } },
                { w: 'Deus,', g: { en: '**O God** — used as vocative', de: '**o Gott** — als Vokativ gebraucht', ru: '**Боже** — в роли звательного' } },
                { w: 'in', g: { en: '**in**', de: '**in**', ru: '**в**' } },
                { w: 'Sion,', g: { en: '**Zion** (Jerusalem) — Hebrew name, indeclinable', de: '**Zion** (Jerusalem) — hebräischer Name, undeklinierbar', ru: '**Сион** (Иерусалим) — еврейское имя, не склоняется' } },
              ],
              note: { en: 'Soprano solo in Mozart.', de: 'Sopransolo bei Mozart.', ru: 'У Моцарта — соло сопрано.' },
            },
            {
              la: 'et tibi reddetur votum in Ierusalem.',
              tr: { en: 'and to you a vow shall be paid in Jerusalem.', de: 'und dir erfülle man das Gelübde in Jerusalem.', ru: 'и тебе воздастся обет в Иерусалиме.' },
              words: [
                { w: 'et', g: { en: '**and**', de: '**und**', ru: '**и**' } },
                { w: 'tibi', g: { en: '**to you** — dat. sg. of *tu*', de: '**dir** — Dat. Sg. von *tu*', ru: '**тебе** — дат. ед. от *tu*' } },
                { w: 'reddetur', g: { en: '**will be paid back** — 3rd sg. future passive of *reddere*', de: '**wird erfüllt/zurückgegeben werden** — 3. Sg. Futur Passiv von *reddere*', ru: '**будет воздан** — 3 л. ед. буд. вр. страд. от *reddere*' } },
                { w: 'votum', g: { en: '**vow** — nom. sg. (n.); subject of the passive verb', de: '**Gelübde** — Nom. Sg. (n.); Subjekt des Passivs', ru: '**обет** — им. ед. (ср. р.); подлежащее при страдательном глаголе' } },
                { w: 'in', g: { en: '**in**', de: '**in**', ru: '**в**' } },
                { w: 'Ierusalem.', g: { en: '**Jerusalem** — indeclinable', de: '**Jerusalem** — undeklinierbar', ru: '**Иерусалим** — не склоняется' } },
              ],
              note: { en: '*votum* → *vote*, *votive*.', de: '*votum* → *Votum*, *votieren*.', ru: '*votum* → *вотум* (доверия).' },
            },
            {
              la: 'Exaudi orationem meam; ad te omnis caro veniet.',
              tr: { en: 'Hear my prayer; to you all flesh shall come.', de: 'Erhöre mein Gebet; zu dir kommt alles Fleisch.', ru: 'Услышь молитву мою; к тебе придёт всякая плоть.' },
              words: [
                { w: 'Exaudi', g: { en: '**hear!** — 2nd sg. imperative of *exaudire*', de: '**erhöre!** — 2. Sg. Imperativ von *exaudire*', ru: '**услышь!** — 2 л. ед. повелит. от *exaudire*' } },
                { w: 'orationem', g: { en: '**prayer** — acc. sg. of *oratio, orationis* (f.)', de: '**Gebet** — Akk. Sg. von *oratio, orationis* (f.)', ru: '**молитву** — вин. ед. от *oratio, orationis* (ж. р.)' } },
                { w: 'meam;', g: { en: '**my** — acc. sg. f.', de: '**mein** — Akk. Sg. f.', ru: '**мою** — вин. ед. ж. р.' } },
                { w: 'ad', g: { en: '**to, towards** — + acc.', de: '**zu** — + Akk.', ru: '**к** — + вин.' } },
                { w: 'te', g: { en: '**you** — acc. sg.', de: '**dir** — Akk. Sg.', ru: '**тебе** — вин. ед.' } },
                { w: 'omnis', g: { en: '**all, every** — nom. sg. f.', de: '**alles, jedes** — Nom. Sg. f.', ru: '**всякая** — им. ед. ж. р.' } },
                { w: 'caro', g: { en: '**flesh** — nom. sg. of *caro, carnis* (f.)', de: '**Fleisch** — Nom. Sg. von *caro, carnis* (f.)', ru: '**плоть** — им. ед. от *caro, carnis* (ж. р.)' } },
                { w: 'veniet.', g: { en: '**will come** — 3rd sg. future of *venire*', de: '**wird kommen** — 3. Sg. Futur von *venire*', ru: '**придёт** — 3 л. ед. буд. вр. от *venire*' } },
              ],
              note: { en: '*caro, carnis* → *carnival* (“farewell to meat”), *carnivore*, *incarnation*.', de: '*caro, carnis* → *Karneval*, *Karnivore*, *Inkarnation*.', ru: '*caro, carnis* → *карнавал*, *карнивор* (хищник), *инкарнация*.' },
            },
            {
              la: 'Requiem aeternam dona eis, Domine, et lux perpetua luceat eis.',
              tr: { en: 'Eternal rest grant them, O Lord, and may perpetual light shine on them.', de: 'Ewige Ruhe gib ihnen, o Herr, und das ewige Licht leuchte ihnen.', ru: 'Вечный покой даруй им, Господи, и свет вечный да сияет им.' },
              note: { en: 'The opening returns — then the music runs straight into the Kyrie.', de: 'Der Anfang kehrt zurück — dann geht die Musik direkt ins Kyrie über.', ru: 'Начало возвращается — и музыка сразу переходит в Kyrie.' },
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'culture',
          body: {
            en: 'Mozart died in December 1791 with the Requiem unfinished; only the Introitus is fully his. His pupil **Franz Xaver Süssmayr** completed it — the *Lacrimosa* breaks off in Mozart’s hand after only eight bars.',
            de: 'Mozart starb im Dezember 1791, das Requiem blieb unvollendet; nur der Introitus ist vollständig von ihm. Sein Schüler **Franz Xaver Süßmayr** vollendete es — das *Lacrimosa* bricht in Mozarts Handschrift nach nur acht Takten ab.',
            ru: 'Моцарт умер в декабре 1791 года, не закончив Реквием; полностью ему принадлежит только Introitus. Завершил работу его ученик **Франц Ксавер Зюсмайр** — *Lacrimosa* в рукописи Моцарта обрывается всего через восемь тактов.',
          },
        },
        {
          kind: 'notepad',
          id: 'l7-listening',
          prompt: { en: 'Listening log: work — movement — lines I caught — words I recognised', de: 'Hörprotokoll: Werk — Satz — Zeilen, die ich mitbekommen habe — erkannte Wörter', ru: 'Дневник прослушивания: произведение — часть — какие строки уловил — какие слова узнал' },
          placeholder: { en: 'Mozart, Introitus — followed lines 1–2, lost at “Te decet” — heard: Domine, lux, luceat', de: 'Mozart, Introitus — Zeilen 1–2 verfolgt, bei „Te decet“ verloren — gehört: Domine, lux, luceat', ru: 'Моцарт, Introitus — следил за строками 1–2, потерялся на «Te decet» — услышал: Domine, lux, luceat' },
        },
      ],
    },
    {
      minutes: 5,
      title: { en: 'Recurring words', de: 'Wiederkehrende Wörter', ru: 'Повторяющиеся слова' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'A small set of words carries most of the liturgy. Learn them with their **case forms** — in the texts you rarely meet the dictionary form: *Dominus / Domine / Dominum*, *pax / pacem*, *Deus / Dei / Deo*.',
            de: 'Ein kleiner Wortschatz trägt den Großteil der Liturgie. Lerne die Wörter mit ihren **Fallformen** — in den Texten triffst du selten die Wörterbuchform: *Dominus / Domine / Dominum*, *pax / pacem*, *Deus / Dei / Deo*.',
            ru: 'Небольшой набор слов несёт на себе большую часть литургии. Учите их вместе с **падежными формами** — словарную форму в текстах встречаешь редко: *Dominus / Domine / Dominum*, *pax / pacem*, *Deus / Dei / Deo*.',
          },
        },
        {
          kind: 'flashcards',
          id: 'l7-cards',
          title: { en: 'Liturgical vocabulary', de: 'Liturgischer Wortschatz', ru: 'Литургическая лексика' },
          cards: [
            { la: 'Dominus, -i (m.)', back: { en: 'lord, the Lord — voc. *Domine*', de: 'Herr — Vok. *Domine*', ru: 'господин, Господь — зват. *Domine*' } },
            { la: 'Deus, -i (m.)', back: { en: 'God — gen. *Dei*, dat. *Deo*', de: 'Gott — Gen. *Dei*, Dat. *Deo*', ru: 'Бог — род. *Dei*, дат. *Deo*' } },
            { la: 'pax, pacis (f.)', back: { en: 'peace — acc. *pacem*', de: 'Friede — Akk. *pacem*', ru: 'мир (покой) — вин. *pacem*' } },
            { la: 'lux, lucis (f.)', back: { en: 'light', de: 'Licht', ru: 'свет' } },
            { la: 'mundus, -i (m.)', back: { en: 'world — gen. *mundi*', de: 'Welt — Gen. *mundi*', ru: 'мир (вселенная) — род. *mundi*' } },
            { la: 'peccatum, -i (n.)', back: { en: 'sin — pl. *peccata*', de: 'Sünde — Pl. *peccata*', ru: 'грех — мн. *peccata*' } },
            { la: 'peccator, -oris (m.)', back: { en: 'sinner', de: 'Sünder', ru: 'грешник' } },
            { la: 'nobis / vobis', back: { en: 'to/for us / to/for you (pl.)', de: 'uns / euch (Dat./Abl.)', ru: 'нам / вам (дат./абл.)' } },
            { la: 'tecum / vobiscum', back: { en: 'with you (sg.) / with you (pl.)', de: 'mit dir / mit euch', ru: 'с тобой / с вами' } },
            { la: 'gratia, -ae (f.)', back: { en: 'grace, favour, thanks', de: 'Gnade, Gunst, Dank', ru: 'благодать, милость, благодарность' } },
            { la: 'benedictus, -a, -um', back: { en: 'blessed (perf. pass. part. of *benedicere*)', de: 'gesegnet, gebenedeit (PPP von *benedicere*)', ru: 'благословенный (прич. от *benedicere*)' } },
            { la: 'gloria, -ae (f.)', back: { en: 'glory', de: 'Ruhm, Ehre', ru: 'слава' } },
            { la: 'agnus, -i (m.)', back: { en: 'lamb', de: 'Lamm', ru: 'агнец, ягнёнок' } },
            { la: 'miserere', back: { en: 'have mercy! (imp. of *misereri*)', de: 'erbarme dich! (Imp. von *misereri*)', ru: 'помилуй! (повел. от *misereri*)' } },
            { la: 'dono, -are', back: { en: 'to give, grant — imp. *dona*', de: 'schenken, geben — Imp. *dona*', ru: 'дарить, даровать — повел. *dona*' } },
            { la: 'requies, -etis (f.)', back: { en: 'rest — acc. *requiem*', de: 'Ruhe — Akk. *requiem*', ru: 'покой — вин. *requiem*' } },
            { la: 'aeternus, -a, -um', back: { en: 'eternal', de: 'ewig', ru: 'вечный' } },
            { la: 'perpetuus, -a, -um', back: { en: 'perpetual, unceasing', de: 'immerwährend, beständig', ru: 'непрерывный, вечный' } },
            { la: 'sanctus, -a, -um', back: { en: 'holy', de: 'heilig', ru: 'святой' } },
            { la: 'mater, matris (f.)', back: { en: 'mother', de: 'Mutter', ru: 'мать' } },
            { la: 'mors, mortis (f.)', back: { en: 'death', de: 'Tod', ru: 'смерть' } },
            { la: 'hora, -ae (f.)', back: { en: 'hour', de: 'Stunde', ru: 'час' } },
            { la: 'oro, -are', back: { en: 'to pray — imp. *ora*', de: 'beten, bitten — Imp. *ora*', ru: 'молиться, просить — повел. *ora*' } },
            { la: 'homo, hominis (m.)', back: { en: 'human being, person', de: 'Mensch', ru: 'человек' } },
            { la: 'spiritus, -us (m.)', back: { en: 'spirit, breath', de: 'Geist, Atem', ru: 'дух, дыхание' } },
            { la: 'mulier, mulieris (f.)', back: { en: 'woman', de: 'Frau', ru: 'женщина, жена' } },
            { la: 'fructus, -us (m.)', back: { en: 'fruit', de: 'Frucht', ru: 'плод' } },
          ],
        },
        {
          kind: 'match',
          id: 'l7-match',
          prompt: { en: 'Match the form to its meaning', de: 'Ordne die Form ihrer Bedeutung zu', ru: 'Сопоставьте форму и значение' },
          pairs: [
            { left: 'Domine', right: { en: 'O Lord!', de: 'o Herr!', ru: 'Господи!' } },
            { left: 'Dei', right: { en: 'of God', de: 'Gottes', ru: 'Божий' } },
            { left: 'pacem', right: { en: 'peace (object)', de: 'Frieden (Objekt)', ru: 'мир (дополнение)' } },
            { left: 'mundi', right: { en: 'of the world', de: 'der Welt', ru: 'мира' } },
            { left: 'vobiscum', right: { en: 'with you (pl.)', de: 'mit euch', ru: 'с вами' } },
            { left: 'peccata', right: { en: 'sins', de: 'Sünden', ru: 'грехи' } },
          ],
        },
      ],
    },
    {
      minutes: 0,
      title: { en: 'Practice', de: 'Übung', ru: 'Практика' },
      blocks: [
        {
          kind: 'quiz',
          id: 'l7-quiz',
          title: { en: 'Liturgical Latin check', de: 'Check: liturgisches Latein', ru: 'Проверка: литургическая латынь' },
          questions: [
            { prompt: { en: 'Which of these texts is **not** Latin?', de: 'Welcher dieser Texte ist **kein** Latein?', ru: 'Какой из этих текстов **не** латинский?' }, options: ['Kyrie eleison', 'Agnus Dei', 'Dominus vobiscum'], answer: 0, explain: { en: 'Greek: “Lord, have mercy”.', de: 'Griechisch: „Herr, erbarme dich“.', ru: 'Греческий: «Господи, помилуй».' } },
            { prompt: { en: 'What case is *Domine* in *dona eis, Domine*?', de: 'Welcher Fall ist *Domine* in *dona eis, Domine*?', ru: 'Какой падеж у *Domine* в *dona eis, Domine*?' }, options: [{ en: 'vocative', de: 'Vokativ', ru: 'звательный' }, { en: 'ablative', de: 'Ablativ', ru: 'аблатив' }, { en: 'nominative', de: 'Nominativ', ru: 'именительный' }], answer: 0 },
            { prompt: { en: 'What does *luceat* express?', de: 'Was drückt *luceat* aus?', ru: 'Что выражает *luceat*?' }, options: [{ en: 'a wish: “may it shine”', de: 'einen Wunsch: „es leuchte“', ru: 'пожелание: «да сияет»' }, { en: 'a fact: “it shines”', de: 'eine Tatsache: „es leuchtet“', ru: 'факт: «сияет»' }, { en: 'a command to “you”: “shine!”', de: 'einen Befehl an „dich“: „leuchte!“', ru: 'приказ «тебе»: «сияй!»' }], answer: 0, explain: { en: 'Present subjunctive of *lucere* (*lucet* → *luceat*).', de: 'Konjunktiv Präsens von *lucere* (*lucet* → *luceat*).', ru: 'Наст. сослагательное от *lucere* (*lucet* → *luceat*).' } },
            { prompt: { en: 'In *miserere nobis*, *nobis* is…', de: 'In *miserere nobis* ist *nobis*…', ru: 'В *miserere nobis* слово *nobis* —' }, options: [{ en: 'dative (liturgical usage)', de: 'Dativ (liturgischer Gebrauch)', ru: 'дательный (литургическое употребление)' }, { en: 'accusative', de: 'Akkusativ', ru: 'винительный' }, { en: 'nominative', de: 'Nominativ', ru: 'именительный' }], answer: 0, explain: { en: 'Classical Latin would use the genitive with *misereri*.', de: 'Klassisch stünde bei *misereri* der Genitiv.', ru: 'В классической латыни при *misereri* стоял бы родительный.' } },
            { prompt: { en: '*hominibus bonae voluntatis* — what does the genitive *bonae voluntatis* do?', de: '*hominibus bonae voluntatis* — was leistet der Genitiv *bonae voluntatis*?', ru: '*hominibus bonae voluntatis* — какую роль играет родительный *bonae voluntatis*?' }, options: [{ en: 'describes the people (“of good will”)', de: 'beschreibt die Menschen („guten Willens“)', ru: 'описывает людей («доброй воли»)' }, { en: 'shows who owns the peace', de: 'zeigt, wem der Friede gehört', ru: 'показывает, чей мир' }, { en: 'is the subject', de: 'ist das Subjekt', ru: 'это подлежащее' }], answer: 0 },
            { prompt: { en: 'Why *qui tollis* (2nd person) and not *qui tollit*?', de: 'Warum *qui tollis* (2. Person) und nicht *qui tollit*?', ru: 'Почему *qui tollis* (2-е лицо), а не *qui tollit*?' }, options: [{ en: 'The Lamb is being addressed: “you who take away”', de: 'Das Lamm wird angeredet: „der du hinwegnimmst“', ru: 'К Агнцу обращаются: «ты, который берёшь»' }, { en: 'It is plural', de: 'Es ist Plural', ru: 'Это множественное число' }, { en: 'It is a subjunctive', de: 'Es ist ein Konjunktiv', ru: 'Это сослагательное' }], answer: 0 },
            { prompt: { en: 'What is *Requiem* grammatically?', de: 'Was ist *Requiem* grammatisch?', ru: 'Что такое *Requiem* грамматически?' }, options: [{ en: 'accusative of *requies* “rest”', de: 'Akkusativ von *requies* „Ruhe“', ru: 'винительный от *requies* «покой»' }, { en: 'a verb “rest!”', de: 'ein Verb „ruhe!“', ru: 'глагол «покойся!»' }, { en: 'genitive plural', de: 'Genitiv Plural', ru: 'родительный множественного' }], answer: 0 },
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Homework: Dies irae, first stanza', de: 'Hausaufgabe: Dies irae, erste Strophe', ru: 'Домашнее задание: Dies irae, первая строфа' },
          body: {
            en: 'Hints:\n- [[dies]] day — here feminine (*dies illa*), which marks a fixed, appointed day; [[irae]] gen. of *ira* “anger”.\n- [[solvet]] future of *solvere* “dissolve”; [[saeclum]] = *saeculum* “age, world” (acc.); [[favilla]] abl. of *favilla* “ash”.\n- [[teste David cum Sibylla]] is an **ablative absolute**: *teste* (abl. of *testis* “witness”) + *David* (indeclinable) = “with David as witness”, *cum Sibylla* “together with the Sibyl”.',
            de: 'Hinweise:\n- [[dies]] Tag — hier feminin (*dies illa*), was einen festgesetzten Tag bezeichnet; [[irae]] Gen. von *ira* „Zorn“.\n- [[solvet]] Futur von *solvere* „auflösen“; [[saeclum]] = *saeculum* „Zeitalter, Welt“ (Akk.); [[favilla]] Abl. von *favilla* „Asche“.\n- [[teste David cum Sibylla]] ist ein **Ablativus absolutus**: *teste* (Abl. von *testis* „Zeuge“) + *David* (undeklinierbar) = „mit David als Zeugen“, *cum Sibylla* „zusammen mit der Sibylle“.',
            ru: 'Подсказки:\n- [[dies]] день — здесь женского рода (*dies illa*), что обозначает назначенный, определённый день; [[irae]] род. от *ira* «гнев».\n- [[solvet]] буд. вр. от *solvere* «растворять»; [[saeclum]] = *saeculum* «век, мир» (вин.); [[favilla]] абл. от *favilla* «пепел».\n- [[teste David cum Sibylla]] — **аблатив абсолютный**: *teste* (абл. от *testis* «свидетель») + *David* (не склоняется) = «при свидетельстве Давида», *cum Sibylla* «вместе с Сивиллой».',
          },
        },
        {
          kind: 'translate',
          id: 'l7-dies-irae',
          prompt: { en: 'Translate the first stanza of the Dies irae — first line by line, then the whole stanza smoothly.', de: 'Übersetze die erste Strophe des Dies irae — erst Zeile für Zeile, dann die ganze Strophe flüssig.', ru: 'Переведите первую строфу Dies irae — сначала по строкам, затем всю строфу гладко.' },
          items: [
            { la: 'Dies irae, dies illa,', answer: { en: 'Day of wrath, that day,', de: 'Tag des Zorns, jener Tag,', ru: 'День гнева, тот день,' } },
            { la: 'solvet saeclum in favilla,', answer: { en: 'will dissolve the world in ash,', de: 'wird die Welt in Asche auflösen,', ru: 'обратит мир в пепел (растворит век в пепле),' } },
            { la: 'teste David cum Sibylla.', answer: { en: 'with David as witness, together with the Sibyl.', de: 'mit David als Zeugen, zusammen mit der Sibylle.', ru: 'по свидетельству Давида вместе с Сивиллой.' } },
            { la: 'Dies irae, dies illa, solvet saeclum in favilla, teste David cum Sibylla.', answer: { en: 'The day of wrath, that day, will dissolve the world in ashes, as David and the Sibyl bear witness.', de: 'Der Tag des Zorns, jener Tag, wird die Welt in Asche auflösen, wie David und die Sibylle bezeugen.', ru: 'День гнева, тот день, обратит мир в пепел, как свидетельствуют Давид и Сивилла.' } },
          ],
        },
      ],
    },
  ],
  materials: [
    { label: 'CPDL — Choral Public Domain Library', url: 'https://www.cpdl.org', note: { en: 'Latin–English texts side by side; search the work name', de: 'lateinisch-englische Paralleltexte; nach dem Werktitel suchen', ru: 'латинский и английский тексты рядом; ищите по названию произведения' } },
    { label: 'John F. Collins — A Primer of Ecclesiastical Latin', note: { en: 'glossary as reference', de: 'Glossar als Nachschlagewerk', ru: 'глоссарий как справочник' } },
    { label: 'YouTube: Mozart Requiem Introitus', url: 'https://www.youtube.com/results?search_query=Mozart+Requiem+Introitus', note: { en: 'for the “done when” check', de: 'für den Abschluss-Check', ru: 'для итоговой проверки' } },
  ],
  homework: [
    {
      en: 'Anki: DCC core vocabulary 200–250, plus the liturgical vocabulary (cards above).',
      de: 'Anki: DCC-Grundwortschatz 200–250, dazu der liturgische Wortschatz (Karten oben).',
      ru: 'Anki: базовый словарь DCC 200–250 и литургическая лексика (карточки выше).',
    },
    {
      en: 'Translate the first stanza of the Dies irae: “Dies irae, dies illa, solvet saeclum in favilla, teste David cum Sibylla.” (practice block above)',
      de: 'Die erste Strophe des Dies irae übersetzen: „Dies irae, dies illa, solvet saeclum in favilla, teste David cum Sibylla.“ (Übungsblock oben)',
      ru: 'Перевести первую строфу Dies irae: «Dies irae, dies illa, solvet saeclum in favilla, teste David cum Sibylla.» (блок практики выше)',
    },
  ],
  doneWhen: [
    {
      en: 'I can follow the Mozart Requiem Introitus by ear and know what each line means.',
      de: 'Ich kann dem Introitus aus Mozarts Requiem nach Gehör folgen und weiß, was jede Zeile bedeutet.',
      ru: 'Могу следить на слух за Introitus из Реквиема Моцарта и знаю значение каждой строки.',
    },
    {
      en: 'I can translate the Ave Maria, Gloria opening, Agnus Dei and the Mass responses word for word.',
      de: 'Ich kann das Ave Maria, den Gloria-Anfang, das Agnus Dei und die Antworten der Messe Wort für Wort übersetzen.',
      ru: 'Могу пословно перевести Ave Maria, начало Gloria, Agnus Dei и возгласы мессы.',
    },
  ],
};

export default l07;
