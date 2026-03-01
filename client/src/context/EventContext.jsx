import { createContext, useContext, useState } from "react";

const EventContext = createContext();

const initialEvents = [
  {
    id: 1,
    title: "Google Summer Internship",
    type: "internship",
    deadline: "2026-03-20",
    description: "Paid internship for CS students",
  },
  {
    id: 2,
    title: "National Hackathon 2026",
    type: "hackathon",
    deadline: "2026-03-05",
    description: "48-hour coding challenge",
  },
  {
    id: 3,
    title: "AI Tech Fest",
    type: "tech",
    deadline: "2026-03-15",
    description: "Latest trends in AI & ML",
  },
];

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(initialEvents);
  const [appliedEvents, setAppliedEvents] = useState([]);

  const applyEvent = (event) => {
    if (!appliedEvents.find((e) => e.id === event.id)) {
      setAppliedEvents([...appliedEvents, event]);
    }
  };

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  return (
    <EventContext.Provider
      value={{ events, appliedEvents, applyEvent, addEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);