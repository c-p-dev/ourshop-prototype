export class ModelExternalRate {
    // RateID: string;
    exchange_rate: number;
    quoted_currency: string;
    collected_currency: string;
}

export class ModelExternalRates {
    ExternalRate: ModelExternalRate[];
}

export class ModelGetExternalRateListResult {
    NSProcessTime: any;
    ProcessTime: any;
    ExternalRates: ModelExternalRates;
}

export class ModelRates {
    GetExternalRateListResult: ModelGetExternalRateListResult;
}