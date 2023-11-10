export interface Settings {
    domainName: string;
    domainConfirm: string;
    teamSize: string;
    accPlan: number;
}

export interface Organisation {
    name: string;
    description: string;
    type: string;
    businessDescription: string;
    contactEmail: string;
}

export interface UserInfo {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPwd: string;
    policy: boolean;
}

export interface Billing {
    nameOnCard: string;
    cardNumber: string;
    expMonth: string;
    expYear: string;
    cvv: string;
    saveCard: boolean;
}
