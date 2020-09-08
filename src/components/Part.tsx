import React from 'react';
import { CoursePart } from "../index"

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
            switch (part.name) {
                case "Fundamentals":
                    return (
                    <>
                    <p>
                        {part.name}
                    </p>
                    {part.description && (
                      <p>
                        <em>{part.description}</em>
                      </p>
                     )}
                     <p>
                        Exercises: {part.exerciseCount}
                     </p>
                    </>
                    )
                case "Using props to pass data":
                    return (
                        <>
                        <p>
                            {part.name}
                        </p>
                          <p> Exercises:
                            <em> {part.exerciseCount}</em>
                          </p>
                         <p>
                            Group Projects: {part.groupProjectCount}
                         </p>
                        </>
                        )
                case "Deeper type usage":
                    return (
                        <>
                        <p>
                            {part.name}
                        </p>
                        {part.description && (
                          <p>
                            <em>{part.description}</em>
                          </p>
                        )}
                         <p>
                            Exercises: {part.exerciseCount}
                         </p>
                         <p>
                              
                            <a href={part.exerciseSubmissionLink}>
                            Submission Link
                             </a>
                         </p>
                        </>
                        )
                case "TypeScript":
                  return (
                    <>
                    <p>
                        {part.name}
                    </p>
                    {part.description && (
                      <p>
                        <em>{part.description}</em>
                      </p>
                     )}
                     <p>
                        Exercises: {part.exerciseCount}
                     </p>
                     <p>
                        University Credits: {part.uniCredits}
                     </p>
                    </>
                  )
                default:
                    return null
            }
        }

export default Part;