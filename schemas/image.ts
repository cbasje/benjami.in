import { defineType } from "sanity";

export default defineType({
    name: "cloudinaryImage",
    type: "cloudinary.asset",
    description: "This asset is served from Cloudinary",
});
