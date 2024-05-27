import React from "react";
import ClassBaseIntro from "./component/classBasedComponent/ClassBaseIntro";
import FunctionalBasedCompIntro from "./component/functionBasedComp/FunctionalBasedCompIntro";
import UseStateIntro from "./component/UseStateCompoent/UseStateIntro";
import PropsIntro from "./component/PropsComponent/PropsIntro";
import EventsIntro from "./component/SynthethicEvents/EventsIntro";

function App() {
  return (
    <div>
      {/* <ClassBaseIntro/> */}
      {/* <FunctionalBasedCompIntro/> */}
      {/* <UseStateIntro/> */}
      {/* <PropsIntro /> */}
      <EventsIntro/>
    </div>
  );
}

export default App;
