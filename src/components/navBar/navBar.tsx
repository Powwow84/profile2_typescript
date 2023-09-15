import {Link} from 'react-router-dom'



export default function NavBar() {
    
    return(
        <div className='nav'>
            <ul className='nav'>
            <li><Link to='/' className="home">Home</Link></li>
            <li><Link to='/projects' className=''>Projects</Link></li>
            <li><Link to='/about' className='home'>About Pao</Link></li>
            <li><Link to='/contact' className='home'>Contact Me</Link></li>
            </ul>
        </div>
    )
}