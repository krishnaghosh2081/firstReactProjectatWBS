import EntryProvider from "./context/EntryContext";
import Header from "./component/Header";
import HomePage from "./component/HomePage";

const App = () => {
    return <div>
            
            <EntryProvider>
                <Header/>
                <HomePage/>
            </EntryProvider>
    </div>;
};

export default App;
