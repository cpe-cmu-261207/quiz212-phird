import { useState } from "react";

function App() {
  let initialize = 620610801;
  let [Id, setId] = useState(initialize);

  function reduceNumber(event) {
    event.preventDefault();
    setId((myid) => {
      let newId = Id - 1;
      return newId;
    });
  }

  function addNumber(event) {
    event.preventDefault();
    setId((myid) => {
      let newId = Id + 1;
      return newId;
    });
  }

  function resetButt(event) {
    event.preventDefault();
    setId((myid) => {
      let newId = initialize;
      return newId;
    });
  }

  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{Id}</p>
        <button
          onClick={(e) => {
            reduceNumber(e);
          }}
        >
          -
        </button>
        <button
          onClick={(e) => {
            resetButt(e);
          }}
        >
          reset
        </button>
        <button
          onClick={(e) => {
            addNumber(e);
          }}
        >
          +
        </button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
