export class UserBOModel {
    userId!: number;
    email!: string;
    firstname!: string;
    fk_user_address!: number;
    fk_user_profile!:number;
    fk_user_suscription!:number;
    isActive!:boolean;
    name!:string;
    phone!:string;

    nameProfile!:string;
    numberOfBooks!:number;
    price!:number;
    subscriptionId!:number;

    profileId!: number;
    profileName!:string;

    addressId!:number;
    box!:string;
    city!:string;
    numberAddress!:string;
    postCode!:string;
    street!:string;




}