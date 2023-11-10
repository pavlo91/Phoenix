import Button from 'components/base/Button';
import { useSimpleAuthConfig } from 'layouts/SimpleAuthLayout';
import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let currentOtpIndex = 0;
const TwoFA = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setConfig } = useSimpleAuthConfig();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    const newOtp: string[] = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);
    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1);
    } else {
      setActiveOtpIndex(currentOtpIndex + 1);
    }
    setOtp(newOtp);
  };

  const handleOnKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    if (e.key === 'Backspace' && otp[currentOtpIndex] === '') {
      setActiveOtpIndex(currentOtpIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    setConfig({ logo: true, className: 'col-xxl-4' });
  }, []);

  return (
    <div>
      <div className="px-xxl-5">
        <div className="text-center mb-6">
          <h4 className="text-1000">Enter the verification code</h4>
          <p className="text-700 mb-0">
            An email containing a 6-digit verification code has been sent to the
            email address - exa*********.com
          </p>
          <p className="fs-10 mb-5">
            Don’t have access?
            <Link to="#!"> Use another method</Link>
          </p>
          <div className="verification-form">
            <div className="d-flex align-items-center gap-2 mb-3">
              {otp.map((_, index) => (
                <React.Fragment key={index}>
                  <Form.Control
                    ref={index === activeOtpIndex ? inputRef : null}
                    className="px-2 text-center"
                    type="number"
                    onChange={handleChange}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                      handleOnKeyDown(e, index)
                    }
                    value={otp[index]}
                  />
                  {index === 2 && <span>-</span>}
                </React.Fragment>
              ))}
            </div>
            <Form.Check type="checkbox" className="text-start mb-4">
              <Form.Check.Input type="checkbox" name="2fa-checkbox" />
              <Form.Check.Label
                className="fs-8 fw-medium"
                htmlFor="2fa-checkbox"
              >
                Don’t ask again on this device
              </Form.Check.Label>
            </Form.Check>
            <Button variant="primary" className="w-100 mb-5" type="submit">
              Verify
            </Button>
            <Link to="#!" className="fs-9">
              Didn’t receive the code?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFA;
