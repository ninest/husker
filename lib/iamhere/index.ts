import { addDays } from "date-fns";

// If these dates are standardized, no need for list
const semesterStartDates = [
  new Date("2022-05-05"),
  new Date("2022-06-30"),
  new Date("2022-09-02"),

  new Date("2023-01-13"),
  new Date("2023-05-05"),
  new Date("2023-06-30"),
];

export const isStartOfSemester = (): boolean => {
  const today = new Date();

  for (const date of semesterStartDates) {
    // Check if today is between date and date+7 days
    if (today >= date && today <= addDays(date, 5)) {
      return true;
    }
  }
  return false;
};
