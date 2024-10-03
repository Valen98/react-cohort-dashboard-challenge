import homeIcon from '../../assets/home.svg'
import profileIcon from '../../assets/profile.svg'
import './style.scss'

export default function LeftMenu() {
    return (
        <div className="leftMenuParent">
            <div className="iconDiv">
                <img src={homeIcon} className='homeIcon'/>
                <p>Home</p>
            </div>
            <div className='iconDiv'>
                <img src={profileIcon} className='profileIcon'/>
                <p>Profile</p>
            </div>
        </div>

    )
}