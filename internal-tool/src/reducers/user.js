export default function(state = null, action) {
    switch (action.type) {
      case "REGISTER":
         // console.log('action.payload',action.payload.data);
         if(action.payload.data.token){
             sessionStorage.setItem('token',action.payload.data.token);
            return true;
         }
         else{
             return false;
         }
    }
    return state;
    
}