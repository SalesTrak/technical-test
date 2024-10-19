function env(check, fallback) {
  const { env } = process;
  if (!env[check]) {
    console.warn(`⚠️  Environment variable "${check}" was not found, using fallback: "${fallback}"`);
    return fallback;
  }
  return env[check];
}

module.exports = {
  env,
};
