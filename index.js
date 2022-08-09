import {Calendar} from "./Calendar/index.js";
import {dateToday} from "./helpers/dateTime.js";

const RootElement = document.getElementById('root')
RootElement.appendChild(Calendar(dateToday()))