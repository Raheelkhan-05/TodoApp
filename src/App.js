// import { useState, useEffect } from 'react';
// import './App.css';

// export default async function App() {
//   // const [data, setData] = useState([]);
//   // const fetchData = () => {
//   //   // fetch("https://api.nasa.gov/planetary/apod?api_key=m4B0eNeOaLGK7muVMhS3f5jUO06leiAqIZF6Hoqd")
//   //   fetch("https://www.v2api.digitomize.com/contests")
//   //     .then(res => res.json())
//   //     .then(d => setData(d))
//   //     .catch(err => console.log(err));
//   // }
//   // useEffect(() => {
//   //   fetchData();
//   // }, [])
//   const url = 'https://www.v2api.digitomize.com/contests';
//   const options = {method: 'GET', headers: {Accept: 'application/json'}};

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//       // console.error(error);
//   }

//   return (
//     <div className="app-container">
//       <h1 className='fapi'><u>Fetch API</u></h1>
//       {/* <h2>{data.title}</h2>
//       <img src={data.url} alt={data.title} className="image" />
//       <p>{data.explanation}</p> */}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://www.v2api.digitomize.com/contests';
      const options = { method: 'GET', headers: { Accept: 'application/json' } };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List of Contests</h1>
      <ul>
        {data.map(contest => (
          <li key={contest.id}>
            <strong>{contest.title}</strong> - {contest.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
