 import { configureStore } from "@reduxjs/toolkit"; 


import PreloaderSlice from "./features/PreloaderSlice";




 const Store = configureStore({


    reducer:{
        
        
        preloader:PreloaderSlice.reducer


    }


 })




 export default Store;