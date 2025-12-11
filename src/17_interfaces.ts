// interfaces are named shapes of objects
interface User {
    id: number;
    name: string;
    email?: string; // optional property
    readonly createdAt: Date; // readonly property
}

const userProfile:User = {
    id: 1,
    name: "John Doe",
    createdAt: new Date(),
}

interface Admin extends User{
    permissions: string[];
}

//single inheritance
const adminProfile:Admin = {
    id: 2,
    name: "Admin User",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
}

//multiple inheritance via intersection
interface WithMetal{
    meta:{
        active:boolean;
    }
}
//this interface does not have any unique propeertys of its own
interface AdminWithMeta extends Admin, WithMetal{}

const adminWithMetaProfile:AdminWithMeta = {
    id: 3,
    name: "Super Admin",
    createdAt: new Date(),
    permissions: ["all"],
    meta:{
        active:true,
    }
} 

