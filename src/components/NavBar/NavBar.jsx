import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  const number = [0, 1, 2, 1, 4, 5, 6, 7, 8];
  const number2 = [1, 2, 6, 7, 8, 3, 4, 45, 5];

  //Довжина масиву
  const length = number.length;

  //Видалення останнього елементу масива, і його повертає
  console.log("Видалення останнього елементу масива", number.pop(), number);
  //Додавання 1 елемента в кінець масиву

  console.log("Додавання 1 елемента в кінець масиву", number.push(9), number);

  //https://learn.javascript.ru/array-methods -- shift/unshift аналогічно

  //Вертаємо єлиний масив
  let newArr = [];
  newArr.concat(number, number2);
  console.log(newArr.concat(number, number2));

  //Перебор масива

  number.forEach((item, index) => console.log(item, index));

  //Sort

  //Сортування символів іде по коду UTF-8

  let sortedArr = number2.sort((a, b) => b - a);
  console.log(sortedArr, number2);

  //перевірка на масив Array.isArray

  const str = "Ще невмерла України";
  const arr = ["Ще", "невмерла", "України"];

  console.log("Перевірка на масив: false", Array.isArray(str));

  console.log("Перевірка на масив: true", Array.isArray(arr));

  console.log(22 % 7, "Остаток від ділення"  );


  const TrueValue = true
    // Зробити значення протилежним
  console.log(!TrueValue, "Протилежне значення")
  // Перетворення в булеве значення !!
  console.log(!!TrueValue, "Булеве значення")
 


  console.log(length);
  return <nav className="navbar">NavBar</nav>;
};

export default NavBar;
