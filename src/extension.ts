import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.createFile', async () => {
        const name = await vscode.window.showInputBox({ prompt: 'Enter the name:' });
        if (!name) {
            vscode.window.showErrorMessage('No name entered.');
            return;
        }

        const locationUri = await vscode.window.showOpenDialog({
            canSelectFiles: false,
            canSelectFolders: true,
            canSelectMany: false,
            openLabel: 'Select Location'
        });

        if (!locationUri || locationUri.length === 0) {
            vscode.window.showErrorMessage('No location selected.');
            return;
        }

        const location = vscode.workspace.asRelativePath(locationUri[0].fsPath);

        const type = await vscode.window.showQuickPick(['element', 'component'], { placeHolder: 'Select the type:' });
        if (!type) {
            vscode.window.showErrorMessage('No type selected.');
            return;
        }

        createFiles(name, location, type);
    });

    context.subscriptions.push(disposable);
}

function convertToPascalCase(name: string): string {
    const words = name.split(/[\s_-]/);
    const pascalCaseWords = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1);
        return firstLetter + restOfWord;
    });
    return pascalCaseWords.join('');
}

async function createFiles(name: string, location: string, type: string) {
    const nameLowerCase = name.toLowerCase();
    const namePascalCase = convertToPascalCase(name);
    const projectFolderPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath || '';
    const directoryPath = path.join(projectFolderPath, location, name);
    try {
        await fs.promises.mkdir(directoryPath, { recursive: true });

        const templatePath = path.join(__dirname, 'templates', type);

        const files = [
            { fileName: `_${nameLowerCase}.scss`, templateFileName: '_name.scss' },
            { fileName: `${nameLowerCase}.stories.ts`, templateFileName: 'name.stories.ts' },
            { fileName: `${nameLowerCase}.style.ts`, templateFileName: 'name.style.ts' },
            { fileName: `${nameLowerCase}.test.ts`, templateFileName: 'name.test.ts' },
            { fileName: `${nameLowerCase}.ts`, templateFileName: 'name.ts' }
        ];

        for (const file of files) {
            const templateFilePath = path.join(templatePath, file.templateFileName);
            const fileContent = await fs.promises.readFile(templateFilePath, 'utf-8');
            const filePath = path.join(directoryPath, file.fileName);
            const fileContentWithPlaceholders = fileContent
                .replace(/{{name}}/g, name)
                .replace(/{{nameLowerCase}}/g, nameLowerCase)
                .replace(/{{namePascalCase}}/g, namePascalCase);
            await fs.promises.writeFile(filePath, fileContentWithPlaceholders);
        }

        vscode.window.showInformationMessage('Files created successfully.');
    } catch (error) {
        vscode.window.showErrorMessage('An error occurred while creating the files: ' + error);
    }
}
