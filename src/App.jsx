import { useEffect, useState } from "react";
import Result from "./components/Result";
import Summery from "./components/Summery";

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/scores");
        if (!res.ok) throw new Error("Error!!");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="sm:w-screen sm:h-screen sm:flex sm:items-center sm:justify-center">
      <div className="flex flex-col sm:flex-row sm:shadow-xl sm:shadow-blue-100 sm:rounded-3xl">
        <Result />
        <Summery data={data} />
      </div>
    </div>
  );
}
export default App;
