import { createContext } from 'react';


const TipeIOContext = createContext({
    loading: true,
    data : {}
    /** default ctx value {} */ 
});

const TipeProvider = TipeIOContext.Provider;

const TipeConsumer = TipeIOContext.Consumer;

export { 
    TipeProvider as Provider,
    TipeConsumer as Consumer
}