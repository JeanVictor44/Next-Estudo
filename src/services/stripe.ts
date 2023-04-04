import Stripe from 'stripe'
import { version } from '../../package.json'

const STRIPE_API_KEY = process.env.STRIPE_API_KEY as string
export const stripe = new Stripe(
    STRIPE_API_KEY,
    {
        apiVersion: '2022-11-15',
        appInfo: {
            name: 'Ignews',
            version
        }
    }
)