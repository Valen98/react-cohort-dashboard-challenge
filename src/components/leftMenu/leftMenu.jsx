import { useNavigate } from 'react-router-dom'
import homeIcon from '../../assets/home.svg'
import profileIcon from '../../assets/profile.svg'
import './style.scss'

export default function LeftMenu() {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }   

    return (
        <div className="leftMenuParent">
            <div className="iconDiv" onClick={navigateHome}>
                <img src={homeIcon} className='homeIcon'  />
                <p>Home</p>
            </div>
            <div className='iconDiv'>
                <img src={profileIcon} className='profileIcon'/>
                <p>Profile</p>
            </div>
        </div>

    )
}