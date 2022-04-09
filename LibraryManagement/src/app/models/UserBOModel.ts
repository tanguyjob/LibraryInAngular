export class UserBOModel {
    userId!: number;
    email!: string;
    fK_User_Address!: number;
    fK_User_Profile!: number;
    fK_User_Suscription!:number;
    isActive!:boolean;
    name!:string;
    phone!:string;
    nameProfile!:string;
    numberOfBooks!:number;
    price!:number;
    subscriptionId!:number;
    profileId!:number;
    profileName!:string;
    addressId!: number;
    box!:string;
    city!:string;
    numberAddress!:string;
    postCode!:string;
    street!:string;
}