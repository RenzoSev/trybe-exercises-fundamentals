function techList(technologies, profile) {
    return !technologies.length ? 'Vazio!' : technologies
    .sort()
    .map(tech => ({tech, name: profile}));
}

module.exports = techList;