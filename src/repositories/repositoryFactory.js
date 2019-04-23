import postRepository from "./postRepository"

const repositories = {
    posts: postRepository,
}

export const RepositoryFactory = {
    get: name => repositories[name]
}
