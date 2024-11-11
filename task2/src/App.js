import { useState, useEffect } from "react";
import { Todo } from "./Components/Todo/Todo";
import { TODO_PER_PAGE } from "./Constants";
import "./App.css";
import { Pagination } from "./Components/Pagination/Pagination";

function App() {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = data?.length / TODO_PER_PAGE;
  const firstIndex = (currentPage - 1) * TODO_PER_PAGE;
  const lastIndex = firstIndex + TODO_PER_PAGE;
  const slicedData = data?.slice(firstIndex, lastIndex);

  const clickOnNextPage = (currentPage) => {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => prev + 1);
      return;
    }
  };
  const clickOnPrevPage = (currentPage) => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
      return;
    }
  };

  useEffect(() => {
    setData(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setData(data));
    });
  }, []);

  if (!data) {
    return <div className="Loading">Загрузка...</div>;
  }

  return (
    <div className="App">
      {slicedData.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
      <div className="Pagination">
        <Pagination
          currentPage={currentPage}
          clickOnNextPage={clickOnNextPage}
          clickOnPrevPage={clickOnPrevPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default App;
