import React from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from "reactstrap";
import {connect} from 'react-redux'

const NaviBar = ({dispatch,username}) => {

    return (
        <div>
            <Navbar className='nav d-flex align-items-center' fixed="top" dark>
                <NavbarBrand id="brand" className="" href="/">redditlite</NavbarBrand>
                {/* <Collapse navbar> */}
                <Nav className="" nav>
                    <NavItem>
                        <NavLink href="/createPost"><Button><i className="fa fa-pencil"> </i> Write Post</Button></NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Username{username} <i className="fa fa-user"></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>View Profile</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><i className="fa fa-sign-out"></i>Logout</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                {/* </Collapse> */}
            </Navbar>
        </div>
    );
};

const mapStateToProps = state =>({
    username: state.userReducer.username
})

export default connect(mapStateToProps)(NaviBar);