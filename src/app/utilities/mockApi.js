import { mockAlerts, mockCustomerInfo } from "../utilities/mockValues";

const randomTimeRange = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};
const simulateLatency = ms => new Promise(resolve => setTimeout(resolve, ms));

export const mockFetchAlerts = async () => {
  await simulateLatency(randomTimeRange(0, 3));
  return mockAlerts.map(alert => ({ ...alert }));
};

export const mockFetchClientsInfo = async () => {
  const { max, data } = mockCustomerInfo;
  await simulateLatency(randomTimeRange(0, 3));
  return {
    max,
    data: data.map(each => ({ ...each }))
  };
};
