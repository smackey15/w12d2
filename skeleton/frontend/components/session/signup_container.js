import {connect} from "react-redux";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";

const mapDisptachToProps = (dispatch) => ({
    createNewUser: (formUser) => dispatch(createNewUser(formUser))
})

export default connect(null, mapDisptachToProps)(Signup);