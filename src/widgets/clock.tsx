import { useDate } from "./useDate";
const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
export default function Clock() {
  const date = useDate();

  const localDate = date.toLocaleDateString("pl-PL", TIME_OPTIONS);
  const localTime = date.toLocaleTimeString();

  return (
    <article>
      <h2>Clock</h2>
      <div>
        <p >
          <span>Time:</span> <span>{localTime}</span>
        </p>
        <p>
          <span>Date:</span> <span>{localDate}</span>
        </p>
      </div>
    </article>
  );
}

// alternative format date
//   // let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// hours = hours < 10 ? `0${hours}` : hours;
// minutes = minutes < 10 ? `0${minutes}` : minutes;
// seconds = seconds < 10 ? `0${seconds}` : seconds;
//  {hours}:{minutes}:{seconds} PDT
