export const NavBar = () => {
    return (
    <nav>
        <div>
            <ul>
                <li className='navItem'><button><a className='navLink' href="#">Collares</a></button> {/* Enlace a la página de collares */}</li>
                <li className='navItem'> <button><a className='navLink' href="#">Platos</a></button> {/* Enlace a la página de platos */}</li>
                <li className='navItem'> <button><a className='navLink' href="#">Juguetes</a></button> {/* Enlace a la página de juguetes */}</li>
            </ul>
        </div>
    </nav>
            )
}
