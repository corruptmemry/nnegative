export default function Footer() {
    return (
      <>
        <div className="footer">
          <div className="copyright-1">© neutronetwork 2021-2022</div>
          <div className="copyright-2">
            We are in no way affiliated with or endorsed by Mojang, AB.
          </div>
        </div>
        <style>{`
          .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            height: 77px;
            width: 100%;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: rgba(0, 0, 0, 1);
          }
          .copyright-1 {
            margin-top: 20px;
            max-width: 394px;
            color: rgba(255, 255, 255, 1);
            font-size: 14px;
            letter-spacing: 0%;
            text-align: center;
            font-family: JetBrains Mono, sans-serif;
          }
          .copyright-2 {
            max-width: 394px;
            color: rgba(255, 255, 255, 1);
            font-size: 10px;
            margin-top: 5px;
            letter-spacing: 0%;
            text-align: center;
            font-family: JetBrains Mono, sans-serif;
          }
        `}</style>
      </>
    );
  }
  