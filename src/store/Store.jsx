 import { configureStore } from "@reduxjs/toolkit"; 


import PreloaderSlice from "./features/PreloaderSlice";



import IncomponentPreloaderSlice from "./features/IncomponentPreloaderSlice";


 const Store = configureStore({


    reducer:{
        
        
        preloader:PreloaderSlice.reducer,

        incomponent:IncomponentPreloaderSlice.reducer,

    }


 })




 export default Store;