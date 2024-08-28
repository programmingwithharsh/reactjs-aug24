import Main from "./Main";
import { connect } from "react-redux";

function mapStateToProps(state) { // mapping redux state to react products props
    return {
        products: state
    }
}

const App = connect(mapStateToProps)(Main);
export default App;