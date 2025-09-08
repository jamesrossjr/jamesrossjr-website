import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
  interests: z.array(z.string()).optional()
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate the request body
    const validatedData = newsletterSchema.parse(body)
    
    // Check if email already exists (mock check for now)
    // In production, check database with Prisma
    
    // Generate confirmation token
    const confirmToken = crypto.randomUUID()
    
    // Save to database (mock for now)
    const subscription = {
      id: crypto.randomUUID(),
      ...validatedData,
      confirmed: false,
      confirmToken,
      subscribedAt: new Date().toISOString()
    }
    
    // Send confirmation email (implement with your email service)
    // await sendConfirmationEmail(validatedData.email, confirmToken)
    
    return {
      success: true,
      message: 'Please check your email to confirm your subscription.',
      data: {
        id: subscription.id,
        email: subscription.email
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email address',
        data: error.errors
      })
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process subscription'
    })
  }
})