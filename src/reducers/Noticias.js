const ADD_NEWS = 'NEWS/ADD'
/* 
    ID,
    NAME,
    CATEGORY_ID

*/
const add_news = payload =>({
    type:ADD_NEWS,
    payload:{
        ...payload,
        id: Math.random().toString(10)
    }
});

const initialState = {
    data:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_NEWS:
                return{
                    ...state,
                    data:[...state.data, action.payload]
                }
        default:
            return state;
    }
}