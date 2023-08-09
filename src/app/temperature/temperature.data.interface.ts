// app/models/weather-data.interface.ts
export interface WeatherData {
    data: {
      timelines: {
        timestep: string;
        startTime: string;
        endTime: string;
        intervals: {
          startTime: string;
          values: {
            temperature: number;
            // Add more properties as needed
          };
        }[];
      }[];
    };
  }
  