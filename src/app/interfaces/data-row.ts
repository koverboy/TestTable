
export class DataRow implements DataRow {

    constructor(params?: any) {
        if (params)
            Object.assign(this, { ...this, ...params });
    }

    healthIndex = 0;
    endDate = 0;
    minValueDateTime = 0;
    type = '';
    cowId = 0;
    animalId = '';
    eventId = 0;
    deletable = false;
    lactationNumber = 0;
    daysInLactation = 0;
    ageInDays = 0;
    startDateTime = 0;
    reportingDateTime = 0;
    alertType = '';
    duration = 0;
    originalStartDateTime = 0;
    endDateTime = 0;
    daysInPregnancy = 0;
    heatIndexPeak = '';
    newGroupId = 0;
    newGroupName = '';
    currentGroupId = 0;
    currentGroupName = '';
    destinationGroup = 0;
    destinationGroupName = '';
    calvingEase: any = null;
    oldLactationNumber = 0;
    newborns: any = null;
    cowEntryStatus = '';
    birthDateCalculated = false;
    sire: any = null;
    breedingNumber = 0;
    isOutOfBreedingWindow = false;
    interval = 0;

}


