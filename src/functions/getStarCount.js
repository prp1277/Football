/**
 * Gets the star count for a given org/user and repo. Try =GETSTARCOUNT("officedev","office-js")
 * @customfunction
 * @param userName Name of org or user.
 * @param repoName Name of the repo.
 * @return Number of stars.
 */

async function getStarCount(userName = "prp1277", repoName = "Excel") {
  const url = `https://api.github.com/repos/${userName}/${repoName}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse.language;
}
