import { format } from 'date-fns';

export const fullDate = (date) => format(new Date(date), 'yyyy-MM-dd HH:mm:ss');
export const shortDate = (date) => format(new Date(date), 'dd-MM-yyyy');
