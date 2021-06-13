export enum SnippetType {
    human = 'human',
    model = 'model',
    baseline = 'baseline'
}

export interface Snippet {
    type: SnippetType,
    source: string
}