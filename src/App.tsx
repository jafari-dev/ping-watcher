import { Header, Card } from "./components";

export function Application() {
  return (
    <div className="container">
      <Header />
      <div className="row gy-4">
        {Array.from({length: 50}, () => (
          <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
            <Card
          gameName="Call of duty"
          mainPing={164}
          gameImage="https://image.api.playstation.com/cdn/UP0002/CUSA08829_00/xmKUnAOenEAKspB3FlOg80aQZfEoCYcE.png"
          subPings={[
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
            {
              ping: 164,
              image:
                "https://kamapress.com/wp-content/uploads/2020/08/Poy_gMNZ_400x400.jpg",
            },
          ]}
        />
          </div>
        ))}
      </div>
    </div>
  );
}
