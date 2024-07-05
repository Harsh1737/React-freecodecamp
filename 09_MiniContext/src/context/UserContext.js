// Generally js not jsx
//cab be login context, products, cart, theme context, etc

import React from 'react';

// Create context
const UserContext = React.createContext();

export default UserContext;

//Context is a way to pass data through the component tree without having to pass props down manually at every level.
//Context is created using React.createContext() method.
//Context gives us a Provider and a Consumer component to use.
//Every context is a Provider and a Consumer, a wrapper.
//Every context object comes with a Provider React component that allows consuming components to subscribe to context changes.
//Provider provides data(var) to the components that are in the tree.
//Provider is used to wrap the components that need access to the context.
//Consumer is used to access the context in the components.