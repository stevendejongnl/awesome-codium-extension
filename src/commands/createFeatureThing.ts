import { vol } from 'memfs'

export const getInput = (input: string): string => {
    return input
}

export const createFeatureDirectory = (input: string): void => {
    vol.writeFileSync(`/${input}`, 'something')
}
