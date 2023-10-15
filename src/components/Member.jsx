const Member = ({ photo, role, name, bio }) => {
    return (
        <>
            <img className="member-image" src={photo} alt={name} />
            <nav></nav>
            <div className="information-container">
                <div className="role-name-container">
                    <h5>{role}</h5>
                    <h3>{name}</h3>
                </div>
                <p>{bio}</p>
            </div>
        </>
    );
};

export default Member;
