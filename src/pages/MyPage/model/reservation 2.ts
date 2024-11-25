export interface ReservationResponse {
    code: number;
    message: string;
    data: ReservationModel[];
}

export interface ReservationModel {
    id: number;
    orderNumber: string;
    orderName: string;
    orderTime: string;
    orderPerson: number;
    orderActivityPhoto: string[];
}
