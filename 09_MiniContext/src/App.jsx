import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {


  //can fetch user data here also and pass it to UserContextProvider
  // const user = {username: 'user1'}
  // return (
  //   <UserContextProvider value={user}>
  //     <Login />
  //     <Profile />
  //   </UserContextProvider>
  // )

  return (
    <UserContextProvider>

    <Login />
    <Profile />

    </UserContextProvider>
  )
}

export default App
