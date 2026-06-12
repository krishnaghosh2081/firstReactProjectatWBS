import EntryProvider from "./context/EntryContext";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";

const App = () => {
    return <div>
            
            <EntryProvider>
                <Header/>
                <HomePage/>
            </EntryProvider>
            <Footer/>
    </div>;
};

export default App;
