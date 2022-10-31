import { memo } from "react";

import "./styles.css";


interface Props {
  gameName: string;
  gameImage?: string;
  mainPing: number;
  subPings: {
    image: string;
    ping: number;
  }[]
}

function Card({ mainPing, gameName, gameImage, subPings }: Props): React.ReactElement {
  return (
    <article>
      <div className="main-ping">
        <img src={gameImage} alt={`Cover of ${gameName} game`} />
        <h2>{gameName}</h2>
        <h3><span>{mainPing}</span> ms</h3>
      </div>
      <div className="sub-pings">
        {subPings.map(({ ping, image }, index) => (
          <div key={`subPing-${index}`}>
            <img src={image} alt="Operator logo" />
            <h4>{ping} ms</h4>
          </div>
        ))}
      </div>
    </article>
  )
}

export default memo(Card);