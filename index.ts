// Valid
new Realm({ sync: { flexible: false, partitionValue: "asd" } });

// Valid
new Realm({ sync: { partitionValue: "asd" } });

// Correctly invalid with strictNullChecks: true
//
// Incorrectly valid if not
new Realm({ sync: { flexible: true, partitionValue: "asd" } });

// Correctly valid with strictNullChecks: true
//
// Incorrectly invalid if not:
// Type '{ flexible: boolean; }' is not assignable to type 'SyncConfiguration'.
// Property 'partitionValue' is missing in type '{ flexible: boolean; }' but required in type 'PartitionSyncConfiguration'.ts(2322)
new Realm({ sync: { flexible: true } });
