const getRepos = require('./getRepos');

const checkRepo = (array, repo) => array.some(name => name === repo);
const findRepo = async (callback, repo) => {
    const array = await getRepos('https://api.github.com/orgs/tryber/repos')
    return callback(array, repo);
};


describe('EXERCÍCIO 4 - Find the repositories', () => {
    it('should find the todo-list', async () => {
        const check = findRepo(checkRepo, 'sd-01-week4-5-project-todo-list');
        expect(check).toBeTruthy();
    })

    it('should find the meme-generator', async () => {
        const check = findRepo(checkRepo, 'sd-01-week4-5-project-meme-generator');
        expect(check).toBeTruthy();
    })
});