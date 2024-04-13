
import TopBar from "./page/global/TopBar";
import SiderBar from "./page/global/SideBar";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./page/Dashboard";
import CategoryPage from "./page/CategoryPage";

const App=()=>{
    return(
        <div className="App">
          <SiderBar />
          <main className="content">
          <TopBar/>
          <Routes>
            <Route  path="/" element={<Dashboard/>}>;
            </Route>
            <Route  path="/Category" element={<CategoryPage/>}/>
          </Routes>
          </main>
        </div>
    )
}

export default App;