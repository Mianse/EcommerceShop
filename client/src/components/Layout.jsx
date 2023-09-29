import Header from "./Header"
import Footer from "./Footer"
import {Helmet} from 'react-helmet'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
const Layout = ({children, title,description,keywords,author}) => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
               <div>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
</div>

            </Helmet>
        <Header/>
        <main style={{minHeight : "70vh"}}>
          <ToastContainer/>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: "Ecommerce App",
  description: "Mern Stack app",
  keywords: "mern,react,node,mongodb",
  authr: "Damian"
}

export default Layout
