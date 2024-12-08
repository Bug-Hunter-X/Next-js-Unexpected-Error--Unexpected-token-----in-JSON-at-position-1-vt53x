```javascript
// pages/aboutSolution.js
import {useState, useEffect} from 'react';

const somePromiseReturningData = async () => {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { message: 'Data from promise' };
};

export default function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await somePromiseReturningData();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
}
```