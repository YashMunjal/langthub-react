const showRepo = (state='yashmunjal',action)=>{
    switch(action.type){
        case 'CLICKED':
            return [
                state,
                action.payload
            ];
        default :
            return state;
    }
}

export default showRepo;