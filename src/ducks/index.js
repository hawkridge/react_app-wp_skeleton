import { request } from '../services/api'


// constants
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const GET_PAYMENTS = 'GET_PAYMENTS';
export const START_FETCHING = 'START_FETCHING';
export const END_FETCHING = 'END_FETCHING';
export const FETCHING_ERROR = 'FETCHING_ERROR';

// action creators
export const changeView = ( data ) => ({
    type: CHANGE_VIEW,
    payload: {
        view: data.view
    }
});

export const getPayments = ( data ) => {
    return (dispatch, getState) => {
        dispatch({
            type: START_FETCHING
        })

        return request('/api')
            .then(response => {
                dispatch(
                    {
                        type: GET_PAYMENTS,
                        payload: {
                            payments: response
                        }
                    }
                )

                return response
            })
            .catch(err => {
                dispatch(
                    {
                        type: FETCHING_ERROR
                    }
                )
            })
            .finally( () => {
                dispatch(
                    {
                        type: END_FETCHING
                    }
                )
            })

    }
}


// selectors
export const view = state => state.root.view;
export const loading = state => state.root.loading;
export const payments = state => state.root.payments;


// reducer

const initialState = {
    view: '',
    payments: null,
    loading: false
};

export const reducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch(action.type) {
        case CHANGE_VIEW:
            return Object.assign({}, state, { view: action.payload.view })
        case GET_PAYMENTS:
            return Object.assign({}, state, { payments: action.payload.payments })
        case START_FETCHING:
            return Object.assign({}, state, { loading: true })
        case END_FETCHING:
            return Object.assign({}, state, { loading: false })
        case FETCHING_ERROR:
            return Object.assign({}, state, { loading: false })
        default:
            return state
    }
}