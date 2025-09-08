import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  role: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // In production, you would save to database using Prisma
    // For now, we'll simulate success
    console.log('Contact form submission:', validatedData)
    
    // Send email notification (implement with your preferred email service)
    // await sendEmailNotification(validatedData)
    
    return {
      success: true,
      message: 'Thank you for your message. I will get back to you within 24 hours.',
      data: {
        id: crypto.randomUUID(),
        ...validatedData,
        createdAt: new Date().toISOString()
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation failed',
        data: error.errors
      })
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'An error occurred while processing your request'
    })
  }
})