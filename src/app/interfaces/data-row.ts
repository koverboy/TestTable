
export class DataRow implements DataRow {
    healthIndex: number = 0;
    endDate: number = 0;
    minValueDateTime: number = 0;
    type: string = '';
    cowId: number = 0;
    animalId: string = '';
    eventId: number = 0;
    deletable: boolean = false;
    lactationNumber: number = 0;
    daysInLactation: number = 0;
    ageInDays: number = 0;
    startDateTime: number = 0;
    reportingDateTime: number = 0;
    alertType: string = '';
    duration: number = 0;
    originalStartDateTime: number = 0;
    endDateTime: number = 0;
    daysInPregnancy: number = 0;
    heatIndexPeak: string = '';
    newGroupId: number = 0;
    newGroupName: string = '';
    currentGroupId: number = 0;
    currentGroupName: string = '';
    destinationGroup: number = 0;
    destinationGroupName: string = '';
    calvingEase: any = null;
    oldLactationNumber: number = 0;
    newborns: any = null;
    cowEntryStatus: string = '';
    birthDateCalculated: boolean = false;
    sire: any = null;
    breedingNumber: number = 0;
    isOutOfBreedingWindow: boolean = false;
    interval: number = 0;

    constructor(params?: any) {
        if (params)
            Object.assign(this, { ...this, ...params });
    }

}


