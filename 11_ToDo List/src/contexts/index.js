export { ToDoProvider, ToDoContext, useTodo} from './ToDoContext'

// ToDoProvider is a provider of the context i.e stores the data
// ToDoContext is the context that stores the data
// useTodo is a custom hook that has context vallue and returns the context value
// It avoids the need to import ToDoContext in every component that uses it and
// all the methods in the context need to be imported in the component where it is used
