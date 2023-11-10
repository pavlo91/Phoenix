import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';
import CountUp from 'react-countup';

const countupCode = `
  <Row className='gy-5'>
    <Col xxl xs={6} md={4} className='text-center'>
      <CountUp
        end={41251}
      >
        {({ countUpRef }) => (
          <div>
            <h1
              className="text-700 fw-bold mb-3"
              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
            />
            <p>(Default)</p>
          </div>
        )}
      </CountUp>
    </Col>
    <Col xxl xs={6} md={4} className='text-center'>
      <CountUp
        end={22112} 
        duration={10} 
        separator=","
      >
        {({ countUpRef }) => (
          <div>
            <h1
              className="text-700 fw-bold mb-3"
              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
            />
            <p>(Duration 10s)</p>
          </div>
        )}
      </CountUp>
    </Col>
    <Col xxl xs={6} md={4} className='text-center'>
      <CountUp
        end={35200} 
        duration={2.75}
        separator=""
      >
        {({ countUpRef }) => (
          <div>
            <h1
              className="text-700 fw-bold mb-3"
              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
            />
            <p>(No Separator)</p>
          </div>
        )}
      </CountUp>
    </Col>
    <Col xxl xs={6} md={4} className='text-center'>
      <CountUp
        end={50250} 
        duration={2.75} 
        separator=" "
      >
        {({ countUpRef }) => (
          <div>
            <h1
              className="text-700 fw-bold mb-3"
              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
            />
            <p>(Space)</p>
          </div>
        )}
      </CountUp>
    </Col>
    <Col xxl xs={6} md={4} className='text-center'>
      <CountUp
        end={62.241} 
        duration={2.75} 
        suffix="k" 
        decimals={2}
      >
        {({ countUpRef }) => (
          <div>
            <h1
              className="text-700 fw-bold mb-3"
              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
            />
            <p>(Suffix)</p>
          </div>
        )}
      </CountUp>
    </Col>
    <Col xxl xs={6} md={4} className='text-center'>
      <CountUp
        end={25100} 
        duration={2.75} 
        prefix="$" 
        separator=","
      >
        {({ countUpRef }) => (
          <div>
            <h1
              className="text-700 fw-bold mb-3"
              ref={countUpRef as LegacyRef<HTMLHeadingElement>}
            />
            <p>(Prefix)</p>
          </div>
        )}
      </CountUp>
    </Col>
  </Row>
`;

const CountupExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="React CountUp"
        description="A configurable React component wrapper around CountUp.js."
        link={{
          text: 'React Countup Documentation',
          url: 'https://github.com/glennreyes/react-countup'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={countupCode} scope={{ CountUp }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default CountupExample;
