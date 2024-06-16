import axios from "axios";
const allEvents = async () => {
  let upComingEventsList = [];
  try {
    const response = await axios.get("https://rgukt-council-backend.vercel.app/all-events");
    upComingEventsList = response.data;
  } catch (e) {
    return upComingEventsList;
  }
  // console.log(recentEventsList);
  return upComingEventsList;
};

export default allEvents;
