import { UserInfo } from "./types";

interface Props {
    num: number;
    step: number;
    userInfo: UserInfo;
    setUserInfo: (userInfo: UserInfo) => void;
}

const UserRegistration = (props: Props) => {
    const { num, step, userInfo, setUserInfo } = props;

    let otherClass = 'pending';
    if (step === num) otherClass = 'current';
    if (step > num) otherClass = 'completed';

    return (
        <div className={otherClass} data-kt-stepper-element="content">
            <div className="w-100">
                <div className="pb-5 pb-lg-7">
                    <h2 className="fw-bold text-dark">User Registration</h2>
                    <div className="text-muted fw-semibold fs-6">
                        If you need more info, please visit the 
                        <a href="https://localgovai.uk/help" className="link-primary fw-bold">Help Page</a>.
                    </div>
                </div>
                <div className="container">
                    <p>Already have an account? <a href="https://localgovai.uk/login">Sign in to your account.</a></p>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="first_name" className="form-label fs-8">First Name</label>
                            <input type="text" className="form-control" id="first_name" name="first_name" value={userInfo.firstName} onChange={e => setUserInfo({...userInfo, firstName: e.target.value})} />
                        </div>
                        <div className="col">
                            <label htmlFor="last_name" className="form-label fs-8">Last Name</label>
                            <input type="text" className="form-control" id="last_name" name="last_name" value={userInfo.lastName} onChange={e => setUserInfo({...userInfo, lastName: e.target.value})} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label fs-8">Username</label>
                        <input type="text" className="form-control" id="username" name="username" value={userInfo.userName} onChange={e => setUserInfo({...userInfo, userName: e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fs-8">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={userInfo.email} onChange={e => setUserInfo({...userInfo, email: e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fs-8">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={userInfo.password} onChange={e => setUserInfo({...userInfo, password: e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm_password" className="form-label fs-8">Confirm Password</label>
                        <input type="password" className="form-control" id="confirm_password" name="confirm_password" value={userInfo.confirmPwd} onChange={e => setUserInfo({...userInfo, confirmPwd: e.target.value})} />
                    </div>
                    <div className="divider-content-center mb-3">
                        Or use third-party login
                    </div>
                    <div className="d-flex justify-content-around mb-3">
                        <button className="btn btn-primary">Twitter</button>
                        <button className="btn btn-primary">Microsoft</button>
                        <button className="btn btn-primary">LinkedIn</button>
                        <button className="btn btn-primary">Apple</button>
                        <button className="btn btn-primary">Google</button>
                        <button className="btn btn-primary">Facebook</button>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" id="termsService" type="checkbox" checked={userInfo.policy} onChange={e => setUserInfo({...userInfo, policy: e.target.checked})} />
                        <label className="form-label fs--1 text-none fs-8" htmlFor="termsService">
                            I accept the 
                            <a href="https://localgovai.uk/legals/terms_of_service" target="_blank">terms of service</a> 
                            and 
                            <a href="https://localgovai.uk/legals/privacy_policy" target="_blank">privacy policy</a>
                        </label>
                    </div>
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </div>
            </div>
        </div>
    )
}

export default UserRegistration;