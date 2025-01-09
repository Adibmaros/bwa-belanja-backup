"use server"


import {getUser} from "@/lib/auth";
import {redirect} from "next/navigation";
import {schemaShippingAddress} from "@/lib/schema";
import {generateRandomString} from "@/lib/utils";
import xenditClient from "@/lib/xendit";

export async function storeOrder(_, formData, total, products){

    const {session, user} = await getUser()
    if (!session){
        return redirect("/")
    }
    const parse = schemaShippingAddress.safeParse({
        name : formData.get("name"),
        address : formData.get("address"),
        city : formData.get("city"),
        postal_code : formData.get("postal_code"),
        phone : formData.get("phone"),
        notes : formData.get("notes")
    })

    if(!parse.success){
        return {
            message : parse.error.errors[0].message
        }
    }

    let redirectPaymentUrl = "/"

    try {
        const order = await prisma.order.create({
            data : {
                user_id : user.id,
                total : total,
                status : "pending",
                code : generateRandomString(15)
            }
        })
        const data = {
             amount : total,
            paymentMethod : {
                 ewallet : {
                     channelProperties : {
                         successReturnUrl : process.env.NEXT_PUBLIC_REDIRECT_URL
                     },
                     channelCode : "SHOPEEPAY"
                 },
                reusability : "ONE_TIME_USE",
                type : "EWALLET"
            },
            currency : "IDR",
            referenceId : order.code
        }

        const response = await xenditClient.PaymentRequest.createPaymentRequest({
            data
        })

        redirectPaymentUrl = response.actions?.find((val) => val.urlType === "DEEPLINK")?.url ?? "/"

        const queryCreateProductOrder = []

        for (const product of products){
            queryCreateProductOrder.push({
                order_id : order.id,
                product_id : product.id,
                quantity : product.quantity,
                subtotal : product.price
            })
        }
        await prisma.orderProduct.createMany({
            data : queryCreateProductOrder
        })

        await prisma.orderDetail.create({
            data : {
                order_id : order.id,
                name : parse.data.name,
                address : parse.data.address,
                city : parse.data.city,
                postal_code : parse.data.postal_code,
                phone : parse.data.phone,
                notes : parse.data.notes
            }
        })
    }
    catch (err){
        console.error(err);
        return {
            message : "Failed to create order"
        }
    }

    return redirect(redirectPaymentUrl)


}