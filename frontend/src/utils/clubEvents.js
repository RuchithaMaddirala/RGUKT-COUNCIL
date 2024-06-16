import axios from "axios";

const clubEvents = async (name) => {
  const clubName = name;
  let clubEventsList = [];
  try {
    const response = await axios.get(
      `https://rgukt-council-backend.vercel.app/club-events?clubName=${clubName}`
    );
    clubEventsList = await response.data;
    return clubEventsList;
  } catch (e) {
    return clubEventsList;
  }
};

export default clubEvents;
