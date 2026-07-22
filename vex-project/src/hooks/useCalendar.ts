import { useQuery } from "@tanstack/react-query";
import { maintenanceApi } from "../api/maintenance";
import { useMaintenanceStore } from "../store/maintenance";

export const useCalendar = () => {
  const { filters, calendarRange, setCalendarRange } = useMaintenanceStore();

  const calendarQuery = useQuery({
    queryKey: ["maintenanceCalendar", { filters, calendarRange }],
    queryFn: () => maintenanceApi.getMaintenanceCalendar({ ...filters, ...calendarRange }),
    staleTime: 30000,
  });

  return {
    events: calendarQuery.data || [],
    isLoading: calendarQuery.isLoading,
    isError: calendarQuery.isError,
    calendarRange,
    setCalendarRange,
  };
};

export default useCalendar;
