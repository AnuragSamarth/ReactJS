import Expenses from "./components/Expenses"

 const App = () => {
    let expenses = [
     {
          id:'e1',
          title: 'School Fee',
          amount: 300,
          date: new Date(2023, 3, 1)
     },
     {
        id:'e2',
        title: 'Books',
        amount: 100,
        date: new Date(2021, 5,3)
     },
     {
        id:'e3',
        title: 'House Rent',
        amount: 800,
        date: new Date(2022,9,3)
     },
     {
        id:'e4',
        title: 'Personal expenses',
        amount: 1000,
        date: new Date(2023,4,2)
     }
    ]

  return (
    <>
    <h2>Hello Anurag Your Expenses Report</h2>
    <Expenses item={expenses}/>
  </>
  )
}

export default App