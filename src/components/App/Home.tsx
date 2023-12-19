import { Outlet } from "react-router-dom"
import Navbar from "../common/Navbar"

export default function Home() {
  return (
    <>
        <Navbar />
        <main className="grow">
            <Outlet />
        </main>
    </>
    )
}