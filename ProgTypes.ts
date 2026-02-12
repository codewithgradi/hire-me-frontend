
export type AuthFormProps= {
    email: string;
    password: string
}
export type CardDataProps = {
    Id: number;
    AppUserId: string;
    FirstName: string;
    Surname: string;
    Email: string;
    PhoneNumber: string;
    Qualification: QualificationTypes;
    LinkedInUrl: string;
    Institution: string;
    GithubUrl: string;
    PersonalWebsite: string;
    QualificationName:string
}

export enum QualificationTypes {
    BachelorDegree,
    Diploma,
    AdvancedDiploma,
    BachelorDegreeWithHons,
    MastersDegree,
    PhD
}

