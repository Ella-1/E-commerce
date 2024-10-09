export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of product'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{type: 'image'}],
        },
        {
            name: "description",
            type: 'text',
            title: 'Product Description'
        },
        {
            name: 'price',
            title: 'price',
            type: 'number',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options: {
                source: 'name'
            }
        }, 
        {
            name: 'category',
            title: 'Product category',
            type: 'reference',
            to: [
                {
                    type: 'category'
                }
            ]
        }
    ]
}