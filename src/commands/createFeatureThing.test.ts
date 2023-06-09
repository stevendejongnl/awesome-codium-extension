import { describe, it, expect } from 'vitest'
import { vol } from 'memfs'

import { getInput, createFeatureDirectory } from './createFeatureThing'

describe('createFeatureThing', () => {
    it('should return the user input', () => {
        const userInput = 'Just a nice feature'

        const inputResponse = getInput(userInput)

        expect(inputResponse).toBe(userInput)
    })

    it('should create directory with user input', () => {
        createFeatureDirectory('some-dir')

        expect(vol.toJSON()).toEqual({ '/some-dir': 'something' })
    })
})
