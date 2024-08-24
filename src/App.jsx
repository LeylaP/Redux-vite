import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlicer";

function App() {
  // useSelector bize store>counter>slicer> initialState nin degerini döner
  const { value } = useSelector((store) => store.counter);

  // useDispatch --> Slicer içindeki reducer in içindeki fonksionlara ulaşmak için kullanılan redux'tan gelen hook

  const dispatch = useDispatch();

  // burada dectruction yöntemiyle initial state nin degerini değişkene atamadan direkt değerini çektik kolay kullanım amaçlı

  console.log(value);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment)}>Arttır</button>
        <div>{value}</div>
        <button onClick={() => dispatch(decrement)}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
