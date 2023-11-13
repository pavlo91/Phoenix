import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import craftLogo from "assets/craft/images/logo-white.svg";
import { Button } from "react-bootstrap";

import AccountType from "./AccountType";
import AccountSettings from "./AccountSettings";
import OrganisationRegistration from "./OrganisationRegistration";
import UserRegistration from "./UserRegistration";
import BillingDetails from "./BillingDetails";
import Success from "./Success";
import Stepper from "./Stepper";
import { Settings, Organisation, UserInfo, Billing } from "./types";

const initialSettings: Settings = {
    domainName: '',
    domainConfirm: '',
    teamSize: '1-1',
    accPlan: 1
}

const initialOrganisation: Organisation = {
    name: '',
    description: '',
    type: '1',
    businessDescription: '',
    contactEmail: 'corp@support.com'
}

const initialUserInfo: UserInfo = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPwd: '',
    policy: false
}

const initialBilling: Billing = {
    nameOnCard: '',
    cardNumber: '4111 1111 1111 1111',
    expMonth: '',
    expYear: '',
    cvv: '',
    saveCard: true
}

const Register = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const [accountType, setAccountType] = useState("government");

    const [accSettings, setAccSettings] = useState<Settings>(initialSettings);

    const [organisation, setOrganisation] = useState<Organisation>(initialOrganisation);

    const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);

    const [billing, setBilling] = useState<Billing>(initialBilling);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setStep(step => step + 1);
            setLoading(false);
        }, 1000);
    }

    return (
        <div className="d-flex flex-column flex-root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-dark stepper-column">
                <div className="d-flex flex-column flex-lg-row-auto w-xl-400px positon-xl-relative bg-dark" data-bs-theme="light">
                    <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-400px scroll-y">
                        <div className="d-flex flex-row-fluid flex-column align-items-center align-items-lg-start p-10 p-lg-20">         
                            <a href="/craft/index.html" className="mb-10 mb-lg-20">
                                <img alt="Logo" src={craftLogo} className="h-40px" />
                            </a>    
                            <div className="stepper-nav">
                                <Stepper num={1} title='Account Type' desc='Select your account type' current={step} />            
                                <Stepper num={2} title='Account Settings' desc='Configure your account settings' current={step} />            
                                <Stepper num={3} title='Organisation Registration' desc='Create your Organisations account' current={step} />            
                                <Stepper num={4} title='User Registration' desc='Create your profile' current={step} />            
                                <Stepper num={5} title='Billing Details' desc='Provide your payment info for an extended trial' current={step} />            
                                <Stepper num={6} title='Success !!!' desc='Your account has been created!' current={step} />
                            </div>
                        </div>
                        <div className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-250px" style={{backgroundImage: "url(/craft/assets/media/)"}}> 
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row-fluid py-5">
                    <div className="d-flex flex-center flex-column flex-column-fluid">
                        <div className="w-lg-700px p-5 p-lg-8 mx-auto">
                        <form className="my-auto pb-5" noValidate={true} id="kt_create_account_form">
                            <AccountType num={1} step={step} accountType={accountType} setAccountType={setAccountType} />
                            <AccountSettings num={2} step={step} settings={accSettings} setSettings={setAccSettings} />
                            <OrganisationRegistration num={3} step={step} organisation={organisation} setOrganisation={setOrganisation} />
                            <UserRegistration num={4} step={step} userInfo={userInfo} setUserInfo={setUserInfo} />
                            <BillingDetails num={5} step={step} billing={billing} setBilling={setBilling} />
                            <Success num={6} step={step} />

                            <div className="d-flex justify-content-between align-items-center pt-7">
                                <div className="mr-2">
                                    {step > 1 && <Button variant="outline-primary" size="lg" className="me-4" onClick={() => setStep(step => step - 1)}>
                                        <FontAwesomeIcon icon={faArrowLeft} className="me-1" />
                                        Previous
                                    </Button>}
                                    {step === 6 && <a className="btn btn-lg btn-primary me-3" href="../dist/index.html">Go to Dashboard</a>}
                                </div>
                                {step !== 6 && <div>
                                    {step > 3 ?
                                        <Button variant="primary" size="lg">
                                            {loading ? 
                                                <span className="indicator-progress">
                                                    Please wait...
                                                    <FontAwesomeIcon icon={faSpinner} className="ms-2" />
                                                </span>
                                                :
                                                <span className="indicator-label"  onClick={handleSubmit}>
                                                    Submit
                                                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                                                </span>
                                            }
                                        </Button>
                                        :
                                        <Button variant="primary" size="lg" onClick={() => setStep(step => step + 1)}>
                                            Continue
                                            <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                                        </Button>
                                    }
                                </div>}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-center flex-wrap fs-6 p-3 pb-0">
                    <div className="d-flex flex-center fw-semibold fs-7">
                        <a href="https://keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">About</a>
                        <a href="https://devs.keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">Support</a>
                        <a href="https://themes.getbootstrap.com/product/craft-bootstrap-5-admin-dashboard-theme" className="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
		</div>
    )
}

export default Register;