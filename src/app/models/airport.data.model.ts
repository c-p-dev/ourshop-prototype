export class AirportCollectionModel {
	city: string;
	country: string;
	country_code: string;
	name: string;
	terminal: number;
	terminals: string;
	departure: any;
	arrival: any;
	iata: any;
	zone: any;
	constructor(airport, country, terminal) {
		console.log(airport, "===========", terminal)
		this.city = airport.city;
		this.country = country.country_name;
		this.country_code = country.country_iso;
		this.name = airport.name;
		this.terminal = terminal.code;
		this.terminals = airport.terminals;
		this.departure = airport.departure;
		this.arrival = airport.arrival;
		this.iata = airport.iata;
		this.zone = terminal.zones
	}

}

export class StoreLocation {
	airport: string;
	inflight: string;
	constructor(location) {
		this.airport = location.airport ? location.airport : this.airport;
		this.inflight = location.inflight ? location.inflight : this.inflight;
	}

	set _setAirport(value) {
		this.airport = value;
	}
	get _getAirport(): string {
		return this.airport;
	}

}

export class ModelAirport {
	id: string;
	name: string;
	city: string;
	terminals: ModelTerminal[];

	constructor(data) {
		this.id = data.code;
		this.name = data.name;
		this.city = data.city;
		this.terminals = data.terminals.map((terminal: ModelTerminal) => new ModelTerminal(terminal))
	}

}

export class ModelTerminal {
	id: string;
	name: string;
	zones: ModelZone[];

	constructor(data) {
		this.id = data.code;
		this.name = data.name;
		this.zones = data.zones.map((zone: ModelZone) => new ModelZone(zone));
	}
}

export class ModelZone {
	id: string;
	name: string;
	areas: ModelArea[];

	constructor(data) {
		this.id = data.code ? data.code : data.id;
		this.name = data.name;
		this.areas = this.id !== "Com" && this.id !== "SE" ? data.areas.map((area: ModelArea) => new ModelArea(area)) : null;
	}
}

export class ModelArea {
	id: string;
	name: string;

	constructor(data) {
		this.id = data.code ? data.code : data.id;
		this.name = data.name;
	}
}

export class ModelAirportTerminal {
	id: string; // airportCode-terminalCode
	name: string; // airportName
	city: string;
	airportCode: string;
	terminalCode: string;
	zones: ModelZone[];

}


export interface InterfaceAirportconfig {
	store_location: string
	active: boolean
	currency: string
	categories: Array<number>
	payment_methods: Array<string>
	allowed_currencies: Array<string>
}

export class Zone {
	static readonly INTERNATIONAL: string = 'International';
	static readonly DOMESTIC: string = 'Domestic';
	static readonly COMMON: string = 'Public Concourse';
	static readonly INT: string = 'Int';
	static readonly DOM: string = 'Dom';
	static readonly COM: string = 'Com'
}

export class Area {
	static readonly ARRIVAL: string = 'Arrival';
	static readonly DEPARTURE: string = 'Departure';
	static readonly ARRIV: string = 'Arriv';
	static readonly DEPAR: string = 'Depar';
}
