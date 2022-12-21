import { festivalsData } from "../data/festivals";
export const Festivals = () => {
  return (
    <section className="Festivals main-layout">
      <h1>Festivals</h1>
      <ul className="festival-list">
        {festivalsData.map(festival => <li className="festival-preview">
          <img src={festival.festivalByYear[0].festivalLogo} alt="" />
        </li>)}
      </ul>
    </section>
  );
};
