export const festivals: Festivals[] = [
    {
        name: 'Tomorrowland',
        festivalByYear: [
            {
                year: 2022,
                id: 'oasfivfnasfvoin',
                country: 'Belgium',
                festivalLogo: 'https://media.resources.festicket.com/image/524x740/center/middle/filters:quality(70)/www/photos/10744-poster.jpg',
                imgs: [],
                description: 'Tomorrowland is the world\'s largest dance music festival, each summer bringing electronic music\'s biggest stars to its magical wonderland in the Belgium town of Boom. After having to take two years off, Tomorrowland returned in July 2022 with another outstanding lineup that spanned EDM, house, techno, hardstyle, drum and bass, trance, and even some select pop icons all showcased over tens of stages, many curated by some of each genre\'s foremost brands and artists. After expanding to an unprecedented three weekends in 2022, Tomorrowland truly positioned itself as the zenith of dance music events around the globe, welcoming thousands upon thousands of ravers to Belgium after a two year break. And that was just the fans: Tomorrowland frequently showcases lineups of unimaginable scale, recently seeing the likes of Armin van Buuren, Diplo, The Chainsmokers, Carl Cox, Amelie Lens, Martin Garrix, Adam Beyer, Charlotte de Witte, Steve Aoki, Tiësto and hundreds more all perform amongst Tomorrowland\'s incredible stage design, production, and quirky surprises. Tomorrowland is well and truly at the top of every dance fan\'s festival bucket list: the ultimate EDM celebration in Boom, Belgium needs to be seen to be believed.',
                lineUp: [
                    { isHeadliner: true, name: 'Armin van Buuren', imgSrc: 'https://media.resources.festicket.com/image/460x528/smart/filters:quality(70)/www/artists/Armin_L.jpg', artistId: 'a1' },
                    { isHeadliner: true, name: 'Diplo', imgSrc: 'https://media.resources.festicket.com/image/600x600/center/top/filters:quality(70)/www/artists/Diplo.jpg', artistId: 'a2' },
                    { isHeadliner: true, name: 'Dimitri Vegas & Like Mike', imgSrc: 'https://media.resources.festicket.com/image/460x528/smart/filters:quality(70)/www/artists/DimitriVegasLikeMike.jpg', artistId: 'a3' },
                    { isHeadliner: true, name: 'Alesso', imgSrc: 'https://media.resources.festicket.com/image/460x528/smart/filters:quality(70)/www/artists/Alesso_bd5taK4.jpg', artistId: 'a4' },
                    { isHeadliner: true, name: '3 Are Legend', imgSrc: 'https://media.resources.festicket.com/image/600x600/center/top/filters:quality(70)/www/artists/3AreLegend.jpg', artistId: 'a5' },
                    { isHeadliner: true, name: 'Timmy Trumpet', imgSrc: 'https://media.resources.festicket.com/image/600x600/center/top/filters:quality(70)/www/artists/TimmyTrumpet_d3JDRtF.jpg', artistId: 'a6' },
                    { isHeadliner: true, name: 'Tale of Us', imgSrc: 'https://media.resources.festicket.com/image/600x600/center/top/filters:quality(70)/www/artists/TaleOfUs_New.jpg', artistId: 'a7' },
                    { isHeadliner: true, name: 'Martin Garrix', imgSrc: 'https://media.resources.festicket.com/image/600x600/center/top/filters:quality(70)/www/artists/MartinGarrix.jpg', artistId: 'a8' },
                    { isHeadliner: true, name: 'Marshmello', imgSrc: 'https://media.resources.festicket.com/image/600x600/center/top/filters:quality(70)/www/artists/Marshmello_New2.jpg', artistId: 'a9' },
                    { isHeadliner: true, name: 'Adam Beyer', imgSrc: 'https://media.resources.festicket.com/image/600x600/center/top/filters:quality(70)/www/artists/AdamBeyer_New.jpg', artistId: 'a10' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'sdfgdfsb' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'sdfbdsfbdsb' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'sdfbdsfbdsfbgsh' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'hshshshs' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'dsfgdfgs' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'asadf' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'asdfsf' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'asdf' },
                    { isHeadliner: false, name: 'LP Giobb', artistId: 'gsdag' },
                ],
                genre: ['EDM', 'Electronic', 'Dubstep']
            },
        ]
    }
]


interface Festivals {
    name: string
    festivalByYear: Festival[]
}
interface Festival {
    year: number
    id: string
    country: string
    imgs: string[]
    description: string
    lineUp: MiniArtist[]
    genre: string[]
    festivalLogo: string
}

interface MiniArtist {
    isHeadliner: boolean
    name: string
    imgSrc?: string
    artistId: string
}