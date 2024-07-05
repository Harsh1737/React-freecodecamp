import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

// In the Layout component, we have a simple div element with the text Layout. This is a placeholder for the layout component that we will build in the next section. We will use this component to wrap the Header, Home, and Footer components in the App component.
// can do all these in app.js but it is better to have a separate layout component to wrap all the components in the App component. This will make the code more organized and easier to manage.
