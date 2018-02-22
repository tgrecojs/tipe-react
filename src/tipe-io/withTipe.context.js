import { createContext } from 'react';

const TipeContext = createContext('graphql');

export const TipeProvider = TipeContext.Provider;

export const TipeConsumer = TipeContext.Consumer;
