/**
 * Gets the star count for a given org/user and repo. Try =GETSTARCOUNT("officedev","office-js")
 * @customfunction
 * @param userName Name of org or user.
 * @param repoName Name of the repo.
 * @return Number of stars.
 */

// TODO: Test new functions

const reqBody = `As a member of the Research and Development team, the Business Analyst will work in a fast-paced, Agile environment to prove out new technologies and functionality according to priorities and specifications. The Business Analyst will be responsible for working through proof of concept projects to completion. Once complete, the project will move to a resource to take the project to production with documentation produced by the R&D department.


RESPONSIBILITIES AND DUTIES:

Design and write clear, concise functional requirements, design specifications and performance goals for software applications and systems.
Provide oral and written status to project lead and management.
Collaborate with customers, stakeholders, product owners, and design teams to validate project direction and market demand.
Collaborate with the team to decompose features of proof of concept projects into small pieces of working software that can be completed in a single iteration.
Analyze test plans to verify they meet the acceptance criteria and intent of user stories. Proactively communicate with team members including recommendations to resolve issues.
Write supporting documentation for the software such as recommendations for taking the project to production, architectural needs to support the technology, and anything learned during the proof of concept that can help the production resource successfully move the project forward.
The team will meet daily to decide the highest priority work/tasks.
KNOWLEDGE, SKILLS, AND ABILITIES:

Passion for ideation, research, and new technology.
Cross-functional Skill Development - Business Analyst will be the candidate’s main expertise, but the analyst must be proactive about learning the skills and methods used across the various roles of the team. Ability to contribute to the team to advance the highest priority work items for the team when their primary skill work is not available or needed.
Knowledge of Quality Assurance and testing best/emerging practices.
Clear, effective communication skills - Must be comfortable and willing to openly discuss work items within a cross-functional team.

WORK ENVIRONMENT & PHYSICAL DEMANDS:

Normal office environment with the use of computers and telephone systems; no unusual physical demands.


﻿EDUCATION AND EXPERIENCE:

Bachelor’s degree in MIS or related field or 0-2 years of business analyst experience within an enterprise-wide environment.

Strong background in software design lifecycle, project management, and business analyst best practices.`

async function getWords(Requirements = reqBody) {
  // Takes reqBody and returns all the adjectives
  const url = `https://api.cloudmersive.com/nlp/get/words/string`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse.language;
}

async function getAdjectives(Requirements = reqBody) {
  // Takes reqBody and returns all the adjectives
  const url = `https://api.cloudmersive.com/nlp/get/words/adjectives/string`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse.language;
}

async function getPronouns(Requirements = reqBody) {
  // Takes reqBody and returns all the pronouns
  const url = `https://api.cloudmersive.com/nlp/get/words/pronouns/string`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse.language;
}

async function getAdverbs(Requirements = reqBody) {
  // Takes reqBody and returns all the adverbs
  const url = `https://api.cloudmersive.com/nlp/get/words/adverbs/string`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse.language;
}

async function getNouns(Requirements = reqBody) {
  // Takes reqBody and returns all the nouns
  const url = `https://api.cloudmersive.com/nlp/get/words/nouns/string`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse.language;
}

async function getVerbs(Requirements = reqBody) {
  // Takes reqBody and returns all the verbs
  const url = `https://api.cloudmersive.com/nlp/get/words/verbs/string`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse.language;
}
