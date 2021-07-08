export interface Project {
    id?: number;
    coverImage?: string;
    name?: string;
    category?: string;
    member?: Array<Member>;
    technology?: Technology;
    type?: string;
}

export interface Member{
    name?: any;
    position?: any;
}

export interface Technology{
    language?: string;
    mobile?: string;
    frontend?: string;
    backend?: string;
    database?: string;
    tools?: string;
}
