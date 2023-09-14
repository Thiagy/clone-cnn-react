export default function Spinner({closeSpinner}) {
  return (
    <div style={{display: closeSpinner? 'block':'none'}} id="spinner">
        <img src="imgs/gifs-de-icone-carregando-5.gif" alt="" />
    </div>
  );
}


