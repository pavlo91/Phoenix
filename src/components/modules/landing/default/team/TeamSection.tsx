import TeamMemberDefault from 'components/common/TeamMemberDefault';
import { defaultTeamMembers } from 'data/users';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bgLeft17 from 'assets/phoenix/img/bg/bg-left-17.png';
import bgRight17 from 'assets/phoenix/img/bg/bg-right-17.png';

const TeamSection = () => {
  return (
    <section id="team">
      <div
        className="position-absolute h-70 w-100 bg-soft"
        style={{ transform: 'skew(0,-10deg)', top: '10%' }}
      />
      <div
        className="bg-holder z-index-2"
        style={{
          backgroundImage: `url(${bgLeft17})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left center'
        }}
      />
      <div
        className="bg-holder z-index-2"
        style={{
          backgroundImage: `url(${bgRight17})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right center'
        }}
      />

      <div
        className="container-small position-relative py-1 px-lg-7 px-xxl-3"
        style={{ zIndex: 10 }}
      >
        <Row>
          <Col xs={12} className="mb-4 text-center text-sm-start">
            <h4 className="text-primary fw-bolder mb-3">Team</h4>
            <h2>Our small team behind our success</h2>
          </Col>
          <Col md={6} className="text-center text-sm-start">
            <p>
              We have a small but strong development team to follow up on the
              development process. Reach out to us for further information.
            </p>
          </Col>
          <Col md={6} className="text-center text-sm-start">
            <p>
              The team is ready to answer all your questions within minutes. The
              efficient team is always at your beck and call.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center ps-lg-11 pe-lg-9">
          {defaultTeamMembers.map(member => (
            <Col key={member.name} sm={6} md={4} lg={3}>
              <TeamMemberDefault member={member} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TeamSection;
