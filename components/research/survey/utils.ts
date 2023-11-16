import { MulticulturalSurveyData, type Culture } from './types';

export function getNumCultures(data: MulticulturalSurveyData) {
    let num=2;
    if (data.additionalCultures[0])
        num++;
    if (data.additionalCultures[1])
        num++;
    return num;
}

export function getRows(culture: Culture, additionalCulture=false) {
    if (!culture || culture.name===undefined) return []; //if third or fourth culture not defined

    return [
        culture.name,
        getRace(culture),
        ...(additionalCulture ? [culture.relation] : []),
        culture.parentConnected,
        culture.parentConnectedText,
        culture.childConnected,
        culture.childConnectedText,
        getMoreLessConnected(culture),
        culture.childMoreConnected || '',
        culture.childLessConnected || ''
    ];
}

export function getRace(culture: Culture) {
    if (culture.race==='Other')
        return culture.otherRace;
    return culture.race;
}

export function getMoreLessConnected(culture: Culture) {
    if (culture.childConnected===undefined || culture.parentConnected===undefined)
        return ''; //na/null
    if (culture.childConnected>culture.parentConnected)
        return 'MORE';
    if (culture.childConnected<culture.parentConnected)
        return 'LESS';
    if (culture.childConnected===culture.parentConnected)
        return 'EQUAL';
}

