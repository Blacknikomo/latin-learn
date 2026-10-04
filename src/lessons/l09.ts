import type { Lesson } from '../types';

const l09: Lesson = {
  id: 9,
  date: '2026-10-30',
  title: {
    en: 'Review + read a real text',
    de: 'Wiederholung + einen echten Text lesen',
    ru: 'Повторение + чтение настоящего текста',
  },
  goal: {
    en: 'Test the course goal on unseen text and make an informed decision about continuing.',
    de: 'Das Kursziel an einem unbekannten Text überprüfen und eine fundierte Entscheidung über das Weitermachen treffen.',
    ru: 'Проверить цель курса на незнакомом тексте и принять взвешенное решение, продолжать ли занятия.',
  },
  sections: [
    {
      minutes: 25,
      title: { en: 'Cold read: the Nicene Creed', de: 'Kaltlesen: das Nizänische Glaubensbekenntnis', ru: 'Чтение с листа: Никейский Символ веры' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'No dictionary, no notes. Pick **one** text: *Familia Romana* cap. II–III, or the opening of the **Credo** below (the Nicene Creed as sung in every Latin Mass).\n\nFor the Credo:\n- Read each line aloud first (ecclesiastical pronunciation).\n- Try to translate it in your head **before** touching anything.\n- Only then tap single words you could not get — each tap is a small “defeat”, so count them.\n- Finally open the translation of the line and check.',
            de: 'Kein Wörterbuch, keine Notizen. Wähle **einen** Text: *Familia Romana* cap. II–III oder den Anfang des **Credo** unten (das Nizänische Glaubensbekenntnis, wie es in jeder lateinischen Messe gesungen wird).\n\nFür das Credo:\n- Lies jede Zeile zuerst laut (kirchliche Aussprache).\n- Versuche sie im Kopf zu übersetzen, **bevor** du irgendetwas antippst.\n- Erst dann einzelne Wörter antippen, die du nicht verstanden hast — jeder Tipp ist eine kleine „Niederlage“, also zähle mit.\n- Zum Schluss die Übersetzung der Zeile aufdecken und vergleichen.',
            ru: 'Без словаря и без конспектов. Выберите **один** текст: *Familia Romana*, главы II–III, или начало **Credo** ниже (Никео-Цареградский Символ веры в том виде, в каком его поют на каждой латинской мессе).\n\nДля Credo:\n- Сначала прочитайте строку вслух (церковное произношение).\n- Попробуйте перевести её в уме, **прежде чем** что-то нажимать.\n- Только потом нажимайте на отдельные непонятые слова — каждое нажатие маленькое «поражение», считайте их.\n- В конце откройте перевод строки и сверьтесь.',
          },
        },
        {
          kind: 'interlinear',
          id: 'l9-credo',
          title: { en: 'Credo (opening)', de: 'Credo (Anfang)', ru: 'Credo (начало)' },
          lines: [
            {
              la: 'Credo in unum Deum,',
              tr: { en: 'I believe in one God,', de: 'Ich glaube an den einen Gott,', ru: 'Верую во единого Бога,' },
              words: [
                { w: 'Credo', g: { en: 'I believe (1st sg.)', de: 'ich glaube (1. Sg.)', ru: 'верую (1 л. ед. ч.)' } },
                { w: 'in', g: { en: 'in (+ acc. = into, towards)', de: 'an (+ Akk.)', ru: 'в (+ вин. п.)' } },
                { w: 'unum', g: { en: 'one (acc.)', de: 'einen (Akk.)', ru: 'единого (вин. п.)' } },
                { w: 'Deum', g: { en: 'God (acc.)', de: 'Gott (Akk.)', ru: 'Бога (вин. п.)' } },
              ],
            },
            {
              la: 'Patrem omnipotentem,',
              tr: { en: 'the Father almighty,', de: 'den Vater, den Allmächtigen,', ru: 'Отца Вседержителя,' },
              words: [
                { w: 'Patrem', g: { en: 'Father (acc. of *pater*)', de: 'Vater (Akk. von *pater*)', ru: 'Отца (вин. п. от *pater*)' } },
                { w: 'omnipotentem', g: { en: 'all-powerful (acc.) — *omni-* + *potens*, a present participle!', de: 'allmächtig (Akk.) — *omni-* + *potens*, ein Partizip Präsens!', ru: 'всемогущего (вин. п.) — *omni-* + *potens*, причастие настоящего времени!' } },
              ],
            },
            {
              la: 'factorem caeli et terrae,',
              tr: { en: 'maker of heaven and earth,', de: 'den Schöpfer des Himmels und der Erde,', ru: 'Творца неба и земли,' },
              words: [
                { w: 'factorem', g: { en: 'maker (acc.) — from *facio, factum*', de: 'Schöpfer, Macher (Akk.) — von *facio, factum*', ru: 'творца (вин. п.) — от *facio, factum*' } },
                { w: 'caeli', g: { en: 'of heaven (gen.)', de: 'des Himmels (Gen.)', ru: 'неба (род. п.)' } },
                { w: 'et', g: { en: 'and', de: 'und', ru: 'и' } },
                { w: 'terrae', g: { en: 'of earth (gen.)', de: 'der Erde (Gen.)', ru: 'земли (род. п.)' } },
              ],
            },
            {
              la: 'visibilium omnium et invisibilium.',
              tr: { en: 'of all things visible and invisible.', de: 'aller sichtbaren und unsichtbaren Dinge.', ru: 'всего видимого и невидимого.' },
              words: [
                { w: 'visibilium', g: { en: 'of visible (things) (gen. pl.) — *video*', de: 'der sichtbaren (Dinge) (Gen. Pl.) — *video*', ru: 'видимых (род. п. мн. ч.) — *video*' } },
                { w: 'omnium', g: { en: 'of all (gen. pl.)', de: 'aller (Gen. Pl.)', ru: 'всех (род. п. мн. ч.)' } },
                { w: 'et', g: { en: 'and', de: 'und', ru: 'и' } },
                { w: 'invisibilium', g: { en: 'of invisible (things) (gen. pl.)', de: 'der unsichtbaren (Dinge) (Gen. Pl.)', ru: 'невидимых (род. п. мн. ч.)' } },
              ],
              note: { en: 'Still the genitive after *factorem*: “maker … of all things”.', de: 'Immer noch Genitiv nach *factorem*: „Schöpfer … aller Dinge“.', ru: 'Это всё ещё родительный падеж после *factorem*: «Творца … всего».' },
            },
            {
              la: 'Et in unum Dominum Iesum Christum,',
              tr: { en: 'And in one Lord Jesus Christ,', de: 'Und an den einen Herrn Jesus Christus,', ru: 'И во единого Господа Иисуса Христа,' },
              words: [
                { w: 'Et', g: { en: 'and', de: 'und', ru: 'и' } },
                { w: 'in', g: { en: 'in (+ acc.)', de: 'an (+ Akk.)', ru: 'в (+ вин. п.)' } },
                { w: 'unum', g: { en: 'one (acc.)', de: 'einen (Akk.)', ru: 'единого (вин. п.)' } },
                { w: 'Dominum', g: { en: 'Lord (acc.)', de: 'Herrn (Akk.)', ru: 'Господа (вин. п.)' } },
                { w: 'Iesum', g: { en: 'Jesus (acc.)', de: 'Jesus (Akk.)', ru: 'Иисуса (вин. п.)' } },
                { w: 'Christum', g: { en: 'Christ (acc.)', de: 'Christus (Akk.)', ru: 'Христа (вин. п.)' } },
              ],
              note: { en: '*Credo* governs the whole text: everything believed in stays in the accusative.', de: '*Credo* regiert den ganzen Text: Alles, woran geglaubt wird, steht im Akkusativ.', ru: '*Credo* управляет всем текстом: всё, во что веруют, стоит в винительном падеже.' },
            },
            {
              la: 'Filium Dei unigenitum,',
              tr: { en: 'the only-begotten Son of God,', de: 'Gottes eingeborenen Sohn,', ru: 'Единородного Сына Божия,' },
              words: [
                { w: 'Filium', g: { en: 'Son (acc.)', de: 'Sohn (Akk.)', ru: 'Сына (вин. п.)' } },
                { w: 'Dei', g: { en: 'of God (gen.)', de: 'Gottes (Gen.)', ru: 'Божия (род. п.)' } },
                { w: 'unigenitum', g: { en: 'only-begotten (acc.) — *uni-* + *genitus*, a perfect passive participle', de: 'eingeboren (Akk.) — *uni-* + *genitus*, ein PPP', ru: 'единородного (вин. п.) — *uni-* + *genitus*, страд. причастие прош. вр.' } },
              ],
            },
            {
              la: 'et ex Patre natum ante omnia saecula.',
              tr: { en: 'born of the Father before all ages.', de: 'aus dem Vater geboren vor aller Zeit.', ru: 'рождённого от Отца прежде всех веков.' },
              words: [
                { w: 'et', g: { en: 'and', de: 'und', ru: 'и' } },
                { w: 'ex', g: { en: 'out of, from (+ abl.)', de: 'aus (+ Abl.)', ru: 'из, от (+ абл.)' } },
                { w: 'Patre', g: { en: 'the Father (abl.)', de: 'dem Vater (Abl.)', ru: 'Отца (абл.)' } },
                { w: 'natum', g: { en: 'born (participle, acc.)', de: 'geboren (Partizip, Akk.)', ru: 'рождённого (причастие, вин. п.)' } },
                { w: 'ante', g: { en: 'before (+ acc.)', de: 'vor (+ Akk.)', ru: 'прежде, до (+ вин. п.)' } },
                { w: 'omnia', g: { en: 'all (acc. pl. n.)', de: 'alle (Akk. Pl. n.)', ru: 'всех (вин. п. мн. ч. ср. р.)' } },
                { w: 'saecula', g: { en: 'ages (acc. pl.)', de: 'Zeitalter (Akk. Pl.)', ru: 'веков (вин. п. мн. ч.)' } },
              ],
            },
            {
              la: 'Deum de Deo, lumen de lumine, Deum verum de Deo vero,',
              tr: { en: 'God from God, Light from Light, true God from true God,', de: 'Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott,', ru: 'Бога от Бога, Свет от Света, Бога истинного от Бога истинного,' },
              words: [
                { w: 'Deum', g: { en: 'God (acc.)', de: 'Gott (Akk.)', ru: 'Бога (вин. п.)' } },
                { w: 'de', g: { en: 'from (+ abl.)', de: 'von (+ Abl.)', ru: 'от (+ абл.)' } },
                { w: 'Deo', g: { en: 'God (abl.)', de: 'Gott (Abl.)', ru: 'Бога (абл.)' } },
                { w: 'lumen', g: { en: 'light (acc., neuter = nom.)', de: 'Licht (Akk., Neutrum = Nom.)', ru: 'свет (вин. п.; ср. р. = им. п.)' } },
                { w: 'de', g: { en: 'from', de: 'von', ru: 'от' } },
                { w: 'lumine', g: { en: 'light (abl.)', de: 'Licht (Abl.)', ru: 'света (абл.)' } },
                { w: 'Deum', g: { en: 'God (acc.)', de: 'Gott (Akk.)', ru: 'Бога (вин. п.)' } },
                { w: 'verum', g: { en: 'true (acc.)', de: 'wahren (Akk.)', ru: 'истинного (вин. п.)' } },
                { w: 'de', g: { en: 'from', de: 'von', ru: 'от' } },
                { w: 'Deo', g: { en: 'God (abl.)', de: 'Gott (Abl.)', ru: 'Бога (абл.)' } },
                { w: 'vero', g: { en: 'true (abl.)', de: 'wahren (Abl.)', ru: 'истинного (абл.)' } },
              ],
            },
            {
              la: 'genitum, non factum, consubstantialem Patri:',
              tr: { en: 'begotten, not made, consubstantial with the Father:', de: 'gezeugt, nicht geschaffen, eines Wesens mit dem Vater:', ru: 'рождённого, не сотворённого, единосущного Отцу:' },
              words: [
                { w: 'genitum', g: { en: 'begotten (perfect passive participle of *gigno*)', de: 'gezeugt (PPP von *gigno*)', ru: 'рождённого (страд. причастие от *gigno*)' } },
                { w: 'non', g: { en: 'not', de: 'nicht', ru: 'не' } },
                { w: 'factum', g: { en: 'made (perfect passive participle of *facio*)', de: 'gemacht, geschaffen (PPP von *facio*)', ru: 'сотворённого (страд. причастие от *facio*)' } },
                { w: 'consubstantialem', g: { en: 'of the same substance (acc.)', de: 'wesensgleich (Akk.)', ru: 'единосущного (вин. п.)' } },
                { w: 'Patri', g: { en: 'with/to the Father (dat.)', de: 'dem Vater (Dat.)', ru: 'Отцу (дат. п.)' } },
              ],
              note: { en: 'Two participles from session 8 side by side: *genitum* and *factum*.', de: 'Zwei Partizipien aus Einheit 8 nebeneinander: *genitum* und *factum*.', ru: 'Два причастия из 8-го занятия рядом: *genitum* и *factum*.' },
            },
            {
              la: 'per quem omnia facta sunt.',
              tr: { en: 'through whom all things were made.', de: 'durch ihn ist alles geschaffen.', ru: 'через Которого всё сотворено.' },
              words: [
                { w: 'per', g: { en: 'through (+ acc.)', de: 'durch (+ Akk.)', ru: 'через (+ вин. п.)' } },
                { w: 'quem', g: { en: 'whom (acc. of *qui*)', de: 'den, welchen (Akk. von *qui*)', ru: 'которого (вин. п. от *qui*)' } },
                { w: 'omnia', g: { en: 'all things (nom. pl. n.)', de: 'alles (Nom. Pl. n.)', ru: 'всё (им. п. мн. ч. ср. р.)' } },
                { w: 'facta', g: { en: 'made (participle, nom. pl. n.)', de: 'gemacht (Partizip, Nom. Pl. n.)', ru: 'сотворённые (причастие, им. п. мн. ч. ср. р.)' } },
                { w: 'sunt', g: { en: 'are — *facta sunt* = “have been made”', de: 'sind — *facta sunt* = „sind gemacht worden“', ru: 'суть — *facta sunt* = «были сотворены»' } },
              ],
              note: { en: 'Participle + *sum* = perfect passive, exactly like *alea iacta est*.', de: 'Partizip + *sum* = Perfekt Passiv, genau wie *alea iacta est*.', ru: 'Причастие + *sum* = перфект страдательного залога, ровно как в *alea iacta est*.' },
            },
          ],
        },
        {
          kind: 'callout',
          tone: 'compare',
          title: { en: 'You know this text already', de: 'Du kennst diesen Text schon', ru: 'Вы уже знаете этот текст' },
          body: {
            en: 'The Church Slavonic Creed (*Верую во единаго Бога Отца, Вседержителя…*) is a translation of the same Greek original, so it often follows the Latin word for word: *lumen de lumine* — *Света от Света*, *genitum, non factum* — *рожденна, несотворенна*. The German version is the one sung in Catholic and Lutheran services (*Ich glaube an den einen Gott…*). Use them to check your reading — but only after the cold read.',
            de: 'Das kirchenslawische Credo (*Верую во единаго Бога Отца, Вседержителя…*) übersetzt dasselbe griechische Original und folgt dem Latein deshalb oft Wort für Wort: *lumen de lumine* — *Света от Света*, *genitum, non factum* — *рожденна, несотворенна*. Die deutsche Fassung kennst du aus katholischen und lutherischen Gottesdiensten (*Ich glaube an den einen Gott…*). Nutze beide zum Überprüfen — aber erst nach dem Kaltlesen.',
            ru: 'Церковнославянский Символ веры (*Верую во единаго Бога Отца, Вседержителя…*) переводит тот же греческий оригинал, поэтому часто совпадает с латынью слово в слово: *lumen de lumine* — *Света от Света*, *genitum, non factum* — *рожденна, несотворенна*. Немецкий вариант поют на католических и лютеранских службах (*Ich glaube an den einen Gott…*). Используйте их для проверки — но только после чтения с листа.',
          },
        },
        {
          kind: 'notepad',
          id: 'l9-coldread',
          prompt: { en: 'Mark each word: understood / guessed / unknown', de: 'Markiere jedes Wort: verstanden / geraten / unbekannt', ru: 'Отметьте каждое слово: понял / угадал / не знаю' },
          placeholder: {
            en: 'Text chosen: Credo / Familia Romana II–III\nUnderstood: credo, unum, Deum, …\nGuessed: …\nUnknown: …\nTotals: __ / __ / __',
            de: 'Gewählter Text: Credo / Familia Romana II–III\nVerstanden: credo, unum, Deum, …\nGeraten: …\nUnbekannt: …\nSumme: __ / __ / __',
            ru: 'Выбранный текст: Credo / Familia Romana II–III\nПонял: credo, unum, Deum, …\nУгадал: …\nНе знаю: …\nИтого: __ / __ / __',
          },
        },
      ],
    },
    {
      minutes: 15,
      title: { en: 'Self-check against the course goal', de: 'Selbstcheck am Kursziel', ru: 'Самопроверка по цели курса' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'First a short mixed test across all sessions — it gives you an honest baseline. Then rate yourself on the five course goals. Be strict: 3 means “works, but slowly and with help”.',
            de: 'Zuerst ein kurzer gemischter Test über alle Einheiten — er liefert eine ehrliche Ausgangsbasis. Dann bewertest du dich bei den fünf Kurszielen. Sei streng: 3 heißt „klappt, aber langsam und mit Hilfe“.',
            ru: 'Сначала короткий смешанный тест по всем занятиям — он даёт честную точку отсчёта. Затем оцените себя по пяти целям курса. Будьте строги: 3 означает «получается, но медленно и с подсказками».',
          },
        },
        {
          kind: 'quiz',
          id: 'l9-final',
          title: { en: 'Final review: the whole course', de: 'Abschlusstest: der ganze Kurs', ru: 'Итоговый тест: весь курс' },
          questions: [
            {
              prompt: { en: 'Which case is *Deum* in *Credo in unum Deum*?', de: 'In welchem Kasus steht *Deum* in *Credo in unum Deum*?', ru: 'В каком падеже *Deum* в *Credo in unum Deum*?' },
              options: [{ en: 'nominative', de: 'Nominativ', ru: 'именительный' }, { en: 'accusative', de: 'Akkusativ', ru: 'винительный' }, { en: 'ablative', de: 'Ablativ', ru: 'аблатив' }],
              answer: 1,
              explain: { en: '*in* + acc. = believing *into* someone; nominative would be [[Deus]].', de: '*in* + Akk. = Glauben *an* jemanden; Nominativ wäre [[Deus]].', ru: '*in* + вин. п. = вера *во* кого-то; именительный был бы [[Deus]].' },
            },
            {
              prompt: { en: 'In *Pater noster, qui es in caelis*, *caelis* is…', de: 'In *Pater noster, qui es in caelis* ist *caelis*…', ru: 'В *Pater noster, qui es in caelis* слово *caelis* —…' },
              options: [{ en: 'ablative plural — “in the heavens”', de: 'Ablativ Plural — „in den Himmeln“', ru: 'аблатив мн. ч. — «на небесах»' }, { en: 'genitive singular — “of heaven”', de: 'Genitiv Singular — „des Himmels“', ru: 'родительный ед. ч. — «неба»' }, { en: 'accusative plural', de: 'Akkusativ Plural', ru: 'винительный мн. ч.' }],
              answer: 0,
              explain: { en: '*in* + abl. = location (where?); *in* + acc. = direction (where to?).', de: '*in* + Abl. = Ort (wo?); *in* + Akk. = Richtung (wohin?). Genau wie im Deutschen.', ru: '*in* + абл. = место (где?); *in* + вин. п. = направление (куда?). Как «в небе» и «в небо».' },
            },
            {
              prompt: { en: 'In *Ave Maria, gratia plena*, why does *gratia* end in -a?', de: 'Warum endet in *Ave Maria, gratia plena* das Wort *gratia* auf -a?', ru: 'Почему в *Ave Maria, gratia plena* слово *gratia* оканчивается на -a?' },
              options: [{ en: 'It is the subject (nom.)', de: 'Es ist Subjekt (Nom.)', ru: 'Это подлежащее (им. п.)' }, { en: 'It is ablative [[grātiā]]: “full *with* grace”', de: 'Es ist Ablativ [[grātiā]]: „voll *an* Gnade“', ru: 'Это аблатив [[grātiā]]: «полная благодатью»' }, { en: 'It is vocative', de: 'Es ist Vokativ', ru: 'Это звательный падеж' }],
              answer: 1,
              explain: { en: '[[plēnus]] takes the ablative (or genitive). Without macrons, *gratia* and [[grātiā]] look identical.', de: '[[plēnus]] steht mit Ablativ (oder Genitiv). Ohne Makrons sehen *gratia* und [[grātiā]] gleich aus.', ru: '[[plēnus]] управляет аблативом (или родительным). Без макронов *gratia* и [[grātiā]] выглядят одинаково.' },
            },
            {
              prompt: { en: 'In *Agnus Dei, qui tollis peccata mundi*, *mundi* means…', de: 'In *Agnus Dei, qui tollis peccata mundi* bedeutet *mundi*…', ru: 'В *Agnus Dei, qui tollis peccata mundi* слово *mundi* значит…' },
              options: [{ en: 'the world (subject)', de: 'die Welt (Subjekt)', ru: 'мир (подлежащее)' }, { en: 'of the world', de: 'der Welt', ru: 'мира' }, { en: 'to the world', de: 'der Welt (Dativ)', ru: 'миру' }],
              answer: 1,
              explain: { en: 'Genitive: “who takest away the sins **of the world**”.', de: 'Genitiv: „der du hinwegnimmst die Sünden **der Welt**“.', ru: 'Родительный: «взявший грехи **мира**».' },
            },
            {
              prompt: { en: 'What does *amant* mean?', de: 'Was bedeutet *amant*?', ru: 'Что значит *amant*?' },
              options: [{ en: 'they love', de: 'sie lieben', ru: 'они любят' }, { en: 'they loved', de: 'sie liebten', ru: 'они любили' }, { en: 'loving (participle)', de: 'liebend (Partizip)', ru: 'любящий (причастие)' }],
              answer: 0,
              explain: { en: 'Present 3rd pl. **-nt**. Perfect would be [[amāvērunt]], participle [[amāns]].', de: 'Präsens 3. Pl. **-nt**. Perfekt wäre [[amāvērunt]], Partizip [[amāns]].', ru: 'Настоящее время 3 л. мн. ч. **-nt**. Перфект — [[amāvērunt]], причастие — [[amāns]].' },
            },
            {
              prompt: { en: 'What does *vīcērunt* mean?', de: 'Was bedeutet *vīcērunt*?', ru: 'Что значит *vīcērunt*?' },
              options: [{ en: 'they see', de: 'sie sehen', ru: 'они видят' }, { en: 'they conquered', de: 'sie siegten', ru: 'они победили' }, { en: 'they came', de: 'sie kamen', ru: 'они пришли' }],
              answer: 1,
              explain: { en: 'Perfect stem [[vīc-]] (from [[vincō]]) + **-ērunt**.', de: 'Perfektstamm [[vīc-]] (von [[vincō]]) + **-ērunt**.', ru: 'Основа перфекта [[vīc-]] (от [[vincō]]) + **-ērunt**.' },
            },
            {
              prompt: { en: 'German *Manuskript* is built from…', de: 'Das deutsche *Manuskript* besteht aus…', ru: 'Слово *манускрипт* состоит из…' },
              options: [{ en: '[[manus]] “hand” + [[scrīptum]] “written”', de: '[[manus]] „Hand“ + [[scrīptum]] „geschrieben“', ru: '[[manus]] «рука» + [[scrīptum]] «написанное»' }, { en: '[[magnus]] “great” + [[scrībō]] “write”', de: '[[magnus]] „groß“ + [[scrībō]] „schreiben“', ru: '[[magnus]] «великий» + [[scrībō]] «писать»' }, { en: '[[mēns]] “mind” + [[scrīptum]]', de: '[[mēns]] „Geist“ + [[scrīptum]]', ru: '[[mēns]] «ум» + [[scrīptum]]' }],
              answer: 0,
              explain: { en: '“Written by hand” — before printing, every book was one.', de: '„Mit der Hand geschrieben“ — vor dem Buchdruck war das jedes Buch.', ru: '«Написанное рукой» — до книгопечатания таковой была любая книга.' },
            },
            {
              prompt: { en: 'In the Credo, *genitum, non factum* — *factum* is…', de: 'Im Credo, *genitum, non factum* — *factum* ist…', ru: 'В Credo *genitum, non factum* — *factum* это…' },
              options: [{ en: 'a perfect passive participle: “made”', de: 'ein PPP: „gemacht“', ru: 'страдательное причастие прош. вр.: «сотворённый»' }, { en: 'a noun: “a fact”', de: 'ein Substantiv: „Tatsache“', ru: 'существительное: «факт»' }, { en: 'a perfect active verb: “he made”', de: 'ein Perfekt Aktiv: „er machte“', ru: 'перфект действ. залога: «он сделал»' }],
              answer: 0,
              explain: { en: 'Same form, but here it agrees with the Son (acc. masc.). *Fact* is the same participle turned into a noun: “a thing done”.', de: 'Gleiche Form, hier aber auf den Sohn bezogen (Akk. mask.). *Fakt* ist dasselbe Partizip als Substantiv: „Getanes“.', ru: 'Та же форма, но здесь согласована с «Сыном» (вин. п. м. р.). *Факт* — то же причастие, ставшее существительным: «сделанное».' },
            },
            {
              prompt: { en: '*Dozent* comes from [[docēns, docentis]]. What kind of form is that?', de: '*Dozent* kommt von [[docēns, docentis]]. Was für eine Form ist das?', ru: '*Доцент* происходит от [[docēns, docentis]]. Что это за форма?' },
              options: [{ en: 'present active participle: “teaching”', de: 'Partizip Präsens Aktiv: „lehrend“', ru: 'действит. причастие наст. вр.: «обучающий»' }, { en: 'gerundive: “to be taught”', de: 'Gerundivum: „zu lehren“', ru: 'герундив: «подлежащий обучению»' }, { en: 'perfect: “he taught”', de: 'Perfekt: „er lehrte“', ru: 'перфект: «он научил»' }],
              answer: 0,
            },
            {
              prompt: { en: 'Which pronunciation fits a sung Mass by Mozart?', de: 'Welche Aussprache passt zu einer gesungenen Messe von Mozart?', ru: 'Какое произношение подходит к мессе Моцарта?' },
              la: 'Agnus Dei',
              options: [{ en: 'ecclesiastical: *Á-nyus Dé-i*', de: 'kirchlich: *Á-njus Dé-i*', ru: 'церковное: *А́-ньюс Дэ́-и*' }, { en: 'classical: *Ág-nus Dé-ī*', de: 'klassisch: *Ág-nus Dé-ī*', ru: 'классическое: *А́г-нус Дэ́-ӣ*' }],
              answer: 0,
              explain: { en: 'In Italianate church Latin *gn* sounds like Italian *gn* (*ny*).', de: 'Im italienisch geprägten Kirchenlatein klingt *gn* wie im Italienischen (*nj*).', ru: 'В итальянизированной церковной латыни *gn* звучит как итальянское *gn* (*нь*).' },
            },
          ],
        },
        {
          kind: 'rating',
          id: 'l9-selfcheck',
          prompt: { en: 'Rate each course goal from 1 (not at all) to 5 (confidently)', de: 'Bewerte jedes Kursziel von 1 (gar nicht) bis 5 (sicher)', ru: 'Оцените каждую цель курса от 1 (совсем нет) до 5 (уверенно)' },
          items: [
            { en: 'I can read any Latin text aloud correctly — classical and church pronunciation.', de: 'Ich kann jeden lateinischen Text korrekt vorlesen — klassisch und kirchlich.', ru: 'Могу правильно прочитать вслух любой латинский текст — в классическом и церковном произношении.' },
            { en: 'I get the gist of a motto or quote and can identify the cases.', de: 'Ich erfasse den Sinn eines Mottos oder Zitats und kann die Kasus bestimmen.', ru: 'Понимаю общий смысл девиза или цитаты и могу определить падежи.' },
            { en: 'I can follow a Latin church text or a sung Mass with understanding.', de: 'Ich kann einem lateinischen Kirchentext oder einer gesungenen Messe verstehend folgen.', ru: 'Могу с пониманием следить за латинским церковным текстом или исполнением мессы.' },
            { en: 'I can trace a German, English or Russian word to its Latin root.', de: 'Ich kann ein deutsches, englisches oder russisches Wort auf seine lateinische Wurzel zurückführen.', ru: 'Могу проследить немецкое, английское или русское слово до латинского корня.' },
            { en: 'Anki: my mature DCC words (1 = under 50 … 5 = over 250).', de: 'Anki: meine „reifen“ DCC-Wörter (1 = unter 50 … 5 = über 250).', ru: 'Anki: число «зрелых» слов DCC (1 — меньше 50 … 5 — больше 250).' },
          ],
        },
        {
          kind: 'notepad',
          id: 'l9-selfcheck-notes',
          prompt: { en: 'Notes: exact Anki numbers, weakest area, surprises', de: 'Notizen: genaue Anki-Zahlen, schwächster Bereich, Überraschungen', ru: 'Заметки: точные цифры Anki, самое слабое место, сюрпризы' },
          placeholder: { en: 'Mature cards: … / Young: … / Weakest: …', de: 'Reife Karten: … / Junge: … / Schwächstes: …', ru: 'Зрелых карточек: … / Молодых: … / Слабее всего: …' },
        },
      ],
    },
    {
      minutes: 15,
      title: { en: 'Decide the next step', de: 'Den nächsten Schritt entscheiden', ru: 'Подведение итогов: стоит ли продолжать' },
      blocks: [
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'How to decide', de: 'Wie entscheiden', ru: 'Как решить' },
          body: {
            en: '- Look at your cold-read totals and ratings, not at your mood today.\n- Ask what you actually **enjoyed**: the stories (→ B), the system (→ C), the music and liturgy (→ D), or the course goal is simply met (→ A).\n- Any option is a success. Stopping with a clear maintenance plan beats drifting.',
            de: '- Schau auf deine Kaltlese-Zahlen und Bewertungen, nicht auf deine heutige Stimmung.\n- Frag dich, was dir wirklich **Spaß** gemacht hat: die Geschichten (→ B), das System (→ C), Musik und Liturgie (→ D), oder das Kursziel ist einfach erreicht (→ A).\n- Jede Option ist ein Erfolg. Mit klarem Erhaltungsplan aufzuhören ist besser als zu versanden.',
            ru: '- Смотрите на итоги чтения с листа и оценки, а не на сегодняшнее настроение.\n- Спросите себя, что вам действительно **понравилось**: истории (→ B), система (→ C), музыка и литургия (→ D) — или цель курса просто достигнута (→ A).\n- Любой вариант — успех. Остановиться с чётким планом поддержки лучше, чем потихоньку забросить.',
          },
        },
        {
          kind: 'choice',
          id: 'l9-decision',
          prompt: { en: 'My decision', de: 'Meine Entscheidung', ru: 'Моё решение' },
          options: [
            {
              title: { en: 'A — Stop here', de: 'A — Hier aufhören', ru: 'A — Остановиться здесь' },
              body: { en: 'Keep Anki on light maintenance, enjoy texts and music. The course goal is reached.', de: 'Anki auf leichter Erhaltungsstufe weiterführen, Texte und Musik genießen. Das Kursziel ist erreicht.', ru: 'Поддерживать Anki в лёгком режиме, наслаждаться текстами и музыкой. Цель курса достигнута.' },
            },
            {
              title: { en: 'B — Reading track', de: 'B — Lese-Track', ru: 'B — Читательский трек' },
              body: { en: '*Familia Romana*, 1 chapter per week. 35 chapters ≈ 8–9 months to reading real classical texts.', de: '*Familia Romana*, 1 Kapitel pro Woche. 35 Kapitel ≈ 8–9 Monate bis zu echten klassischen Texten.', ru: '*Familia Romana*, 1 глава в неделю. 35 глав ≈ 8–9 месяцев до чтения настоящих классических текстов.' },
            },
            {
              title: { en: 'C — Structured grammar track', de: 'C — Strukturierter Grammatik-Track', ru: 'C — Систематическая грамматика' },
              body: { en: '*Wheelock’s Latin*, 1 chapter per week, plus *Familia Romana* for reading.', de: '*Wheelock’s Latin*, 1 Kapitel pro Woche, dazu *Familia Romana* zum Lesen.', ru: '*Wheelock’s Latin*, 1 глава в неделю, плюс *Familia Romana* для чтения.' },
            },
            {
              title: { en: 'D — Church Latin track', de: 'D — Kirchenlatein-Track', ru: 'D — Церковная латынь' },
              body: { en: 'Collins’ *A Primer of Ecclesiastical Latin*, chapter by chapter.', de: 'Collins’ *A Primer of Ecclesiastical Latin*, Kapitel für Kapitel.', ru: '*A Primer of Ecclesiastical Latin* Коллинза, глава за главой.' },
            },
          ],
        },
        {
          kind: 'notepad',
          id: 'l9-decision-why',
          prompt: { en: 'Why I chose this', de: 'Warum ich das gewählt habe', ru: 'Почему я так решил' },
          placeholder: { en: 'Evidence from today + what I want from Latin in 6 months', de: 'Belege von heute + was ich in 6 Monaten von Latein will', ru: 'Факты сегодняшнего занятия + чего я хочу от латыни через полгода' },
        },
      ],
    },
    {
      minutes: 5,
      title: { en: 'If continuing: plan the next 4 sessions', de: 'Falls es weitergeht: die nächsten 4 Einheiten planen', ru: 'Если продолжаем: спланировать следующие 4 занятия' },
      blocks: [
        {
          kind: 'text',
          body: {
            en: 'Put the next **4 weekly sessions** into Google Calendar now, while motivation is high: same weekday and time, 60 minutes each, with the chapter for each session in the title. If you chose A, schedule instead a monthly 15-minute “Anki + one text” slot.',
            de: 'Trage die nächsten **4 wöchentlichen Einheiten** jetzt in den Google Kalender ein, solange die Motivation hoch ist: gleicher Wochentag und gleiche Uhrzeit, je 60 Minuten, mit dem Kapitel der Einheit im Titel. Bei Option A stattdessen einen monatlichen 15-Minuten-Termin „Anki + ein Text“ anlegen.',
            ru: 'Внесите следующие **4 еженедельных занятия** в Google Календарь прямо сейчас, пока мотивация высока: тот же день недели и время, по 60 минут, с номером главы в названии. Если выбран вариант A — вместо этого ежемесячный 15-минутный слот «Anki + один текст».',
          },
        },
        {
          kind: 'notepad',
          id: 'l9-plan',
          prompt: { en: 'Next sessions', de: 'Nächste Einheiten', ru: 'Следующие занятия' },
          placeholder: { en: 'Session 10 — date — chapter …\nSession 11 — …\nSession 12 — …\nSession 13 — …', de: 'Einheit 10 — Datum — Kapitel …\nEinheit 11 — …\nEinheit 12 — …\nEinheit 13 — …', ru: 'Занятие 10 — дата — глава …\nЗанятие 11 — …\nЗанятие 12 — …\nЗанятие 13 — …' },
        },
      ],
    },
    {
      minutes: 0,
      title: { en: 'Practice: the whole course in 20 words', de: 'Übung: der ganze Kurs in 20 Wörtern', ru: 'Практика: весь курс в 20 словах' },
      blocks: [
        {
          kind: 'flashcards',
          id: 'l9-cards',
          title: { en: 'Cumulative key words', de: 'Kernwörter des Kurses', ru: 'Ключевые слова курса' },
          cards: [
            { la: 'Deus', back: { en: 'God', de: 'Gott', ru: 'Бог' } },
            { la: 'pater, patris', back: { en: 'father', de: 'Vater', ru: 'отец' } },
            { la: 'fīlius', back: { en: 'son', de: 'Sohn', ru: 'сын' } },
            { la: 'dominus', back: { en: 'lord, master', de: 'Herr', ru: 'господин, Господь' } },
            { la: 'caelum', back: { en: 'sky, heaven', de: 'Himmel', ru: 'небо' } },
            { la: 'terra', back: { en: 'earth, land', de: 'Erde, Land', ru: 'земля' } },
            { la: 'lūmen, lūminis', back: { en: 'light', de: 'Licht', ru: 'свет' } },
            { la: 'mundus', back: { en: 'world', de: 'Welt', ru: 'мир' } },
            { la: 'grātia', back: { en: 'grace, favour, thanks', de: 'Gnade, Gunst, Dank', ru: 'благодать, милость, благодарность' } },
            { la: 'plēnus', back: { en: 'full (of)', de: 'voll', ru: 'полный' } },
            { la: 'peccātum', back: { en: 'sin', de: 'Sünde', ru: 'грех' } },
            { la: 'diēs', back: { en: 'day', de: 'Tag', ru: 'день' } },
            { la: 'vīta', back: { en: 'life', de: 'Leben', ru: 'жизнь' } },
            { la: 'verbum', back: { en: 'word', de: 'Wort', ru: 'слово' } },
            { la: 'crēdō', back: { en: 'I believe, trust', de: 'ich glaube, vertraue', ru: 'верю, верую' } },
            { la: 'amō, amāvī, amātum', back: { en: 'love', de: 'lieben', ru: 'любить' } },
            { la: 'faciō, fēcī, factum', back: { en: 'do, make', de: 'machen, tun', ru: 'делать' } },
            { la: 'videō, vīdī, vīsum', back: { en: 'see', de: 'sehen', ru: 'видеть' } },
            { la: 'veniō, vēnī, ventum', back: { en: 'come', de: 'kommen', ru: 'приходить' } },
            { la: 'sum, esse, fuī', back: { en: 'be', de: 'sein', ru: 'быть' } },
          ],
        },
      ],
    },
  ],
  materials: [
    { label: 'Ørberg — Lingua Latina per se illustrata: Familia Romana', note: { en: 'with the audio recordings; cap. II–III for the cold read', de: 'mit den Audioaufnahmen; cap. II–III fürs Kaltlesen', ru: 'с аудиозаписями; главы II–III для чтения с листа' } },
    { label: 'Credo (Nicene Creed) — CPDL', url: 'https://www.cpdl.org/', note: { en: 'Latin text and scores; any missal works too', de: 'lateinischer Text und Noten; jedes Messbuch geht auch', ru: 'латинский текст и ноты; подойдёт и любой миссал' } },
    { label: 'My notes', note: { en: 'phrase list, root table, Pater Noster / Ave Maria annotations', de: 'Wendungsliste, Wurzeltabelle, Anmerkungen zu Pater Noster / Ave Maria', ru: 'список фраз, таблица корней, разборы Pater Noster / Ave Maria' } },
  ],
  homework: [
    {
      en: 'If continuing: put the next 4 weekly sessions into Google Calendar and open the first chapter of your chosen book. If stopping: set Anki to light maintenance (no new cards, daily reviews only).',
      de: 'Falls es weitergeht: die nächsten 4 wöchentlichen Einheiten in den Google Kalender eintragen und das erste Kapitel des gewählten Buchs aufschlagen. Falls nicht: Anki auf leichte Erhaltung stellen (keine neuen Karten, nur tägliche Wiederholungen).',
      ru: 'Если продолжаем: внести следующие 4 еженедельных занятия в Google Календарь и открыть первую главу выбранной книги. Если останавливаемся: перевести Anki в лёгкий режим (без новых карточек, только ежедневные повторения).',
    },
  ],
  doneWhen: [
    {
      en: 'I have cold-read a real text and marked each word as understood / guessed / unknown.',
      de: 'Ich habe einen echten Text kalt gelesen und jedes Wort als verstanden / geraten / unbekannt markiert.',
      ru: 'Я прочитал настоящий текст с листа и отметил каждое слово: понял / угадал / не знаю.',
    },
    {
      en: 'The self-check is done: all five course goals rated honestly.',
      de: 'Der Selbstcheck ist erledigt: alle fünf Kursziele ehrlich bewertet.',
      ru: 'Самопроверка выполнена: все пять целей курса честно оценены.',
    },
    {
      en: 'I have made a decision (A–D) and, if continuing, the next sessions are in the calendar.',
      de: 'Ich habe eine Entscheidung (A–D) getroffen und, falls es weitergeht, stehen die nächsten Einheiten im Kalender.',
      ru: 'Решение (A–D) принято, и, если продолжаю, следующие занятия уже в календаре.',
    },
  ],
};

export default l09;
