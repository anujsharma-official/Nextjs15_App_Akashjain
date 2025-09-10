export const dynamic = "force-dynamic";
export const revalidate = 0;
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import ProductModel from "@/models/Product.model";
import MediaModel from "@/models/Media.model";

export async function GET() {
    try {
        await connectDB()

        const getProduct = await ProductModel.find({ deletedAt: null }).populate('media').limit(8).lean()

        if (!getProduct || getProduct.length === 0) {
            return response(false, 404, "No products found.");
        }

        return new Response(
            JSON.stringify({ success: true, data: getProduct }),
            {
                status: 200,
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                },
            }
        );

    } catch (error) {
        return catchError(error)
    }
}