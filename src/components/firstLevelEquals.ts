// Cheap computationally
export default function firstLevelEquals(objA: any, objB: any) {
    if (objA===objB) return true;
    if (typeof objA!==typeof objB) return false;
    return Object.keys(objA).every(key=>objA[key]===objB[key]);
}
