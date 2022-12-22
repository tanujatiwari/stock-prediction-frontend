import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='Header-container'>
                <div>
                    <p>Optimize your <span>data</span></p><i className="fa fa-sort"></i>
                </div>
                <div className='Header-dashboard-features'>
                    <Link to="" className='Header-edit-dashboard'>Edit Dashboard</Link>
                    <Link to="" className='Header-add-data'>Add Data</Link>
                </div>
            </div>
        </div>
    )
}

export default Header