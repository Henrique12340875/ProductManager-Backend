import { EntitySchema } from 'typeorm'

const Products = new EntitySchema({
    name:"Products",
    tableName:"products",
    columns:{
        id:{
            type:'int',
            primary:true,
            generated:true
        },
        nome:{
            type:'varchar',
            unique:true,
            nullable:false
        },
        quantidade:{
            type:'int',
            nullable:false
        },
        codigo:{
            type:'varchar',
            nullable:false,
            unique:true
        }
    }
})

export {
    Products
};
