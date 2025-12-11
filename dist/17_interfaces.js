const userProfile = {
    id: 1,
    name: "John Doe",
    createdAt: new Date(),
};
//single inheritance
const adminProfile = {
    id: 2,
    name: "Admin User",
    createdAt: new Date(),
    permissions: ["read", "write", "delete"],
};
const adminWithMetaProfile = {
    id: 3,
    name: "Super Admin",
    createdAt: new Date(),
    permissions: ["all"],
    meta: {
        active: true,
    }
};
export {};
//# sourceMappingURL=17_interfaces.js.map