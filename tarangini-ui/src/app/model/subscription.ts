export interface Subscription {
	subscriptionId:number;
	subscriberId:number;

	packageCode:string;
	description:string;
	packageTitle:string;

	dateValidFrom:Date;
	dateValidTo:Date;
	term:string;
	fee:number;
	status:string;
}