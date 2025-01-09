

export async function getCustomers(){
    try {
        const customers = await prisma.user.findMany({
        where : {
        role : "customer"
    },
            include : {
            _count : {
                select : {
                    orders : true
                }
            }
            }
        })
        const response = customers.map((cst) => {
            return {
                id : cst.id,
                 name : cst.name,
                 email : cst.email,
                total_transactions : cst._count.orders
            }
        })
        return response;
    } catch (err){
        console.error(err);
        return [];
    }
}