import { useParams } from "react-router-dom";
import Member from "../components/Member";
import datas from "../datas/data.json";

const Crew = () => {
  const { member } = useParams();

  return datas.crew.map((person) => {
    if (person.name.toLowerCase() === member)
      return (
        <Member
          photo={person.images.png}
          role={person.role.toUpperCase()}
          name={person.name.toUpperCase()}
          bio={person.bio}
        />
      );
  });
};

export default Crew;
