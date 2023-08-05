export async function fetchAdvice() {
  const apiUrl = "https://api.adviceslip.com/advice";

  const response = await fetch(apiUrl);
  const result = await response.json();
  return result;
}
