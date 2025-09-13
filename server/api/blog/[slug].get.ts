import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Blog slug is required'
    })
  }

  try {
    // Read the markdown file
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found'
      })
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter, content } = matter(fileContent)
    
    // Convert markdown to HTML
    const htmlContent = marked(content)
    
    return {
      ...frontmatter,
      slug,
      _path: `/blog/${slug}`,
      body: htmlContent,
      // Add default author if not present
      author: frontmatter.author || {
        name: 'James Ross Jr.',
        bio: 'Strategic Systems Architect | 15+ Years Enterprise Security'
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Blog post not found'
    })
  }
})