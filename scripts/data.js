import { Serie } from "./serie.js";
//Create data of series
var seriesData = [
    {
        index: 1,
        name: 'Breaking Bad',
        seasons: 5,
        channel: 'AMC',
        description: 'Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer',
        linkWebPage: 'https://www.amc.com/shows/breaking-bad',
        linkImage: 'https://i.imgur.com/GGje0vc.jpg'
    },
    {
        index: 2,
        name: 'Orange Is the New Black',
        seasons: 6,
        channel: 'Netflix',
        description: 'The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary',
        linkWebPage: 'https://www.netflix.com/co/title/70242311',
        linkImage: 'https://i.imgur.com/EvKe48G.jpg'
    },
    {
        index: 3,
        name: 'Game of Thrones',
        seasons: 7,
        channel: 'HBO',
        description: 'American fantasy drama',
        linkWebPage: 'https://www.hbo.com/game-of-thrones',
        linkImage: 'https://i.imgur.com/TDCEV1S.jpg'
    },
    {
        index: 4,
        name: 'The Big Bang Theory',
        seasons: 12,
        channel: 'CBS',
        description: 'Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.',
        linkWebPage: 'https://www.cbs.com/shows/big_bang_theory/about/',
        linkImage: 'https://i.imgur.com/uAEpVWk.jpg'
    },
    {
        index: 5,
        name: 'Sherlock',
        seasons: 4,
        channel: 'BBC',
        description: 'Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps',
        linkWebPage: 'https://www.bbc.co.uk/programmes/b018ttws',
        linkImage: 'https://i.imgur.com/02B7qhj.jpg'
    },
    {
        index: 6,
        name: 'A Very English Scandal',
        seasons: 2,
        channel: 'BBC',
        description: 'A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Prestons book of the same name.',
        linkWebPage: 'https://www.bbc.co.uk/programmes/p065smy4',
        linkImage: 'https://i.imgur.com/D4y3DrQ.jpg'
    }
];
//new serie
export var dataSeries = seriesData.map(function (serie) { return new Serie(serie.index, serie.name, serie.seasons, serie.channel, serie.description, serie.linkWebPage, serie.linkImage); });
