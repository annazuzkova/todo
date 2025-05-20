import React from "react";
function Info({ all, job }) {
  return (
    <div>
      <p>Загальна кількість: {all}</p>
      <p>Виконано робіт: {job}</p>
    </div>
  );
}

export default Info;
