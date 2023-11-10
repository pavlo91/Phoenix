interface Props {
    num: number;
    step: number;
}

const Success = (props: Props) => {
    const { num, step } = props;

    let otherClass = 'pending';
    if (step === num) otherClass = 'current';
    if (step > num) otherClass = 'completed';

    return (
        <div className={otherClass} data-kt-stepper-element="content">
            <div className="w-100">
                <div className="pb-8 pb-lg-10">
                    <h2 className="fw-bold text-dark">Your Are Done!</h2>
                    <div className="text-muted fw-semibold fs-6">If you need more info, please
                    <a href="../dist/.html" className="link-primary fw-bold">Sign In</a>.</div>
                </div>
                <div className="mb-0">
                    <div className="fs-6 text-gray-600 mb-5">Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience.</div>
                    <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                        <i className="ki-duotone ki-information fs-2tx text-warning me-4">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                        </i>
                        <div className="d-flex flex-stack flex-grow-1">
                            <div className="fw-semibold">
                                <h4 className="text-gray-900 fw-bold">We need your attention!</h4>
                                <div className="fs-6 text-gray-700">To start using great tools, please,
                                <a href="../dist/utilities/wizards/vertical.html" className="fw-bold">Create Team Platform</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success;