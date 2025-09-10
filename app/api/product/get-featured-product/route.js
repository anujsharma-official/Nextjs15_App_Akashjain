import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import ProductModel from "@/models/Product.model";
import MediaModel from "@/models/Media.model";

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export async function GET() {
    try {
        await connectDB()

        const getProduct = await ProductModel.find().populate('media').limit(8).lean()

        if (!getProduct || getProduct.length === 0) {
            console.log('product not found');
            return response(false, 404, 'Product not found.')
        }

        return new Response(
            JSON.stringify({ success: true, data: getProduct }),
            {
                status: 200,
                headers: {
                    "Cache-Control":
                        "no-store, no-cache, must-revalidate, proxy-revalidate",
                },
            }
        );

    } catch (error) {
        return catchError(error)
    }
}