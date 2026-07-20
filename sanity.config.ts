import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schema'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
  basePath: '/secret-dashboard',
  projectId,
  dataset,
  title: 'EmotionWire Admin',
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Pages Group
            S.listItem()
              .title('Main Pages')
              .child(
                S.list()
                  .title('Main Pages')
                  .items([
                    S.listItem().title('Home Page').child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem().title('Case Studies Page').child(S.document().schemaType('caseStudiesPage').documentId('caseStudiesPage')),
                    S.listItem().title('Offerings Page').child(S.document().schemaType('offeringsPage').documentId('offeringsPage')),
                    S.listItem().title('About Page').child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                    S.listItem().title('Resources Page').child(S.document().schemaType('resourcesPage').documentId('resourcesPage')),
                  ])
              ),
            S.divider(),
            // Orderable Case Studies
            orderableDocumentListDeskItem({
              type: 'caseStudy',
              title: 'Case Studies',
              S,
              context,
            }),
            // Orderable Offerings
            orderableDocumentListDeskItem({
              type: 'offering',
              title: 'Offerings',
              S,
              context,
            }),
            // Blog
            S.documentTypeListItem('blog').title('Blogs'),
            S.divider(),
            // Settings
            S.listItem()
              .title('Tag Manager')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings')
              ),
          ])
      }
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
