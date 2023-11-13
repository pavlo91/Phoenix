import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImg from 'assets/hyper/images/users/avatar-3.jpg';

const UserBox = () => {
    return (
        <Card className="text-center">
            <Card.Body>
                <img src={profileImg} className="rounded-circle avatar-lg img-thumbnail" alt="" />
                <h4 className="mb-0 mt-2">Dominic Keller</h4>
                <p className="text-muted font-14">Founder</p>
            </Card.Body>
        </Card>
    );
};

export default UserBox;
