import { type SchemaTypeDefinition } from 'sanity'
import { seo } from './schemas/seo'
import { caseStudy } from './schemas/caseStudy'
import { blog } from './schemas/blog'
import { settings } from './schemas/settings'
import { offering } from './schemas/offering'
import { homePage } from './schemas/homePage'
import { caseStudiesPage } from './schemas/caseStudiesPage'
import { offeringsPage } from './schemas/offeringsPage'
import { aboutPage } from './schemas/aboutPage'
import { resourcesPage } from './schemas/resourcesPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seo,
    homePage, 
    caseStudiesPage,
    offeringsPage,
    aboutPage,
    resourcesPage,
    caseStudy, 
    blog, 
    offering, 
    settings
  ],
}
