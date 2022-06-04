export default function Hero() {
    return (
      <>
        <div className="hero-div">
          <div className="hero-title">
            Сеть уникальных серверов без привилегий
          </div>
          <br/>
          <div className="hero-desc">
            Смысл сервера заключается в создании искусства. Нет приватов, нет
            Pay2Win. Твоя свобода заканчивается там, где начинается свобода
            другого игрока.
          </div>
        </div>
        <style>{`
          .hero-div {
            display: flex;
            flex-direction: column;
            max-width: 1728px;
            margin-top: 50px;
            margin-left: 15%;
            justify-content: flex-start;
          }
          .hero-title {
            max-width: 1728px;
            color: rgba(0, 0, 0, 1);
            font-size: 48px;
            letter-spacing: 0%;
            text-align: center;
            font-weight: 800;
            font-family: JetBrains Mono, sans-serif;
          }
          .hero-desc {
            max-width: 1728px;
            margin-top: 30px;
            color: rgba(136, 136, 136, 1);
            font-size: 19px;
            line-height: 18px;
            letter-spacing: 0%;
            text-align: center;
            font-family: IBM Plex Sans, sans-serif;
          }
        `}</style>
      </>
    );
  }
  