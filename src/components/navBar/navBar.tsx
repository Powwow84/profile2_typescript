import {Link} from 'react-router-dom'



export default function NavBar() {
    
    return(
        <div>
            <Link to='/' className='home'>Home</Link>
            <Link to='/projects' className='home'>Projects</Link>
            <Link to='/about' className='home'>About Pao</Link>
            <Link to='/contact' className='home'>Contact Me</Link>
        </div>
    )
}