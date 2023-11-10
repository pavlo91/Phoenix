import { Settings } from "./types";
interface Props {
    num: number;
    step: number;
    settings: Settings;
    setSettings: (settings: Settings) => void;
}

const AccountSettings = (props: Props) => {
    const { num, step, settings, setSettings } = props;

    let otherClass = 'pending';
    if (step === num) otherClass = 'current';
    if (step > num) otherClass = 'completed';

    return (
        <div className={otherClass} data-kt-stepper-element="content">
            <div className="w-100">
                <div className="pb-5 pb-lg-7">
                    <h2 className="fw-bold text-dark">Account Settings</h2>
                    <div className="text-muted fw-semibold fs-6">If you need more info, please visit the
                        <a href="https://localgovai.uk/help" className="link-primary fw-bold">Help Page</a>.</div>
                </div>
                <div className="mb-10 fv-row">
                    <div className="mb-10 fv-row">
                        <div className="mb-10 fv-row">
                        <label className="form-label fs-8 mb-3">Domain Name</label>
                        <input type="text" className="form-control form-control-lg form-control-solid" name="domain_name" placeholder="" value={settings.domainName}
                            onChange={e => setSettings({...settings, domainName: e.target.value})}
                        />
                        </div>
                        <label className="form-label fs-8 mb-3">Confirm domain name</label>
                        <input type="text" className="form-control form-control-lg form-control-solid" name="organisation_domain" placeholder="" value={settings.domainConfirm}
                            onChange={e => setSettings({...settings, domainConfirm: e.target.value})}
                        />
                        <div className="form-text">Enter your organisation's domain so colleagues can join you</div>
                    </div>
                    <label className="d-flex align-items-center form-label fs-8 mb-3">Team Size
                    <span className="ms-1" data-bs-toggle="tooltip" title="How many people do you collaborate with">
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </i>
                    </span></label>
                    <div className="row mb-2" data-kt-buttons="true">
                        <div className="col">
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${settings.teamSize === '1-1' ? 'active' : ''}`}
                                onClick={() => setSettings({...settings, teamSize: '1-1'})}
                            >
                                <span className="fw-bold fs-7">1-1</span>
                            </label>
                        </div>
                        <div className="col">
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${settings.teamSize === '2-10' ? 'active' : ''}`}
                                onClick={() => setSettings({...settings, teamSize: '2-10'})}
                            >
                                <span className="fw-bold fs-7">2-10</span>
                            </label>
                        </div>
                        <div className="col">
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${settings.teamSize === '10-50' ? 'active' : ''}`}
                                onClick={() => setSettings({...settings, teamSize: '10-50'})}
                            >
                                <span className="fw-bold fs-7">10-50</span>
                            </label>
                        </div>
                        <div className="col">
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 ${settings.teamSize === '50+' ? 'active' : ''}`}
                                onClick={() => setSettings({...settings, teamSize: '50+'})}
                            >
                                <span className="fw-bold fs-7">50+</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-text">How how many people are in your team?</div>
                </div>
                <div className="mb-0 fv-row">
                    <label className="d-flex align-items-center form-label fs-8 mb-5">Account Plan
                    <span className="ms-1" data-bs-toggle="tooltip" title="The duration of your trial period will be determined by your account type">
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </i>
                    </span></label>
                    <div className="mb-0">
                        <label className="d-flex justify-content-between align-items-center mb-5 cursor-pointer"
                            onClick={() => setSettings({...settings, accPlan: 1})}
                        >
                            <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label">
                                        <i className="ki-duotone ki-bank fs-1 text-gray-600">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                </span>
                                <span className="d-flex flex-column">
                                    <span className="fw-bold text-gray-800 text-hover-primary fs-8">Organisation Account</span>
                                    <span className="fs-9 fw-semibold text-muted">An account for the entire organisation</span>
                                </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="radio" name="account_plan" value="1" defaultChecked />
                            </span>
                        </label>
                        <label className="d-flex justify-content-between align-items-center mb-5 cursor-pointer"
                            onClick={() => setSettings({...settings, accPlan: 2})}
                        >
                            <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label">
                                        <i className="ki-duotone ki-chart fs-1 text-gray-600">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                </span>
                                <span className="d-flex flex-column">
                                    <span className="fw-bold text-gray-800 text-hover-primary fs-8">Team Account</span>
                                    <span className="fs-9 fw-semibold text-muted">Built for teams</span>
                                </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="radio" name="account_plan" value="2" />
                            </span>
                        </label>
                        <label className="d-flex justify-content-between align-items-center mb-0 cursor-pointer"
                            onClick={() => setSettings({...settings, accPlan: 3})}
                        >
                            <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label">
                                        <i className="ki-duotone ki-chart-pie-4 fs-1 text-gray-600">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                        </i>
                                    </span>
                                </span>
                                <span className="d-flex flex-column">
                                    <span className="fw-bold text-gray-800 text-hover-primary fs-8">Sprtint Account</span>
                                    <span className="fs-9 fw-semibold text-muted">For startups, Incubators & Accelerators</span>
                                </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="radio" name="account_plan" value="3" />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;