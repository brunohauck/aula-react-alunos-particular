import Footer from "../componets/footer";
import Header from "../componets/header";

function Home() {

    const name = "Bruno Hauck";
    return (
        <>
            <Header name={name} />
            <Footer /> 
        </>
    );
  }
  
export default Home;