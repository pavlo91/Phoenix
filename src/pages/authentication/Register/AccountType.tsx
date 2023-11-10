interface Props {
    num: number;
    step: number;
    accountType: string;
    setAccountType: (type: string) => void
}

const AccountType = (props: Props) => {
    const { num, step, accountType, setAccountType } = props;

    let otherClass = 'pending';
    if (step === num) otherClass = 'current';
    if (step > num) otherClass = 'completed';

    return (
        <div className={otherClass} data-kt-stepper-element="content">
            <div className="w-100">
                <div className="pb-10 pb-lg-15">
                    <h3 className="stepper-title fs-5">Choose Your Account Type</h3>
                    <div className="stepper-desc fw-normal">Select your account type</div>
                        <span className="ms-1" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type">
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </i>
                    </span>                         
                    <div className="text-muted fw-semibold fs-7">If you need more info, please visit the
                    <a href="https://localgovai.uk/help" className="link-primary fw-bold">Help Page</a>.</div>
                </div>
                <div className="fv-row">
                    <div className="row">
                        <div className="col-lg-6" onClick={() => setAccountType('government')}>
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10 ${accountType === 'government' ? 'active' : ''}`} htmlFor="kt_create_account_form_account_type_personal">
                                <i className="ki-duotone ki-badge fs-3x me-5">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                    <span className="path5"></span>
                                </i>
                                <span className="d-block fw-semibold text-start">
                                    <span className="text-dark fw-bold d-block fs-7 mb-2">Government Account</span>
                                    <span className="text-muted fw-semibold fs-8">For Governement & Public Sector Organisations</span>
                                </span>
                            </label>
                        </div>
                        <div className="col-lg-6" onClick={() => setAccountType('social')}>
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10 ${accountType === 'social' ? 'active' : ''}`} htmlFor="kt_create_account_form_account_type_corporate">
                                <i className="ki-duotone ki-briefcase fs-3x me-5">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                <span className="d-block fw-semibold text-start">
                                    <span className="text-dark fw-bold d-block fs-7 mb-2">Social Good Account</span>
                                    <span className="text-muted fw-semibold fs-8">For Not-for-profit and for social impact Organisations</span>
                                </span>
                            </label>
                        </div>
                        <div className="col-lg-6" onClick={() => setAccountType('social')}>
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10 ${accountType === 'social' ? 'active' : ''}`} htmlFor="kt_create_account_form_account_type_corporate">
                                <i className="ki-duotone ki-briefcase fs-3x me-5">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                <span className="d-block fw-semibold text-start">
                                    <span className="text-dark fw-bold d-block fs-7 mb-2">Social Good Account</span>
                                    <span className="text-muted fw-semibold fs-8">For Not-for-profit and for social impact Organisations</span>
                                </span>
                            </label>
                        </div>
                        <div className="col-lg-6" onClick={() => {setAccountType('personal'); console.log('personal')}}>
                            <label className={`btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10 ${accountType === 'personal' ? 'active' : ''}`} htmlFor="kt_create_account_form_account_type_corporate">
                                <i className="ki-duotone ki-briefcase fs-3x me-5">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                                <span className="d-block fw-semibold text-start">
                                    <span className="text-dark fw-bold d-block fs-7 mb-2">Personal Account</span>
                                    <span className="text-muted fw-semibold fs-8">For peronsal and private use</span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountType;