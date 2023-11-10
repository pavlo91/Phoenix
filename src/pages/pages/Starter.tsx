import React from 'react';
import { Stack } from 'react-bootstrap';
import starterImg from 'assets/phoenix/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/phoenix/img/spot-illustrations/dark_2.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';

const Starter = () => {
  return (
    <Stack className="flex-center content-min-h">
      <div className="text-center py-9">
        <img
          src={starterImg}
          width={470}
          className="img-fluid mb-7 d-dark-none"
          alt="starter"
        />
        <img
          src={starterDarkImg}
          width={470}
          className="img-fluid mb-7 d-light-none"
          alt="starter"
        />
        <h1 className="text-800 fw-normal mb-5">Lets Create your first Knowledge base.</h1>
        <Button
          as={Link}
          className="btn btn-lg btn-primary"
          to="/documentation/getting-started"
        >
          Getting Started
        </Button>
      </div>
    </Stack>
  );
};

export default Starter;
