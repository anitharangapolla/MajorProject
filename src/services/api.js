const BASE_URL = "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`
});

export const discoverPaths = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/discover-paths`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data)
  });

  return res.json();
};

export const generateRoadmap = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/generate-roadmap`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data)
  });

  return res.json();
};

export const generateAssessment = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/generate-assessment`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data)
  });

  return res.json();
};

export const evaluateAssessment = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/evaluate`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data)
  });

  return res.json();
};

export const generateExplanation = async (data) => {
  const res = await fetch(`${BASE_URL}/ai/generate-explanation`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data)
  });

  return res.json();
};