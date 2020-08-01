import React, { Component } from 'react';
import history from '../../history';

import './dropdown.css';

class DropdownMenu extends Component {

    getMenuItemTitle = (menuItem) => {
        return menuItem.name;
    };

    getMenuItem = (menuItem) => {
        let title = this.getMenuItemTitle(menuItem);

        if (menuItem.branches && menuItem.branches.length > 0) {
            return (
                <li key={title}>
                    {title}
                    <DropdownMenu selectedBranch={this.props.selectedBranch} menu={menuItem.branches} branches={true} />
                </li>
            );
        } else {
            return <li key={title} onClick={() => this.navigateTo(menuItem)}>{title}</li>;
        }
    };

    navigateTo = (menuItem) => {
        this.props.selectedBranch(menuItem)
        history.push(`/category`);
    }

    render() {
        let { menu } = this.props;
        let options = [];
        menu.map((item) => {
            options.push(this.getMenuItem(item));
        });

        if (this.props.branches && this.props.branches === true)
            return <ul>{options}</ul>;

        return <ul className="dropdown-menu">{options}</ul>;
    };
}

export default DropdownMenu;
