import { useEffect, useState } from 'react';

export function useTimeSlots(shiftStartTime: number, shiftEndTime: number, intervalInMinutes: number) {
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  useEffect(() => {
    const generateTimeSlots = (): string[] => {
      const slots: string[] = [];

      for (let currentTime = shiftStartTime; currentTime <= shiftEndTime; currentTime += intervalInMinutes) {
        const startHour = Math.floor(currentTime / 60);
        const startMinute = currentTime % 60;

        const endTime = currentTime + intervalInMinutes;
        const endHour = Math.floor(endTime / 60);
        const endMinute = endTime % 60;

        const formattedStartTime = `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
        const formattedEndTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;

        const timeSlotLabel = `${formattedStartTime} - ${formattedEndTime}`;

        slots.push(timeSlotLabel);
      }

      return slots;
    };

    setTimeSlots(generateTimeSlots());
  }, [shiftStartTime, shiftEndTime, intervalInMinutes]);

  return timeSlots;
}

