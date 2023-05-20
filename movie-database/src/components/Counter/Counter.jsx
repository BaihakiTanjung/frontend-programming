import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => (count += 1));
    console.log(`Result: ${count}`);
  };

  useEffect(() => {
    console.log(`Componnets berhasil di-mount/di-update`);

    document.title = `Angka: ${count}`;
  }, []);

  return (
    <>
      <p>Result: {count}</p>
      <button onClick={increment}>Add</button>
    </>
  );
};

export default Counter;
