import "./main.css";
import Sort from "../sort/Sort";
import Show from "../show/Show";

export default function Main({
  listShowed,
  setListShowed,
  base,
  setBase,
  pageNum,
  setPageNum,
}) {
  let out = (
    <main className="main">
      <Sort
        listShowed={listShowed}
        setListShowed={setListShowed}
        base={base}
        setBase={setBase}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
      <Show
        listShowed={listShowed}
        setListShowed={setListShowed}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </main>
  );

  return out;
}
