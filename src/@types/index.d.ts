export type IUser = {
	id?: string;
  login: string;
	email: string;
}

export type IProduct = {
	id?: string;
	name: string;
	quantity: number;
	category: string;
	expiration: string;
	owner_id: string;
}
