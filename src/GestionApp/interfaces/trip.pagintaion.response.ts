export interface TripResponse {
    content:          Trip[];
    pageable:         Pageable;
    totalElements:    number;
    totalPages:       number;
    last:             boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface Trip {
    id:              number;
    tripCode:        string;
    departureTime:   Date;
    arrivalTime:     Date;
    status:          string;
    origin:          string;
    destination:     string;
    price:           number;
    availableSeats:  number;
    categoryBusName: string;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    empty:    boolean;
    unsorted: boolean;
    sorted:   boolean;
}
