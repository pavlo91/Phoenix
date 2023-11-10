import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Organisation } from "./types";
interface Props {
    num: number;
    step: number;
    organisation: Organisation;
    setOrganisation: (organisation: Organisation) => void;
}

const OrganisationRegistration = (props: Props) => {
    const { num, step, organisation, setOrganisation } = props;

    let otherClass = 'pending';
    if (step === num) otherClass = 'current';
    if (step > num) otherClass = 'completed';

    return (
        <div className={otherClass} data-kt-stepper-element="content">
            <div className="w-100">
                <div className="pb-5 pb-lg-6">
                    <h2 className="fw-bold text-dark">Organisation Registration</h2>
                    <div className="text-muted fw-semibold fs-6">If you need more info, please visit the
                        <a href="https://localgovai.uk/help" className="link-primary fw-bold">Help Page</a>.</div>
                </div>
                <div className="fv-row mb-5">
                    <label className="form-label fs-8 required">Organisation Name</label>
                    <input name="Organisation_name" className="form-control form-control-lg form-control-solid" data-placeholder="Enter organisation name..." value={organisation.name}
                        onChange={e => setOrganisation({...organisation, name: e.target.value})}
                    />
                </div>
                <div className="fv-row mb-5">
                    <label className="d-flex align-items-center form-label fs-8">
                        <span className="required">Organisation description</span>
                        <span className="lh-1 ms-1" 
                            data-bs-toggle="popover" 
                            data-bs-trigger="hover" 
                            data-bs-html="true" 
                            data-bs-content="
                            <div className='p-4 rounded bg-light'>
                                <div className='d-flex flex-stack text-muted mb-4'>
                                    <i className='ki-duotone ki-bank fs-3 me-3'>
                                        <span className='path1'></span>
                                        <span className='path2'></span>
                                    </i>
                                    <div className='fw-bold'>Organisational Description Guidance</div>
                                </div>
                                <div className='d-flex flex-stack fw-semibold text-gray-600'>
                                    <div>Tell us a bit about your organization! It helps your team find the right home when they join.</div>
                                </div>
                            </div>
                            ">
                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                            </i>
                        </span>
                    </label>
                    <input name="Organisation description" className="form-control form-control-lg form-control-solid" data-placeholder="Enter organisation description..." value={organisation.description}
                        onChange={e => setOrganisation({...organisation, description: e.target.value})}
                    />
                    <div className="form-text">Your collagues will see this short description when they join</div>
                </div>
                <div className="fv-row mb-5">
                    <label className="form-label fs-8 required">Organisation Type</label>
                    <select name="organisation_type" className="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true" value={organisation.type}
                        onChange={e => setOrganisation({...organisation, type: e.target.value})}
                    >
                        <option value="1" data-bs-toggle="tooltip" title="Ltd / LLC / GmbH, Sàrl">Private Limited Company</option>
                        <option value="2" data-bs-toggle="tooltip" title="N/A">Public Sector</option>
                        <option value="3" data-bs-toggle="tooltip" title="N/A">Government Institution</option>
                        <option value="4" data-bs-toggle="tooltip" title="N/A / NPO / NPO">Charities</option>
                        <option value="5" data-bs-toggle="tooltip" title="CIC / N/A / SCE">Social Enterprise</option>
                        <option value="6" data-bs-toggle="tooltip" title="LLP / LLP / N/A">Partnerships</option>
                        <option value="7" data-bs-toggle="tooltip" title="N/A / SP / N/A">Sole Proprietorship</option>
                        <option value="8" data-bs-toggle="tooltip" title="Plc / Inc, Corp / SA, AG">Corporation</option>
                        <option value="9" data-bs-toggle="tooltip" title="Co-op / Co-op / Co-op">Cooperative</option>
                        <option value="10" data-bs-toggle="tooltip" title="N/A / NPO / NPO">Non-Profit Organization</option>
                        <option value="11" data-bs-toggle="tooltip" title="LLP / LLP / N/A">Limited Liability Partnership</option>
                        <option value="12" data-bs-toggle="tooltip" title="N/A / N/A / N/A">Franchise</option>
                        <option value="13" data-bs-toggle="tooltip" title="JV / JV / JV">Joint Venture</option>
                        <option value="14" data-bs-toggle="tooltip" title="N/A / N/A / N/A">Holding Company</option>
                        <option value="15" data-bs-toggle="tooltip" title="N/A / N/A / N/A">Subsidiary Company</option>
                        <option value="16" data-bs-toggle="tooltip" title="N/A / N/A / N/A">Conglomerate</option>
                        <option value="17" data-bs-toggle="tooltip" title="MNC / MNC / MNC">Multinational Corporation</option>
                        <option value="18" data-bs-toggle="tooltip" title="TU / N/A / N/A">Trade Union</option>
                        <option value="19" data-bs-toggle="tooltip" title="N/A / N/A / N/A">Professional Association</option>
                        <option value="20" data-bs-toggle="tooltip" title="N/A / N/A / N/A">Research Institutions</option>
                    </select>					
                </div>				
                <div className="fv-row mb-5">
                    <label className="form-label fs-8">Business Description</label>
                    <textarea name="business_description" className="form-control form-control-lg form-control-solid" rows={3} value={organisation.businessDescription} onChange={e => setOrganisation({...organisation, businessDescription: e.target.value})}>
                    </textarea>
                </div>
                <div className="fv-row mb-0">
                    <label className="fw-semibold form-label fs-8 required">Contact Email</label>
                    <input name="business_email" className="form-control form-control-lg form-control-solid" value={organisation.contactEmail} onChange={e => setOrganisation({...organisation, contactEmail: e.target.value})} />
                </div>
            </div>
        </div>
    )
}

export default OrganisationRegistration;