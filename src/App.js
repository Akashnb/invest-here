import { Analytics } from "@vercel/analytics/react";

import Header from "./common/Header";
import ModulesContainer from "./modules";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/css/tailwind.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <ModulesContainer />
      </main>
      <Analytics />
    </>
  );
}

export default App;
