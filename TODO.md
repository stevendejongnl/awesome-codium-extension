# createFeatureThing

```TypeScript
export const disposable = vscode.commands.registerCommand('extension.showPopup', function () {
    vscode.window.showInputBox({
        prompt: 'Enter text',
        placeHolder: 'Enter text here',
        value: '', // Optional default value for the text field
        validateInput: function (text) {
            // Perform any validation on the entered text
            if (text.length === 0) {
                return 'Text is required'
            }
            return null // No validation error
        },
    }).then(function (userInput) {
        if (userInput !== undefined) {
            // Do something with the entered text
            console.log(userInput)
        }
    })
})

```
