import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeView } from '../../ducks/index'

class Nav extends Component {

    handleClick = ev => {
        const { changeView } = this.props;
        changeView({
            view: ev.target.innerText
        })
    }

    render() {
        console.log('nav props', this.props)
        const { tabs } = this.props;
        const navBtns = tabs.map( item => <button key={ item.id } data-id={ item.id } >{ item.name }</button> );

        return (
            <nav className='nav' onClick={ this.handleClick }>
                { navBtns }
            </nav>
        )
    }
}

export default connect(
    null,
    {
        changeView
    }
)(Nav)