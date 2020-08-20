export class FlightDataModel {
    Fault: any;
    BookingChangeCode: any;
    BookingComments: any;
    BookingComponents: any;
    BookingContacts: any;
    BookingHold: any;
    BookingID: string;
    BookingInfo: any;
    BookingParentID: string;
    BookingQueueInfos: any;
    BookingSum: any;
    CurrencyCode: string;
    GroupName: any;
    Journeys: any;
    NumericRecordLocator: string;
    OtherServiceInfoList: any;
    POS: any;
    ParentRecordLocator: any;
    Passengers: any;
    PaxCount: string;
    Payments: any;
    ReceivedBy: any;
    RecordLocator: string;
    RecordLocators: any;
    SourcePOS: any;
    State: string;
    SystemCode: any;
    TypeOfSale: any;
    constructor(data) {
        console.log(`data`, data)
        let dataRoute = data.GetBookingResponse.Booking
        this.Fault = data.Fault;
        this.BookingChangeCode = dataRoute.BookingChangeCode
        this.BookingComments = dataRoute.BookingComments
        this.BookingComponents = dataRoute.BookingComponents
        this.BookingContacts = dataRoute.BookingContacts
        this.BookingHold = dataRoute.BookingHold
        this.BookingID = dataRoute.BookingID
        this.BookingInfo = dataRoute.BookingInfo
        this.BookingParentID = dataRoute.BookingParentID
        this.BookingQueueInfos = dataRoute.BookingQueueInfos
        this.BookingSum = dataRoute.BookingSum
        this.CurrencyCode = dataRoute.CurrencyCode
        this.GroupName = dataRoute.GroupName
        this.Journeys = dataRoute.Journeys
        this.NumericRecordLocator = dataRoute.NumericRecordLocator
        this.OtherServiceInfoList = dataRoute.OtherServiceInfoList
        this.POS = dataRoute.POS
        this.ParentRecordLocator = dataRoute.ParentRecordLocator
        this.Passengers = dataRoute.Passengers
        this.PaxCount = dataRoute.PaxCount
        this.Payments = dataRoute.Payments
        this.ReceivedBy = dataRoute.ReceivedBy
        this.RecordLocator = dataRoute.RecordLocator
        this.RecordLocators = dataRoute.RecordLocators
        this.SourcePOS = dataRoute.SourcePOS
        this.State = dataRoute.State
        this.SystemCode = dataRoute.SystemCode
        this.TypeOfSale = dataRoute.TypeOfSale

    }

}
