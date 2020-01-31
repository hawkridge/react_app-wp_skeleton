import React, { Component } from 'react'
import { connect } from 'react-redux'
// ac
import { getPayments } from '../../ducks/index'
// selectors
import { view, loading, payments } from '../../ducks/index'
import JournalItem from './JournalItem'

class Journal extends Component {

    componentDidMount() {
        const { getPayments } = this.props;
        getPayments()
            .then(response => response)
    }

    getPaymentsList = (payments) => {
        if (!payments || (payments && !payments.length)) return null;

        const list = payments.map(payment => <JournalItem key={payment.id} name={payment.name} id={payment.id}/>)

        return list;
    }

    render() {
        const { loading, payments } = this.props;
        const paymentsList = this.getPaymentsList(payments);

        return (
            <div>
                { loading ? <div>Loading>>></div> : paymentsList }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        view: view(state),
        loading: loading(state),
        payments: payments(state)
    }),
    {
        getPayments
    }
)(Journal);