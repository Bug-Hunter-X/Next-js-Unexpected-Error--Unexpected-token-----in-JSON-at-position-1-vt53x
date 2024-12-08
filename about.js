```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the function is not async
  // or if there's no await inside it
  const data = await somePromiseReturningData();

  return (
    <div>
      <h1>About Page</h1>
      <p>Data: {data}</p>
    </div>
  );
}
```