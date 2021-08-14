export function trancate(str?: String, n: number = 150): String {
  return !str ? '' : str.length > n ? str.substr(0, n - 1) + '...' : str;
}
