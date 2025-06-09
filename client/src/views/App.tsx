import SideBar from "../components/menus/Sidebar";

const Tunnel = () => {
    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1 p-4">
                {/* Main content goes here */}
            </main>
        </div>
    )
}

export default Tunnel;