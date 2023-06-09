import { describe, it, expect } from 'vitest'
import { fs, vol } from 'memfs';

import { getInput } from './createFeatureThing'

describe('createFeatureThing', () => {
    it('should return the user input', () => {
        const userInput = 'Just a nice feature'

        const inputResponse = getInput(userInput)

        expect(inputResponse).toBe(userInput)
    })

    it('should create directory with user input', () => {
        // const directory = 'some-dir'
        // const file = 'some-file.txt'
        // const content = 'some content'

        // fs.writeFileSync(`${directory}/${file}`, content);
        // const file_content = fs.readFileSync(`${directory}/${file}`, 'utf8');

        // expect(file_content).toBe(content)

        vol.writeFileSync('/foo', 'bar');
        expect(vol.toJSON()).toEqual({ '/foo': 'bar' });
    })
})
