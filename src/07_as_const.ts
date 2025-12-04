// Define a constant array of roles with 'as const' to ensure the array and its elements are treated as literal types
const ROLES = ['admin', 'user', 'guest'] as const;
// Define a type 'Role' that can be any of the values in the ROLES array
type Role = (typeof ROLES)[number];

// Function to assign a role to a user
function assignRole(userName: string, role: Role) {
    console.log(`Assigned role '${role}' to user '${userName}'`);
}

assignRole('Alice', 'admin'); // valid
assignRole('Bob', 'user'); // valid
// assignRole('Charlie', 'superuser'); // invalid, will cause a TypeScript error    
// Log the roles to verify
console.log("Available Roles:", ROLES);
// Attempting to modify the ROLES array will cause a TypeScript error
// ROLES.push('superuser'); // invalid, will cause a TypeScript error
// ROLES[0] = 'superadmin'; // invalid, will cause a TypeScript error