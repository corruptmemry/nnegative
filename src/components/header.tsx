export default function Header() {
    return (
        <>
          <div className="header">
            <div className="header-div-2">
              <div className="header-div-3">
                <picture>
                  <source
                    type="image/webp"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Faa569dde15724517923827ef5ba7dbdd"
                    className="image"
                  />
                </picture>
                <div className="builder-image-sizer image-sizer" />
              </div>
            </div>
          </div>
          <style>{`
            .header {
              display: flex;
              flex-direction: row;
              max-width: 1728px;
              justify-content: flex-start;
            }
            .header-div-2 {
              display: flex;
              flex-direction: column;
              max-width: 248.02906799316406px;
              justify-content: flex-start;
              align-items: flex-start;
              padding-top: 10px;
              padding-bottom: 10px;
              padding-right: 10px;
              padding-left: 10px;
            }
            .header-div-3 {
              display: flex;
              position: relative;
              min-width: 20px;
              min-height: 20px;
              max-width: 228.02906799316406px;
              width: 228.02906799316406px;
            }
            .image {
              object-fit: cover;
              object-position: center;
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
            }
            .image-sizer {
              width: 100%;
              padding-top: 65.34254659343114%;
              pointer-events: none;
              font-size: 0;
            }
            .header-div-4 {
              display: flex;
              flex-direction: column;
              max-width: 111.92251586914062px;
              justify-content: flex-start;
              align-items: flex-start;
              margin-left: 1362px;
            }
            .header-div-5 {
              display: flex;
              max-width: 111.92251586914062px;
              height: 63.50819778442383px;
              width: 111.92251586914062px;
              border-color: rgba(0, 0, 0, 1);
              border-width: 2px;
              border-style: solid;
            }
            .header-div-6 {
              border: 2px solid black;
              background-color: white;
              max-width: 111.92251586914062px;
              color: black;
              margin-left: 100%;
              padding: 14px 28px;
              font-size: 16px;
              cursor: pointer;
              margin-top: 50px;
              font-family: JetBrains Mono, sans-serif;
            }
          `}</style>
        </>
      );
    
  }