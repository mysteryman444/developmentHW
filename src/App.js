import React, { useState } from 'react';
import './bootsrap.css'
import './App.css';
import bakedGoods from "./bakedGoods"
import BakeryItem from './bakeryItem';

function App() {

  const [selection, setView] = useState(bakedGoods);
  const [type, setType] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);


  function addToList(item) {
    const newlist = [...list, item]
    setList(newlist);
    setTotal(total + item.price)
  }
  function removeFromList(item, index) {
    const newlist = [...list];
    newlist.splice(index, 1)
    setList(newlist)
    setTotal(total - item.price)
  }

  function runFilters() {
    setView(bakedGoods)

    if (document.getElementById("gluten").checked) {
      setView(selection.filter((item) => {
        return item.gfStatus === true
      }))
    }
    if (document.getElementById("vegan").checked) {
      setView(selection.filter((item) => {
        return item.vegan === true
      }))
    }
    sortItems(type)
  }

  function clearFilters(){
    document.getElementById("gluten").checked = false;
    document.getElementById("vegan").checked = false;
    runFilters();
  }


  const sortItems = (order) => {
    const options = {
      "Low to High": [...selection].sort(function(a,b){return a.price-b.price}),
      "High to Low": [...selection].sort(function(a,b){return b.price-a.price})
    };
    setView(options[order.target.value]);
  }

  function runSort(sort){
    setType(sort)
    sortItems(type)
  }


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Bakery Menu</h1>
          <body className="Main-grid">
            <div>
              <p>Filter by:</p>
              <input id="gluten" class="form-check-input" type="checkbox" onClick={() => runFilters()}/>
              <label>&nbsp;Gluten Free</label>
              <p></p>
              <input id="vegan" class="form-check-input" type="checkbox" onClick={() => runFilters()}/>
              <label>&nbsp;Vegan</label>
              <p></p>
              <button onClick={() => clearFilters()} class="btn btn-primary">Clear Filters</button>
              <p></p>
              <p>Sort Price by:</p>
              <select onChange={runSort}>
                <option value=""></option>
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
              </select>


            </div>

            <div>
              <div className="container-fluid">
                <div className="row justify-content-center">
                  {selection.map((item) => {
                    return (
                      <div
                        className="col-md-4 col-sm-6 card my-3 py-3 border-0">
                        <BakeryItem props={item} />
                        <button onClick={() => addToList(item)} class="btn btn-primary">Add to Cart</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <h4>Current Cart:</h4>
              <p>---------------</p>
              {list.map((item, index) => {
                return (
                  <div className="col">
                    <p>{item.name} &nbsp; {item.price}</p>
                    <button onClick={() => removeFromList(item, index)}>Remove</button>
                    <p>---------------</p>

                  </div>
                )
              })}
              <h3>Total: ${total}</h3>
            </div>

          </body>
        </div>
      </div>
    </>
  );
}

export default App;
