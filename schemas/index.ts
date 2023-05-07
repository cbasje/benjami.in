import { category } from "./category";
import { company } from "./company";
import { global } from "./global";
import { home } from "./home";
import { notFound } from "./not-found";
import { project } from "./project";

export const schemaTypes = [
    company.schema(),
    category.schema(),
    global.schema(),
    home.schema(),
    notFound.schema(),
    project.schema(),
];
