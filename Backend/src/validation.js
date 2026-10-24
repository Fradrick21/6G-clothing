function fail(message) { const error = new Error(message); error.status = 400; throw error; }
function text(value, label, max = 200, trim = true) {
  if (typeof value !== 'string') fail(`${label} is required`);
  const result = trim ? value.trim() : value;
  if (!result || result.length > max) fail(`${label} must contain 1-${max} characters`);
  return result;
}
function email(value) {
  const result = text(value, 'Email', 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result)) fail('Enter a valid email address');
  return result;
}
module.exports = { fail, text, email };
