import { prisma } from "@/lib/prisma";

interface IParams {
  listingId?: string;
}

const getListingById = async (params: IParams) => {
  try {
    const { listingId } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }

    return listing;
    // return {
    //   ...listing,
    //   createdAt: listing.createdAt.toString(),
    //   user: {
    //     ...listing.user,
    //     createdAt: listing.user.createdAt.toString(),
    //     updatedAt: listing.user.updatedAt.toString(),
    //     emailVerified:
    //       listing.user.emailVerified?.toString() || null,
    //   }
    // };
  } catch (error: any) {
    throw new Error(error);
  }
};
export default getListingById;
