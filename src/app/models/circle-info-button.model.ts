export class CircleInfoButtonModel {
    label?:string = '?';
    icon?:string;
    asTooltip?: boolean  = false;
    modalProp?: GenericModalModel;
    style?: string ='style1';

    constructor(prop){
        this.label = prop.label;
        this.icon = prop.icon;
        this.asTooltip = prop.asTooltip;
        this.modalProp = prop.modalProp;
        this.style = prop.style
    }

  }
  
  export interface GenericModalModel{
      title: string;
      message: string;
  }