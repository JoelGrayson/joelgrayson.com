export type Strength=1 | 2 | 3 | 4 | 5;
export type Culture={
    name?: string;
    race?: Race;
    otherRace?: string; //only filled out if 'Other' is selected for race
    relation?: Relation;
    parentConnected?: Strength;
    parentConnectedText?: string;
    childConnected?: Strength;
    childConnectedText?: string;
    childMoreConnected?: string;
    childLessConnected?: string;
    additional?: string;
};

export const races=['White', 'Asian', 'Black', 'Hispanic', 'Native', 'Other'] as const;
export type Race=typeof races[number] | 'Select a Race';
export const relations=['Father', 'Mother', 'Other'] as const; //'Father\'s Father', 'Father\'s Mother', 'Mother\'s Father', 'Mother\'s Mother'
export type Relation=typeof relations[number] | 'Select a Relation';

export type SingleCultureSurveyData=Omit<Culture, 'relation'> & {
    dateSubmitted?: Date;
    email: string;
    emailMeResults: boolean;
};

export type MulticulturalSurveyData={
    dateSubmitted?: Date;
    mother: Culture;
    father: Culture;
    additionalCultures: Culture[];
    email: string;
    emailMeResults: boolean;
};

