import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Container } from "@mui/material"

const Layout = () => {
    return (
        <>

            <Container>
                <div className="h-[10vh]">
                    <Navbar />
                </div>
                <div className=" sm:mt-[10vh] lg:mt-0">

                    <Outlet />
                </div>
            </Container>
        </>
    )
}

export default Layout