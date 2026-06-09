import EntryProvider from "./context/EntryContext";
import Header from "./component/Header";

const App = () => {
    return <div>
            
            <EntryProvider>
                <Header/>
            </EntryProvider>
    </div>;
};

export default App;
