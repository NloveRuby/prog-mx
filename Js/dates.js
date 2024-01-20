// year,month,day,hrs,minutes,second

const d = new Date;
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getTime());
console.log(d.getDate());
console.log(d.getDate());

/*Working with dates in JavaScript involves using the built-in Date object and its methods. Here are some key points to keep in mind:

    Creating a Date Object:
        You can create a new Date object using the new Date() constructor. There are several ways to specify the date and time, such as passing a date string, individual date components, or milliseconds since the Unix epoch.
        Example: const currentDate = new Date();

    Getting Date and Time Components:
        The Date object provides various methods to retrieve specific components of a date, such as the year, month, day, hours, minutes, seconds, and milliseconds.
        Example: const year = currentDate.getFullYear();

    Formatting Dates:
        JavaScript doesn't have built-in formatting options for dates, but you can use methods like getFullYear(), getMonth(), getDate(), etc., to retrieve individual components and format them as needed.
        Alternatively, you can use third-party libraries like Moment.js or Intl.DateTimeFormat for more advanced date formatting options.

    Performing Date Calculations:
        The Date object allows you to perform various calculations, such as adding or subtracting days, months, or years.
        Example: currentDate.setDate(currentDate.getDate() + 7);

    Comparing Dates:
        You can compare dates using comparison operators like <, >, <=, >=, or by converting dates to milliseconds using the getTime() method and comparing the resulting values.

    Working with Timezones:
        JavaScript Date objects are based on the user's local timezone. To work with different timezones, you can use methods like getTimezoneOffset() to get the timezone offset in minutes or use third-party libraries like Moment.js with timezone support.
*/ 