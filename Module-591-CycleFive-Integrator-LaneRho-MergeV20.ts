export const integrateRhoV20 = (matrix) =>
  matrix
    .map(x => x.normalizeV20())
    .sort((a, b) => a.partition.localeCompare(b.partition))
    .reduce((acc, curr) => acc.merge(curr), INIT_RHO_STATE);
