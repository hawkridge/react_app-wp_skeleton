import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
import { connect } from 'react-redux'
import { view } from './ducks/index'
import Journal from './components/Journal/Journal'

class Root extends Component {

    getId() {
        return Math.round((Math.random() * Date.now()));
    }

    getTabs() {
        const tabs = [
            {
                name: 'Home',
                id: this.getId()
            },{
                name: 'About',
                id: this.getId()
            },{
                name: 'Goods',
                id: this.getId()
            },{
                name: 'Contacts',
                id: this.getId()
            },
        ]

        return tabs
    }

    defineContent() {
        const { view } = this.props;
        const viewsMap = {
            'Home': <div>Home, sweet home...</div>,
            'About': <div>Its all about us</div>,
            'Goods': <Journal />,
            'Contacts': <div>Address</div>,
            '': <div></div>
        }
        return viewsMap[view]
    }

    render() {
        const tabs = this.getTabs();

        return (
            <div className='container'>
                <header>
                    <Nav tabs={ tabs } />
                </header>

                <section className='content'>
                    { this.defineContent() }
                </section>

                <footer>Fooooter</footer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    view: view(state)
})

export default connect(
    mapStateToProps,
    null
)(Root)