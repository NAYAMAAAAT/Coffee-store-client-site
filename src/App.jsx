import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import Banner from './components/Banner';
import Cap from './components/Cap';
function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
    
      <div className='container mx-auto'>
      <Banner></Banner>
        <h1 className='text-3xl font-bold text-center my-5'>Expresso Emporium</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
        <div className='bg-addCoffee py-10 my-5'>
            <Cap></Cap>
            </div>
      </div>
    </>
  )
}

export default App