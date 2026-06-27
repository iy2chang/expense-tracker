import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, categories: "Utilites" },
    { id: 2, description: "bbb", amount: 10, categories: "Utilites" },
    { id: 3, description: "ccc", amount: 10, categories: "Utilites" },
    { id: 4, description: "aaddda", amount: 10, categories: "Utilites" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.categories === selectedCategory)
    : expenses;

  const onDelete = (id: number) =>
    setExpenses(expenses.filter((expense) => expense.id != id));

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => {
            console.log(category);
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
};

export default App;
