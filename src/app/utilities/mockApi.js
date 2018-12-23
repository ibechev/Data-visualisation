import { mockAlerts } from "../utilities/mockValues";

const randomTimeRange = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};
const simulateLatency = ms => new Promise(resolve => setTimeout(resolve, ms));

export const mockFetch = async () => {
  await simulateLatency(randomTimeRange(1, 4));
  return mockAlerts.map(alert => ({ ...alert }));
};
