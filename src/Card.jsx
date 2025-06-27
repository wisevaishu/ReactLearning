import profilePic from './assets/channels4_profile.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="Profile Picture" className="card-image"></img>
            <h2 className='card-title'>Wise</h2>
            <p className='card-text'>This is my channel</p>
        </div>
    );
}
export default Card