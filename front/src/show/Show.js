import "./show.css";

export default function Swow({
  listShowed,
  setListShowed,
  pageNum,
  setPageNum,
}) {
  let showBase = []; // Массив для отрисовки данных
  let pageCount = Math.ceil([...listShowed].length / 30); // Получение колличества страниц

  if ([...listShowed].length !== 0) {
    // Проверка на пустоту
    for (let i = (pageNum - 1) * 30; i < [...listShowed].length; i++) {
      showBase.push(
        <tr key={[...listShowed][i].id}>
          <td>{[...listShowed][i].date}</td>
          <td>{[...listShowed][i].name}</td>
          <td>{[...listShowed][i].count} pc</td>
          <td>{[...listShowed][i].distantion} km</td>
        </tr>
      );
      if (i === (pageNum - 1) * 30 + 30) break;
    }
  }

  let pages = []; // Массив для отрисовки пагиниции
  for (let i = 1; i <= pageCount; i++) {
    if (
      i === pageNum - 1 ||
      i === pageNum - 2 ||
      i === pageNum ||
      i === pageNum + 1 ||
      i === pageNum + 2 ||
      (pageNum === 1 && (i === pageNum + 3 || i === pageNum + 4)) ||
      (pageNum === 2 && i === pageNum + 3) ||
      (pageNum === pageCount - 1 && i === pageNum - 3) ||
      (pageNum === pageCount && (i === pageNum - 3 || i === pageNum - 4))
    ) {
      pages.push(
        <div
          className="show__page show__num"
          style={{ background: i === pageNum && "#cdcdcd" }}
          onClick={() => setPageNum(i)}
        >
          {i}
        </div>
      );
    }
  }

  let out = (
    <section className="show">
      <div className="show__pagination">
        <div className="show__page" onClick={() => setPageNum(1)}>
          first
        </div>
        <div className="show__page" onClick={handlerMinus}>
          &#171;
        </div>
        {pages}
        <div className="show__page" onClick={handlerPlus}>
          &#187;
        </div>
        <div className="show__page" onClick={() => setPageNum(pageCount)}>
          last
        </div>
      </div>
      <table className="show__table">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Count</th>
            <th>Distance</th>
          </tr>
          {showBase}
        </tbody>
      </table>
    </section>
  );

  // Обработчик перехода на следующую страницу
  function handlerPlus() {
    if (pageNum < pageCount) setPageNum(pageNum + 1);
  }

  // Обработчик перехода на предыдущуу страницу
  function handlerMinus() {
    if (pageNum > 1) setPageNum(pageNum - 1);
  }

  return out;
}
