export function repeatJoin(parts: string[], times: number): string {
  return Array.from({ length: times }, () => parts.join(" ")).join("\n");
}
