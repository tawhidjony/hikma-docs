import { Link, Outlet } from "react-router"

const HomeLayout = () => {
  return (
    <div>
        <nav>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">Hikma Docs</h1>
            </div>
            <div className="container mx-auto">
                <Link to="/hikma-docs/">Home</Link>
                <Link to="/hikma-docs/docs">Docs</Link>
            </div>
        </nav>
        <div className="container mx-auto">
            <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout