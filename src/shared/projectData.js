import listening from "../assets/images/skills/skills-listening.png";
import grammar from "../assets/images/skills/skills-grammar.png";
import reading from "../assets/images/skills/skills-reading.png";

export const skillsList = [
    {
        id: 1,
        img: grammar,
        title: "Grammar",
        text: "One of the most important and extensive areas of natural science, the science that studies substances, also their composition ",
    },
    {
        id: 2,
        img: reading,
        title: "Reading",
        text: "perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service",
    },
    {
        id: 3,
        img: listening,
        title: "Listening",
        text: "Here you can find activities to practise your listening skills. Listening will help you to improve your understanding ",
    },
];

export const AUDIOS_URL =
    "https://6254687719bc53e2347e0da5.mockapi.io/Listening";

export const READING_URL =
    "https://6254687719bc53e2347e0da5.mockapi.io/Reading";

export const translatedWords = {
    when: "когда",
    an: "вышеуказанный",
    official: "официальный",
    of: "из",
    a: "а",
    government: "правительство",
    or: "или",
    business: "бизнес",
    is: "является",
    acting: "играет роль",
    dishonestly: "нечестно",
    we: "мы",
    say: "сказать",
    that: "тот",
    this: "этот",
    person: "персона",
    corrupt: "коррумпированный",
    corruption: "коррупция",
    serious: "серьезно",
    problem: "проблема",
    in: "в",
    many: "многие",
    countries: "страны",
    around: "вокруг",
    the: "в",
    world: "земля",
    there: "там",
    are: "находятся",
    several: "несколько",
    different: "другой",
    kinds: "виды",
    practices: "практики",
    including: "в том числе",
    bribes: "взятки",
    kickbacks: "откаты",
    nepotism: "кумовство",
    and: "и",
    embezzlement: "растрата",
    bribe: "взятка",
    payment: "оплата",
    money: "деньги",
    some: "некоторый",
    other: "Другие",
    benefit: "преимущества",
    exchange: "обмен",
    for: "для",
    decision: "решение",
    would: "бы",
    not: "не",
    otherwise: "в противном случае",
    be: "быть",
    made: "сделан",
    example: "пример",
    accused: "обвиняемый",
    criminal: "преступник",
    might: "мощь",
    judge: "судить",
    so: "так",
    make: "делать",
    guilty: "виновный",
    another: "другой",
    owner: "владелец",
    allow: "позволять",
    construction: "строительство",
    very: "очень",
    unsafe: "незащищенный",
    buildings: "постройки",
    kickback: "откат",
    similar: "такой же / одинаковый",
    to: "к",
    except: "кроме",
    receives: "получает",
    part: "часть",
    dishonest: "нечестный",
    deal: "по рукам",
    governments: "правительства",
    sometimes: "иногда",
    decide: "принять решение",
    which: "который",
    company: "компания",
    should: "должен",
    build: "строить",
    road: "дорога",
    offer: "сделка",
    who: "кто",
    makes: "делает",
    will: "будем",
    chosen: "выбранный",
    even: "даже",
    if: "если",
    it: "это",
    best: "лучший",
    job: "работа",
};

export const presentSimple = [
    {
        id: 1,
        text: "I .... Spanish with my sister.",
        answer1: "study",
        answer2: "studies",
    },
    {
        id: 2,
        text: "My sister .... a shower every morning.",
        answer1: "take",
        answer2: "takes",
    },
    {
        id: 3,
        text: "This house .... to my grandmother.",
        answer1: "belong",
        answer2: "belongs",
    },
    {
        id: 4,
        text: "We .... to go for a walk in the morning.",
        answer1: "like",
        answer2: "likes",
    },
    {
        id: 5,
        text: "My husband and I .... a lot of money on books.",
        answer1: "spend",
        answer2: "spends",
    },
];

export const rightAnswers = ["study", "takes", "belongs", "like", "spend"];

export const simples = [
    {
        id: 1,
        title: "PRESENT SIMPLE",
        text1: "Present Simple – простое настоящее время в английском языке. Оно выражает действие, которое происходит в настоящем времени или регулярно. Также оно используется для выражения действия без указания определенного времени: - I work at home. - Bakery is a good business. - Jill speaks four languages fluently. - On Sundays, we like to fish.",
        subtitle: "Как образуется Present Simple",
        text2: "Present Simple образуется очень просто: убираем у глагола в инфинитиве частицу to и ставим его на второе место в предложении, после подлежащего. Для третьего лица (“he,” “she,” “it”), добавляем глаголу окончание “—s“, “—es“, если глагол оканчивается на гласную, или “—ies“, если глагол заканчивается на ” y” (to try“, “to cry“, “to bury“)",
        rigthAnswers: ["study", "takes", "belongs", "like", "spend"],
        tasks: [
            {
                id: 1,
                text: "I .... Spanish with my sister.",
                answer1: "study",
                answer2: "studies",
            },
            {
                id: 2,
                text: "My sister .... a shower every morning.",
                answer1: "take",
                answer2: "takes",
            },
            {
                id: 3,
                text: "This house .... to my grandmother.",
                answer1: "belong",
                answer2: "belongs",
            },
            {
                id: 4,
                text: "We .... to go for a walk in the morning.",
                answer1: "like",
                answer2: "likes",
            },
            {
                id: 5,
                text: "My husband and I .... a lot of money on books.",
                answer1: "spend",
                answer2: "spends",
            },
        ],
    },
    {
        id: 2,
        title: "Present Continuous",
        text1: "Present Continuous Tense (Present Progressive Tense) – настоящее длительное время. В речи оно встречается так же часто, как и Present Simple. Главное, что надо знать о Present Continuous, – это время показывает длительность действия в настоящем. Длительность может проявляться по-разному: действие может продолжаться недолго, а может занимать большой промежуток времени. У Present Continuous есть множество функций, поэтому это время занимает важное место в грамматике английского языка.",
        subtitle: "Как образуется Present Continuous Tense",
        text2: "Как и в любом английском предложении, на первом месте будет подлежащее, на втором – сказуемое. Сказуемое в Present Continuous состоит из вспомогательного глагола to be и основного глагола.",
        rigthAnswers: [
            "is cooking",
            "are walking",
            "is snowing",
            "is fixing",
            "am waiting",
        ],
        tasks: [
            {
                id: 1,
                text: "Where is Ann? She .... in the kitchen.",
                answer1: "is cooking",
                answer2: "am cooking",
            },
            {
                id: 2,
                text: "They .... in the park now.",
                answer1: "is walking",
                answer2: "are walking",
            },
            {
                id: 3,
                text: "Look! It .... heavily.",
                answer1: "is snowing",
                answer2: "is snows",
            },
            {
                id: 4,
                text: "It's Tom. He .... his car.",
                answer1: "is fixing",
                answer2: "fixes",
            },
            {
                id: 5,
                text: "I .... for you.",
                answer1: "wait",
                answer2: "am waiting",
            },
        ],
    },
    {
        id: 3,
        title: "Present Perfect",
        text1: "Present Perfect Tense (Present Perfect) — это настоящее совершенное время в английском языке. Оно обозначает действие, которое завершилось в настоящий момент времени. В этом и состоит основная сложность времени Present Perfect для изучающих. В русском языке нет времени аналогичного Present Perfect. Для нас если что-то происходит сейчас — это и есть настоящее, а если совершилось — это уже прошлое. Но не для англичан. Они воспринимают время немного по-другому. По логике носителей языка, действие вполне может закончиться и в настоящем или близко к настоящему моменту. Для выражения такой связи прошлого с настоящим и существует Present Perfect.",
        subtitle: "",
        text2: "",
        rigthAnswers: [
            "has broken",
            "have answered",
            "'ve known",
            "has lost",
            "have been",
        ],
        tasks: [
            {
                id: 1,
                text: "My car .... down.",
                answer1: "has broken",
                answer2: "have broken",
            },
            {
                id: 2,
                text: "They .... all my questions.",
                answer1: "has answerd",
                answer2: "have answered",
            },
            {
                id: 3,
                text: "I .... Nick for 10 years.",
                answer1: "have knowen",
                answer2: "'ve known",
            },
            {
                id: 4,
                text: "She .... her keys.",
                answer1: "has lost",
                answer2: "has drank",
            },
            {
                id: 5,
                text: "The cat .... all of its milk.",
                answer1: "have been",
                answer2: "has been",
            },
        ],
    },
    {
        id: 4,
        title: "Past Simple",
        text1: "Past Simple – простое прошедшее время. Оно используется, если событие произошло в определенное время в прошлом и не продолжается в настоящем. Часто в Past Simple используются такие слова, как ago( 5 days ago – 5 дней назад), last … (last year – в прошлом году), yesterday (вчера), in …( in 1980 – в 1980 году) и т.п. Past Simple указывает на простое действие в прошлом, регулярные или повторявшиеся действия в прошлом или перечисление последовавших действий в прошлом",
        subtitle: "Как образуется Past Simple",
        text2: "Чтобы образовать Past Simple, нужно употребить вторую форму глагола. У большинства глаголов она образуется путем добавления окончания “-ed” к инфинитиву.",
        rigthAnswers: ["came", "finished", "saw", "happened", "was"],
        tasks: [
            {
                id: 1,
                text: "He .... home late last night.",
                answer1: "comed",
                answer2: "came",
            },
            {
                id: 2,
                text: "She .... her work half an hour ago.",
                answer1: "finish",
                answer2: "finished",
            },
            {
                id: 3,
                text: "I .... this film last week.",
                answer1: "saw",
                answer2: "seen",
            },
            {
                id: 4,
                text: "It .... on a sunny spring day.",
                answer1: "happend",
                answer2: "happened",
            },
            {
                id: 5,
                text: "I .... born in August.",
                answer1: "was",
                answer2: "were",
            },
        ],
    },
    {
        id: 5,
        title: "Past Continuous",
        text1: "Past Continuous – прошедшее длительное время. Как следует из названия, оно отвечает за события, которые происходили в прошлом и продолжались какое-то время. Но на этом задачи Past Continuous не заканчиваются, и в этой статье мы познакомимся со всеми его особенностями.",
        subtitle: "Как образуется Past Continuous",
        text2: "Сказуемое в Past Continuous состоит из вспомогательного глагола и основного глагола. Для того чтобы образовать Past Continuous, нам нужны формы прошедшего времени to be – was, were. Was используется в единственном числе, were – во множественном. У основного глагола мы убираем частицу to и добавляем окончание -ing. В отрицательном предложении между вспомогательным глаголом и основным ставится частица not.",
        rigthAnswers: [
            "were playing",
            "was sitting",
            "was living",
            "weren't watching",
            "were cooking",
        ],
        tasks: [
            {
                id: 1,
                text: "We .... football at 7 o'clock in the evening yesterday.",
                answer1: "were playing",
                answer2: "were played",
            },
            {
                id: 2,
                text: "Bob .... in class yesterday at ten o'clock.",
                answer1: "was sitting",
                answer2: "were sitting",
            },
            {
                id: 3,
                text: "This time last year I .... in Thailand.",
                answer1: "was living",
                answer2: "am living",
            },
            {
                id: 4,
                text: "They .... TV at 7 pm yesterday.",
                answer1: "was not watching",
                answer2: "weren't watching",
            },
            {
                id: 5,
                text: "You .... lunch at three o'clock.",
                answer1: "were cooking",
                answer2: "cooked",
            },
        ],
    },
];
