import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ( { loggedIn } ) => (
    <div>
        <Link to="/" className="link">Job</Link>
        <Link to="/job_add" className="link">Job Add</Link>
        <Link to="/job_list" className="link">Job List</Link>
        { loggedIn && <Link to="/secret" className="link">Secret</Link> }
    </div>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Header );
