import './App.scss';
import RecipeItem from './components/recipe';
import { useState} from 'react';
import {data} from './components/data';

function App() {
  const [recipes, setrecipes] = useState(data)

  const clearAllHandle = ()=>{
      setrecipes([]);
  }

  const clearHandle = (id)=>{
    const newRecipe = recipes.filter((cur)=> cur.id !==id)
    setrecipes(newRecipe);
  }

  const reset =() => {
    setrecipes(data);
  }

  return <section className="home">
    <div className = "d-flex" style={{flexDirection:'column'}}>
      <h1 className="heading">React App</h1>
      <p className="leads">Render element || delete element</p>
    </div>
    <div className="container">
      {
        recipes.map((cur)=>{
          return(
            <RecipeItem
              key={cur.id}
              img={cur.img}
              name={cur.name}
              des={cur.des} 
              remove={()=>clearHandle(cur.id)}
            />
          )
        })
      }
    </div>
    <div className="d-flex">
      <button className="btn"  onClick={clearAllHandle}>Clear all</button>
      <button className="btn"  onClick={reset}>Reset</button>
    </div>
  </section>

}

export default App;
