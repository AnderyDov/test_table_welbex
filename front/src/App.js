import "./App.css";
import Header from "./header/Heafer";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";

export default function App() {
  let [base, setBase] = useState([]); //стэйт база
  let [listShowed, setListShowed] = useState([]); // стэйт для отрасовки базы
  let [pageNum, setPageNum] = useState(1); // стэйт номер страницы для пагинации

  //Получение данных с базы при загрузке странизы
  useEffect(() => {
    fetch("/base")
      .then((res) => res.json())
      .then((res) => {
        setBase(res);
        setListShowed(res);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main
        base={base}
        setBase={setBase}
        pageNum={pageNum}
        setPageNum={setPageNum}
        listShowed={listShowed}
        setListShowed={setListShowed}
      />
      <Footer />
    </div>
  );
}
