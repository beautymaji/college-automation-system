import { createContext, useContext, useState } from "react";

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState({
    "student1": { present: 18, total: 22 },
    "student2": { present: 20, total: 22 },
  });

  const markAttendance = (studentId, isPresent) => {
    setAttendance((prev) => {
      const data = prev[studentId] || { present: 0, total: 0 };
      return {
        ...prev,
        [studentId]: {
          present: isPresent ? data.present + 1 : data.present,
          total: data.total + 1,
        },
      };
    });
  };

  return (
    <AttendanceContext.Provider value={{ attendance, markAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);