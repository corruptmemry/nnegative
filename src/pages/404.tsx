export default function NotFound() {
    return (
    <>
    <h1 className="notfound-label">404</h1>
     <button onClick={() => window.location.href = '/'} className='button-2 button-corners'>На главную</button>
    <style>{`
        .notfound-label {
            font-size: 96px;
            font-family: Inter;
            font-weight: 800;
        }
        .button-2 {
            padding: 0px;
            background-color: #8b9e70;
            border: none;
            position: relative;
            height: 32px;
            margin-top: 20px;
            margin-right: 0%;
            font-size: 12.5px;
            width: 216px;
            font-family: Arimo, sans-serif;
            font-weight: 700;
            color: rgba(255, 255, 255, 1);
            text-align: center;
          }
      `}</style>
      </>
    )
}