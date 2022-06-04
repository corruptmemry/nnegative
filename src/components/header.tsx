export default function Header() {
    return (
        <>
          <div className="div">
            <div className="div-2">
              <div className="div-3">
                <picture>
                  <source
                    type="image/webp"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdcdbad0df0c547fea6b7ca894ff3c0ff"
                    className="image"
                  />
                </picture>
                <div className="builder-image-sizer image-sizer" />
              </div>
            </div>
          </div>
          <style>{`
            .div {
              display: flex;
              flex-direction: row;
              max-width: 1728px;
              justify-content: flex-start;
            }
            .div-2 {
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
            .div-3 {
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
            .div-6 {
              display: flex;
              max-width: 303px;
              height: 64px;
              width: 303px;
              border-color: rgba(0, 0, 0, 1);
              border-width: 2px;
              border-style: solid;
            }
          `}</style>
        </>
      );
    
    
  }