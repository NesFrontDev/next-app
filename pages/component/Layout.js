import AppBar from "./AppBar";
import Footer from "./Footer";



const Layout = (props) => (
    <div>
      <AppBar />
      {props.children}
      <Footer />
    </div>
  )
  
  export default Layout