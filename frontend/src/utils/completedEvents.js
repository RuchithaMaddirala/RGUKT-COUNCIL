import axios from "axios";
const completedEvents = async () => {
  let upComingEventsList = [];
  try {
    const response = await axios.get("https://rgukt-council-backend.vercel.app/completed-events");
    upComingEventsList = response.data;
  } catch (e) {
    return upComingEventsList;
  }
  // console.log(recentEventsList);
  return upComingEventsList;
};

export default completedEvents;
