
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     let counts = count + 1;
  //     setCount(counts);
  //   }, 1000);
  // }, [])


  // return (
  //   <>
  //     <p>The count is {count}</p>
  //   </>
  // )


  /*Fetching data using useEffect*/
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://random-data-api.com/api/v2/users?size=5");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  },[]);
  return (
    <div>
      <h2>Random User List</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <p>
              Name:
              {user.first_name}
              {user.last_name}
            </p>
            <p>
              Email:
              {user.email}
            </p>
            {/* Add more user data fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  )

}


export default App
