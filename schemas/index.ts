import { about } from "./about";
import { category } from "./category";
import { company } from "./company";
import { footer } from "./footer";
import { global } from "./global";
import { home } from "./home";
import { notFound } from "./not-found";
import { project } from "./project";

export const schemaTypes = [
    about.schema(),
    category.schema(),
    company.schema(),
    footer.schema(),
    global.schema(),
    home.schema(),
    notFound.schema(),
    project.schema(),
];
