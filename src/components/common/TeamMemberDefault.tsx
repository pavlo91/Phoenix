import { TeamMember } from 'data/users';
import bg21 from 'assets/phoenix/img/bg/bg-21.png';

const TeamMemberDefault = ({ member }: { member: TeamMember }) => {
  return (
    <div className="text-center mt-5 position-relative">
      <div className="team-avatar-container d-inline-block position-relative">
        <div
          className="bg-holder"
          style={{
            backgroundImage: `url(${bg21})`,
            backgroundSize: 'contain'
          }}
        />

        <img
          className="img-fluid rounded mb-3 position-relative"
          src={member.image}
          alt={member.name}
        />
      </div>
      <h4>{member.name}</h4>
      <h6 className="mb-3 fw-semi-bold">{member.designation}</h6>
      <div>
        {/* <a href="#!" className="text-primary me-3">
          <FontAwesomeIcon icon="facebook" />
        </a>
        <a href="#!" className="text-primary me-3">
          <FontAwesomeIcon icon="twitter" />
        </a>
        <a href="#!" className="text-primary">
          <FontAwesomeIcon icon="linkedin-in" />
        </a> */}
      </div>
    </div>
  );
};

export default TeamMemberDefault;
