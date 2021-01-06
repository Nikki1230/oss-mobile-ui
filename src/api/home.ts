import { get, post} from './server'

export const requestIndex = () => { return get('/token/getPublicPair') }
