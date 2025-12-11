// Define a constant array of roles with 'as const' to ensure the array and its elements are treated as literal types
const ROLES = ['admin', 'user', 'guest'];
// Function to assign a role to a user
function assignRole(userName, role) {
    console.log(`Assigned role '${role}' to user '${userName}'`);
}
assignRole('Alice', 'admin'); // valid
assignRole('Bob', 'user'); // valid
// assignRole('Charlie', 'superuser'); // invalid, will cause a TypeScript error    
// Log the roles to verify
console.log("Available Roles:", ROLES);
export {};
// Attempting to modify the ROLES array will cause a TypeScript error
// ROLES.push('superuser'); // invalid, will cause a TypeScript error
// ROLES[0] = 'superadmin'; // invalid, will cause a TypeScript error
//# sourceMappingURL=07_as_const.js.map