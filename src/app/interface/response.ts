import { Project } from "./project";
import { Skill } from "./skill";

export interface Response {
    content?: Array<Skill> | Array<Project>;
}
