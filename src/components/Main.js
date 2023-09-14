import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import BoxNews from "./BoxNews";
import BoxLine from "./BoxLine";
import GaleryPhotos from "./GaleryPhotos";
import HighlightsNews from "./HighlightsNews";
import { getnews } from "./functions/getnews";

export default function Main({closeSpinner, setCloseSpinner}){

  const [column_1, setColumn_1] = useState([]);
  const [column_2, setColumn_2] = useState([]);
  const [column_3, setColumn_3] = useState([]);
  const [column_4, setColumn_4] = useState([]);
  const [column_5, setColumn_5] = useState([]);
  const [column_6, setColumn_6] = useState([]);
  const [column_7, setColumn_7] = useState([]);
  const [column_8, setColumn_8] = useState([]);
  const [column_9, setColumn_9] = useState([]);
  const [indexNews, setIndexNews] = useState(0);

  useEffect(() => {

    async function returnNews() {
      const newsData = await getnews();

      if(newsData){

        setCloseSpinner(false)
        setColumn_1(newsData.slice(indexNews + 0, indexNews + 9));
        setColumn_2(newsData.slice(indexNews + 10, indexNews + 19));
        setColumn_3(newsData.slice(indexNews + 20, indexNews + 29));
        setColumn_4(newsData.slice(indexNews + 30, indexNews + 39));
        setColumn_5(newsData.slice(indexNews + 40, indexNews + 49));
        setColumn_6(newsData.slice(indexNews + 50, indexNews + 59));
        setColumn_7(newsData.slice(indexNews + 60, indexNews + 69));
        setColumn_8(newsData.slice(indexNews + 70, indexNews + 79));
        setColumn_9(newsData.slice(indexNews + 80, indexNews + 89));

      }

    }

    returnNews();
  }, [indexNews]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexNews < 9) {
        setIndexNews(indexNews + 1);
      } else {
        setIndexNews(0); // Reinicie para zero quando atingir 9
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [indexNews]);

  return (
    <main style={{display: closeSpinner? 'none':'block'}}>
      <Menu />
      <div className="box-containers">
        {column_1 && column_2 && column_3 && (
          <>
            <BoxNews
              column_1={column_1}
              column_2={column_2}
              column_3={column_3}
            />
            <BoxNews
              column_1={column_4}
              column_2={column_5}
              column_3={column_6}
            />
            <BoxNews
              column_1={column_7}
              column_2={column_8}
              column_3={column_9}
            />
          </>
        )}
        <BoxLine title="Featured Sections" />
        {column_1 && column_2 && column_3 && (
          <>
            <BoxNews
              column_1={column_5}
              column_2={column_6}
              column_3={column_4}
            />
            <BoxNews
              column_1={column_2}
              column_2={column_3}
              column_3={column_1}
            />
            <BoxNews
              column_1={column_8}
              column_2={column_7}
              column_3={column_9}
            />
          </>
        )}
        <BoxLine title="Photos you should see" />
        {column_1 && column_2 && column_3 && <GaleryPhotos />}
        {column_1 && column_2 && column_3 && (
          <>
            <BoxNews
              column_1={column_8}
              column_2={column_7}
              column_3={column_9}
            />
            <BoxNews
              column_1={column_5}
              column_2={column_6}
              column_3={column_4}
            />
            <BoxNews
              column_1={column_2}
              column_2={column_1}
              column_3={column_3}
            />
          </>
        )}
        <BoxLine title="In Case You Missed It" />
        {column_1 && column_2 && column_3 && <HighlightsNews />}
      </div>
    </main>
  );
}
