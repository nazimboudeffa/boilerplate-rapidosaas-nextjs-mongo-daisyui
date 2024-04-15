import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import stripe from "@/utils/config/stripe";


export async function POST(req: NextRequest, res: NextResponse) {
    const headersList = headers();
    const {amount} = await req.json();

    const lineItems = [
        {
            price_data: {
              currency: "eur",
              unit_amount: amount * 100,
              product_data: {
                name: "Donation",
              },
            },
            quantity: 1,
          },
    ]

    try {
        const session = await stripe.checkout.sessions.create({
            submit_type: 'donate',
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: "payment",
            success_url: `${headersList.get("origin")}/thank-you`,
            cancel_url: `${headersList.get("origin")}/pricing`,
        });

        console.log(session)

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "Error creating checkout session"});
    }
}