const initialState ={"background":"#F8F8F8","headcolor":"#74FAC0","textcolor":"#383838"};

const changeThetheme =(state =initialState,action)=>{
    switch(action.type){
        case "darktheme": return state={"background":"#F8F8F8","headcolor":"#6D83F2","textcolor":"#383838"};
        case "lighttheme":return state={"background":"#191919","headcolor":"#74FAC0","textcolor":"#F8F8F8"};
        default: return state;
    }
}

export default changeThetheme;