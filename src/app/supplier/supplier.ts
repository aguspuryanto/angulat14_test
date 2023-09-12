export interface Supplier {
    id: number;
    email: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: string;
        zipcode: string;
        geolocation: {
            lat: number;
            lng: number;
        }
    };
    phone: string;
}
