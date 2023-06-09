import {describe, it, expect} from 'vitest'
import { getInput } from './createFeatureThing'

describe('createFeatureThing', () => {
    it('should return the user input', () => {
        const userInput = 'Just a nice feature'

        const inputResponse = getInput(userInput)

        expect(inputResponse).toBe(userInput)
    });
});
