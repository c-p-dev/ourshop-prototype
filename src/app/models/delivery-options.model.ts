import { ModelAirport } from "./airport.data.model";
import { CircleInfoButtonModel } from "./circle-info-button.model";

export interface DeliveryOptionsDescription {
	icon: string;
	label: string;
	type: string;
	modalProp: CircleInfoButtonModel
}

export class InflightDeliveryOptionsDescription implements DeliveryOptionsDescription {
	icon: string;
	label: string;
	type: string = 'INFLIGHT';
	flightNumberLabel: string;
	flightNumberValue: string;
	flightTypeLabel: string;
	flightTypeValue: string;
	modalProp: CircleInfoButtonModel;

	constructor(locale, flightDetails, circleInfoProp: CircleInfoButtonModel) {
		this.icon = 'assets/images/category-icon/version4/category_icon_delivery_onboard.png';
		this.label = locale.AIRASIA_INFLIGHT;
		this.flightNumberLabel = locale.FLIGHT_NUMBER;
		this.flightTypeLabel = locale.FLIGHT_TYPE;
		// let objectKeys = Object.keys(flightDetails.list);
		// let flightList = objectKeys.filter(item => item !=='Home-Delivery').map((item)=> {
		// 	let code = item.split('-');
		// 	return `${code[0]} ${(flightDetails.list[item]['International'] ? 'International' : 'Domestic')} `
		// })
		let objectKeys = Object.keys(flightDetails.delivery_options);
		let flightListValue = [];
		let flightNumberListValue = [];
		let flightList = objectKeys.filter(item => item !== 'Home-Delivery').map((code) => {

			flightNumberListValue.push(code);
			// let code = item.split('-');
			// return `${code[0]} ${(flightDetails.list[item]['International'] ? 'International' : 'Domestic')} `
			let carrierCodeObjList = Object.keys(flightDetails.delivery_options[code]);
			carrierCodeObjList.map(flightType => {
				flightListValue.push(`${(flightDetails.delivery_options[code][flightType] ? `Selected` : '')} ${code} ${flightType}`)
			});
		})

		this.flightTypeValue = flightListValue.join(', ');
		this.flightNumberValue = flightNumberListValue.join(', ');
		this.modalProp = circleInfoProp;

	}
}

export class AirportCollectionOptionsDescription implements DeliveryOptionsDescription {
	icon: string;
	label: string;
	type: string = 'AC';
	airportList: AirportInfo[] = [];
	zoneList: string;

	modalProp: CircleInfoButtonModel;

	constructor(locale, airports: Array<ModelAirport>, circleInfoProp: CircleInfoButtonModel) {
		this.icon = 'assets/images/category/airport.png';
		this.label = locale.AIRPORT_COLLECTION;
		let allAirportZones = [];
		let aiportListFromTerminal: AirportInfo[] = [];

		airports.forEach(airport => {
			if (airport.id !== 'MSE') {
				aiportListFromTerminal = airport.terminals.map((item) => {
					let zoneName = item.id;
					if (airport['id'] === 'KUL' && item.id === 'T1') {
						zoneName = 'KLIA';
					} else if (airport['id'] === 'KUL' && item.id === 'T2') {
						zoneName = 'klia2';
					}

					let obj: AirportInfo = {
						airportName: airport.city,
						code: airport['id'],
						zoneId: zoneName
					}
					return obj;
				});
				this.airportList.push.apply(this.airportList, aiportListFromTerminal);

				// Get all zones from all airports
				airport.terminals.forEach((terminal) => {
					terminal.zones.forEach((terminalZone) => {
						if (terminalZone.areas) {
							let areaZoneName: string = '';
							terminalZone.areas.forEach((area, index) => {
								areaZoneName = terminalZone.name + ' ' + area.name;
								allAirportZones.push(areaZoneName);
							});
						} else {
							allAirportZones.push(terminalZone.name);
						}
					});
				});
			}
		});

		// Remove duplicate zone names from complete list
		this.zoneList = allAirportZones.filter((item, index) => { return allAirportZones.indexOf(item) === index }).join(', ');
		this.modalProp = circleInfoProp;
	}
}

export interface AirportInfo {
	airportName: string,
	code: string
	zoneId: string
}

export class HomeDeliveryOptionsDescription implements DeliveryOptionsDescription {
	icon: string;
	label: string;
	type: string = 'HD';
	warehouse: string;
	selectFlightFrom: string = 'Ships from ';
	internationalLabel: string = 'International Delivery: ';
	internationalValue: string = '1 - 5 Working Days';
	localLabel: string = 'Local Delivery: ';
	localValue: string = '5 - 10 Working Days';
	modalProp: CircleInfoButtonModel;

	constructor(locale, sellerDetails, circleInfoProp: CircleInfoButtonModel) {
		this.icon = 'assets/images/category/home.png';
		this.label = locale.HOME_DELIVERY;
		this.selectFlightFrom = locale.SHIPS_FROM + ' ';
		this.localLabel = locale.LOCAL_DELIVERY;
		this.internationalLabel = locale.INTERNATIONAL_DELIVERY;
		this.warehouse = sellerDetails.delivery.warehouse;
		this.selectFlightFrom = `${this.selectFlightFrom} ${this.warehouse}`;
		this.internationalValue = sellerDetails.delivery.international;
		this.localValue = sellerDetails.delivery.local;

		this.modalProp = circleInfoProp;
	}
}