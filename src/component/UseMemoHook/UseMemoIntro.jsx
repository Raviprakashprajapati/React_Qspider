import React, { useMemo, useState } from "react";


function UseMemoIntro() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  let checkCount1 = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }

    return count1 % 2 == 0 ? "even" : "odd";
  },[count1]);

  function checkCount2() {
    return count2 % 2 == 0 ? "even" : "odd";
  }

  return (
    <div>
      <button
        className="bg-black text-teal-50 p-2"
        onClick={() => setCount1(count1 + 1)}
      >
        Count1: {count1} {checkCount1}{" "}
      </button>{" "}
      <br />
      <br />
      <button
        className="bg-black text-teal-50 p-2"
        onClick={() => setCount2(count2 + 1)}
      >
        Count2: {count2} {checkCount2()}
      </button>
    </div>
  );
}

export default UseMemoIntro;
