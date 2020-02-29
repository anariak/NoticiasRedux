const ADD_CATEGORY = 'CATEGORY/ADD'

const add_category = payload =>({
    type:ADD_CATEGORY,
    payload
});

const initialState = {
    data:[{ id: 1, name : 'Default'}]
}

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_CATEGORY:
            
            break;
    
        default:
            break;
    }
}