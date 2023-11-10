import SocialProfileCard from 'components/cards/SocialProfileCard';
import Events from 'components/modules/events/Events';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import SocialMessages from 'components/list-items/SocialMessages';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import SocialPosts from 'components/modules/social/SocialPosts';
import { events } from 'data/eventsData';
import { messages } from 'data/social/messages';
import { feedPosts, socialPhotos } from 'data/social/postsData';
import { Col, Row } from 'react-bootstrap';
import ProfileNavigation from 'components/list-items/ProfileNavigation';
import FeedTextarea from 'components/forms/FeedTextarea';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';
import profileImage from 'assets/phoenix/img/team/59.webp';

const Feed = () => {
  const { setFooterClass } = useMainLayoutContext();

  useEffect(() => {
    setFooterClass('d-none d-lg-block');
    return () => {
      setFooterClass('');
    };
  }, []);

  return (
    <>
      <div className="mb-9">
        <Row className="gy-3 gx-5 gx-xxl-6">
          <Col lg={5} xl={4} className="d-none d-lg-block">
            <SocialProfileCard showAbout={true} avatar={profileImage} />
            <ProfileNavigation />
            <div className="mb-8 mt-6">
              <SocialMessages messages={messages} />
            </div>
            <div className="mb-8">
              <SocialPhotos photos={socialPhotos} />
            </div>
            <Events events={events} title="Events" />
          </Col>
          <Col lg={7} xl={8}>
            <FeedTextarea />
            <SocialPosts posts={feedPosts} />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="home" className="d-lg-none" />
    </>
  );
};

export default Feed;
