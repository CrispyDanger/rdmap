import React, {useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import NavBar from "../components/NavBar"
import {checkAuthenticated, load_user} from "../actions/auth"
import { load_projects } from "../actions/projects";


const Layout = (props) => {
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
        props.load_projects();
    }, [])

    return (
    <div>
        <NavBar />
        {props.children}
    </div>
    )
    };

export default connect(null, {load_projects, checkAuthenticated, load_user})(Layout);
