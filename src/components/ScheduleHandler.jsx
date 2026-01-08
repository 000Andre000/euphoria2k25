import ScheduleCard from "./ScheduleCard";
import { useState, useEffect } from "react";
import "./ScheduleHandler.css";

function getDateOnly(date) {
  const [day, month, year] = date.split("/");
  return new Date(`20${year}`, month - 1, day);
}

function getTimeInMinutes(time) {
  const [t, modifier] = time.split(" ");
  let [hours, minutes] = t.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

const STATIC_SCHEDULES = [
  // --- OUTDOOR SPORTS: WEEK 01 ---
  {
    id: "out-01",
    teamA: "IT",
    teamB: "ITI",
    date: "12/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-02",
    teamA: "BMS",
    teamB: "COMP",
    date: "12/01/26",
    time: "2:30 PM",
    gender: "boy",
    competition: "Volleyball",
  },
  {
    id: "out-03",
    teamA: "HS",
    teamB: "EXTC",
    date: "12/01/26",
    time: "2:30 PM",
    gender: "girl",
    competition: "Tug of War",
  },
  {
    id: "out-04",
    teamA: "COMP",
    teamB: "IT",
    date: "12/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Tug of War",
  },
  {
    id: "out-05",
    teamA: "ITI",
    teamB: "DOMF",
    date: "12/01/26",
    time: "3:30 PM",
    gender: "boy",
    competition: "Volleyball",
  },
  {
    id: "out-06",
    teamA: "BMS",
    teamB: "EXTC",
    date: "12/01/26",
    time: "4:00 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-07",
    teamA: "DOMF",
    teamB: "COMP",
    date: "12/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },
  {
    id: "out-08",
    teamA: "BMS",
    teamB: "EXTC",
    date: "13/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-09",
    teamA: "ITI",
    teamB: "COMP",
    date: "13/01/26",
    time: "1:00 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-10",
    teamA: "BMS",
    teamB: "DOMF",
    date: "13/01/26",
    time: "1:30 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-11",
    teamA: "IT",
    teamB: "COMP",
    date: "13/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-12",
    teamA: "BMS",
    teamB: "ITI",
    date: "13/01/26",
    time: "2:30 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-13",
    teamA: "DOMF",
    teamB: "EXTC",
    date: "13/01/26",
    time: "3:00 PM",
    gender: "boy",
    competition: "Box Cricket",
  },
  {
    id: "out-14",
    teamA: "COMP",
    teamB: "HS",
    date: "13/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Basketball",
  },
  {
    id: "out-15",
    teamA: "MECH",
    teamB: "ITI",
    date: "13/01/26",
    time: "4:00 PM",
    gender: "boy",
    competition: "Volleyball",
  },
  {
    id: "out-16",
    teamA: "EXTC",
    teamB: "COMP",
    date: "13/01/26",
    time: "4:00 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-17",
    teamA: "EXTC",
    teamB: "BMS",
    date: "13/01/26",
    time: "4:00 PM",
    gender: "girl",
    competition: "Box Cricket",
  },
  {
    id: "out-18",
    teamA: "HS",
    teamB: "EXTC",
    date: "13/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },
  {
    id: "out-19",
    teamA: "DOMF",
    teamB: "ITI",
    date: "15/01/26",
    time: "1:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-20",
    teamA: "COMP",
    teamB: "IT",
    date: "15/01/26",
    time: "1:00 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-21",
    teamA: "HS",
    teamB: "DOMF",
    date: "15/01/26",
    time: "1:30 PM",
    gender: "girl",
    competition: "Dodgeball",
  },
  {
    id: "out-22",
    teamA: "MECH",
    teamB: "HS",
    date: "15/01/26",
    time: "2:00 PM",
    gender: "boy",
    competition: "Basketball",
  },
  {
    id: "out-23",
    teamA: "BMS",
    teamB: "EXTC",
    date: "15/01/26",
    time: "2:30 PM",
    gender: "girl",
    competition: "Volleyball",
  },
  {
    id: "out-24",
    teamA: "DOMF",
    teamB: "MECH",
    date: "15/01/26",
    time: "3:00 PM",
    gender: "girl",
    competition: "Basketball",
  },
  {
    id: "out-25",
    teamA: "BMS",
    teamB: "EXTC",
    date: "15/01/26",
    time: "4:00 PM",
    gender: "boy",
    competition: "Volleyball",
  },
  {
    id: "out-26",
    teamA: "MECH",
    teamB: "IT",
    date: "15/01/26",
    time: "4:00 PM",
    gender: "girl",
    competition: "Box Cricket",
  },
  {
    id: "out-27",
    teamA: "BMS",
    teamB: "MECH",
    date: "15/01/26",
    time: "4:30 PM",
    gender: "boy",
    competition: "Field Football",
  },
  {
    id: "out-28",
    teamA: "Open",
    teamB: "Open",
    date: "17/01/26",
    time: "5:30 AM",
    gender: "mixed",
    competition: "Marathon",
  },
  {
    id: "out-29",
    teamA: "All Teams",
    teamB: "All Teams",
    date: "18/01/26",
    time: "7:00 AM",
    gender: "mixed",
    competition: "Athletics",
  },
  {
    id: "out-30",
    teamA: "Open",
    teamB: "Open",
    date: "18/01/26",
    time: "7:00 AM",
    gender: "mixed",
    competition: "Pickleball",
  },

  // --- INDOOR SPORTS ---
  {
    id: "in-01",
    teamA: "TBD",
    teamB: "TBD",
    date: "13/01/26",
    time: "TBD",
    gender: "girl",
    competition: "Table Tennis Duo",
  },
  {
    id: "in-02",
    teamA: "TBD",
    teamB: "TBD",
    date: "13/01/26",
    time: "TBD",
    gender: "boy",
    competition: "Carrom Singles",
  },
  {
    id: "in-03",
    teamA: "TBD",
    teamB: "TBD",
    date: "13/01/26",
    time: "TBD",
    gender: "girl",
    competition: "Table Tennis Singles",
  },
  {
    id: "in-04",
    teamA: "TBD",
    teamB: "TBD",
    date: "16/01/26",
    time: "TBD",
    gender: "mixed",
    competition: "Chess",
  },
  {
    id: "in-05",
    teamA: "TBD",
    teamB: "TBD",
    date: "19/01/26",
    time: "TBD",
    gender: "girl",
    competition: "Carrom Singles",
  },
  {
    id: "in-06",
    teamA: "TBD",
    teamB: "TBD",
    date: "20/01/26",
    time: "TBD",
    gender: "boy",
    competition: "Table Tennis Duo",
  },
  {
    id: "in-07",
    teamA: "TBD",
    teamB: "TBD",
    date: "21/01/26",
    time: "TBD",
    gender: "boy",
    competition: "Table Tennis Singles",
  },
  {
    id: "in-08",
    teamA: "TBD",
    teamB: "TBD",
    date: "22/01/26",
    time: "TBD",
    gender: "mixed",
    competition: "Carrom Duo",
  },
];



function ScheduleHandler() {
  const [matches, setMatches] = useState(STATIC_SCHEDULES);
  const [loading, setLoading] = useState(true);

const fetchWinners = async () => {
  try {
    const res = await fetch(
      "https://ap-south-1.cdn.hygraph.com/content/cm5c8fq6d012r07uvhu1pnu6z/master",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: `
            query GetWinners {
              schedules {
                matchid
                winner
              }
            }
          `,
        }),
      }
    );

    const json = await res.json();
    console.log("Hygraph response:", json);

    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      return;
    }

    const winnersFromCMS = json.data?.schedules ?? [];

    setMatches((prev) =>
      prev.map((match) => {
        const cmsMatch = winnersFromCMS.find(
          (m) => m.matchid === match.id
        );
        return cmsMatch?.winner
          ? { ...match, winner: cmsMatch.winner }
          : match;
      })
    );
  } catch (err) {
    console.error("Network error:", err);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchWinners();

    const interval = setInterval(fetchWinners, 30000);
    return () => clearInterval(interval);
  }, []);

  // Sorting (still works on static data)
  const sortedMatches = [...matches].sort((a, b) => {
    const dateA = getDateOnly(a.date);
    const dateB = getDateOnly(b.date);

    if (dateA.getTime() !== dateB.getTime()) {
      return dateA - dateB;
    }

    return getTimeInMinutes(a.time) - getTimeInMinutes(b.time);
  });

  if (loading) {
    return <p className="sh-loading">Loading Schedules Please Wait</p>;
  }

  return (
    <div className="shmain">
      {sortedMatches.map((match) => (
        <ScheduleCard
          key={match.id}
          teamA={match.teamA}
          teamB={match.teamB}
          date={match.date}
          time={match.time}
          gender={match.gender}
          competition={match.competition}
          winner={match.winner}
        />
      ))}
    </div>
  );
}

export default ScheduleHandler;
