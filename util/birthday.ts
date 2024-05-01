import { Birthday } from "~/classes/Birthday";

export function getBirthday(birthday: Birthday | undefined): string {
    if(birthday == null || birthday.year == null) {
        return "Unbekannt";
    }
    if(birthday.month == null) {
        return birthday.year.toString();
    }
    if(birthday.day == null) {
        return birthday.month + "/" + birthday.year;
    }
    return birthday.day + "/" + birthday.month + "/" + birthday.year;
}