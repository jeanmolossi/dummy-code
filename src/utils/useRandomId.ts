export function createRandomId(): string {
  const rid = (1 + Math.random() * 0x0150602)
    .toString(16)
    .substr(1)
    .replace(/\./, '-');
  const rid_pt2 = (1 + Math.random() * 0x0150602)
    .toString(16)
    .substr(1)
    .replace(/\./, '-');

  return `${rid}-${rid_pt2}`;
}
