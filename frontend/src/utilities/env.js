export function env(check, fallback) {
  const env = import.meta.env;
  if (!env[check]) {
    console.warn(`⚠️  Environment variable "${check}" was not found, using fallback: "${fallback}"`);
    return fallback;
  }
  return env[check];
}
