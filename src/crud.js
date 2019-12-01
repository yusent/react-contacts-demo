function _fetch(path, options = {}) {
  return fetch(`https://reqres.in/api/users${path}`, options);
}

export function create(attrs) {
  return _fetch('', {
    body: JSON.stringify(attrs),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}

export function getAll() {
  return _fetch('?per_page=100');
}

export function remove(id) {
  return _fetch(`/${id}`, { method: 'DELETE' });
}
