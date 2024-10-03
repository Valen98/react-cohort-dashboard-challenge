import "./style.scss";
import PropTypes from 'prop-types';

export default function ProfileIcon({letters, setFavouriteColour}) {

  return (
    <div className="userLogo" style={{"backgroundColor": setFavouriteColour}}>
      <p>{letters}</p>
    </div>
  );
}

ProfileIcon.propTypes = {
  letters: PropTypes.string
}