const initialState ={"background":"#F8F8F8","headcolor":"#6D83F2","textcolor":"#383838","skillsbackground":"#F7F5F2"};

const changeThetheme =(state =initialState,action)=>{
    switch(action.type){
        case "darktheme": return state={"background":"#F8F8F8","headcolor":"#6D83F2","textcolor":"#191919","skillsbackground":"#DFDFDE"};
        case "lighttheme":return state={"background":"#191919","headcolor":"#74FAC0","textcolor":"#F8F8F8","skillsbackground":"#000000"};
        default: return state;
    }
}

export default changeThetheme;