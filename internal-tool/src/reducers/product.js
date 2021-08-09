export default function(state = null, action) {
    switch (action.type) {
      case "ALL_PRODUCTS":
         // console.log('action.payload',action.payload.data);
         console.log("all produncts")
         console.log('data',action.payload.data);
         return action.payload.data;

         case "CURRENT_PRODUCT":
             return action.payload.data;
    }
    return state;
    
}