export async function extractFilesToBase64(target: string[]) {
    extractFiles((files: File[]) => {
        files.forEach(file => { 
            toBase64(file, (base64: string) => {
                target.push(base64);
            });
        });
    });
}

export function extractFiles(onInput: (files: File[]) => void): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.click();

    input.onchange = (e) => {
        if(e && e.target) {
            const files: FileList | null = (e.target as HTMLInputElement).files;
            if(files) {
                onInput(Array.from(files));
            }
        }
    }
}

async function toBase64(file: File, onRead: (value: string) => void) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => onRead(fileReader.result as string);
    fileReader.readAsDataURL(file);
}