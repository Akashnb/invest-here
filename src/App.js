import Header from "./common/Header";
import ModulesContainer from "./modules";

import './assets/css/tailwind.css';

function App() {
  return (
    <>
     <Header />
     <main className="">
       <ModulesContainer />
     </main>
    </>
  );
}

export default App;
