import type { Lesson } from '../types';

const l06: Lesson = {
  id: 6,
  date: '2026-10-20',
  title: {
    en: 'Church Latin — Pater Noster',
    de: 'Kirchenlatein — Pater Noster',
    ru: 'Церковная латынь — Pater Noster',
  },
  goal: {
    en: 'Read the Pater Noster with ecclesiastical pronunciation and understand the function of every word.',
    de: 'Das Pater Noster in kirchlicher Aussprache lesen und die Funktion jedes Wortes verstehen.',
    ru: 'Читать Pater Noster в церковном произношении и понимать роль каждого слова.',
  },
  sections: [
    {
      minutes: 5,
      title: { en: 'Review: Anki', de: 'Wiederholung: Anki', ru: 'Повторение: Anki' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Clear today’s Anki reviews before anything else. Say each Latin word **aloud** before flipping the card — today you start saying them the church way.',
            de: 'Erledige zuerst die heutigen Anki-Wiederholungen. Sprich jedes lateinische Wort **laut**, bevor du die Karte umdrehst — ab heute auf kirchliche Art.',
            ru: 'Сначала пройдите сегодняшние повторения в Anki. Произносите каждое латинское слово **вслух**, прежде чем перевернуть карточку, — с сегодняшнего дня по-церковному.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Switch the toggle to Ecclesiastical', de: 'Umschalter auf „Kirchlich“ stellen', ru: 'Переключите произношение на церковное' },
          body: {
            en: 'Sessions 6 and 7 are the church-Latin block. Set the pronunciation toggle in the top bar to **Ecclesiastical** now, so every 🔊 button reads the texts the way they are sung and prayed. Switch back to Classical in session 8.',
            de: 'Die Einheiten 6 und 7 bilden den Kirchenlatein-Block. Stell den Aussprache-Umschalter oben jetzt auf **Kirchlich**, damit jeder 🔊-Knopf die Texte so liest, wie sie gesungen und gebetet werden. In Einheit 8 wieder auf Klassisch zurückstellen.',
            ru: 'Занятия 6 и 7 — блок церковной латыни. Переключите произношение в верхней панели на **церковное**, чтобы все кнопки 🔊 читали тексты так, как их поют и читают в молитвах. На занятии 8 верните классическое.',
          },
        },
      ],
    },
    {
      minutes: 10,
      title: { en: 'Ecclesiastical (Italianate) pronunciation', de: 'Kirchliche (italienische) Aussprache', ru: 'Церковное (итальянизированное) произношение' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Church Latin is pronounced roughly as an Italian would read it. Grammar, spelling and stress stay the same — only some sounds change. Since the early 20th century this Roman style has been the standard for chant and choral music in most of the world.',
            de: 'Kirchenlatein wird ungefähr so ausgesprochen, wie ein Italiener es lesen würde. Grammatik, Schreibung und Betonung bleiben gleich — nur einige Laute ändern sich. Seit dem frühen 20. Jahrhundert ist dieser römische Stil fast überall Standard für Choral und Chormusik.',
            ru: 'Церковную латынь произносят примерно так, как её прочитал бы итальянец. Грамматика, орфография и ударение не меняются — меняются лишь некоторые звуки. С начала XX века этот римский стиль стал стандартом для григорианского пения и хоровой музыки почти во всём мире.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Ecclesiastical rules you need for the prayers', de: 'Kirchliche Regeln für die Gebete', ru: 'Правила церковного чтения для молитв' },
          head: [
            { en: 'Spelling', de: 'Schreibung', ru: 'Написание' },
            { en: 'Sound', de: 'Laut', ru: 'Звук' },
            { en: 'Example', de: 'Beispiel', ru: 'Пример' },
            { en: 'Sounds like', de: 'Klingt wie', ru: 'Звучит как' },
          ],
          latinCols: [2],
          rows: [
            [{ en: 'c before e, i, ae, oe', de: 'c vor e, i, ae, oe', ru: 'c перед e, i, ae, oe' }, { en: '**ch** (as in *church*)', de: '**tsch**', ru: '**ч**' }, 'caelis', { en: '*CHE-lis*', de: '*TSCHE-lis*', ru: '*ЧЕ-лис*' }],
            [{ en: 'cc before e, i', de: 'cc vor e, i', ru: 'cc перед e, i' }, { en: '**tch**', de: '**ttsch**', ru: '**тч**' }, 'ecce', { en: '*ET-che*', de: '*ET-tsche*', ru: '*ЭТ-че*' }],
            [{ en: 'g before e, i', de: 'g vor e, i', ru: 'g перед e, i' }, { en: '**j** (as in *gem*)', de: '**dsch**', ru: '**дж**' }, 'regina', { en: '*re-JEE-na*', de: '*re-DSCHI-na*', ru: '*ре-ДЖИ-на*' }],
            ['gn', { en: '**ny** (as in *canyon*)', de: '**nj** (wie *Champagner*)', ru: '**нь**' }, 'regnum', { en: '*REN-yum*', de: '*REN-jum*', ru: '*РЕ-ньюм*' }],
            ['ae, oe', { en: '**e**', de: '**e**', ru: '**э**' }, 'caelo', { en: '*CHE-lo*', de: '*TSCHE-lo*', ru: '*ЧЕ-ло*' }],
            [{ en: 'ti + vowel', de: 'ti + Vokal', ru: 'ti + гласная' }, { en: '**tsi** (not after s, t, x)', de: '**zi** (nicht nach s, t, x)', ru: '**ци** (кроме как после s, t, x)' }, 'gratia', { en: '*GRA-tsi-a*', de: '*GRA-zi-a*', ru: '*ГРА-ци-а*' }],
            [{ en: 'sc before e, i', de: 'sc vor e, i', ru: 'sc перед e, i' }, { en: '**sh**', de: '**sch**', ru: '**ш**' }, 'descendit', { en: '*de-SHEN-dit*', de: '*de-SCHEN-dit*', ru: '*де-ШЕН-дит*' }],
            [{ en: 'xc before e, i', de: 'xc vor e, i', ru: 'xc перед e, i' }, { en: '**ksh**', de: '**ksch**', ru: '**кш**' }, 'excelsis', { en: '*ek-SHEL-sis*', de: '*ek-SCHEL-sis*', ru: '*эк-ШЕЛЬ-сис*' }],
            ['h', { en: 'silent (but *mihi*, *nihil* = *miki*, *nikil*)', de: 'stumm (aber *mihi*, *nihil* = *miki*, *nikil*)', ru: 'не произносится (но *mihi*, *nihil* = *мики*, *никил*)' }, 'hodie', { en: '*O-di-e*', de: '*O-di-e*', ru: '*О-ди-э*' }],
            ['v', '**v**', 'voluntas', { en: '*vo-LUN-tas*', de: '*wo-LUN-tas* (dt. w)', ru: '*во-ЛУН-тас*' }],
            [{ en: 'c elsewhere, ch', de: 'c sonst, ch', ru: 'c в остальных случаях, ch' }, '**k**', 'sanctificetur', { en: '*sank-ti-fi-CHE-tur*', de: '*sank-ti-fi-TSCHE-tur*', ru: '*санк-ти-фи-ЧЕ-тур*' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          body: {
            en: 'You already know these sounds from Italian music terms: *dolce* (DOL-che), *adagio* (a-DA-jo), *crescendo* (kre-SHEN-do). The rules are the same.',
            de: 'Diese Laute kennst du schon aus italienischen Musikbegriffen: *dolce* (DOL-tsche), *adagio* (a-DA-dscho), *crescendo* (kre-SCHEN-do). Dieselben Regeln.',
            ru: 'Эти звуки вы уже знаете по итальянским музыкальным терминам: *dolce* (ДОЛЬ-че), *adagio* (а-ДА-джо), *crescendo* (кре-ШЕН-до). Правила те же.',
          },
        },
        { kind: 'pronounce', samples: ['Pater noster', 'in caelis', 'gratia', 'in excelsis', 'sanctificetur', 'regnum', 'Agnus Dei', 'hodie', 'regina caeli', 'tentationem'] },
        {
          kind: 'quiz',
          id: 'l6-pron',
          title: { en: 'Read it the church way', de: 'Kirchlich lesen', ru: 'Читаем по-церковному' },
          questions: [
            { prompt: { en: 'Ecclesiastical pronunciation of', de: 'Kirchliche Aussprache von', ru: 'Церковное произношение' }, la: 'caelis', options: ['KAI-lis', 'CHE-lis', 'TSE-lis'], answer: 1, explain: { en: 'c before ae = ch, and ae = e.', de: 'c vor ae = tsch, und ae = e.', ru: 'c перед ae = ч, а ae = э.' } },
            { prompt: { en: 'Ecclesiastical pronunciation of', de: 'Kirchliche Aussprache von', ru: 'Церковное произношение' }, la: 'gratia', options: ['GRA-ti-a', 'GRA-tsi-a', 'GRA-shi-a'], answer: 1 },
            { prompt: { en: 'Ecclesiastical pronunciation of', de: 'Kirchliche Aussprache von', ru: 'Церковное произношение' }, la: 'regnum', options: ['REG-num', 'REN-yum', 'REJ-num'], answer: 1, explain: { en: 'gn = ny, like Italian *gnocchi*.', de: 'gn = nj, wie ital. *gnocchi*.', ru: 'gn = нь, как в итальянском *gnocchi*.' } },
            { prompt: { en: 'Ecclesiastical pronunciation of', de: 'Kirchliche Aussprache von', ru: 'Церковное произношение' }, la: 'hodie', options: ['HO-di-e', 'O-di-e', 'O-dzhi-e'], answer: 1, explain: { en: 'h is silent; d is never softened.', de: 'h ist stumm; d wird nie erweicht.', ru: 'h не читается; d никогда не смягчается.' } },
            { prompt: { en: 'Which word has a **ksh** sound?', de: 'Welches Wort hat einen **ksch**-Laut?', ru: 'В каком слове звучит **кш**?' }, options: ['excelsis', 'pax', 'exaudi'], answer: 0, explain: { en: 'xc before e → ksh. In *exaudi* the x is just ks (often gz).', de: 'xc vor e → ksch. In *exaudi* ist x nur ks (oft gs).', ru: 'xc перед e → кш. В *exaudi* x — просто кс (часто гз).' } },
          ],
        },
      ],
    },
    {
      minutes: 30,
      title: { en: 'Line-by-line reading', de: 'Zeile für Zeile lesen', ru: 'Чтение по строкам' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'For each line: read it aloud, **tap every word** to see its form, say a word-for-word translation, then reveal the translation and the grammar note. Don’t move on until you can say *why* each word has its ending.',
            de: 'Für jede Zeile: laut lesen, **jedes Wort antippen**, um seine Form zu sehen, eine Wort-für-Wort-Übersetzung sagen, dann Übersetzung und Grammatiknotiz aufdecken. Erst weitergehen, wenn du sagen kannst, *warum* jedes Wort seine Endung hat.',
            ru: 'Для каждой строки: прочитайте вслух, **нажмите на каждое слово**, чтобы увидеть форму, переведите слово в слово, затем откройте перевод и грамматическую заметку. Не идите дальше, пока не сможете объяснить, *почему* у каждого слова такое окончание.',
          },
        },
        {
          kind: 'interlinear',
          id: 'l6-pater',
          title: { en: 'Pater Noster (Matthew 6:9–13)', de: 'Pater Noster (Matthäus 6,9–13)', ru: 'Pater Noster (Матфей 6:9–13)' },
          lines: [
            {
              la: 'Pater noster, qui es in caelis,',
              tr: { en: 'Our Father, who are in the heavens,', de: 'Unser Vater, der du bist in den Himmeln,', ru: 'Отец наш, который (есть) на небесах,' },
              words: [
                { w: 'Pater', g: { en: '**father** — voc. sg. of *pater, patris* (m., 3rd decl.); same form as nom.', de: '**Vater** — Vok. Sg. von *pater, patris* (m., 3. Dekl.); gleich dem Nom.', ru: '**отец** — зват. ед. от *pater, patris* (м. р., 3-е скл.); совпадает с им.' } },
                { w: 'noster,', g: { en: '**our** — voc. sg. m., agrees with *Pater*', de: '**unser** — Vok. Sg. m., kongruent mit *Pater*', ru: '**наш** — зват. ед. м. р., согласовано с *Pater*' } },
                { w: 'qui', g: { en: '**who** — relative pronoun, nom. sg. m.', de: '**der** (welcher) — Relativpronomen, Nom. Sg. m.', ru: '**который** — относит. местоимение, им. ед. м. р.' } },
                { w: 'es', g: { en: '**(you) are** — 2nd sg. present of *esse*; 2nd person because Father is addressed', de: '**(du) bist** — 2. Sg. Präsens von *esse*; 2. Person, weil der Vater angeredet wird', ru: '**(ты) есть** — 2 л. ед. наст. вр. от *esse*; 2-е лицо, потому что к Отцу обращаются' } },
                { w: 'in', g: { en: '**in** — preposition + abl. (place where)', de: '**in** — Präposition + Abl. (Ort: wo?)', ru: '**в, на** — предлог + абл. (где?)' } },
                { w: 'caelis,', g: { en: '**heavens** — abl. pl. of *caelum* (n.)', de: '**Himmeln** — Abl. Pl. von *caelum* (n.)', ru: '**небесах** — абл. мн. от *caelum* (ср. р.)' } },
              ],
              note: {
                en: '**Vocative** (address) + nominative relative. For most nouns the vocative = nominative; only 2nd-decl. *-us* nouns change (*Dominus* → *Domine*).',
                de: '**Vokativ** (Anrede) + Relativsatz im Nominativ. Bei den meisten Nomen ist der Vokativ = Nominativ; nur Nomen der 2. Dekl. auf *-us* ändern sich (*Dominus* → *Domine*).',
                ru: '**Звательный падеж** (обращение) + относительное местоимение в им. п. У большинства существительных звательный = именительный; меняются только слова 2-го скл. на *-us* (*Dominus* → *Domine*), ср. рус. *Отче*.',
              },
            },
            {
              la: 'sanctificetur nomen tuum.',
              tr: { en: 'may your name be hallowed.', de: 'geheiligt werde dein Name.', ru: 'да святится имя твоё (пусть будет освящено).' },
              words: [
                { w: 'sanctificetur', g: { en: '**may it be hallowed** — 3rd sg. present **subjunctive passive** of *sanctificare* (1st conj.)', de: '**es werde geheiligt** — 3. Sg. Präsens **Konjunktiv Passiv** von *sanctificare* (a-Konj.)', ru: '**да будет освящено** — 3 л. ед. наст. **сослагат. накл., страдат. залог** от *sanctificare* (1-е спр.)' } },
                { w: 'nomen', g: { en: '**name** — nom. sg. of *nomen, nominis* (n., 3rd decl.); subject', de: '**Name** — Nom. Sg. von *nomen, nominis* (n., 3. Dekl.); Subjekt', ru: '**имя** — им. ед. от *nomen, nominis* (ср. р., 3-е скл.); подлежащее' } },
                { w: 'tuum.', g: { en: '**your** (sg.) — nom. sg. n., agrees with *nomen*', de: '**dein** — Nom. Sg. n., kongruent mit *nomen*', ru: '**твоё** — им. ед. ср. р., согласовано с *nomen*' } },
              ],
              note: {
                en: '**Jussive subjunctive**: a wish or command in the 3rd person — “let it / may it…”. Sign: 1st-conj. verbs switch *a* → *e* (*sanctificatur* “is hallowed” → *sanctificetur* “may it be hallowed”).',
                de: '**Jussiver Konjunktiv**: Wunsch/Aufforderung in der 3. Person — „es möge…“. Merkmal: Verben der a-Konj. tauschen *a* → *e* (*sanctificatur* „wird geheiligt“ → *sanctificetur* „werde geheiligt“).',
                ru: '**Юссивное сослагательное**: пожелание или повеление в 3-м лице — «да будет / пусть…». Признак: у глаголов 1-го спр. *a* → *e* (*sanctificatur* «освящается» → *sanctificetur* «да освятится»).',
              },
            },
            {
              la: 'Adveniat regnum tuum. Fiat voluntas tua,',
              tr: { en: 'May your kingdom come. May your will be done,', de: 'Dein Reich komme. Dein Wille geschehe,', ru: 'Да придёт царство твоё. Да будет воля твоя,' },
              words: [
                { w: 'Adveniat', g: { en: '**may it come** — 3rd sg. present subjunctive of *advenire* (4th conj.: *ad* + *venire*)', de: '**es komme** — 3. Sg. Präsens Konjunktiv von *advenire* (i-Konj.: *ad* + *venire*)', ru: '**да придёт** — 3 л. ед. наст. сослагат. от *advenire* (4-е спр.: *ad* + *venire*)' } },
                { w: 'regnum', g: { en: '**kingdom** — nom. sg. of *regnum* (n., 2nd decl.); subject', de: '**Reich** — Nom. Sg. von *regnum* (n., 2. Dekl.); Subjekt', ru: '**царство** — им. ед. от *regnum* (ср. р., 2-е скл.); подлежащее' } },
                { w: 'tuum.', g: { en: '**your** — nom. sg. n.', de: '**dein** — Nom. Sg. n.', ru: '**твоё** — им. ед. ср. р.' } },
                { w: 'Fiat', g: { en: '**may it be done / happen** — 3rd sg. present subjunctive of *fieri* (“to become, be done”)', de: '**es geschehe** — 3. Sg. Präsens Konjunktiv von *fieri* („werden, geschehen“)', ru: '**да будет** — 3 л. ед. наст. сослагат. от *fieri* («становиться, совершаться»)' } },
                { w: 'voluntas', g: { en: '**will** — nom. sg. of *voluntas, voluntatis* (f., 3rd decl.)', de: '**Wille** — Nom. Sg. von *voluntas, voluntatis* (f., 3. Dekl.)', ru: '**воля** — им. ед. от *voluntas, voluntatis* (ж. р., 3-е скл.)' } },
                { w: 'tua,', g: { en: '**your** — nom. sg. f., agrees with *voluntas*', de: '**dein** — Nom. Sg. f., kongruent mit *voluntas*', ru: '**твоя** — им. ед. ж. р., согласовано с *voluntas*' } },
              ],
              note: {
                en: 'Two more jussives. Non-1st-conj. verbs take *-a-* in the subjunctive: *advenit* “comes” → *adveniat* “may it come”. [[Fiat]] survives as a word: *fiat lux* “let there be light”; English *by fiat* = by decree.',
                de: 'Zwei weitere Jussive. Verben außerhalb der a-Konj. bekommen im Konjunktiv *-a-*: *advenit* „kommt“ → *adveniat* „es komme“. [[Fiat]] lebt weiter: *fiat lux* „es werde Licht“; engl. *by fiat* = per Erlass.',
                ru: 'Ещё два юссива. Глаголы не 1-го спряжения получают в сослагательном *-a-*: *advenit* «приходит» → *adveniat* «да придёт». [[Fiat]] живёт и сейчас: *fiat lux* «да будет свет»; англ. *by fiat* — «указом».',
              },
            },
            {
              la: 'sicut in caelo et in terra.',
              tr: { en: 'as in heaven, so also on earth.', de: 'wie im Himmel, so auch auf Erden.', ru: 'как на небе, так и на земле.' },
              words: [
                { w: 'sicut', g: { en: '**just as** — conjunction/adverb', de: '**wie, so wie** — Konjunktion/Adverb', ru: '**как, подобно тому как** — союз/наречие' } },
                { w: 'in', g: { en: '**in** — + abl.', de: '**in** — + Abl.', ru: '**на, в** — + абл.' } },
                { w: 'caelo', g: { en: '**heaven** — abl. sg. of *caelum* (n.)', de: '**Himmel** — Abl. Sg. von *caelum* (n.)', ru: '**небе** — абл. ед. от *caelum* (ср. р.)' } },
                { w: 'et', g: { en: '**and / also** — here “so also”', de: '**und / auch** — hier „so auch“', ru: '**и / также** — здесь «так и»' } },
                { w: 'in', g: { en: '**on** — + abl.', de: '**auf** — + Abl.', ru: '**на** — + абл.' } },
                { w: 'terra.', g: { en: '**earth** — abl. sg. of *terra* (f., 1st decl.)', de: '**Erde** — Abl. Sg. von *terra* (f., 1. Dekl.)', ru: '**земле** — абл. ед. от *terra* (ж. р., 1-е скл.)' } },
              ],
              note: {
                en: '**Ablative of place**: *in* + abl. = where something is (*in caelo*). Compare singular *caelo* here with plural *caelis* in line 1 — same word, two numbers.',
                de: '**Ablativ des Ortes**: *in* + Abl. = wo etwas ist (*in caelo*). Vergleiche Singular *caelo* hier mit Plural *caelis* in Zeile 1 — dasselbe Wort, zwei Numeri.',
                ru: '**Аблатив места**: *in* + абл. = где что-то находится (*in caelo*). Сравните единственное *caelo* здесь и множественное *caelis* в первой строке — одно слово, два числа.',
              },
            },
            {
              la: 'Panem nostrum quotidianum da nobis hodie,',
              tr: { en: 'Our daily bread give to us today,', de: 'Unser tägliches Brot gib uns heute,', ru: 'Хлеб наш ежедневный дай нам сегодня,' },
              words: [
                { w: 'Panem', g: { en: '**bread** — acc. sg. of *panis, panis* (m., 3rd decl.); direct object', de: '**Brot** — Akk. Sg. von *panis, panis* (m., 3. Dekl.); direktes Objekt', ru: '**хлеб** — вин. ед. от *panis, panis* (м. р., 3-е скл.); прямое дополнение' } },
                { w: 'nostrum', g: { en: '**our** — acc. sg. m., agrees with *panem*', de: '**unser** — Akk. Sg. m., kongruent mit *panem*', ru: '**наш** — вин. ед. м. р., согласовано с *panem*' } },
                { w: 'quotidianum', g: { en: '**daily** — acc. sg. m. of *quotidianus* (classical spelling *cotidianus*)', de: '**täglich** — Akk. Sg. m. von *quotidianus* (klassisch *cotidianus*)', ru: '**ежедневный, насущный** — вин. ед. м. р. от *quotidianus* (классич. написание *cotidianus*)' } },
                { w: 'da', g: { en: '**give!** — 2nd sg. **imperative** of *dare*', de: '**gib!** — 2. Sg. **Imperativ** von *dare*', ru: '**дай!** — 2 л. ед. **повелит. накл.** от *dare*' } },
                { w: 'nobis', g: { en: '**to us** — dat. pl. of *nos*; indirect object', de: '**uns** — Dat. Pl. von *nos*; indirektes Objekt', ru: '**нам** — дат. мн. от *nos*; косвенное дополнение' } },
                { w: 'hodie,', g: { en: '**today** — adverb (from *hoc die* “on this day”)', de: '**heute** — Adverb (aus *hoc die* „an diesem Tag“)', ru: '**сегодня** — наречие (из *hoc die* «в этот день»)' } },
              ],
              note: {
                en: 'Word order: object first for emphasis, verb late. The cases do the work: *-em* = accusative (what is given), *nobis* = dative (to whom). The bare stem *da* is the **imperative** — a direct request to “you”.',
                de: 'Wortstellung: Objekt zuerst zur Betonung, Verb spät. Die Fälle tragen die Bedeutung: *-em* = Akkusativ (was gegeben wird), *nobis* = Dativ (wem) — genau wie im Deutschen. Der nackte Stamm *da* ist der **Imperativ** — eine direkte Bitte an „dich“.',
                ru: 'Порядок слов: дополнение впереди для выразительности, глагол в конце. Смысл несут падежи: *-em* = винительный (что дают), *nobis* = дательный (кому) — как и в русском. Голая основа *da* — **повелительное наклонение**, прямая просьба к «тебе».',
              },
            },
            {
              la: 'et dimitte nobis debita nostra',
              tr: { en: 'and forgive us our debts', de: 'und erlass uns unsere Schulden', ru: 'и прости нам долги наши' },
              words: [
                { w: 'et', g: { en: '**and**', de: '**und**', ru: '**и**' } },
                { w: 'dimitte', g: { en: '**let go, forgive!** — 2nd sg. imperative of *dimittere* (3rd conj.: *dis-* “away” + *mittere* “send”)', de: '**lass los, vergib!** — 2. Sg. Imperativ von *dimittere* (kons. Konj.: *dis-* „weg“ + *mittere* „schicken“)', ru: '**отпусти, прости!** — 2 л. ед. повелит. от *dimittere* (3-е спр.: *dis-* «прочь» + *mittere* «посылать»)' } },
                { w: 'nobis', g: { en: '**to us** — dat. pl. of *nos*', de: '**uns** — Dat. Pl. von *nos*', ru: '**нам** — дат. мн. от *nos*' } },
                { w: 'debita', g: { en: '**debts** — acc. pl. of *debitum* (n., 2nd decl.; lit. “what is owed”)', de: '**Schulden** — Akk. Pl. von *debitum* (n., 2. Dekl.; wörtl. „das Geschuldete“)', ru: '**долги** — вин. мн. от *debitum* (ср. р., 2-е скл.; букв. «должное»)' } },
                { w: 'nostra', g: { en: '**our** — acc. pl. n., agrees with *debita*', de: '**unsere** — Akk. Pl. n., kongruent mit *debita*', ru: '**наши** — вин. мн. ср. р., согласовано с *debita*' } },
              ],
              note: {
                en: 'Neuter plural nom./acc. always ends in **-a** — don’t mistake *debita* for a feminine singular. *debitum* → accounting **debit**; *dimittere* → *dismiss*.',
                de: 'Neutrum Plural Nom./Akk. endet immer auf **-a** — *debita* ist kein Femininum Singular. *debitum* → **Debit** (Buchhaltung); *dimittere* → engl. *dismiss*.',
                ru: 'Средний род мн. ч. в им./вин. всегда оканчивается на **-a** — не путайте *debita* с женским единственным. *debitum* → бухгалтерский **дебет**; *dimittere* → англ. *dismiss*.',
              },
            },
            {
              la: 'sicut et nos dimittimus debitoribus nostris.',
              tr: { en: 'as we too forgive our debtors.', de: 'wie auch wir erlassen unseren Schuldnern.', ru: 'как и мы прощаем должникам нашим.' },
              words: [
                { w: 'sicut', g: { en: '**as**', de: '**wie**', ru: '**как**' } },
                { w: 'et', g: { en: '**also, too** — *et* as adverb', de: '**auch** — *et* als Adverb', ru: '**и, тоже** — *et* в роли наречия' } },
                { w: 'nos', g: { en: '**we** — nom. pl.; written out for emphasis (“we, too”)', de: '**wir** — Nom. Pl.; zur Betonung ausgeschrieben', ru: '**мы** — им. мн.; поставлено для выделения («и мы»)' } },
                { w: 'dimittimus', g: { en: '**forgive** — 1st pl. present indicative of *dimittere*', de: '**erlassen** — 1. Pl. Präsens Indikativ von *dimittere*', ru: '**прощаем** — 1 л. мн. наст. изъявит. от *dimittere*' } },
                { w: 'debitoribus', g: { en: '**debtors** — dat. pl. of *debitor, debitoris* (m., 3rd decl.)', de: '**Schuldnern** — Dat. Pl. von *debitor, debitoris* (m., 3. Dekl.)', ru: '**должникам** — дат. мн. от *debitor, debitoris* (м. р., 3-е скл.)' } },
                { w: 'nostris.', g: { en: '**our** — dat. pl. m., agrees with *debitoribus*', de: '**unseren** — Dat. Pl. m., kongruent mit *debitoribus*', ru: '**нашим** — дат. мн. м. р., согласовано с *debitoribus*' } },
              ],
              note: {
                en: 'A plain statement (**indicative**), not a wish — compare imperative *dimitte* (forgive!) with *dimittimus* (we forgive). Dative plural of the 3rd decl.: **-ibus**.',
                de: 'Eine einfache Aussage (**Indikativ**), kein Wunsch — vergleiche Imperativ *dimitte* (vergib!) mit *dimittimus* (wir vergeben). Dativ Plural der 3. Dekl.: **-ibus**.',
                ru: 'Простое утверждение (**изъявительное наклонение**), а не пожелание — сравните повелит. *dimitte* (прости!) и *dimittimus* (прощаем). Дательный мн. 3-го скл.: **-ibus**.',
              },
            },
            {
              la: 'Et ne nos inducas in tentationem,',
              tr: { en: 'And do not lead us into temptation,', de: 'Und führe uns nicht in Versuchung,', ru: 'И не введи нас в искушение,' },
              words: [
                { w: 'Et', g: { en: '**and**', de: '**und**', ru: '**и**' } },
                { w: 'ne', g: { en: '**not** — negative for wishes and prohibitions (not *non*)', de: '**nicht** — Verneinung bei Wünschen und Verboten (nicht *non*)', ru: '**не** — отрицание в пожеланиях и запретах (а не *non*)' } },
                { w: 'nos', g: { en: '**us** — acc. pl. of *nos*; direct object', de: '**uns** — Akk. Pl. von *nos*; direktes Objekt', ru: '**нас** — вин. мн. от *nos*; прямое дополнение' } },
                { w: 'inducas', g: { en: '**(may you) lead into** — 2nd sg. present subjunctive of *inducere* (3rd conj.: *in* + *ducere*)', de: '**(mögest du) hineinführen** — 2. Sg. Präsens Konjunktiv von *inducere* (kons. Konj.: *in* + *ducere*)', ru: '**(да) введёшь** — 2 л. ед. наст. сослагат. от *inducere* (3-е спр.: *in* + *ducere*)' } },
                { w: 'in', g: { en: '**into** — + acc. (motion towards)', de: '**in** (wohin?) — + Akk.', ru: '**в** (куда?) — + вин.' } },
                { w: 'tentationem,', g: { en: '**temptation, trial** — acc. sg. of *tentatio, tentationis* (f., 3rd decl.; classical *temptatio*)', de: '**Versuchung, Prüfung** — Akk. Sg. von *tentatio, tentationis* (f., 3. Dekl.; klassisch *temptatio*)', ru: '**искушение, испытание** — вин. ед. от *tentatio, tentationis* (ж. р., 3-е скл.; классич. *temptatio*)' } },
              ],
              note: {
                en: '**ne + present subjunctive** = a negative request, “do not…” (the imperative itself is not negated with *ne* in good Latin). **in + acc.** = *into* (motion), **in + abl.** = *in* (rest) — exactly like German *in die Versuchung* vs *im Himmel*.',
                de: '**ne + Konjunktiv Präsens** = verneinte Bitte, „tu nicht…“ (den Imperativ selbst verneint man im guten Latein nicht mit *ne*). **in + Akk.** = *wohin*, **in + Abl.** = *wo* — genau wie dt. *in die Versuchung* vs. *im Himmel*.',
                ru: '**ne + наст. сослагательное** = отрицательная просьба «не…» (сам императив в хорошей латыни с *ne* не употребляют). **in + вин.** = *куда*, **in + абл.** = *где* — точно как в русском *в искушение* / *на небесах*.',
              },
            },
            {
              la: 'sed libera nos a malo. Amen.',
              tr: { en: 'but free us from evil. Amen.', de: 'sondern befreie uns von dem Bösen. Amen.', ru: 'но избавь нас от зла (от лукавого). Аминь.' },
              words: [
                { w: 'sed', g: { en: '**but** (after a negative: “not…, but…”)', de: '**sondern, aber**', ru: '**но, а**' } },
                { w: 'libera', g: { en: '**free!, deliver!** — 2nd sg. imperative of *liberare* (1st conj.)', de: '**befreie! erlöse!** — 2. Sg. Imperativ von *liberare* (a-Konj.)', ru: '**освободи! избавь!** — 2 л. ед. повелит. от *liberare* (1-е спр.)' } },
                { w: 'nos', g: { en: '**us** — acc. pl.', de: '**uns** — Akk. Pl.', ru: '**нас** — вин. мн.' } },
                { w: 'a', g: { en: '**from, away from** — preposition + abl. (*ab* before vowels)', de: '**von … weg** — Präposition + Abl. (*ab* vor Vokal)', ru: '**от** — предлог + абл. (перед гласной *ab*)' } },
                { w: 'malo.', g: { en: '**evil** — abl. sg. of *malum* (n.) “evil”; could also be m. *malus* “the evil one” — the form is identical', de: '**Bösen** — Abl. Sg. von *malum* (n.) „das Böse“; ebenso möglich m. *malus* „der Böse“ — die Form ist gleich', ru: '**зла** — абл. ед. от *malum* (ср. р.) «зло»; возможно и м. р. *malus* «лукавый» — форма одна и та же' } },
                { w: 'Amen.', g: { en: '**truly, so be it** — Hebrew, via Greek', de: '**wahrlich, so sei es** — hebräisch, über das Griechische', ru: '**истинно, да будет так** — из иврита через греческий' } },
              ],
              note: {
                en: '**a/ab + abl.** = separation, “away from”. *libera* (imperative) vs *liberat* (he frees) vs *liberet* (may he free) — one vowel changes the mood. The ambiguity of *malo* is why some traditions say “evil”, others “the evil one” (Russian *от лукавого*).',
                de: '**a/ab + Abl.** = Trennung, „von … weg“. *libera* (Imperativ) vs. *liberat* (er befreit) vs. *liberet* (er möge befreien) — ein Vokal ändert den Modus. Wegen der Mehrdeutigkeit von *malo* übersetzen manche „vom Bösen“ als Sache, andere als Person.',
                ru: '**a/ab + абл.** = отделение, «от». *libera* (повелит.) — *liberat* (освобождает) — *liberet* (да освободит): одна гласная меняет наклонение. Из-за двусмысленности *malo* одни переводят «от зла», другие «от лукавого» (как в русском церковном тексте).',
              },
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'You already know this grammar', de: 'Diese Grammatik kennst du schon', ru: 'Эта грамматика вам уже знакома' },
          body: {
            en: 'The jussive subjunctive survives in all three of your languages’ versions of the prayer:\n- **English**: *hallowed **be** thy name, thy kingdom **come**, thy will **be** done* — old subjunctives (not “is”, “comes”).\n- **German**: *geheiligt **werde** dein Name, dein Reich **komme**, dein Wille **geschehe*** — Konjunktiv I.\n- **Russian**: ***да** святится имя Твоё, **да** приидет Царствие Твоё, **да** будет воля Твоя* — the particle *да* plays the role of the Latin subjunctive.',
            de: 'Der jussive Konjunktiv lebt in allen drei Fassungen des Gebets weiter:\n- **Englisch**: *hallowed **be** thy name, thy kingdom **come**, thy will **be** done* — alte Konjunktive (nicht „is“, „comes“).\n- **Deutsch**: *geheiligt **werde** dein Name, dein Reich **komme**, dein Wille **geschehe*** — Konjunktiv I, exakt wie im Lateinischen.\n- **Russisch**: ***да** святится имя Твоё, **да** приидет Царствие Твоё, **да** будет воля Твоя* — die Partikel *да* übernimmt die Rolle des lateinischen Konjunktivs.',
            ru: 'Юссивное сослагательное сохранилось во всех трёх известных вам версиях молитвы:\n- **Английский**: *hallowed **be** thy name, thy kingdom **come**, thy will **be** done* — старые формы сослагательного (не «is», «comes»).\n- **Немецкий**: *geheiligt **werde** dein Name, dein Reich **komme**, dein Wille **geschehe*** — Konjunktiv I, ровно как в латыни.\n- **Русский**: ***да** святится имя Твоё, **да** приидет Царствие Твоё, **да** будет воля Твоя* — частица *да* выполняет роль латинского сослагательного.',
          },
        },
        {
          kind: 'callout',
          tone: 'culture',
          title: { en: 'The traditional wording', de: 'Der traditionelle Wortlaut', ru: 'Традиционный текст' },
          body: {
            en: '*Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.*\n\nNote how “trespasses” softens the Latin *debita* (literally “debts”), and how freely the word order is rearranged.',
            de: '*Vater unser im Himmel, geheiligt werde dein Name. Dein Reich komme. Dein Wille geschehe, wie im Himmel, so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen.*\n\nAuffällig: *Vater unser* bewahrt die lateinische Wortfolge *Pater noster*, und *unser tägliches Brot gib uns heute* folgt der lateinischen Satzstellung fast Wort für Wort.',
            ru: '*Отче наш, сущий на небесах! да святится имя Твоё; да приидет Царствие Твоё; да будет воля Твоя и на земле, как на небе; хлеб наш насущный дай нам на сей день; и прости нам долги наши, как и мы прощаем должникам нашим; и не введи нас в искушение, но избавь нас от лукавого.* (Синодальный перевод, Мф 6:9–13)\n\nОбратите внимание: *Отче* — тот же звательный падеж, что и *Pater*, а *долги* и *должникам* точно передают *debita* и *debitoribus*.',
          },
        },
        {
          kind: 'parse',
          id: 'l6-parse',
          prompt: { en: 'Tag each word with its grammatical role', de: 'Bestimme die grammatische Rolle jedes Wortes', ru: 'Определите грамматическую роль каждого слова' },
          sentences: [
            {
              words: [
                { w: 'Pater', answer: 'voc', options: ['nom', 'voc', 'gen'], explain: { en: 'He is being addressed.', de: 'Er wird angeredet.', ru: 'К нему обращаются.' } },
                { w: 'noster', answer: 'adj', options: ['adj', 'pron', 'nom'], explain: { en: 'Possessive adjective agreeing with *Pater*.', de: 'Possessivadjektiv, kongruent mit *Pater*.', ru: 'Притяжательное прилагательное, согласовано с *Pater*.' } },
                { w: 'qui', answer: 'pron', options: ['conj', 'pron', 'adv'], explain: { en: 'Relative pronoun “who”.', de: 'Relativpronomen „der“.', ru: 'Относительное местоимение «который».' } },
                { w: 'es', answer: 'verb', options: ['verb', 'imp', 'subj'], explain: { en: 'Indicative “you are”.', de: 'Indikativ „du bist“.', ru: 'Изъявительное «ты есть».' } },
                { w: 'in', answer: 'prep', options: ['prep', 'adv', 'conj'] },
                { w: 'caelis', answer: 'abl', options: ['dat', 'abl', 'acc'], explain: { en: '*in* + abl. = place where. (Form alone could be dat. too — the preposition decides.)', de: '*in* + Abl. = Ort. (Die Form allein könnte auch Dat. sein — die Präposition entscheidet.)', ru: '*in* + абл. = место. (Форма сама по себе могла бы быть и дательным — решает предлог.)' } },
              ],
              translation: { en: 'Our Father, who are in the heavens', de: 'Unser Vater, der du bist in den Himmeln', ru: 'Отец наш, который на небесах' },
            },
            {
              words: [
                { w: 'Fiat', answer: 'subj', options: ['imp', 'subj', 'verb'], explain: { en: 'Jussive “let it be done”.', de: 'Jussiv „es geschehe“.', ru: 'Юссив «да будет».' } },
                { w: 'voluntas', answer: 'nom', options: ['nom', 'acc', 'gen'], explain: { en: 'Subject of *fiat*.', de: 'Subjekt zu *fiat*.', ru: 'Подлежащее при *fiat*.' } },
                { w: 'tua', answer: 'adj', options: ['adj', 'abl', 'pron'] },
              ],
              translation: { en: 'May your will be done', de: 'Dein Wille geschehe', ru: 'Да будет воля твоя' },
            },
            {
              words: [
                { w: 'Panem', answer: 'acc', options: ['nom', 'acc', 'gen'], explain: { en: '*-em* = acc. sg., 3rd decl.', de: '*-em* = Akk. Sg., 3. Dekl.', ru: '*-em* = вин. ед., 3-е скл.' } },
                { w: 'nostrum', answer: 'adj', options: ['adj', 'gen', 'pron'] },
                { w: 'quotidianum', answer: 'adj', options: ['adj', 'adv', 'acc'] },
                { w: 'da', answer: 'imp', options: ['imp', 'subj', 'verb'], explain: { en: 'Bare stem = imperative “give!”.', de: 'Nackter Stamm = Imperativ „gib!“.', ru: 'Голая основа = повелительное «дай!».' } },
                { w: 'nobis', answer: 'dat', options: ['dat', 'abl', 'acc'], explain: { en: 'To whom? — dative.', de: 'Wem? — Dativ.', ru: 'Кому? — дательный.' } },
                { w: 'hodie', answer: 'adv', options: ['adv', 'abl', 'conj'] },
              ],
              translation: { en: 'Give us today our daily bread', de: 'Unser tägliches Brot gib uns heute', ru: 'Хлеб наш насущный дай нам сегодня' },
            },
            {
              words: [
                { w: 'sed', answer: 'conj', options: ['conj', 'adv', 'prep'] },
                { w: 'libera', answer: 'imp', options: ['imp', 'adj', 'subj'], explain: { en: 'Looks like a feminine adjective, but here it is the imperative of *liberare*.', de: 'Sieht aus wie ein feminines Adjektiv, ist hier aber der Imperativ von *liberare*.', ru: 'Похоже на прилагательное ж. р., но здесь это повелительное от *liberare*.' } },
                { w: 'nos', answer: 'acc', options: ['nom', 'acc', 'dat'], explain: { en: 'Object of *libera*.', de: 'Objekt zu *libera*.', ru: 'Дополнение при *libera*.' } },
                { w: 'a', answer: 'prep', options: ['prep', 'conj', 'adv'] },
                { w: 'malo', answer: 'abl', options: ['dat', 'abl', 'nom'], explain: { en: '*a* + abl.', de: '*a* + Abl.', ru: '*a* + абл.' } },
              ],
              translation: { en: 'but free us from evil', de: 'sondern erlöse uns von dem Bösen', ru: 'но избавь нас от зла' },
            },
          ],
        },
      ],
    },
    {
      minutes: 10,
      title: { en: 'Listen, read along, read aloud', de: 'Hören, mitlesen, laut lesen', ru: 'Слушаем, следим по тексту, читаем вслух' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: '1. Listen once to a **sung** version (Gregorian chant) while following the interlinear text above.\n2. Listen to a **spoken** version and shadow it — speak half a beat behind the reader.\n3. Read the whole prayer aloud yourself, without audio. Notice where you stumble.',
            de: '1. Hör einmal eine **gesungene** Fassung (gregorianischer Choral) und lies im Interlinear-Text oben mit.\n2. Hör eine **gesprochene** Fassung und sprich mit (Shadowing) — einen halben Schlag hinter dem Sprecher.\n3. Lies das ganze Gebet selbst laut, ohne Audio. Achte darauf, wo du hängenbleibst.',
            ru: '1. Один раз прослушайте **пропетую** версию (григорианский хорал), следя по подстрочнику выше.\n2. Послушайте **прочитанную** версию и повторяйте за чтецом с отставанием на полслога (shadowing).\n3. Прочитайте всю молитву вслух сами, без аудио. Отметьте, где запинаетесь.',
          },
        },
        {
          kind: 'links',
          title: { en: 'Audio', de: 'Audio', ru: 'Аудио' },
          items: [
            { label: 'YouTube: Pater Noster Gregorian chant', url: 'https://www.youtube.com/results?search_query=Pater+Noster+Gregorian+chant', note: { en: 'sung, ecclesiastical pronunciation', de: 'gesungen, kirchliche Aussprache', ru: 'пение, церковное произношение' } },
            { label: 'YouTube: Pater Noster spoken Latin', url: 'https://www.youtube.com/results?search_query=Pater+Noster+spoken+ecclesiastical+Latin', note: { en: 'recited — good for shadowing', de: 'gesprochen — gut zum Mitsprechen', ru: 'чтение — удобно для повторения за диктором' } },
            { label: 'YouTube: Pater Noster choir', url: 'https://www.youtube.com/results?search_query=Pater+Noster+choir', note: { en: 'optional: choral settings', de: 'optional: Chorvertonungen', ru: 'по желанию: хоровые переложения' } },
          ],
        },
        {
          kind: 'rating',
          id: 'l6-fluency',
          prompt: { en: 'How fluently can you read it? (1 = stumbling, 5 = smooth)', de: 'Wie flüssig kannst du es lesen? (1 = holprig, 5 = flüssig)', ru: 'Насколько бегло вы читаете? (1 = с запинками, 5 = гладко)' },
          items: [
            { en: 'Ecclesiastical sounds (c, g, gn, ti, ae)', de: 'Kirchliche Laute (c, g, gn, ti, ae)', ru: 'Церковные звуки (c, g, gn, ti, ae)' },
            { en: 'Stress in long words (*sanctificetur*, *quotidianum*, *debitoribus*)', de: 'Betonung in langen Wörtern (*sanctificetur*, *quotidianum*, *debitoribus*)', ru: 'Ударение в длинных словах (*sanctificetur*, *quotidianum*, *debitoribus*)' },
            { en: 'Reading the whole prayer without pausing', de: 'Das ganze Gebet ohne Pause lesen', ru: 'Чтение всей молитвы без остановок' },
          ],
        },
      ],
    },
    {
      minutes: 5,
      title: { en: 'New grammar: imperative and “let/may” subjunctive', de: 'Neue Grammatik: Imperativ und Konjunktiv „möge“', ru: 'Новая грамматика: повелительное и сослагательное «да будет»' },
      blocks: [
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Two ways to ask', de: 'Zwei Arten zu bitten', ru: 'Два способа просить' },
          body: {
            en: '- **Imperative** — direct command to *you*: the bare present stem. [[da]] give!, [[dimitte]] forgive!, [[libera]] free! Plural adds **-te**: [[date]], [[dimittite]], [[liberate]].\n- **Jussive subjunctive** — “let / may …”, usually 3rd person: [[adveniat]] may it come, [[fiat]] let it be done, [[sanctificetur]] may it be hallowed.\n- **Subjunctive vowel**: 1st conj. *a* → **e** (*liberat* → *liberet*); all others add **a** (*venit* → *veniat*, *ducit* → *ducat*).\n- **Negative request**: [[ne]] + subjunctive — [[ne nos inducas]] “do not lead us”.',
            de: '- **Imperativ** — direkter Befehl an *dich*: der nackte Präsensstamm. [[da]] gib!, [[dimitte]] vergib!, [[libera]] befreie! Plural mit **-te**: [[date]], [[dimittite]], [[liberate]].\n- **Jussiver Konjunktiv** — „es möge …“, meist 3. Person: [[adveniat]] es komme, [[fiat]] es geschehe, [[sanctificetur]] es werde geheiligt.\n- **Konjunktiv-Vokal**: a-Konj. *a* → **e** (*liberat* → *liberet*); alle anderen fügen **a** ein (*venit* → *veniat*, *ducit* → *ducat*).\n- **Verneinte Bitte**: [[ne]] + Konjunktiv — [[ne nos inducas]] „führe uns nicht“.',
            ru: '- **Повелительное** — прямое обращение к *тебе*: голая основа настоящего времени. [[da]] дай!, [[dimitte]] прости!, [[libera]] избавь! Мн. ч. добавляет **-te**: [[date]], [[dimittite]], [[liberate]].\n- **Юссивное сослагательное** — «да будет / пусть…», обычно 3-е лицо: [[adveniat]] да придёт, [[fiat]] да будет, [[sanctificetur]] да святится.\n- **Гласная сослагательного**: 1-е спр. *a* → **e** (*liberat* → *liberet*); остальные добавляют **a** (*venit* → *veniat*, *ducit* → *ducat*).\n- **Отрицательная просьба**: [[ne]] + сослагательное — [[ne nos inducas]] «не введи нас».',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Same verb, three moods', de: 'Dasselbe Verb, drei Modi', ru: 'Один глагол — три наклонения' },
          head: [
            { en: 'Verb', de: 'Verb', ru: 'Глагол' },
            { en: 'Indicative (3rd sg.)', de: 'Indikativ (3. Sg.)', ru: 'Изъявительное (3 л. ед.)' },
            { en: 'Subjunctive (3rd sg.)', de: 'Konjunktiv (3. Sg.)', ru: 'Сослагательное (3 л. ед.)' },
            { en: 'Imperative (sg. / pl.)', de: 'Imperativ (Sg. / Pl.)', ru: 'Повелительное (ед. / мн.)' },
          ],
          latinCols: [1, 2, 3],
          rows: [
            [{ en: 'liberare — free (1st)', de: 'liberare — befreien (a-Konj.)', ru: 'liberare — освобождать (1-е)' }, 'liberat', 'liberet', 'libera / liberate'],
            [{ en: 'dare — give (1st)', de: 'dare — geben (a-Konj.)', ru: 'dare — давать (1-е)' }, 'dat', 'det', 'da / date'],
            [{ en: 'dimittere — forgive (3rd)', de: 'dimittere — vergeben (kons.)', ru: 'dimittere — прощать (3-е)' }, 'dimittit', 'dimittat', 'dimitte / dimittite'],
            [{ en: 'advenire — come (4th)', de: 'advenire — ankommen (i-Konj.)', ru: 'advenire — приходить (4-е)' }, 'advenit', 'adveniat', 'adveni / advenite'],
          ],
        },
        {
          kind: 'quiz',
          id: 'l6-mood',
          title: { en: 'Imperative or subjunctive?', de: 'Imperativ oder Konjunktiv?', ru: 'Повелительное или сослагательное?' },
          questions: [
            { prompt: { en: 'What is this form?', de: 'Welche Form ist das?', ru: 'Что это за форма?' }, la: 'da', options: [{ en: 'imperative', de: 'Imperativ', ru: 'повелительное' }, { en: 'subjunctive', de: 'Konjunktiv', ru: 'сослагательное' }, { en: 'indicative', de: 'Indikativ', ru: 'изъявительное' }], answer: 0, explain: { en: 'Bare stem of *dare* — “give!”.', de: 'Nackter Stamm von *dare* — „gib!“.', ru: 'Голая основа *dare* — «дай!».' } },
            { prompt: { en: 'What is this form?', de: 'Welche Form ist das?', ru: 'Что это за форма?' }, la: 'adveniat', options: [{ en: 'imperative', de: 'Imperativ', ru: 'повелительное' }, { en: 'subjunctive', de: 'Konjunktiv', ru: 'сослагательное' }, { en: 'indicative', de: 'Indikativ', ru: 'изъявительное' }], answer: 1, explain: { en: '4th conj. + *-a-* → “may it come”.', de: 'i-Konj. + *-a-* → „es komme“.', ru: '4-е спр. + *-a-* → «да придёт».' } },
            { prompt: { en: 'What is this form?', de: 'Welche Form ist das?', ru: 'Что это за форма?' }, la: 'dimittimus', options: [{ en: 'imperative', de: 'Imperativ', ru: 'повелительное' }, { en: 'subjunctive', de: 'Konjunktiv', ru: 'сослагательное' }, { en: 'indicative', de: 'Indikativ', ru: 'изъявительное' }], answer: 2, explain: { en: 'A plain fact: “we forgive”.', de: 'Eine einfache Aussage: „wir vergeben“.', ru: 'Простой факт: «мы прощаем».' } },
            { prompt: { en: 'How do you say “may he free” (1st conj. *liberare*)?', de: 'Wie sagt man „er möge befreien“ (*liberare*, a-Konj.)?', ru: 'Как сказать «да освободит он» (*liberare*, 1-е спр.)?' }, options: ['liberat', 'liberet', 'liberiat'], answer: 1, explain: { en: '1st conj.: *a* → *e*.', de: 'a-Konj.: *a* → *e*.', ru: '1-е спр.: *a* → *e*.' } },
            { prompt: { en: 'Why *ne nos inducas* and not *non nos induc*?', de: 'Warum *ne nos inducas* und nicht *non nos induc*?', ru: 'Почему *ne nos inducas*, а не *non nos induc*?' }, options: [{ en: 'A prohibition uses *ne* + subjunctive', de: 'Ein Verbot verwendet *ne* + Konjunktiv', ru: 'Запрет выражается через *ne* + сослагательное' }, { en: '*inducere* has no imperative', de: '*inducere* hat keinen Imperativ', ru: 'У *inducere* нет повелительного' }, { en: 'It is a question', de: 'Es ist eine Frage', ru: 'Это вопрос' }], answer: 0 },
            { prompt: { en: 'Which Latin word does the German Konjunktiv I *dein Reich komme* translate?', de: 'Welchem lateinischen Wort entspricht der Konjunktiv I in *dein Reich komme*?', ru: 'Какому латинскому слову соответствует немецкий Konjunktiv I в *dein Reich komme*?' }, options: ['adveniat', 'fiat', 'da'], answer: 0 },
          ],
        },
      ],
    },
    {
      minutes: 0,
      title: { en: 'Practice', de: 'Übung', ru: 'Практика' },
      blocks: [
        {
          kind: 'translate',
          id: 'l6-translate',
          prompt: { en: 'Write a **word-for-word** translation of each line (keep the Latin order), then compare.', de: 'Schreibe zu jeder Zeile eine **Wort-für-Wort**-Übersetzung (lateinische Wortfolge beibehalten), dann vergleichen.', ru: 'Напишите **пословный** перевод каждой строки (сохраняя латинский порядок слов), затем сравните.' },
          items: [
            { la: 'Pater noster, qui es in caelis,', answer: { en: 'Father our, who are in heavens,', de: 'Vater unser, der bist in Himmeln,', ru: 'Отец наш, который есть на небесах,' } },
            { la: 'sanctificetur nomen tuum.', answer: { en: 'may-be-hallowed name your.', de: 'werde-geheiligt Name dein.', ru: 'да-освятится имя твоё.' } },
            { la: 'Adveniat regnum tuum. Fiat voluntas tua,', answer: { en: 'May-come kingdom your. May-be-done will your,', de: 'Es-komme Reich dein. Es-geschehe Wille dein,', ru: 'Да-придёт царство твоё. Да-будет воля твоя,' } },
            { la: 'sicut in caelo et in terra.', answer: { en: 'as in heaven also on earth.', de: 'wie im Himmel auch auf Erde.', ru: 'как на небе и на земле.' } },
            { la: 'Panem nostrum quotidianum da nobis hodie,', answer: { en: 'Bread our daily give to-us today,', de: 'Brot unser tägliches gib uns heute,', ru: 'Хлеб наш ежедневный дай нам сегодня,' } },
            { la: 'et dimitte nobis debita nostra', answer: { en: 'and forgive to-us debts our', de: 'und erlass uns Schulden unsere', ru: 'и прости нам долги наши' } },
            { la: 'sicut et nos dimittimus debitoribus nostris.', answer: { en: 'as also we forgive to-debtors our.', de: 'wie auch wir erlassen Schuldnern unseren.', ru: 'как и мы прощаем должникам нашим.' } },
            { la: 'Et ne nos inducas in tentationem,', answer: { en: 'And not us may-you-lead into temptation,', de: 'Und nicht uns mögest-du-führen in Versuchung,', ru: 'И не нас введи в искушение,' } },
            { la: 'sed libera nos a malo. Amen.', answer: { en: 'but free us from evil. Amen.', de: 'sondern befreie uns von Bösem. Amen.', ru: 'но избавь нас от зла. Аминь.' } },
          ],
        },
        {
          kind: 'flashcards',
          id: 'l6-cards',
          title: { en: 'Pater Noster vocabulary', de: 'Wortschatz des Pater Noster', ru: 'Словарь Pater Noster' },
          cards: [
            { la: 'pater, patris (m.)', back: { en: 'father', de: 'Vater', ru: 'отец' } },
            { la: 'noster, nostra, nostrum', back: { en: 'our', de: 'unser', ru: 'наш' } },
            { la: 'tuus, tua, tuum', back: { en: 'your (one person’s)', de: 'dein', ru: 'твой' } },
            { la: 'qui, quae, quod', back: { en: 'who, which (relative)', de: 'der, die, das (Relativpronomen)', ru: 'который' } },
            { la: 'caelum, -i (n.)', back: { en: 'sky, heaven', de: 'Himmel', ru: 'небо' } },
            { la: 'sanctifico, -are', back: { en: 'to make holy, hallow', de: 'heiligen', ru: 'освящать' } },
            { la: 'nomen, nominis (n.)', back: { en: 'name', de: 'Name', ru: 'имя' } },
            { la: 'advenio, -ire', back: { en: 'to come, arrive', de: 'ankommen, kommen', ru: 'приходить, прибывать' } },
            { la: 'regnum, -i (n.)', back: { en: 'kingdom, reign', de: 'Reich, Herrschaft', ru: 'царство' } },
            { la: 'fiat', back: { en: 'let it be done / let it happen (subj. of *fieri*)', de: 'es geschehe / es werde (Konj. von *fieri*)', ru: 'да будет (сослагат. от *fieri*)' } },
            { la: 'voluntas, voluntatis (f.)', back: { en: 'will, wish', de: 'Wille', ru: 'воля' } },
            { la: 'sicut', back: { en: 'just as', de: 'wie, so wie', ru: 'как, подобно' } },
            { la: 'terra, -ae (f.)', back: { en: 'earth, land', de: 'Erde, Land', ru: 'земля' } },
            { la: 'panis, panis (m.)', back: { en: 'bread', de: 'Brot', ru: 'хлеб' } },
            { la: 'quotidianus, -a, -um', back: { en: 'daily (classical *cotidianus*)', de: 'täglich (klass. *cotidianus*)', ru: 'ежедневный (классич. *cotidianus*)' } },
            { la: 'do, dare', back: { en: 'to give — imp. *da*', de: 'geben — Imp. *da*', ru: 'давать — повел. *da*' } },
            { la: 'nos, nobis', back: { en: 'we, us — *nobis* = to us / from us', de: 'wir, uns — *nobis* = uns (Dat./Abl.)', ru: 'мы, нас — *nobis* = нам / нами' } },
            { la: 'hodie', back: { en: 'today', de: 'heute', ru: 'сегодня' } },
            { la: 'dimitto, -ere', back: { en: 'to send away, let go, forgive', de: 'wegschicken, entlassen, vergeben', ru: 'отпускать, прощать' } },
            { la: 'debitum, -i (n.)', back: { en: 'debt (→ *debit*)', de: 'Schuld (→ *Debit*)', ru: 'долг (→ *дебет*)' } },
            { la: 'debitor, debitoris (m.)', back: { en: 'debtor', de: 'Schuldner', ru: 'должник' } },
            { la: 'ne', back: { en: 'not (in wishes, prohibitions)', de: 'nicht (bei Wünschen, Verboten)', ru: 'не (в пожеланиях, запретах)' } },
            { la: 'induco, -ere', back: { en: 'to lead in(to)', de: 'hineinführen', ru: 'вводить' } },
            { la: 'tentatio, tentationis (f.)', back: { en: 'temptation, trial', de: 'Versuchung, Prüfung', ru: 'искушение, испытание' } },
            { la: 'sed', back: { en: 'but', de: 'aber, sondern', ru: 'но' } },
            { la: 'libero, -are', back: { en: 'to free, deliver', de: 'befreien, erlösen', ru: 'освобождать, избавлять' } },
            { la: 'malum, -i (n.)', back: { en: 'evil, misfortune', de: 'das Böse, Übel', ru: 'зло' } },
          ],
        },
        {
          kind: 'match',
          id: 'l6-match',
          prompt: { en: 'Match the form to its meaning', de: 'Ordne die Form ihrer Bedeutung zu', ru: 'Сопоставьте форму и значение' },
          pairs: [
            { left: 'da', right: { en: 'give!', de: 'gib!', ru: 'дай!' } },
            { left: 'fiat', right: { en: 'let it be done', de: 'es geschehe', ru: 'да будет' } },
            { left: 'dimittimus', right: { en: 'we forgive', de: 'wir vergeben', ru: 'мы прощаем' } },
            { left: 'libera', right: { en: 'free! deliver!', de: 'befreie!', ru: 'избавь!' } },
            { left: 'adveniat', right: { en: 'may it come', de: 'es komme', ru: 'да придёт' } },
            { left: 'debitoribus', right: { en: 'to the debtors', de: 'den Schuldnern', ru: 'должникам' } },
          ],
        },
      ],
    },
  ],
  materials: [
    { label: 'John F. Collins — A Primer of Ecclesiastical Latin', note: { en: 'introduction (pronunciation) + chapter 1', de: 'Einleitung (Aussprache) + Kapitel 1', ru: 'введение (произношение) + глава 1' } },
    { label: 'YouTube: Pater Noster Gregorian chant', url: 'https://www.youtube.com/results?search_query=Pater+Noster+Gregorian+chant', note: { en: 'sung version', de: 'gesungene Fassung', ru: 'пропетая версия' } },
    { label: 'YouTube: Pater Noster spoken Latin', url: 'https://www.youtube.com/results?search_query=Pater+Noster+spoken+ecclesiastical+Latin', note: { en: 'spoken version', de: 'gesprochene Fassung', ru: 'прочитанная версия' } },
  ],
  homework: [
    {
      en: 'Anki: DCC core vocabulary 150–200, plus add the Pater Noster vocabulary (cards above).',
      de: 'Anki: DCC-Grundwortschatz 150–200, dazu den Wortschatz des Pater Noster anlegen (Karten oben).',
      ru: 'Anki: базовый словарь DCC 150–200 и добавить словарь Pater Noster (карточки выше).',
    },
    {
      en: 'Read the Pater Noster aloud every day (ecclesiastical pronunciation) until it is fluent.',
      de: 'Das Pater Noster täglich laut lesen (kirchliche Aussprache), bis es flüssig ist.',
      ru: 'Ежедневно читать Pater Noster вслух (церковное произношение), пока не будет звучать бегло.',
    },
  ],
  doneWhen: [
    {
      en: 'I can read the whole prayer aloud with ecclesiastical pronunciation.',
      de: 'Ich kann das ganze Gebet in kirchlicher Aussprache laut lesen.',
      ru: 'Могу прочитать всю молитву вслух в церковном произношении.',
    },
    {
      en: 'I can give a word-for-word translation without notes, and say which words are imperative and which are subjunctive.',
      de: 'Ich kann ohne Notizen Wort für Wort übersetzen und sagen, welche Wörter Imperativ und welche Konjunktiv sind.',
      ru: 'Могу без подсказок перевести слово в слово и назвать, где повелительное, а где сослагательное наклонение.',
    },
  ],
};

export default l06;
