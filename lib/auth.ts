import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URI as string);
const db = client.db('hireloopdb-practice');

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
        enabled: true,
    },
    user: {
       additionalFields: {
          role: {
              // better-auth field types are primitives ("string" | "number" | ...).
              // Allowed values are validated in databaseHooks below.
              type: "string",
              // allow clients to set the role during sign-up
              input: true,
              defaultValue: "seeker",
            }
        }
    },
    databaseHooks: {
        user: {
            create: {
                before: async (user) => {
                    const allowedRoles = ["seeker", "recruiter", "admin"];
                    return {
                        data: {
                            ...user,
                            role: allowedRoles.includes(user.role as string)
                                ? user.role
                                : "seeker",
                        },
                    };
                },
            },
        },
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    database: mongodbAdapter(db, {
        client,
    }),
});