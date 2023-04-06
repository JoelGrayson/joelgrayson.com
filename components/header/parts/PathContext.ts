import { createContext } from 'react';

export const PathContext=createContext<string>('');
// This context exists so all components can access what page we are currently on, in order that they can turn yellow if on current page.
