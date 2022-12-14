import { useEffect, useRef, useState } from "react"


export const Hero = () => {
    const imgLinks: string[] = ['https://media.resources.festicket.com/image/fit-in/1580x1046/filters:quality(70)/www/homepage-headers/SilencioUmbra_Hero.jpeg', 'https://media.resources.festicket.com/image/fit-in/1580x1046/filters:quality(70)/www/homepage-headers/SouthportWeekender2023.jpeg', 'https://media.resources.festicket.com/image/fit-in/1580x1046/filters:quality(70)/www/homepage-headers/MadCool2023.jpeg']

    const currImgNumRef = useRef(0)
    const [currImg, setImg] = useState<string>(imgLinks[0])

    useEffect(() => {
        // setCover(true)
        setInterval(() => {
            let currNum = currImgNumRef.current
            if (currNum + 1 === 3) {
                currImgNumRef.current = 0
                currNum = 0
            }
            else {
                currImgNumRef.current = currImgNumRef.current + 1
                currNum += 1
            }
            setImg(imgLinks[currNum])

        }, 3000)

    }, [])


    return <section className='hero'>
        <div className="hero-text">
            <div></div>
            <h3>Book it. Love it. <span>Enjoy it</span></h3>
            <p>Let the music play</p>
            <button>Join the community</button>
        </div>
        <div className="img-wrapper">
            <img src={currImg} alt="" />
        </div>
    </section>
}