import { Billing } from "./types";

interface Props {
    num: number;
    step: number;
    billing: Billing;
    setBilling: (billing: Billing) => void;
}

const BillingDetails = (props: Props) => {
    const { num, step, billing, setBilling } = props;

    let otherClass = 'pending';
    if (step === num) otherClass = 'current';
    if (step > num) otherClass = 'completed';

    return (
        <div className={otherClass} data-kt-stepper-element="content">
            <div className="w-100">
                <div className="pb-10 pb-lg-15">
                    <h2 className="fw-bold text-dark">Billing Details</h2>
                    <div className="text-muted fw-semibold fs-6">If you need more info, please check out
                    <a href="#" className="text-primary fw-bold">Help Page</a>.</div>
                </div>
                <div className="d-flex flex-column mb-7 fv-row">
                    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                        <span className="required">Name On Card</span>
                        <span className="ms-1" data-bs-toggle="tooltip" title="Specify a card holder's name">
                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                            </i>
                        </span>
                    </label>
                    <input type="text" className="form-control form-control-solid" placeholder="" name="card_name" value={billing.nameOnCard}
                        onChange={e => setBilling({...billing, nameOnCard: e.target.value})}
                    />
                </div>
                <div className="d-flex flex-column mb-7 fv-row">
                    <label className="required fs-6 fw-semibold form-label mb-2">Card Number</label>
                    <div className="position-relative">
                        <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" value={billing.cardNumber}
                            onChange={e => setBilling({...billing, cardNumber: e.target.value})}
                        />
                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                            <img src="assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                            <img src="assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                            <img src="assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
                        </div>
                    </div>
                </div>
                <div className="row mb-10">
                    <div className="col-md-8 fv-row">
                        <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
                        <div className="row fv-row">
                            <div className="col-6">
                                <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month" value={billing.expMonth}
                                    onChange={e => setBilling({...billing, expMonth: e.target.value})}
                                >
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year" value={billing.expYear}
                                    onChange={e => setBilling({...billing, expYear: e.target.value})}
                                >
                                    <option></option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 fv-row">
                        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                            <span className="required">CVV</span>
                            <span className="ms-1" data-bs-toggle="tooltip" title="Enter a card CVV code">
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </span>
                        </label>
                        <div className="position-relative">
                            <input type="text" className="form-control form-control-solid" minLength={3} maxLength={4} placeholder="CVV" name="card_cvv" value={billing.cvv}
                                onChange={e => setBilling({ ...billing, cvv: e.target.value })}
                            />
                            <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                <i className="ki-duotone ki-credit-cart fs-2hx">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-stack">
                    <div className="me-5">
                        <label className="fs-6 fw-semibold form-label">Save Card for further billing?</label>
                        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                    </div>
                    <label className="form-check form-switch form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" checked={billing.saveCard} onChange={e => setBilling({ ...billing, saveCard: e.target.checked })} />
                        <span className="form-check-label fw-semibold text-muted">Save Card</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default BillingDetails;