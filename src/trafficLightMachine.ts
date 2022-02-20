import { createMachine } from "xstate";

type TrafficLightEvent =
  | { type: "NEXT" }
  | { type: "TURN_OFF" }
  | { type: "TURN_ON" };

type TraffiLightState =
  | { value: { ON: "green" }; context: undefined }
  | { value: { ON: "yellow" }; context: undefined }
  | { value: { ON: "red" }; context: undefined }
  | { value: "OFF"; context: undefined };

export const trafficLightMachine = createMachine<
  undefined,
  TrafficLightEvent,
  TraffiLightState
>({
  id: "trafficLight",
  initial: "OFF",
  states: {
    ON: {
      on: { TURN_OFF: "OFF" },
      initial: "red",
      states: {
        green: {
          on: { NEXT: "yellow" },
          after: {
            3500: "yellow"
          }
        },
        yellow: {
          on: { NEXT: "red" },
          after: {
            1500: "red"
          }
        },
        red: {
          on: { NEXT: "green" },
          after: {
            5000: "green"
          }
        }
      }
    },
    OFF: {
      on: { TURN_ON: "ON" }
    }
  }
});
