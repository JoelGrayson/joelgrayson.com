import { format } from 'date-fns';

export default function formatDateTime(date: Date) {
    return format(date, 'MMM d, yyyy h:mm a');
}
