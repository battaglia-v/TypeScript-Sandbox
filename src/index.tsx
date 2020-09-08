import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// new types
export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBaseWithOptionalDescription extends CoursePartBase {
  description?: string;
}

interface CoursePartOne extends CoursePartBaseWithOptionalDescription {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBaseWithOptionalDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CoursePartBaseWithOptionalDescription {
  name: "TypeScript";
  uniCredits: number;
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour
/**
 * Helper function for exhaustive type checking
 */
export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
// this is the new coursePart variable
const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  },
  {
    name: "TypeScript",
    exerciseCount: 12,
    description: "Important segway into learning Java",
    uniCredits: 3
  }
];

export default courseParts;

ReactDOM.render(<App />, document.getElementById("root"));