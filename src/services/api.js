const BASE_URL = 'https://www.dnd5eapi.co/api';

async function fetchFromApi(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export function getMonsters() {
  return fetchFromApi('/monsters');
}

export function getSpells() {
  return fetchFromApi('/spells');
}

export function getEquipment() {
  return fetchFromApi('/equipment');
}

export function getMonster(index) {
  return fetchFromApi(`/monsters/${index}`);
}

export function getSpell(index) {
  return fetchFromApi(`/spells/${index}`);
}

export function getEquipmentItem(index) {
  return fetchFromApi(`/equipment/${index}`);
}