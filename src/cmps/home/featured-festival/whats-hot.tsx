const whatsHotInfo: {imgSrc:string,miniImgSrc: string,text:string,title:string}[] = [{imgSrc:'https://media.resources.festicket.com/image/fit-in/1030x660/filters:quality(70)/www/photos/MadCool2023_WH.jpeg',miniImgSrc: 'https://media.resources.festicket.com/image/fit-in/120x100/filters:quality(70)/www/photos/Logo_7C6UDD6.jpg',title:'Mad cool festival',text:'Tickets are now on sale for the next instalment of Madrid\'s festival giant, which will feature headline appearances from Red Hot Chili Peppers, Queens of the Stone Age, Lizzo, Robbie Williams and more.'},{imgSrc: 'https://media.resources.festicket.com/image/fit-in/1094x700/filters:quality(70)/www/photos/SouthportWeekender_WH.jpg',miniImgSrc: 'https://media.resources.festicket.com/image/fit-in/120x100/filters:quality(70)/www/photos/Logo_320x268_lgMAg2v.png', text: 'The lineup has been announced for Southport Weekender 2023, with the likes of Gilles Peterson, Jayda G, Kenny Dope, DJ Spoony, Folamour, Eats Everything, Patrice Rushen, LTJ Bukem and many more heading to Butlin\'s Bognor Regis for "the world\'s friendliest party".', title: 'Southport Weekender 2023'}]

export const WhatsHot = () => {
    return <>
        <div className="main-layout whats-hot">
            <h3 >What's Hot</h3>
            <p>The things you don't want to miss</p>
            <ul>
                {whatsHotInfo.map(whatsHotData=> <li>
                    <div className="img-wrapper">
                    <img className="largeImg" src={whatsHotData.imgSrc} alt="" />
                    <img className="miniImg" src={whatsHotData.miniImgSrc} alt="" />
                    <h4>{whatsHotData.title}</h4>
                    <p>{whatsHotData.text}</p>
                    </div>
                </li>)}
               

            </ul>
        </div>
    </>
}

