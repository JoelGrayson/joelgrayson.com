export default function date2Timestamp(date: Date) {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}
