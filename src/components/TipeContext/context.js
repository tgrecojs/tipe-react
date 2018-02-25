import { createContext } from 'react';


const TipeIOContext = createContext({
    loading: true,
    data : {}
    /** default ctx value {} */ 
});


//export default TipeIOContext

/**
const TipeProvider = TipeIOContext.Provider;
const TipeConsumer = TipeIOContext.Consumer;
export { 
    TipeProvider, TipeConsumer
}
*/