import "./sort.css";
import { useRef } from "react";

export default function Sort({
  listShowed,
  setListShowed,
  base,
  setBase,
  pageNum,
  setPageNum,
}) {
  let colRef = useRef(); // Реф для доступа к выбранной колонке (select)
  let optRef = useRef(); // Реф для доступа к парамерам сортировки (select)
  let inpRef = useRef(); // Реф для доступа к значению выборки (input)

  let out = (
    <section className="sort">
      <div className="form">
        <select
          className="form__select"
          ref={colRef}
          onChange={handlerSortColumn}
        >
          <option className="form__option" value="id">
            default
          </option>
          <option className="form__option" value="name">
            sort by name
          </option>
          <option className="form__option" value="count">
            sort by count
          </option>
          <option className="form__option" value="distantion">
            sort by distanse
          </option>
        </select>
        <select className="form__select" ref={optRef} onChange={handlerChange}>
          <option className="form__option" value="1">
            equal to
          </option>
          <option className="form__option" value="2">
            contains
          </option>
          <option className="form__option" value="3">
            greater than
          </option>
          <option className="form__option" value="4">
            less than
          </option>
        </select>
        <input
          className="form__inp"
          ref={inpRef}
          type="text"
          onChange={handlerSortOpnion}
        />
        <div className="resultCount">Count results: {listShowed.length}</div>
      </div>
    </section>
  );

  // Обработчик изменения выбора колонки для сортировки
  function handlerSortColumn() {
    inpRef.current.value = ""; // Сбрасывается значение параметров для сортировки
    // Сортировка по колонкам
    if (colRef.current.value === "name") {
      let arr = [...base].sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name <= b.name) return 1;
        else return false;
      });
      setListShowed(arr);
    } else {
      // В противном случае обговляем стэйт для отрисовки
      let arr = [...base].sort(
        (a, b) => a[colRef.current.value] - b[colRef.current.value]
      );
      setListShowed(arr);
    }
  }

  // Обработчик изменения параметра сортировки
  function handlerChange() {
    setListShowed(base); // Обговляем стэйт для отрисовки
    handlerSortColumn(); // Сортируем по выбранной колонке
  }

  // Обработчик изменения значения параметров для сортировки
  function handlerSortOpnion(e) {
    if (e.target.value !== "") {
      setPageNum(1); // При изменении заначения отрисовывается первая страница
      if (optRef.current.value === "1") {
        let arr = [...base].filter(
          // Выборка по совпадаючщему занчению
          (i) => String(i[colRef.current.value]) === e.target.value
        );
        setListShowed(arr); // Обновление сэйта для отрисовки
      }
      if (optRef.current.value === "2") {
        let arr = [...base].filter(
          (
            i // Сортировка по регулярке
          ) => new RegExp(e.target.value).test(i[colRef.current.value])
        );
        setListShowed(arr);
      }
      if (optRef.current.value === "3") {
        let arr = [...base].filter(
          // Показать всё что больше заданного значения паряметра
          (i) => Number(i[colRef.current.value]) > e.target.value
        );
        setListShowed(arr);
      }
      if (optRef.current.value === "4") {
        let arr = [...base].filter(
          // Показать всё что меньше заданного значения паряметра
          (i) => Number(i[colRef.current.value]) < e.target.value
        );
        setListShowed(arr);
      }
    } else {
      setListShowed(base); // Обговляем стэйт для отрисовки
      handlerSortColumn(); // Сортируем по выбранной колонке
    }
  }

  return out;
}
