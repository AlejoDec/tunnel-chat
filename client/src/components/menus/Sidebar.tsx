const SideBar = () => {

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <div>
            <nav>
                <ul>
                    {menuItems.map(item => (
                        <li key={item.name}>
                            <a href={item.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;