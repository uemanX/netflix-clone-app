export function trancate(string?: String, n: number = 150): String {
  return string && string.length > n ? string.substr(0, n - 1) + "..." : "";
}
