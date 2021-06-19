export enum SnippetType {
    human = 'human',
    model = 'model',
    baseline = 'baseline'
}

export interface Snippet {
    sample: number;
    type: SnippetType,
    source: string
}