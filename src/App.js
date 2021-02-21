import { Container } from "@material-ui/core";
import Item_scroll from "./screens/Item_scroll";
import Categories from "./screens/Categories";
import Footer from "./screens/Footer";
import { Getstarted } from "./screens/Getstarted";
import Header from "./screens/Header";
import Navigation from "./screens/Navigation";
import { Popularcourses } from "./screens/Popularcourses";
import Login from "./screens/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./screens/Signup";
import Morecourses from "./screens/Morecourses";
import { Knowmore } from "./screens/Knowmore";
import { Topics } from "./screens/Topics";
import Facultyslider from "./Facultyslider";
import Fashiondesign from "./screens/Fashiondesign";
import Fsbody from "./screens/Fsbody";
import { Fsnew } from "./screens/Fsnew";
import { Heading } from "./screens/Try/Heading";
import Body from "./screens/Try/Body";
import { Featured } from "./screens/Try/Featured";
import { Workpro } from "./screens/Try/Workpro";

function App() {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      {/* //   <Router>
    //     <Switch>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/abcd" >
    //         <Signup />
    //       </Route>
    //       <Route path="/More">
    //         <Morecourses/>
    //       </Route>
    //     </Switch>

    //     <Header /> 
    //     <Navigation />
    //     <Getstarted />
    //     <Categories />
    //     <Topics/>
    //     <Popularcourses/>
    //     <Knowmore />
    //   {/* <Facultyslider/>         */}
      {/* //   </Router> */}

      {/* <Container style={{backgroundColor:"#4F4846"}}>
    <Fashiondesign />
    
    </Container>
  <Container>
  <Fsbody/>
  </Container>
  <Container>
<Fsnew/>
  </Container>
    </div> */}

      <Router>
        <Switch>
          <Heading />

          <Container style={{ backgroundColor: "whitesmoke" }}>
            <Body />
          </Container>

          <Featured />
          <Workpro />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
