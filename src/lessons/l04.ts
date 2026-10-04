import type { Lesson, L } from '../types';

/* Builder helpers: meanings for prefixes and roots. */
const P = (en: string, de: string, ru: string): L => ({ en, de, ru });

const l04: Lesson = {
  id: 4,
  date: '2026-10-13',
  title: {
    en: 'Roots & cognates across Europe',
    de: 'Wurzeln & Verwandte quer durch Europa',
    ru: 'Корни и родственные слова по всей Европе',
  },
  goal: {
    en: 'See Latin as the shared root layer of your three languages and decode unfamiliar words via prefixes and roots.',
    de: 'Latein als gemeinsame Wurzelschicht deiner drei Sprachen erkennen und unbekannte Wörter über Präfixe und Wurzeln entschlüsseln.',
    ru: 'Увидеть в латыни общий корневой слой всех трёх ваших языков и расшифровывать незнакомые слова через приставки и корни.',
  },
  sections: [
    /* ------------------------------------------------------------ 1. Review */
    {
      minutes: 5,
      title: { en: 'Review: Anki + Familia Romana cap. I', de: 'Wiederholung: Anki + Familia Romana Kap. I', ru: 'Повторение: Anki + Familia Romana, гл. I' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Clear today’s Anki reviews first. Then reread **Familia Romana, chapter I** (*Imperium Rōmānum*) aloud, once, without looking anything up. If a sentence is unclear, mark it and move on — speed matters more than perfection here.\n\nWarm-up: translate these sentences in the style of chapter I.',
            de: 'Erledige zuerst die heutigen Anki-Wiederholungen. Lies dann **Familia Romana, Kapitel I** (*Imperium Rōmānum*) einmal laut, ohne etwas nachzuschlagen. Ist ein Satz unklar, markiere ihn und lies weiter — Tempo ist hier wichtiger als Perfektion.\n\nAufwärmen: Übersetze diese Sätze im Stil von Kapitel I.',
            ru: 'Сначала разберите сегодняшние повторения в Anki. Затем один раз перечитайте вслух **Familia Romana, главу I** (*Imperium Rōmānum*), ничего не подглядывая. Если предложение непонятно — отметьте его и читайте дальше: здесь темп важнее идеальности.\n\nРазминка: переведите эти предложения в стиле главы I.',
          },
        },
        {
          kind: 'translate',
          id: 'l4-review',
          prompt: { en: 'Translate (chapter I vocabulary)', de: 'Übersetze (Wortschatz Kap. I)', ru: 'Переведите (лексика гл. I)' },
          items: [
            { la: 'Rōma in Italiā est.', answer: { en: 'Rome is in Italy.', de: 'Rom liegt in Italien.', ru: 'Рим находится в Италии.' } },
            { la: 'Italia in Eurōpā est.', answer: { en: 'Italy is in Europe.', de: 'Italien liegt in Europa.', ru: 'Италия находится в Европе.' } },
            { la: 'Nīlus fluvius magnus est.', answer: { en: 'The Nile is a big river.', de: 'Der Nil ist ein großer Fluss.', ru: 'Нил — большая река.' } },
            { la: 'Sardinia nōn oppidum, sed īnsula est.', answer: { en: 'Sardinia is not a town but an island.', de: 'Sardinien ist keine Stadt, sondern eine Insel.', ru: 'Сардиния — не город, а остров.' } },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ 2. Roots table */
    {
      minutes: 20,
      title: { en: 'Trace 30 roots across languages', de: '30 Wurzeln durch die Sprachen verfolgen', ru: 'Прослеживаем 30 корней через языки' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Each of your languages received Latin at a different time and by a different road. That is why the same root can look so different in German, English and Russian — and why, once you see the pattern, you can recognise it everywhere.',
            de: 'Jede deiner Sprachen hat Latein zu einer anderen Zeit und auf einem anderen Weg aufgenommen. Deshalb sieht dieselbe Wurzel im Deutschen, Englischen und Russischen so verschieden aus — und deshalb erkennst du sie überall, sobald du das Muster siehst.',
            ru: 'Каждый из ваших языков получил латынь в своё время и своим путём. Поэтому один и тот же корень так по-разному выглядит в немецком, английском и русском — и поэтому, увидев закономерность, вы начнёте узнавать его везде.',
          },
        },
        {
          kind: 'callout',
          tone: 'culture',
          title: { en: 'Three roads into your languages', de: 'Drei Wege in deine Sprachen', ru: 'Три пути в ваши языки' },
          body: {
            en: '- **German — early and practical.** Germanic tribes traded with Romans along the Rhine and Danube and copied their building, wine-growing and money: [[fenestra]] → *Fenster*, [[mūrus]] → *Mauer*, [[tēgula]] → *Ziegel*, [[monēta]] → *Münze*. These words are so old they look native.\n- **English — massive and late.** After 1066 French (spoken Latin) flooded English; scholars later added words straight from books: *pedestrian*, *manuscript*, *aqueduct*.\n- **Russian — learned and borrowed.** Mostly from the 17th–18th c., via Polish, German and French, in the language of science, state and culture: *лекция*, *республика*, *император*.',
            de: '- **Deutsch — früh und praktisch.** Germanische Stämme handelten mit den Römern an Rhein und Donau und übernahmen deren Bauweise, Weinbau und Geld: [[fenestra]] → *Fenster*, [[mūrus]] → *Mauer*, [[tēgula]] → *Ziegel*, [[monēta]] → *Münze*. Diese Wörter sind so alt, dass sie wie Erbwörter wirken.\n- **Englisch — massenhaft und spät.** Nach 1066 überschwemmte das Französische (gesprochenes Latein) das Englische; Gelehrte fügten später Wörter direkt aus Büchern hinzu: *pedestrian*, *manuscript*, *aqueduct*.\n- **Russisch — gelehrt und vermittelt.** Vor allem im 17.–18. Jh., über Polnisch, Deutsch und Französisch, in der Sprache von Wissenschaft, Staat und Kultur: *лекция*, *республика*, *император*.',
            ru: '- **Немецкий — рано и практично.** Германские племена торговали с римлянами на Рейне и Дунае и перенимали их строительство, виноделие и деньги: [[fenestra]] → *Fenster*, [[mūrus]] → *Mauer*, [[tēgula]] → *Ziegel*, [[monēta]] → *Münze*. Эти слова настолько старые, что выглядят исконными.\n- **Английский — массово и поздно.** После 1066 года в английский хлынул французский (то есть разговорная латынь); позже учёные добавили слова прямо из книг: *pedestrian*, *manuscript*, *aqueduct*.\n- **Русский — книжно и через посредников.** В основном в XVII–XVIII вв., через польский, немецкий и французский, в языке науки, государства и культуры: *лекция*, *республика*, *император*.',
          },
        },
        {
          kind: 'table',
          caption: { en: '31 Latin roots in five languages (— = no common everyday word)', de: '31 lateinische Wurzeln in fünf Sprachen (— = kein gängiges Alltagswort)', ru: '31 латинский корень в пяти языках (— = нет обычного бытового слова)' },
          head: [
            { en: 'Latin', de: 'Latein', ru: 'Латынь' },
            'IT / ES / FR',
            { en: 'German', de: 'Deutsch', ru: 'Немецкий' },
            { en: 'English', de: 'Englisch', ru: 'Английский' },
            { en: 'Russian', de: 'Russisch', ru: 'Русский' },
          ],
          latinCols: [0],
          rows: [
            ['fenestra', 'finestra / ventana / fenêtre', 'Fenster', 'fenestration, defenestrate', 'дефенестрация'],
            ['mūrus', 'muro / muro / mur', 'Mauer', 'mural', '—'],
            ['vīnum', 'vino / vino / vin', 'Wein', 'wine', 'вино'],
            ['(via) strāta', 'strada / — / —', 'Straße', 'street', '—'],
            ['cellārium', '— / — / cellier', 'Keller', 'cellar', '—'],
            ['tēgula', 'tegola / teja / tuile', 'Ziegel', 'tile', '—'],
            ['monēta', 'moneta / moneda / monnaie', 'Münze', 'money, mint', 'монета'],
            ['Caesar', 'Cesare / César / César', 'Kaiser', 'Caesar', 'царь, кесарь'],
            ['schola', 'scuola / escuela / école', 'Schule', 'school', 'школа'],
            ['porta', 'porta / puerta / porte', 'Pforte, Portal', 'portal', 'портал'],
            ['planta', 'pianta / planta / plante', 'Pflanze', 'plant', 'плантация'],
            ['tabula', 'tavola / tabla / table', 'Tafel, Tabelle', 'table', 'таблица'],
            ['aqua', 'acqua / agua / eau', 'Aquarium', 'aquarium, aquatic', 'аквариум, акварель'],
            ['manus', 'mano / mano / main', 'manuell, Manuskript', 'manual, manuscript', 'мануал, маникюр'],
            ['legere, lēctiō', 'lezione / lección / leçon', 'Lektion, Lektüre', 'lecture, lesson', 'лекция'],
            ['imperātor', 'imperatore / emperador / empereur', 'Imperator, Imperium', 'emperor, empire', 'император, империя'],
            ['rēs pūblica', 'repubblica / república / république', 'Republik', 'republic', 'республика'],
            ['circus', 'circo / circo / cirque', 'Zirkus', 'circus, circle', 'цирк'],
            ['kalendae', 'calendario / calendario / calendrier', 'Kalender', 'calendar', 'календарь'],
            ['pēs, pedis', 'piede / pie / pied', 'Pedal, Pediküre', 'pedal, pedestrian', 'педаль, педикюр'],
            ['caput, capitis', 'capo / cabeza / chef', 'Kapitel, Kapital', 'capital, chapter', 'капитал, капитан'],
            ['vōx, vōcis', 'voce / voz / voix', 'Vokal', 'voice, vocal', 'вокал'],
            ['scrībere', 'scrivere / escribir / écrire', 'schreiben, Skript', 'scribe, script', 'манускрипт, скрипт'],
            ['dūcere', 'condurre / conducir / conduire', 'Produkt, Aquädukt', 'duct, produce, aqueduct', 'продукт, акведук'],
            ['portāre', 'portare / portar / porter', 'Porto, Transport', 'transport, porter', 'транспорт, портфель'],
            ['currere', 'correre / correr / courir', 'Kurs, Konkurrenz', 'current, course', 'курс, курьер'],
            ['mittere', 'mettere / meter / mettre', 'Mission', 'mission, missile', 'миссия'],
            ['specere', 'aspetto / aspecto / aspect', 'Respekt, Spektakel', 'inspect, spectator', 'спектакль, инспектор'],
            ['struere', 'costruire / construir / construire', 'Konstruktion, Struktur', 'construct, structure', 'конструкция, структура'],
            ['ferre', 'offrire / ofrecer / offrir', 'Konferenz, Transfer', 'transfer, offer', 'конференция, трансфер'],
            ['cēdere', 'cedere / ceder / céder', 'Prozess, Rezession', 'proceed, exceed', 'процесс, рецессия'],
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'Why German loans look disguised', de: 'Warum deutsche Lehnwörter verkleidet aussehen', ru: 'Почему немецкие заимствования «замаскированы»' },
          body: {
            en: 'The earliest loans entered German **before** the High German consonant shift (roughly 6th–8th c.) and were shifted together with native words:\n- **p → pf**: [[porta]] → *Pforte*, [[planta]] → *Pflanze*\n- **t → z**: [[tēgula]] → *Ziegel*, [[monēta]] → *Münze*\n- **c stays k**: [[Caesar]] → *Kaiser*, [[cellārium]] → *Keller* — proof that Romans said *k*, not *ts*.\n\nLater, learned loans (*Portal*, *Plantage*, *Tabelle*) arrived after the shift and kept the Latin shape — so German often has **two** layers from one root: *Pforte* / *Portal*, *Tafel* / *Tabelle*. They also took the medieval reading of *c* before *e, i* as *ts*: [[circus]] → *Zirkus*, [[centrum]] → *Zentrum* — compare early *Keller*.',
            de: 'Die frühesten Lehnwörter kamen **vor** der zweiten (hochdeutschen) Lautverschiebung (etwa 6.–8. Jh.) ins Deutsche und wurden zusammen mit den Erbwörtern verschoben:\n- **p → pf**: [[porta]] → *Pforte*, [[planta]] → *Pflanze*\n- **t → z**: [[tēgula]] → *Ziegel*, [[monēta]] → *Münze*\n- **c bleibt k**: [[Caesar]] → *Kaiser*, [[cellārium]] → *Keller* — ein Beweis, dass die Römer *k* sprachen, nicht *ts*.\n\nSpätere, gelehrte Entlehnungen (*Portal*, *Plantage*, *Tabelle*) kamen nach der Verschiebung und behielten die lateinische Form — daher hat das Deutsche oft **zwei** Schichten aus einer Wurzel: *Pforte* / *Portal*, *Tafel* / *Tabelle*. Sie übernahmen auch die mittelalterliche Aussprache von *c* vor *e, i* als *ts*: [[circus]] → *Zirkus*, [[centrum]] → *Zentrum* — im Gegensatz zum frühen *Keller*.',
            ru: 'Самые ранние заимствования попали в немецкий **до** второго (верхненемецкого) передвижения согласных (примерно VI–VIII вв.) и изменились вместе с исконными словами:\n- **p → pf**: [[porta]] → *Pforte*, [[planta]] → *Pflanze*\n- **t → z**: [[tēgula]] → *Ziegel*, [[monēta]] → *Münze*\n- **c остаётся k**: [[Caesar]] → *Kaiser*, [[cellārium]] → *Keller* — доказательство того, что римляне произносили *к*, а не *ц*.\n\nБолее поздние книжные заимствования (*Portal*, *Plantage*, *Tabelle*) пришли уже после передвижения и сохранили латинский облик — поэтому в немецком часто **два** слоя от одного корня: *Pforte* / *Portal*, *Tafel* / *Tabelle*. Они же усвоили средневековое чтение *c* перед *e, i* как *ц*: [[circus]] → *Zirkus* (и русское *цирк*), [[centrum]] → *Zentrum* — в отличие от раннего *Keller*. Сравните русское *царь* (через готский и старославянский) и книжное *кесарь* — тоже два слоя от [[Caesar]].',
          },
        },
        {
          kind: 'match',
          id: 'l4-match-de',
          prompt: { en: 'Match the Latin word to its early German descendant', de: 'Ordne das lateinische Wort seinem frühen deutschen Nachfahren zu', ru: 'Сопоставьте латинское слово с его ранним немецким потомком' },
          pairs: [
            { left: 'tēgula', right: 'Ziegel' },
            { left: 'monēta', right: 'Münze' },
            { left: 'cellārium', right: 'Keller' },
            { left: 'strāta', right: 'Straße' },
            { left: 'mūrus', right: 'Mauer' },
            { left: 'porta', right: 'Pforte' },
            { left: 'planta', right: 'Pflanze' },
            { left: 'Caesar', right: 'Kaiser' },
          ],
        },
        {
          kind: 'quiz',
          id: 'l4-roots-quiz',
          title: { en: 'Which root hides inside?', de: 'Welche Wurzel steckt darin?', ru: 'Какой корень внутри?' },
          questions: [
            {
              prompt: { en: 'English *pedestrian* and Russian *педаль* share the root of…', de: 'Engl. *pedestrian* und russ. *педаль* teilen die Wurzel von…', ru: 'Англ. *pedestrian* и русск. *педаль* имеют общий корень с…' },
              options: ['pēs, pedis', 'pater', 'pōnere'],
              answer: 0,
              explain: { en: 'The genitive [[pedis]] shows the stem *ped-* — the nominative [[pēs]] hides it. More on this in lesson 5.', de: 'Der Genitiv [[pedis]] zeigt den Stamm *ped-* — der Nominativ [[pēs]] verbirgt ihn. Mehr dazu in Lektion 5.', ru: 'Родительный падеж [[pedis]] показывает основу *ped-*, а именительный [[pēs]] её скрывает. Подробнее — в уроке 5.' },
            },
            {
              prompt: { en: '*Manuscript* literally means…', de: '*Manuskript* bedeutet wörtlich…', ru: '*Манускрипт* буквально значит…' },
              options: [
                { en: 'written by hand', de: 'mit der Hand geschrieben', ru: 'написанное рукой' },
                { en: 'a big book', de: 'ein großes Buch', ru: 'большая книга' },
                { en: 'a copy of a letter', de: 'eine Briefabschrift', ru: 'копия письма' },
              ],
              answer: 0,
              explain: { en: '[[manū scrīptum]] — [[manus]] (hand) + [[scrībere]] (write).', de: '[[manū scrīptum]] — [[manus]] (Hand) + [[scrībere]] (schreiben).', ru: '[[manū scrīptum]] — [[manus]] (рука) + [[scrībere]] (писать).' },
            },
            {
              prompt: { en: 'An *aqueduct* is literally a…', de: 'Ein *Aquädukt* ist wörtlich ein…', ru: '*Акведук* буквально —…' },
              options: [
                { en: 'water bridge', de: 'Wasserbrücke', ru: 'водяной мост' },
                { en: 'water leader (conduit)', de: 'Wasserleiter', ru: 'водовод («ведущий воду»)' },
                { en: 'water container', de: 'Wasserbehälter', ru: 'резервуар для воды' },
              ],
              answer: 1,
              explain: { en: '[[aqua]] (water) + [[dūcere]] (to lead). The arches are only the visible part; most Roman aqueducts ran underground.', de: '[[aqua]] (Wasser) + [[dūcere]] (führen). Die Bögen sind nur der sichtbare Teil; die meisten römischen Aquädukte verliefen unterirdisch.', ru: '[[aqua]] (вода) + [[dūcere]] (вести). Арки — лишь видимая часть; большая часть римских акведуков шла под землёй.' },
            },
            {
              prompt: { en: 'Russian *царь* ultimately goes back to…', de: 'Russisch *царь* geht letztlich zurück auf…', ru: 'Русское *царь* в конечном счёте восходит к…' },
              options: ['Caesar', 'rēx', 'imperātor'],
              answer: 0,
              explain: { en: 'Old Russian *цѣсарь*, borrowed via Gothic from [[Caesar]] — a cousin of German *Kaiser*.', de: 'Altrussisch *цѣсарь*, über das Gotische entlehnt aus [[Caesar]] — ein Vetter von *Kaiser*.', ru: 'Древнерусское *цѣсарь*, заимствованное через готский из [[Caesar]], — двоюродный брат немецкого *Kaiser*.' },
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ 3. Prefixes */
    {
      minutes: 15,
      title: { en: 'Prefixes: the Latin toolkit', de: 'Präfixe: der lateinische Baukasten', ru: 'Приставки: латинский конструктор' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Latin builds verbs like Lego: **prefix + root**. Nine (plus one bonus) prefixes cover most of the vocabulary you meet in English, German and Russian science words. It works exactly like German *tragen → abtragen, eintragen, übertragen* or Russian *нести → вынести, внести, перенести*.',
            de: 'Latein baut Verben wie Lego: **Präfix + Wurzel**. Neun (plus ein Bonus-) Präfixe decken den Großteil des Wortschatzes ab, den du in englischen, deutschen und russischen Fachwörtern triffst. Es funktioniert genau wie *tragen → abtragen, eintragen, übertragen* oder russisch *нести → вынести, внести, перенести*.',
            ru: 'Латынь собирает глаголы как конструктор: **приставка + корень**. Девять (плюс одна бонусная) приставок покрывают большую часть лексики, которая встречается в английских, немецких и русских научных словах. Это работает точно как *нести → вынести, внести, перенести* или немецкое *tragen → abtragen, eintragen, übertragen*.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'The ten prefixes', de: 'Die zehn Präfixe', ru: 'Десять приставок' },
          head: [
            { en: 'Prefix', de: 'Präfix', ru: 'Приставка' },
            { en: 'Meaning', de: 'Bedeutung', ru: 'Значение' },
            { en: 'Russian parallel', de: 'Russische Entsprechung', ru: 'Русская параллель' },
            { en: 'Example', de: 'Beispiel', ru: 'Пример' },
          ],
          latinCols: [0],
          rows: [
            ['ad-', P('to, towards', 'zu, hin', 'к, при-'), 'при-, под-', 'admit, Advent'],
            ['con- / com-', P('with, together (or intensifying)', 'mit, zusammen (oder verstärkend)', 'с, вместе (или усиление)'), 'со-, с-', 'construct, Konkurrenz'],
            ['dē-', P('down, away from', 'herab, weg von', 'вниз, прочь от'), 'с-, от-', 'deport, Deduktion'],
            ['ex- / ē-', P('out (of)', 'aus, heraus', 'из, вне'), 'вы-, из-', 'export, emit'],
            ['in- (1)', P('in, into, on', 'in, hinein, auf', 'в, на'), 'в-', 'import, Inschrift'],
            ['in- (2)', P('not, un-', 'nicht, un-', 'не-, без-'), 'не-, без-', 'invisible, illegal'],
            ['prae-', P('before, in front', 'vor, voran', 'перед, пред-'), 'пред-', 'precede, Präfix'],
            ['re-', P('back, again', 'zurück, wieder', 'назад, снова'), 'от-, пере-', 'report, Reform'],
            ['sub-', P('under, from below', 'unter, von unten', 'под, снизу'), 'под-', 'support, Subjekt'],
            ['trāns-', P('across, over', 'hinüber, über', 'через, пере-'), 'пере-', 'transport, Transfer'],
            ['circum-', P('around (bonus)', 'herum (Bonus)', 'вокруг (бонус)'), 'о-, об-', 'circumspect, Zirkumflex'],
          ],
        },
        {
          kind: 'callout',
          tone: 'rule',
          title: { en: 'Assimilation: the prefix adapts to the root', de: 'Assimilation: das Präfix passt sich der Wurzel an', ru: 'Ассимиляция: приставка подстраивается под корень' },
          body: {
            en: 'The last consonant of a prefix often becomes like the first consonant of the root — it is simply easier to say:\n- [[ad]] + [[ferō]] → [[afferō]] (I bring to); [[ad]] + [[cēdō]] → [[accēdō]] → *accede*\n- [[in]] + [[portāre]] → [[importāre]] → *import*; [[in]] + [[lēgālis]] → *illegal*; *in* + *regulär* → *irregulär*\n- [[sub]] + [[portāre]] → [[supportāre]] → *support*; [[sub]] + [[ferre]] → *suffer*; [[sub]] + [[cēdere]] → *succeed*\n- [[con]] + [[mittere]] → [[committere]] → *commit*; [[con]] + [[legere]] → [[colligere]] → *collect*\n- [[ex]] before many consonants shrinks to [[ē]]: [[ēmittere]] → *emit*\n\nSo when you see **af-, ac-, ap-, as-** think *ad-*; **col-, com-, cor-** think *con-*; **il-, im-, ir-** think *in-*; **suc-, suf-, sup-, sus-** think *sub-*. Russian does the same in *с + делать → сделать* [зд] — you just don’t see it in spelling.',
            de: 'Der letzte Konsonant des Präfixes gleicht sich oft an den ersten Konsonanten der Wurzel an — das spricht sich einfach leichter:\n- [[ad]] + [[ferō]] → [[afferō]] (ich bringe herbei); [[ad]] + [[cēdō]] → [[accēdō]] → *Akzession*\n- [[in]] + [[portāre]] → [[importāre]] → *Import*; [[in]] + [[lēgālis]] → *illegal*; *in* + *regulär* → *irregulär*\n- [[sub]] + [[portāre]] → [[supportāre]] → *Support*; [[sub]] + [[ferre]] → engl. *suffer*; [[sub]] + [[cēdere]] → *Sukzession*\n- [[con]] + [[mittere]] → [[committere]] → engl. *commit* (daher *Komitee*, über engl. *committee*); [[con]] + [[legere]] → [[colligere]] → *Kollekte*\n- [[ex]] schrumpft vor vielen Konsonanten zu [[ē]]: [[ēmittere]] → *Emission*\n\nSiehst du also **af-, ac-, ap-, as-**, denk an *ad-*; **col-, com-, cor-** → *con-*; **il-, im-, ir-** → *in-*; **suc-, suf-, sup-, sus-** → *sub-*. Das Deutsche kennt dasselbe in *Imbiss* (*in* + *Biss*) — nur seltener.',
            ru: 'Последняя согласная приставки часто уподобляется первой согласной корня — так просто легче произносить:\n- [[ad]] + [[ferō]] → [[afferō]] (приношу); [[ad]] + [[cēdō]] → [[accēdō]] → англ. *accede*\n- [[in]] + [[portāre]] → [[importāre]] → *импорт*; [[in]] + [[lēgālis]] → *иллегальный*; *in* + *regularis* → *иррегулярный*\n- [[sub]] + [[portāre]] → [[supportāre]] → англ. *support*; [[sub]] + [[ferre]] → англ. *suffer*; [[sub]] + [[cēdere]] → англ. *succeed*\n- [[con]] + [[mittere]] → [[committere]] → англ. *commit* (отсюда *комитет*, от англ. *committee*); [[con]] + [[legere]] → [[colligere]] → *коллекция*\n- [[ex]] перед многими согласными сокращается до [[ē]]: [[ēmittere]] → *эмиссия*\n\nИтак, видите **af-, ac-, ap-, as-** — думайте *ad-*; **col-, com-, cor-** → *con-*; **il-, im-, ir-** → *in-*; **suc-, suf-, sup-, sus-** → *sub-*. В русском происходит то же самое: *с + жечь → сжечь* произносится [зж], просто на письме это не видно.',
          },
        },
        {
          kind: 'builder',
          id: 'l4-builder',
          prompt: {
            en: 'Build words: pick a prefix and a root. 42 words are hidden here (English and German). Watch for assimilation!',
            de: 'Wörter bauen: wähle ein Präfix und eine Wurzel. Hier verstecken sich 42 Wörter (Englisch und Deutsch). Achte auf Assimilation!',
            ru: 'Собирайте слова: выберите приставку и корень. Здесь спрятано 42 слова (английские и немецкие). Следите за ассимиляцией!',
          },
          prefixes: [
            { p: 'ad', m: P('to', 'zu', 'к') },
            { p: 'con', m: P('with', 'mit', 'с') },
            { p: 'dē', m: P('down/from', 'herab/weg', 'вниз/от') },
            { p: 'ex', m: P('out', 'aus', 'из') },
            { p: 'in', m: P('in / not', 'in / nicht', 'в / не') },
            { p: 'prae', m: P('before', 'vor', 'перед') },
            { p: 're', m: P('back/again', 'zurück/wieder', 'назад/снова') },
            { p: 'sub', m: P('under', 'unter', 'под') },
            { p: 'trāns', m: P('across', 'hinüber', 'через') },
            { p: 'circum', m: P('around', 'herum', 'вокруг') },
          ],
          roots: [
            { r: 'portāre', m: P('carry', 'tragen', 'нести') },
            { r: 'dūcere', m: P('lead', 'führen', 'вести') },
            { r: 'scrībere', m: P('write', 'schreiben', 'писать') },
            { r: 'specere', m: P('look', 'schauen', 'смотреть') },
            { r: 'currere', m: P('run', 'laufen', 'бежать') },
            { r: 'ferre', m: P('bring, bear', 'bringen, tragen', 'нести, приносить') },
            { r: 'mittere', m: P('send', 'schicken', 'посылать') },
            { r: 'cēdere', m: P('go, yield', 'gehen, weichen', 'идти, уступать') },
            { r: 'struere', m: P('pile up, build', 'schichten, bauen', 'складывать, строить') },
          ],
          targets: [
            // portāre
            { word: 'transport / Transport', prefix: 'trāns', root: 'portāre', meaning: P('carry across', 'hinübertragen', 'переносить, перевозить') },
            { word: 'export / Export', prefix: 'ex', root: 'portāre', meaning: P('carry out (of the country)', 'hinaustragen (aus dem Land)', 'выносить (из страны) — вывоз') },
            { word: 'import / Import', prefix: 'in', root: 'portāre', meaning: P('carry in; *in-p* → *imp* (assimilation)', 'hineintragen; *in-p* → *imp* (Assimilation)', 'вносить (ввоз); *in-p* → *imp* (ассимиляция)') },
            { word: 'report / Reportage', prefix: 're', root: 'portāre', meaning: P('carry back (news)', '(Nachricht) zurücktragen', 'приносить обратно (весть) — доклад') },
            { word: 'deport / Deportation', prefix: 'dē', root: 'portāre', meaning: P('carry away', 'wegtragen, wegbringen', 'уносить, высылать') },
            { word: 'support / Support', prefix: 'sub', root: 'portāre', meaning: P('carry from below; *sub-p* → *supp*', 'von unten tragen; *sub-p* → *supp*', 'нести снизу, поддерживать; *sub-p* → *supp*') },
            // dūcere
            { word: 'conduct', prefix: 'con', root: 'dūcere', meaning: P('lead together, guide', 'zusammenführen, leiten', 'сводить вместе, вести — кондуктор') },
            { word: 'reduce / reduzieren', prefix: 're', root: 'dūcere', meaning: P('lead back (to less)', 'zurückführen', 'отводить назад — редукция') },
            { word: 'deduce / Deduktion', prefix: 'dē', root: 'dūcere', meaning: P('lead down (from a principle)', '(aus einem Prinzip) herleiten', 'выводить (из принципа) — дедукция') },
            { word: 'induce / Induktion', prefix: 'in', root: 'dūcere', meaning: P('lead into', 'hineinführen', 'вводить — индукция') },
            // scrībere
            { word: 'describe', prefix: 'dē', root: 'scrībere', meaning: P('write down', 'nachzeichnen, beschreiben', 'описывать («списывать»)') },
            { word: 'inscribe / Inschrift', prefix: 'in', root: 'scrībere', meaning: P('write on', 'daraufschreiben', 'надписывать — надпись') },
            { word: 'prescribe', prefix: 'prae', root: 'scrībere', meaning: P('write before = order (*Rezept* is from *recipere* — a trap!)', 'vorschreiben (*Rezept* kommt aber von *recipere* — Falle!)', 'предписывать (а *рецепт* — от *recipere*, ловушка!)') },
            { word: 'subscribe / Subskription', prefix: 'sub', root: 'scrībere', meaning: P('write under = sign', 'unterschreiben', 'подписывать(ся) — подписка') },
            { word: 'transcribe / Transkription', prefix: 'trāns', root: 'scrībere', meaning: P('write across (into another form)', 'umschreiben (in eine andere Form)', 'переписывать (в другую форму) — транскрипция') },
            // specere
            { word: 'inspect / Inspektion', prefix: 'in', root: 'specere', meaning: P('look into', 'hineinschauen', 'смотреть внутрь — инспекция') },
            { word: 'respect / Respekt', prefix: 're', root: 'specere', meaning: P('look back (at), regard', 'zurückschauen, Rücksicht', 'оглядываться (на кого-то) — уважение') },
            { word: 'circumspect', prefix: 'circum', root: 'specere', meaning: P('looking around = cautious', 'umsichtig (wörtlich: herumschauend)', 'осмотрительный (буквально «смотрящий вокруг»)') },
            { word: 'aspect / Aspekt', prefix: 'ad', root: 'specere', meaning: P('a look at; *ad-sp* → *asp*', 'Ansicht; *ad-sp* → *asp*', 'взгляд на; *ad-sp* → *asp* — аспект') },
            { word: 'suspect / suspekt', prefix: 'sub', root: 'specere', meaning: P('look from below = distrust; *sub-sp* → *susp*', 'von unten ansehen = misstrauen; *sub-sp* → *susp*', 'смотреть исподлобья = подозревать; *sub-sp* → *susp*') },
            { word: 'expect', prefix: 'ex', root: 'specere', meaning: P('look out (for); via *exspectāre*', 'nach etwas ausschauen; über *exspectāre*', 'высматривать, ждать; через *exspectāre*') },
            // currere
            { word: 'Konkurrenz / concurrence', prefix: 'con', root: 'currere', meaning: P('running together = competition', 'Zusammenlaufen = Wettbewerb', 'сбегаться вместе = конкуренция') },
            { word: 'excursion / Exkursion', prefix: 'ex', root: 'currere', meaning: P('running out = outing', 'Hinauslaufen = Ausflug', 'выбегание = экскурсия') },
            { word: 'recurrent / Rekursion', prefix: 're', root: 'currere', meaning: P('running back = returning', 'zurücklaufend = wiederkehrend', 'бегущий назад = повторяющийся — рекурсия') },
            { word: 'incur', prefix: 'in', root: 'currere', meaning: P('run into (costs, risks)', 'in etwas hineinlaufen (Kosten, Risiko)', 'набегать (о расходах, рисках)') },
            // ferre
            { word: 'transfer / Transfer', prefix: 'trāns', root: 'ferre', meaning: P('bring across', 'hinübertragen', 'переносить — трансфер') },
            { word: 'refer / Referat', prefix: 're', root: 'ferre', meaning: P('bring back = report, point to', 'zurückbringen = berichten', 'приносить обратно = докладывать — реферат') },
            { word: 'Konferenz / confer', prefix: 'con', root: 'ferre', meaning: P('bringing together', 'Zusammentragen', 'сносить вместе — конференция') },
            { word: 'prefer / Präferenz', prefix: 'prae', root: 'ferre', meaning: P('carry before = put first', 'voranstellen', 'ставить впереди — предпочитать') },
            { word: 'suffer', prefix: 'sub', root: 'ferre', meaning: P('bear from below = endure; *sub-f* → *suff*', 'von unten tragen = erdulden; *sub-f* → *suff*', 'нести снизу = терпеть; *sub-f* → *suff*') },
            // mittere
            { word: 'commit / Komitee', prefix: 'con', root: 'mittere', meaning: P('send together = entrust; *con-m* → *comm*', 'zusammenschicken = anvertrauen; *con-m* → *comm*', 'посылать вместе = поручать; *con-m* → *comm* — комитет') },
            { word: 'emit / Emission', prefix: 'ex', root: 'mittere', meaning: P('send out; *ex* → *ē*', 'aussenden; *ex* → *ē*', 'испускать; *ex* → *ē* — эмиссия') },
            { word: 'submit', prefix: 'sub', root: 'mittere', meaning: P('send under = yield, hand in', 'darunterschicken = sich unterwerfen, einreichen', 'подставлять = подчиняться, подавать') },
            { word: 'admit', prefix: 'ad', root: 'mittere', meaning: P('send to = let in', 'zulassen', 'допускать — пропускать к себе') },
            { word: 'transmit / Transmission', prefix: 'trāns', root: 'mittere', meaning: P('send across', 'hinüberschicken, übertragen', 'передавать — трансмиссия') },
            // cēdere
            { word: 'precede / Präzedenzfall', prefix: 'prae', root: 'cēdere', meaning: P('go before', 'vorangehen', 'идти впереди — прецедент') },
            { word: 'exceed / Exzess', prefix: 'ex', root: 'cēdere', meaning: P('go out (beyond)', 'hinausgehen (über)', 'выходить (за пределы) — эксцесс') },
            { word: 'succeed / Sukzession', prefix: 'sub', root: 'cēdere', meaning: P('go under/after = follow; *sub-c* → *succ*', 'nachfolgen; *sub-c* → *succ*', 'идти следом = наследовать, преуспевать; *sub-c* → *succ*') },
            { word: 'recede / Rezession', prefix: 're', root: 'cēdere', meaning: P('go back', 'zurückgehen', 'отступать — рецессия') },
            // struere
            { word: 'Konstruktion / construct', prefix: 'con', root: 'struere', meaning: P('pile together = build', 'zusammenschichten = bauen', 'складывать вместе = строить — конструкция') },
            { word: 'instruct / Instruktion', prefix: 'in', root: 'struere', meaning: P('build into = equip, teach', 'hineinbauen = ausrüsten, anleiten', 'встраивать = оснащать, наставлять — инструкция') },
            { word: 'destruction / Destruktion', prefix: 'dē', root: 'struere', meaning: P('un-build = tear down', 'abbauen = zerstören', 'разбирать = разрушать — деструкция') },
          ],
        },
        {
          kind: 'quiz',
          id: 'l4-decode',
          title: { en: 'Decode the unknown word', de: 'Entschlüssle das unbekannte Wort', ru: 'Расшифруйте незнакомое слово' },
          questions: [
            {
              prompt: { en: 'Split it and guess: *circumspect*', de: 'Zerlege und rate: *circumspect* (engl.)', ru: 'Разберите и угадайте: *circumspect* (англ.)' },
              options: [
                { en: 'cautious, looking around before acting', de: 'umsichtig, vorsichtig', ru: 'осмотрительный, осторожный' },
                { en: 'round in shape', de: 'rund', ru: 'круглый' },
                { en: 'suspicious of others', de: 'misstrauisch', ru: 'подозрительный' },
              ],
              answer: 0,
              explain: { en: '[[circum]] (around) + [[specere]] (look). German *umsichtig* is a perfect calque: *um* + *sehen*.', de: '[[circum]] (herum) + [[specere]] (schauen). *Umsichtig* ist eine perfekte Lehnübersetzung: *um* + *sehen*.', ru: '[[circum]] (вокруг) + [[specere]] (смотреть). Русское *осмотрительный* устроено так же: *о(б)-* «вокруг» + *смотреть*.' },
            },
            {
              prompt: { en: 'Split it and guess: German *Konkurrenz*', de: 'Zerlege und rate: *Konkurrenz*', ru: 'Разберите и угадайте: нем. *Konkurrenz*' },
              options: [
                { en: 'agreement', de: 'Übereinstimmung', ru: 'согласие' },
                { en: 'competition', de: 'Wettbewerb', ru: 'конкуренция, соперничество' },
                { en: 'current account', de: 'Girokonto', ru: 'текущий счёт' },
              ],
              answer: 1,
              explain: { en: '[[con]] (together) + [[currere]] (run): people running *at the same time for the same goal*. English *concur* (agree) took the other path: running together = coinciding.', de: '[[con]] (zusammen) + [[currere]] (laufen): Leute, die *gleichzeitig zum selben Ziel* laufen. Engl. *concur* (zustimmen) ging den anderen Weg: zusammenlaufen = übereinstimmen.', ru: '[[con]] (вместе) + [[currere]] (бежать): люди, бегущие *одновременно к одной цели*. Англ. *concur* («соглашаться») пошло другим путём: сбегаться = совпадать.' },
            },
            {
              prompt: { en: 'What does *in-* mean in *illegal* and *immobil*?', de: 'Was bedeutet *in-* in *illegal* und *immobil*?', ru: 'Что значит *in-* в словах *иллегальный* и *иммобильный*?' },
              options: [
                { en: 'into', de: 'hinein', ru: 'в, внутрь' },
                { en: 'not', de: 'nicht, un-', ru: 'не-' },
                { en: 'very', de: 'sehr', ru: 'очень' },
              ],
              answer: 1,
              explain: { en: 'Negative *in-* (= English *un-*, German *un-*), assimilated to *il-* before *l* and *im-* before *m*. *Immobilien* are literally “unmovables”.', de: 'Verneinendes *in-* (= dt. *un-*), vor *l* zu *il-*, vor *m* zu *im-* angeglichen. *Immobilien* sind wörtlich „Unbewegliche“.', ru: 'Отрицательное *in-* (= русское *не-*), перед *l* → *il-*, перед *m* → *im-*. *Immobilien* (недвижимость) — буквально «неподвижное».' },
            },
            {
              prompt: { en: 'Split it and guess: *Rezession* (economics)', de: 'Zerlege und rate: *Rezession*', ru: 'Разберите и угадайте: *рецессия*' },
              options: [
                { en: 'a going back = downturn', de: 'ein Zurückgehen = Abschwung', ru: 'отступление = спад' },
                { en: 'a new beginning', de: 'ein Neuanfang', ru: 'новое начало' },
                { en: 'a review, critique', de: 'eine Kritik, Rezension', ru: 'отзыв, рецензия' },
              ],
              answer: 0,
              explain: { en: '[[re]] (back) + [[cēdere]] (go), noun [[recessiō]]. *Rezension* is a different root: [[cēnsēre]] (assess).', de: '[[re]] (zurück) + [[cēdere]] (gehen), Substantiv [[recessiō]]. *Rezension* hat eine andere Wurzel: [[cēnsēre]] (begutachten).', ru: '[[re]] (назад) + [[cēdere]] (идти), существительное [[recessiō]]. *Рецензия* — другой корень: [[cēnsēre]] (оценивать).' },
            },
            {
              prompt: { en: 'Split it and guess: *Subskription*', de: 'Zerlege und rate: *Subskription*', ru: 'Разберите и угадайте: *субскрипция*' },
              options: [
                { en: 'a hidden text', de: 'ein versteckter Text', ru: 'скрытый текст' },
                { en: 'signing up (writing your name underneath)', de: 'Vorbestellung (den Namen darunterschreiben)', ru: 'подписка (поставить имя внизу)' },
                { en: 'a footnote', de: 'eine Fußnote', ru: 'сноска' },
              ],
              answer: 1,
              explain: { en: '[[sub]] (under) + [[scrībere]] (write) — exactly German *unter-schreiben* and Russian *под-писка*.', de: '[[sub]] (unter) + [[scrībere]] (schreiben) — genau *unter-schreiben*.', ru: '[[sub]] (под) + [[scrībere]] (писать) — ровно русское *под-писка*.' },
            },
            {
              prompt: { en: '*Manufaktur / manufacture* originally meant…', de: '*Manufaktur* bedeutete ursprünglich…', ru: '*Мануфактура* первоначально означала…' },
              options: [
                { en: 'making by hand', de: 'Herstellung von Hand', ru: 'изготовление вручную' },
                { en: 'making by machine', de: 'maschinelle Herstellung', ru: 'машинное производство' },
                { en: 'a textile shop', de: 'ein Stoffladen', ru: 'лавка тканей' },
              ],
              answer: 0,
              explain: { en: '[[manus]] (hand) + [[facere]] (make). Irony: today it means industrial production.', de: '[[manus]] (Hand) + [[facere]] (machen). Ironie: Heute denkt man an industrielle Fertigung.', ru: '[[manus]] (рука) + [[facere]] (делать). Ирония: сегодня это скорее фабрика, а в русском — ещё и ткани.' },
            },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ 4. Wiktionary drill */
    {
      minutes: 15,
      title: { en: 'Wiktionary drill: 5 everyday German words', de: 'Wiktionary-Übung: 5 deutsche Alltagswörter', ru: 'Упражнение с Викисловарём: 5 немецких бытовых слов' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Pick **five German words you use every day** (at home, in the supermarket, at the office). For each one:\n- open **de.wiktionary.org** → section *Herkunft*, or **en.wiktionary.org** → *Etymology*;\n- follow the chain back step by step (Middle High German → Old High German → Latin);\n- write down the Latin word, its meaning and one English or Russian cousin.\n\nNot every word will be Latin — that is also a result. Germanic words (*Haus*, *Brot*, *Wasser*) stop at Proto-Germanic.',
            de: 'Wähle **fünf deutsche Wörter, die du täglich benutzt** (zu Hause, im Supermarkt, im Büro). Für jedes:\n- öffne **de.wiktionary.org** → Abschnitt *Herkunft* oder **en.wiktionary.org** → *Etymology*;\n- verfolge die Kette Schritt für Schritt zurück (Mittelhochdeutsch → Althochdeutsch → Latein);\n- notiere das lateinische Wort, seine Bedeutung und einen englischen oder russischen Verwandten.\n\nNicht jedes Wort ist lateinisch — auch das ist ein Ergebnis. Germanische Wörter (*Haus*, *Brot*, *Wasser*) enden beim Urgermanischen.',
            ru: 'Выберите **пять немецких слов, которыми пользуетесь каждый день** (дома, в супермаркете, в офисе). Для каждого:\n- откройте **de.wiktionary.org** → раздел *Herkunft* или **en.wiktionary.org** → *Etymology*;\n- пройдите по цепочке назад шаг за шагом (средневерхненемецкий → древневерхненемецкий → латынь);\n- запишите латинское слово, его значение и одного английского или русского «родственника».\n\nНе каждое слово окажется латинским — это тоже результат. Германские слова (*Haus*, *Brot*, *Wasser*) упираются в прагерманский.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Worked example and candidates', de: 'Musterbeispiel und Kandidaten', ru: 'Разобранный пример и кандидаты' },
          body: {
            en: '**Fenster** → Middle High German *venster* → Old High German *fenstar* → Latin [[fenestra]] (window).\n\nGood candidates if you are stuck (all from Latin): *Tisch* ([[discus]]), *Küche* ([[coquīna]]), *Markt* ([[mercātus]]), *Pfeffer* ([[piper]]), *Kammer* ([[camera]]), *Kiste* ([[cista]]), *Speicher* ([[spīcārium]]), *Essig* ([[acētum]]). Check them yourself — the point is the habit, not the answer.',
            de: '**Fenster** → mittelhochdeutsch *venster* → althochdeutsch *fenstar* → lateinisch [[fenestra]] (Fenster).\n\nGute Kandidaten, falls dir nichts einfällt (alle aus dem Lateinischen): *Tisch* ([[discus]]), *Küche* ([[coquīna]]), *Markt* ([[mercātus]]), *Pfeffer* ([[piper]]), *Kammer* ([[camera]]), *Kiste* ([[cista]]), *Speicher* ([[spīcārium]]), *Essig* ([[acētum]]). Prüfe sie selbst — es geht um die Gewohnheit, nicht um die Antwort.',
            ru: '**Fenster** → средневерхненем. *venster* → древневерхненем. *fenstar* → лат. [[fenestra]] (окно).\n\nХорошие кандидаты, если ничего не приходит в голову (все из латыни): *Tisch* ([[discus]]), *Küche* ([[coquīna]]), *Markt* ([[mercātus]]), *Pfeffer* ([[piper]]), *Kammer* ([[camera]] — ср. русск. *камера*), *Kiste* ([[cista]]), *Speicher* ([[spīcārium]]), *Essig* ([[acētum]]). Проверьте их сами — важна привычка, а не ответ.',
          },
        },
        {
          kind: 'links',
          items: [
            { label: 'de.wiktionary.org', url: 'https://de.wiktionary.org/wiki/Fenster', note: { en: 'German entry — section “Herkunft”', de: 'deutscher Eintrag — Abschnitt „Herkunft“', ru: 'немецкая статья — раздел «Herkunft»' } },
            { label: 'en.wiktionary.org', url: 'https://en.wiktionary.org/wiki/Fenster', note: { en: 'English entry — section “Etymology” (often more detailed)', de: 'englischer Eintrag — Abschnitt „Etymology“ (oft ausführlicher)', ru: 'английская статья — раздел «Etymology» (часто подробнее)' } },
          ],
        },
        {
          kind: 'notepad',
          id: 'l4-wiktionary',
          prompt: { en: 'My 5 German words and their chains', de: 'Meine 5 deutschen Wörter und ihre Ketten', ru: 'Мои 5 немецких слов и их цепочки' },
          placeholder: { en: 'Fenster ← venster ← fenstar ← fenestra (window) — EN fenestration', de: 'Fenster ← venster ← fenstar ← fenestra (Fenster) — EN fenestration', ru: 'Fenster ← venster ← fenstar ← fenestra (окно) — EN fenestration' },
        },
      ],
    },

    /* ------------------------------------------------------------ 5. Ostler */
    {
      minutes: 5,
      title: { en: 'Start Ostler, *Ad Infinitum*', de: 'Ostler beginnen: *Ad Infinitum*', ru: 'Начинаем Остлера: *Ad Infinitum*' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Nicholas Ostler’s *Ad Infinitum: A Biography of Latin* tells the story of Latin as a living language over 2,000+ years — how it spread, why it outlived Rome, and how it shaped the languages you speak. Read the **introduction** today; one chapter per week is a comfortable pace alongside this course.\n\nNote the title itself: [[ad īnfīnītum]] — *ad* + accusative, “to the infinite”.',
            de: 'Nicholas Ostlers *Ad Infinitum: A Biography of Latin* erzählt die Geschichte des Lateins als lebendiger Sprache über mehr als 2000 Jahre — wie es sich verbreitete, warum es Rom überlebte und wie es die Sprachen prägte, die du sprichst. Lies heute die **Einleitung**; ein Kapitel pro Woche ist neben diesem Kurs ein angenehmes Tempo.\n\nAchte auf den Titel selbst: [[ad īnfīnītum]] — *ad* + Akkusativ, „bis ins Unendliche“.',
            ru: 'Книга Николаса Остлера *Ad Infinitum: A Biography of Latin* рассказывает историю латыни как живого языка на протяжении более 2000 лет — как она распространилась, почему пережила Рим и как сформировала языки, на которых вы говорите. Сегодня прочитайте **введение**; по главе в неделю — удобный темп параллельно с курсом.\n\nОбратите внимание на само название: [[ad īnfīnītum]] — *ad* + винительный падеж, «до бесконечности».',
          },
        },
        {
          kind: 'notepad',
          id: 'l4-ostler',
          prompt: { en: 'Ostler — 3 ideas from the introduction', de: 'Ostler — 3 Gedanken aus der Einleitung', ru: 'Остлер — 3 мысли из введения' },
          placeholder: { en: '1. …', de: '1. …', ru: '1. …' },
        },
      ],
    },

    /* ------------------------------------------------------------ Practice */
    {
      minutes: 0,
      title: { en: 'Practice: roots to keep', de: 'Übung: Wurzeln zum Behalten', ru: 'Практика: корни, которые стоит запомнить' },
      blocks: [
        {
          kind: 'flashcards',
          id: 'l4-cards',
          title: { en: 'Root verbs and nouns', de: 'Wurzelverben und -nomen', ru: 'Корневые глаголы и существительные' },
          cards: [
            { la: 'portāre', back: { en: 'to carry → transport, porter', de: 'tragen → Transport, Porto', ru: 'нести → транспорт, портфель' } },
            { la: 'dūcere', back: { en: 'to lead → conduct, aqueduct', de: 'führen → Produkt, Aquädukt', ru: 'вести → продукт, акведук' } },
            { la: 'scrībere', back: { en: 'to write → script, describe', de: 'schreiben → Skript, Inschrift', ru: 'писать → скрипт, манускрипт' } },
            { la: 'specere', back: { en: 'to look → inspect, spectator', de: 'schauen → Respekt, Spektakel', ru: 'смотреть → инспектор, спектакль' } },
            { la: 'currere', back: { en: 'to run → current, course', de: 'laufen → Kurs, Konkurrenz', ru: 'бежать → курс, курьер' } },
            { la: 'ferre', back: { en: 'to bring, bear → transfer, offer', de: 'bringen, tragen → Transfer, Konferenz', ru: 'нести, приносить → трансфер, конференция' } },
            { la: 'mittere', back: { en: 'to send → mission, emit', de: 'schicken → Mission, Emission', ru: 'посылать → миссия, эмиссия' } },
            { la: 'cēdere', back: { en: 'to go, yield → proceed, exceed', de: 'gehen, weichen → Prozess, Rezession', ru: 'идти, уступать → процесс, рецессия' } },
            { la: 'struere', back: { en: 'to pile up, build → structure', de: 'schichten, bauen → Struktur, Konstruktion', ru: 'складывать, строить → структура, конструкция' } },
            { la: 'manus', back: { en: 'hand → manual, manuscript', de: 'Hand → manuell, Manuskript', ru: 'рука → мануал, маникюр' } },
            { la: 'pēs, pedis', back: { en: 'foot → pedal, pedestrian', de: 'Fuß → Pedal, Pediküre', ru: 'нога, стопа → педаль, педикюр' } },
            { la: 'aqua', back: { en: 'water → aquarium, aqueduct', de: 'Wasser → Aquarium, Aquädukt', ru: 'вода → аквариум, акварель' } },
            { la: 'caput, capitis', back: { en: 'head → capital, chapter', de: 'Kopf → Kapital, Kapitel', ru: 'голова → капитал, капитан' } },
            { la: 'tēgula', back: { en: 'roof tile → tile; DE Ziegel', de: 'Dachziegel → Ziegel', ru: 'черепица → нем. Ziegel, англ. tile' } },
            { la: 'monēta', back: { en: 'coin, mint → money; DE Münze', de: 'Münze, Prägestätte → Münze', ru: 'монета, монетный двор → монета, нем. Münze' } },
          ],
        },
        {
          kind: 'match',
          id: 'l4-match-prefix',
          prompt: { en: 'Match the assimilated prefix to its original form', de: 'Ordne das angeglichene Präfix seiner Grundform zu', ru: 'Сопоставьте ассимилированную приставку с исходной формой' },
          pairs: [
            { left: 'af- (afferō)', right: 'ad-' },
            { left: 'com- (committere)', right: 'con-' },
            { left: 'im- (importāre)', right: 'in-' },
            { left: 'sup- (supportāre)', right: 'sub-' },
            { left: 'ē- (ēmittere)', right: 'ex-' },
            { left: 'trā- (trādere)', right: 'trāns-' },
          ],
        },
        {
          kind: 'text',
          body: {
            en: '**Homework:** finish the 30-root table in your own words — add roots you meet this week. Format: Latin | IT/ES/FR | DE | EN | RU.',
            de: '**Hausaufgabe:** Vervollständige die 30-Wurzel-Tabelle in eigenen Worten — füge Wurzeln hinzu, die dir diese Woche begegnen. Format: Latein | IT/ES/FR | DE | EN | RU.',
            ru: '**Домашнее задание:** доведите таблицу из 30 корней до конца своими словами — добавляйте корни, которые встретятся на этой неделе. Формат: латынь | IT/ES/FR | DE | EN | RU.',
          },
        },
        {
          kind: 'notepad',
          id: 'l4-root-table',
          prompt: { en: 'My root table (homework)', de: 'Meine Wurzeltabelle (Hausaufgabe)', ru: 'Моя таблица корней (домашнее задание)' },
          placeholder: { en: 'tabula | tavola / tabla / table | Tafel | table | таблица', de: 'tabula | tavola / tabla / table | Tafel | table | таблица', ru: 'tabula | tavola / tabla / table | Tafel | table | таблица' },
        },
      ],
    },
  ],
  materials: [
    { label: 'en.wiktionary.org', url: 'https://en.wiktionary.org', note: { en: '“Etymology” sections — follow the chain back to Latin', de: 'Abschnitte „Etymology“ — der Kette zurück zum Latein folgen', ru: 'разделы «Etymology» — идите по цепочке назад к латыни' } },
    { label: 'de.wiktionary.org', url: 'https://de.wiktionary.org', note: { en: '“Herkunft” sections for German words', de: 'Abschnitte „Herkunft“ für deutsche Wörter', ru: 'разделы «Herkunft» для немецких слов' } },
    { label: 'Nicholas Ostler — Ad Infinitum: A Biography of Latin', note: { en: 'read the introduction', de: 'Einleitung lesen', ru: 'прочитать введение' } },
    { label: 'Hans H. Ørberg — Lingua Latina per se illustrata: Familia Romana', note: { en: 'reread chapter I', de: 'Kapitel I noch einmal lesen', ru: 'перечитать главу I' } },
  ],
  homework: [
    {
      en: 'Finish the 30-root table (Latin | IT/ES/FR | DE | EN | RU) in the notepad above.',
      de: 'Die 30-Wurzel-Tabelle (Latein | IT/ES/FR | DE | EN | RU) im Notizfeld oben vervollständigen.',
      ru: 'Заполнить таблицу из 30 корней (латынь | IT/ES/FR | DE | EN | RU) в блокноте выше.',
    },
    {
      en: 'Anki: start the Dickinson College Core Vocabulary (DCC), words 50–100.',
      de: 'Anki: mit dem Dickinson College Core Vocabulary (DCC) beginnen, Wörter 50–100.',
      ru: 'Anki: начать базовый словарь Dickinson College (DCC), слова 50–100.',
    },
  ],
  doneWhen: [
    {
      en: 'Given an unknown word like “circumspect” or “Konkurrenz”, I can split it into prefix + root and guess the meaning.',
      de: 'Bei einem unbekannten Wort wie „circumspect“ oder „Konkurrenz“ kann ich es in Präfix + Wurzel zerlegen und die Bedeutung erraten.',
      ru: 'Встретив незнакомое слово вроде «circumspect» или «Konkurrenz», могу разложить его на приставку + корень и угадать значение.',
    },
    {
      en: 'I can explain assimilation with examples (ad + ferō → afferō, sub + portāre → supportāre).',
      de: 'Ich kann Assimilation mit Beispielen erklären (ad + ferō → afferō, sub + portāre → supportāre).',
      ru: 'Могу объяснить ассимиляцию на примерах (ad + ferō → afferō, sub + portāre → supportāre).',
    },
  ],
};

export default l04;
