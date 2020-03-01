const ADD_CATEGORY = 'CATEGORY/ADD'

const add_category = payload =>({
    type:ADD_CATEGORY,
    payload:{
        ...payload,
        id: Math.random().toString(10)
    }
});

const initialState = {
    data:[{ id: 1, name : 'Default'}]
}

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_CATEGORY:
                return{
                    ...state,
                    data:[...state.data, action.payload]
                }
        default:
            return state;
    }
}