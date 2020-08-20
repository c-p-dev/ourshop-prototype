export class CustomSelectBoxPropertyModel {
	label: string;
	errorMessage?: string;
	emptyMessage?: string;
	asInputText?: boolean; //set this to true for Input behavior
	defaultValue?: string;
	style?: string;
	disabled?: boolean;
	isAADF?: boolean;

	constructor(label, errorMessage, emptyMessage) {
		this.label = 'Select Value';
		this.errorMessage = 'Please select a value';
		this.emptyMessage = 'No available';
		this.asInputText = false;
		this.defaultValue = null;
		this.style = 'style1';
		this.disabled = false;
		this.isAADF = true;
	}
}

export class CustomSelectBoxValueModel {
	code: string; // TODO: must replace coed with actual value
	value: string; // TODO: must replace value with display
	AdditionalHtmlValue?: string; // for addtional values;
    disabled?: boolean = false;
    display?: string; // If you need to override value but dont want to change the actual value - need to refactor this
}

export enum CustomeSelectStyle {
	style1 = "style1",
	style2 = "style2",
}