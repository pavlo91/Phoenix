import React from 'react';
import { Form } from 'react-bootstrap';

const SocialSettingsSideBar = () => {
  return (
    <>
      <div className="border-bottom border-dashed pb-3 mb-4">
        <h5 className="text-900 mb-3">Who will be able to see your profile?</h5>
        <Form.Check type="radio" id="onlyMe">
          <Form.Check.Input
            type="radio"
            name="profiileVisibility"
            value="option1"
            defaultChecked
          />
          <Form.Check.Label htmlFor="onlyMe" className="fs-8">
            Only me
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="myFollowers">
          <Form.Check.Input
            type="radio"
            name="profiileVisibility"
            value="option2"
          />
          <Form.Check.Label htmlFor="myFollowers" className="fs-8">
            My followers
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="everyone">
          <Form.Check.Input
            type="radio"
            name="profiileVisibility"
            value="option3"
          />
          <Form.Check.Label htmlFor="everyone" className="fs-8">
            Everyone
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="border-bottom border-dashed pb-3 mb-4">
        <h5 className="text-900 mb-3">Who can tag you?</h5>
        <Form.Check type="radio" id="tagGroupMembers">
          <Form.Check.Input
            type="radio"
            name="tagGroupMembers"
            value="option1"
          />
          <Form.Check.Label htmlFor="tagGroupMembers" className="fs-8">
            Group Members
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="radio" id="tagEveryone">
          <Form.Check.Input
            type="radio"
            name="tagGroupMembers"
            value="option2"
            defaultChecked
          />
          <Form.Check.Label htmlFor="tagEveryone" className="fs-8">
            Everyone
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="border-bottom border-dashed pb-3 mb-4">
        <Form.Check type="checkbox" id="showEmail">
          <Form.Check.Input
            type="checkbox"
            name="showEmail"
            value="option1"
            defaultChecked
          />
          <Form.Check.Label htmlFor="showEmail" className="fs-8">
            Allow users to see my email
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox" id="showExperiences">
          <Form.Check.Input
            type="checkbox"
            name="showExperiences"
            value="option2"
          />
          <Form.Check.Label htmlFor="showExperiences" className="fs-8">
            Allow users to see my experiences
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox" id="showFollowers">
          <Form.Check.Input
            type="checkbox"
            name="showFollowers"
            value="option3"
          />
          <Form.Check.Label htmlFor="showFollowers" className="fs-8">
            Allow users to see my followers
          </Form.Check.Label>
        </Form.Check>
      </div>
      <div className="mb-4">
        <Form.Check type="checkbox" id="showPhone" className="form-switch">
          <Form.Check.Input
            type="checkbox"
            name="showPhone"
            value="option2"
            defaultChecked
          />
          <Form.Check.Label htmlFor="showPhone" className="fs-8">
            See my your phone number
          </Form.Check.Label>
        </Form.Check>
        <Form.Check type="checkbox" id="permitFollow" className="form-switch">
          <Form.Check.Input
            defaultChecked
            type="checkbox"
            name="permitFollow"
            value="option3"
          />
          <Form.Check.Label htmlFor="permitFollow" className="fs-8">
            Permit users to follow you.
          </Form.Check.Label>
        </Form.Check>
      </div>
    </>
  );
};

export default SocialSettingsSideBar;
