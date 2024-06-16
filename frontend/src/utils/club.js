import axios from "axios";

const club = async () => {
  let clubsList = [];
  try {
    const response = await axios.get("https://rgukt-council-backend.vercel.app/clubs");
    clubsList = await response.data;
    //console.log(clubsList);
    return clubsList;
  } catch (e) {
    console.log("Hello Catch");
    return clubsList;
  }
};

export default club;
