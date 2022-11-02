import { Header, Card } from "./components";

const MCI = "https://elcdn.ir/pw/operators/mci.png";
const Irancell = "https://elcdn.ir/pw/operators/irancel.png";
const Asiatech = "https://elcdn.ir/pw/operators/asiatechkhub.jpg";
const Rightell = "https://elcdn.ir/pw/operators/rightel.png";
const Mokhaberat = "https://elcdn.ir/pw/operators/mokhaberat.png";

export function Application() {
  return (
    <div className="container">
      <Header />
      <div className="row gy-4">
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <Card
            gameName="FIFA"
            mainPing={51}
            gameImage="https://elcdn.ir/pw/games/fifa.png"
            subPings={[
              { image: Mokhaberat, ping: 51 },
              { image: Asiatech, ping: 53 },
              { image: Irancell, ping: 78 },
              { image: MCI, ping: 73 },
              { image: Rightell, ping: 82 },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <Card
            gameName="PubG Mobile"
            mainPing={81}
            gameImage="https://elcdn.ir/pw/games/pubg.png"
            subPings={[
              { image: Mokhaberat, ping: 63 },
              { image: Asiatech, ping: 62 },
              { image: Irancell, ping: 87 },
              { image: MCI, ping: 81 },
              { image: Rightell, ping: 92 },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <Card
            gameName="COD Mobile"
            mainPing={78}
            gameImage="https://elcdn.ir/pw/games/codmobile.png"
            subPings={[
              { image: Mokhaberat, ping: 57 },
              { image: Asiatech, ping: 59 },
              { image: Irancell, ping: 84 },
              { image: MCI, ping: 78 },
              { image: Rightell, ping: 87 },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <Card
            gameName="COD Series"
            mainPing={123}
            gameImage="https://elcdn.ir/pw/games/codseries.png"
            subPings={[
              { image: Mokhaberat, ping: 110 },
              { image: Asiatech, ping: 108 },
              { image: Irancell, ping: 133 },
              { image: MCI, ping: 123 },
              { image: Rightell, ping: 130 },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <Card
            gameName="Dota 2"
            mainPing={112}
            gameImage="https://elcdn.ir/pw/games/dota2.png"
            subPings={[
              { image: Mokhaberat, ping: 90 },
              { image: Asiatech, ping: 92 },
              { image: Irancell, ping: 117 },
              { image: MCI, ping: 112 },
              { image: Rightell, ping: 123 },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <Card
            gameName="Valorant"
            mainPing={103}
            gameImage="https://elcdn.ir/pw/games/valorant.png"
            subPings={[
              { image: Mokhaberat, ping: 80 },
              { image: Asiatech, ping: 83 },
              { image: Irancell, ping: 108 },
              { image: MCI, ping: 103 },
              { image: Rightell, ping: 113 },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
          <Card
            gameName="Rainbow Six"
            mainPing={75}
            gameImage="https://elcdn.ir/pw/games/rainbowsix.png"
            subPings={[
              { image: Mokhaberat, ping: 53 },
              { image: Asiatech, ping: 55 },
              { image: Irancell, ping: 80 },
              { image: MCI, ping: 75 },
              { image: Rightell, ping: 84 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
