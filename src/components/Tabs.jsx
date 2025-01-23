import React from "react";

const Tabs = (props) => {
  const { todos } = props;

  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {/* Array.prototype.map() | daripada menggunakan elemen button berulang-ulang kita bisa memanfaatkan array map() js untuk menggunakan
      kembali elemen yang sama. jangan lupa untuk menambahkan key khusus(tabIndex) sebagai identitas tiap indeks dalam array*/}

      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === "All" ? todos.length : tab === "Open" ? todos.filter((val) => !val.complete).length : todos.filter((val) => val.complete).length;

        return (
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;

//numOfTasks logic
//let numOfTasks
// if (tab === "All") {
//   numOfTasks = todos.length;
// } else if (tab === "Open") {
//   numOfTasks = todos.filter((val) => !val.complete).length;
// } else {
//   // Default case untuk "Completed"
//   numOfTasks = todos.filter((val) => val.complete).length;
// }
