import React, { useContext } from "react";
import ClassBaseIntro from "./component/classBasedComponent/ClassBaseIntro";
import FunctionalBasedCompIntro from "./component/functionBasedComp/FunctionalBasedCompIntro";
import UseStateIntro from "./component/UseStateCompoent/UseStateIntro";
import PropsIntro from "./component/PropsComponent/PropsIntro";
import EventsIntro from "./component/SynthethicEvents/EventsIntro";
import ConRenIntro from "./component/CondiitonalRendering/ConRenIntro";
import UseRefIntro from "./component/useRefHook/UseRefIntro";
import MapIntro from "./component/MapPractice/MapIntro";
import { contextVariable } from "./component/MyCOntext/Context01";
import Acessasor from "./component/MyCOntext/Acessasor";
import Context02 from "./component/MyCOntext/Context02";
import Acessasor02 from "./component/MyCOntext/Acessasor02";
import UseEffectIntro from "./component/MyUseEffect/UseEffectIntro";

function App() {


  return (
    <div>

      {/* <ClassBaseIntro/> */}
      {/* <FunctionalBasedCompIntro/> */}
      {/* <UseStateIntro/> */}
      {/* <PropsIntro /> */}
      {/* <EventsIntro/> */}
      {/* <ConRenIntro/> */}
      {/* <UseRefIntro/> */}
      {/* <MapIntro/> */}

      {/* <Acessasor/> */}
      {/* <Context02/> */}
      {/* <Acessasor02/> */}
      <UseEffectIntro/>

    </div>
  );
}

export default App;
